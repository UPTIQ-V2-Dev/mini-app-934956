@echo off
echo 🚀 Setting up Mini App with npm...

REM Check if npm is available
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm not found. Please install Node.js and npm first.
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Using npm
npm --version

REM Remove pnpm lock file to avoid conflicts
if exist pnpm-lock.yaml (
    echo 🗑️ Removing pnpm-lock.yaml to avoid conflicts...
    del pnpm-lock.yaml
)

REM Install dependencies
echo 📦 Installing dependencies with npm...
npm install

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to install dependencies
    echo 💡 Try: npm cache clean --force && npm install
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Build the application
echo 🏗️ Building application...
npm run build

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Build failed
    echo 💡 Check for TypeScript or linting errors
    pause
    exit /b 1
)

echo ✅ Build completed successfully!
echo 🎉 Mini App is ready to run!
echo.
echo Available commands:
echo   npm run dev      - Start development server
echo   npm run build    - Build for production
echo   npm run preview  - Preview production build
echo   npm run lint     - Run ESLint
echo   npm run test     - Run tests
echo.
echo 🚀 To start development:
echo   npm run dev
pause