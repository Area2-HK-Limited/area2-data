#!/usr/bin/env python3
"""
push-to-couchdb.py — Push files to CouchDB in Obsidian LiveSync format.

Usage:
  python3 push-to-couchdb.py <filepath> [note_path_in_vault]
  python3 push-to-couchdb.py --sync-dir <dir>   # Push all .md files in a directory

Uses the exact same hash algorithm as Self-hosted LiveSync plugin v0.25.56:
  - xxhash64("{chunk_content}-{js_string_length}") in base36
  - Chunk ID: "h:" + hash
"""

import sys
import os
import json
import base64
import time
import urllib.parse
import urllib.request
import urllib.error
import xxhash

COUCH_URL = os.environ.get("COUCH_URL", "http://localhost:5984")
COUCH_DB = os.environ.get("COUCH_DB", "obsidian")
COUCH_USER = os.environ.get("COUCH_USER", "admin")
COUCH_PASS = os.environ.get("COUCH_PASS", "1357911!Et")


def couch_request(method, path, data=None):
    url = f"{COUCH_URL}/{COUCH_DB}/{urllib.parse.quote(path, safe='')}"
    auth = base64.b64encode(f"{COUCH_USER}:{COUCH_PASS}".encode()).decode()
    headers = {
        "Authorization": f"Basic {auth}",
        "Content-Type": "application/json",
    }
    body = json.dumps(data).encode() if data else None
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        return json.loads(e.read())


def js_string_length(s):
    """Return JavaScript string length (UTF-16 code units count)."""
    length = 0
    for ch in s:
        if ord(ch) > 0xFFFF:
            length += 2  # surrogate pair
        else:
            length += 1
    return length


def int_to_base36(n):
    """Convert unsigned int to base36 string (matches JS BigInt.toString(36))."""
    if n == 0:
        return "0"
    chars = "0123456789abcdefghijklmnopqrstuvwxyz"
    result = ""
    while n > 0:
        result = chars[n % 36] + result
        n //= 36
    return result


def make_chunk_id(content):
    """Generate chunk ID matching LiveSync xxhash64 without encryption."""
    js_len = js_string_length(content)
    hash_input = f"{content}-{js_len}"
    h = xxhash.xxh64(hash_input.encode("utf-8"), seed=0).intdigest()
    return "h:" + int_to_base36(h)


def push_note(filepath, note_path=None):
    """Push a single file to CouchDB in LiveSync format. Returns True/False."""
    if not os.path.exists(filepath):
        print(f"  SKIP (not found): {filepath}")
        return False

    if note_path is None:
        note_path = os.path.basename(filepath)

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    now_ms = int(time.time() * 1000)
    size = len(content.encode("utf-8"))

    # For small text files, use the whole content as one chunk.
    chunk_id = make_chunk_id(content)

    # 1. Create/update leaf document
    existing_leaf = couch_request("GET", chunk_id)

    if "error" in existing_leaf or existing_leaf.get("data") != content:
        leaf_doc = {"_id": chunk_id, "data": content, "type": "leaf"}
        if existing_leaf.get("_rev"):
            leaf_doc["_rev"] = existing_leaf["_rev"]
        result = couch_request("PUT", chunk_id, leaf_doc)
        if not result.get("ok"):
            print(f"  FAIL leaf for {note_path}: {result}")
            return False

    # 2. Create/update main document
    existing_main = couch_request("GET", note_path)
    rev = existing_main.get("_rev")
    old_children = existing_main.get("children", [])
    ctime = existing_main.get("ctime", now_ms)

    # Skip if content unchanged
    if old_children == [chunk_id] and existing_main.get("size") == size:
        return True

    main_doc = {
        "_id": note_path,
        "children": [chunk_id],
        "path": note_path,
        "ctime": ctime,
        "mtime": now_ms,
        "size": size,
        "type": "plain",
        "eden": {},
    }
    if rev:
        main_doc["_rev"] = rev

    result = couch_request("PUT", note_path, main_doc)
    if result.get("ok"):
        action = "updated" if rev else "created"
        print(f"  OK ({action}): {note_path}")
        return True
    else:
        print(f"  FAIL: {note_path} -> {result}")
        return False


def sync_directory(dir_path):
    """Sync all .md files in a directory tree to CouchDB."""
    dir_path = os.path.abspath(dir_path)
    if not os.path.isdir(dir_path):
        print(f"Directory not found: {dir_path}")
        sys.exit(1)

    ok_count = 0
    fail_count = 0

    for root, dirs, files in os.walk(dir_path):
        dirs[:] = [d for d in dirs if not d.startswith(".") and d not in ("node_modules", "__pycache__")]

        for fname in sorted(files):
            if not fname.endswith(".md"):
                continue
            filepath = os.path.join(root, fname)
            note_path = os.path.relpath(filepath, dir_path)

            result = push_note(filepath, note_path)
            if result:
                ok_count += 1
            else:
                fail_count += 1

    print(f"\nSync complete: {ok_count} ok, {fail_count} failed")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage:")
        print("  python3 push-to-couchdb.py <filepath> [note_path]")
        print("  python3 push-to-couchdb.py --sync-dir <directory>")
        sys.exit(1)

    if sys.argv[1] == "--sync-dir":
        if len(sys.argv) < 3:
            print("Usage: python3 push-to-couchdb.py --sync-dir <directory>")
            sys.exit(1)
        sync_directory(sys.argv[2])
    else:
        filepath = sys.argv[1]
        note_path = sys.argv[2] if len(sys.argv) > 2 else None
        push_note(filepath, note_path)
