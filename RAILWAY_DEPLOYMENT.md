# 🚀 AI-Powered Backend - Railway Deployment

## Quick Deployment to Railway

### 1. Prerequisites
- Railway account (railway.app)
- Git repository

### 2. Deploy Steps

1. **Push to Git:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/ai-powered-backend
git push -u origin main
```

2. **Deploy on Railway:**
- Visit railway.app
- Click "New Project"
- Select "Deploy from GitHub repo"
- Choose your repository
- Railway will auto-deploy

3. **Add Environment Variables in Railway:**
```
NODE_ENV=production
DATABASE_CLIENT=postgres
DATABASE_URL=${{Postgres.DATABASE_URL}}
JWT_SECRET=your-32-character-secure-secret
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=your-api-salt
ADMIN_JWT_SECRET=your-admin-secret
TRANSFER_TOKEN_SALT=your-transfer-salt
HOST=0.0.0.0
PORT=1337
```

4. **Add PostgreSQL Database:**
- In Railway dashboard, click "New Service"
- Select "Database" → "PostgreSQL"
- Railway auto-connects with DATABASE_URL

### 3. Post-Deployment
- Visit https://your-app.railway.app/admin
- Create admin account
- Note the API URL for frontend

### 4. Troubleshooting
- Check Railway logs if deployment fails
- Ensure all environment variables are set
- Verify PostgreSQL connection

✅ **Your backend will be live in ~5 minutes!**
