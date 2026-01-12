# Security Notice

## Important: API Key Exposure

The `.env` file containing the OpenAI API key was accidentally committed to git history. 

### Immediate Actions Required:

1. **Revoke the exposed API key** - Go to OpenAI dashboard and revoke the key that was committed
2. **Generate a new API key** - Create a new key and update your local `.env` file
3. **Never commit `.env` files** - The `.env` file is now in `.gitignore` and will not be tracked

### Current Status:

- ✅ `.env` file removed from git tracking
- ✅ `.gitignore` updated to exclude `.env` files
- ⚠️ The API key still exists in git history (commit edcb61dea4e0b04cf7df9bdf4667551667c383d4)

### To Remove from Git History (Advanced):

If you need to completely remove the secret from git history, you can use:

```bash
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch .env" --prune-empty --tag-name-filter cat -- --all
```

**Warning:** This rewrites git history and will require force push. Only do this if you understand the implications.

### Best Practice:

- Always add `.env` to `.gitignore` before initial commit
- Use environment variables in production (Vercel, etc.)
- Never share API keys in code or commits
