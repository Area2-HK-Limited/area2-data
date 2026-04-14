# SpellQuest Development Workflow

## 📋 開發流程 SOP

### Phase 1: Development
1. 分析問題
2. M01 分工
3. Code 開發
4. 互相 Code Review

### Phase 2: Local Test
5. `pnpm dev` 確認無 error
6. 人手 click 相關頁面

### Phase 3: Deploy
7. Git Push
8. M01 Pull & Restart:
   ```bash
   cd ~/clawd/spellquest-v2
   git pull
   pnpm dev --host 0.0.0.0 --port 3002
   ```

### Phase 4: Automated Test ⚠️ 必須！
9. Playwright E2E Test:
   ```bash
   npx playwright test tests/e2e/spellquest.spec.ts --reporter=list
   ```
10. 確認 all passed
11. Screenshots 保存

### Phase 5: QA Sign-off
12. W03 確認
13. Live site verify
14. Report to Eric (附 screenshots)

---

## 🧪 Quick Commands

```bash
# Deploy (M01 only)
cd ~/clawd/spellquest-v2 && git pull && pnpm dev --host 0.0.0.0 --port 3002

# Run E2E tests
npx playwright test tests/e2e/spellquest.spec.ts

# View screenshots
ls tests/screenshots/
```

---

## 🌐 URLs

| Environment | URL |
|-------------|-----|
| Staging | http://192.168.139.142:3002 |
| API | http://192.168.139.142:3004 |

---

## ✅ Checklist

- [ ] Code 改完
- [ ] Local test passed
- [ ] Git push
- [ ] M01 deploy
- [ ] Playwright test passed (8/8)
- [ ] Screenshots 確認
- [ ] Live site verify
- [ ] Report to Eric

---

*Last updated: 2026-02-05*
