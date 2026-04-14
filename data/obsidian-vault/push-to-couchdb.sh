#!/bin/bash
# push-to-couchdb.sh
# 將 .md 檔案 push 入 CouchDB (LiveSync 格式)
# 用法: ./push-to-couchdb.sh <filepath> [note_path_in_vault]

COUCH_URL="https://couchdb.secrex.ai"
COUCH_DB="obsidian"
COUCH_USER="admin"
COUCH_PASS="1357911!Et"

FILE="$1"
NOTE_PATH="${2:-$(basename "$FILE")}"

if [ -z "$FILE" ] || [ ! -f "$FILE" ]; then
  echo "用法: $0 <filepath> [note_path_in_vault]"
  exit 1
fi

CONTENT=$(cat "$FILE")
# LiveSync 用 base64 encoded content
ENCODED=$(echo -n "$CONTENT" | base64 -w 0)
# Doc ID = "plain:" + path (LiveSync format)
DOC_ID="plain:${NOTE_PATH}"
DOC_ID_ENCODED=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$DOC_ID', safe=''))")

# 檢查係咪已存在（取 _rev）
REV=$(curl -s -u "$COUCH_USER:$COUCH_PASS" \
  "$COUCH_URL/$COUCH_DB/$DOC_ID_ENCODED" | \
  python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('_rev',''))" 2>/dev/null)

# 建立 payload
if [ -n "$REV" ]; then
  PAYLOAD=$(python3 -c "
import json, sys
print(json.dumps({
  '_id': '$DOC_ID',
  '_rev': '$REV',
  'data': '$ENCODED',
  'ctype': 'plain',
  'mtime': $(date +%s000),
  'size': $(wc -c < '$FILE')
}))
")
else
  PAYLOAD=$(python3 -c "
import json, sys
print(json.dumps({
  '_id': '$DOC_ID',
  'data': '$ENCODED',
  'ctype': 'plain',
  'mtime': $(date +%s000),
  'size': $(wc -c < '$FILE')
}))
")
fi

RESULT=$(curl -s -X PUT \
  -u "$COUCH_USER:$COUCH_PASS" \
  -H "Content-Type: application/json" \
  "$COUCH_URL/$COUCH_DB/$DOC_ID_ENCODED" \
  -d "$PAYLOAD")

echo $RESULT | python3 -c "
import sys, json
d = json.load(sys.stdin)
if d.get('ok'):
    print('✅ 成功 push: $NOTE_PATH')
else:
    print('❌ 失敗:', d.get('error', d))
"
