#!/bin/bash
# obsidian-watcher.sh
# Watch obsidian-vault for .md file changes and auto-push to CouchDB

VAULT_DIR="/home/ubuntu/.openclaw/workspace/data/obsidian-vault"
PUSH_SCRIPT="/home/ubuntu/.openclaw/workspace/data/obsidian-vault/push-to-couchdb.py"

echo "[$(date)] Starting vault watcher on $VAULT_DIR ..."

# Initial sync of all existing files
echo "[$(date)] Running initial sync..."
python3 "$PUSH_SCRIPT" --sync-dir "$VAULT_DIR"

echo "[$(date)] Watching for changes..."
inotifywait -m -r -e close_write,moved_to --format '%w%f' "$VAULT_DIR" |
while read filepath; do
  # Only process .md files, skip scripts
  if [[ "$filepath" == *.md ]] && [[ "$(basename "$filepath")" != push-to-couchdb* ]] && [[ "$(basename "$filepath")" != obsidian-watcher* ]]; then
    note_path="${filepath#$VAULT_DIR/}"
    echo "[$(date)] Changed: $note_path"
    python3 "$PUSH_SCRIPT" "$filepath" "$note_path"
  fi
done
