CLMS FRONTEND - FINAL DEPLOYMENT

1. Upload/push ALL files in this project to the frontend GitHub repository.
2. In Vercel, use the repository as the project source.
3. Framework Preset: Vite (or let Vercel detect it).
4. Build Command: npm run build
5. Output Directory: dist
6. Root Directory: leave EMPTY if package.json is in repository root.
7. Environment Variables: if Vercel already has VITE_API_URL, set it to:
   https://clms-9fyx.onrender.com/api/v1
   Remove any old Railway URL.
8. Redeploy with cache disabled if Vercel offers that option.

ROUTES
/login                    Login
/admin                    Main admin dashboard (protected)
/admin/accounts/...      Admin modules
/dashboard                Legacy dashboard URL (still supported)
/                         Redirects to /admin

BACKEND
https://clms-9fyx.onrender.com
API base: https://clms-9fyx.onrender.com/api/v1

IMPORTANT
The admin pages require a successful backend login. If /admin sends you to /login, that is the expected protection when there is no valid session. After login, the app returns to /admin.
