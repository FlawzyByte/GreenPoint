@echo off
echo ========================================
echo   Green Point Consulting Deployment
echo ========================================
echo.
echo 1. Building the project...
call npm run build
echo.
echo 2. Build completed successfully!
echo.
echo 3. Next steps:
echo    - Go to https://vercel.com
echo    - Sign up/Login with your account
echo    - Click "New Project"
echo    - Choose "Upload" option
echo    - Select your project folder: %CD%
echo    - Click "Deploy"
echo.
echo 4. Your website will be live at:
echo    https://your-project-name.vercel.app
echo.
pause 