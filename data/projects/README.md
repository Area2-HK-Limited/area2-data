# Projects 📂

呢個 folder 用嚟儲存項目相關資料。

## 結構

每個 Project 用**項目名稱**做 folder 名：

```
projects/
├── crm-lavish-attic/       # CRM The Lavish Attic
│   ├── README.md           # 項目說明
│   ├── screenshots/        # 截圖
│   └── notes.md            # 筆記
├── another-project/
│   └── ...
└── README.md
```

## 使用方法

### 1. 建立 Project folder
```bash
cd ~/ai-team-hub
mkdir -p projects/{project-name}
echo "# Project Name" > projects/{project-name}/README.md
```

**命名規則：**
- 用小寫英文
- 空格用 `-` 代替
- 例如：`crm-lavish-attic`, `website-redesign`

### 2. 儲存相關資料
- 截圖 → `projects/{project-name}/screenshots/`
- 筆記 → `projects/{project-name}/notes.md`
- 測試結果 → `projects/{project-name}/results/`
- 其他檔案 → `projects/{project-name}/files/`

### 3. Commit
```bash
git add projects/{project-name}/
git commit -m "docs(project-name): 加入調查資料"
git push
```

### 4. 關聯 Issue
喺 Project README.md 入面列出相關嘅 Issue：
```markdown
## 相關 Issues
- #6 CRM Bug 調查
- #7 新功能開發
```

## 注意事項
- 敏感資料（密碼、API key）唔好放入去
- 大型檔案用 `shared/` folder
- 每個 project folder 應該有 README.md 說明內容
