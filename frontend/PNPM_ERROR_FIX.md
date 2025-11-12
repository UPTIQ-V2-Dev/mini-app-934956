# 🔧 Fix: pnpm failed: spawn pnpm ENOENT

## ❌ The Problem
```
pnpm failed: spawn pnpm ENOENT. Stack: Error: spawn pnpm ENOENT
    at ChildProcess._handle.onexit (node:internal/child_process:285:19)
    at onErrorNT (node:internal/child_process:483:16)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21)
```

This error means **pnpm is not installed** on your system, but the project is trying to use it.

## ✅ Solutions (Pick One)

### 🚀 Solution 1: Quick Fix (Recommended)
Run this single command to fix everything:
```bash
chmod +x fix-pnpm-error.sh && ./fix-pnpm-error.sh
```

### 🛠️ Solution 2: Manual Steps
```bash
# Remove pnpm lock file to avoid conflicts
rm pnpm-lock.yaml

# Install dependencies with npm
npm install

# Build the project
npm run build
```

### 📦 Solution 3: Install pnpm first
```bash
# Install pnpm globally
npm install -g pnpm

# Install dependencies
pnpm install

# Build project
pnpm run build
```

### 🖥️ Solution 4: Platform-specific scripts

**For Linux/Mac:**
```bash
chmod +x setup-npm.sh && ./setup-npm.sh
```

**For Windows:**
```cmd
setup.bat
```

## 🎯 After Fixing

Once fixed, you can use either package manager:

**With npm:**
```bash
npm run dev      # Start development
npm run build    # Build for production
npm run preview  # Preview build
```

**With pnpm (if installed):**
```bash
pnpm dev         # Start development
pnpm build       # Build for production
pnpm preview     # Preview build
```

## 🤔 Why This Happened

1. The project was initially set up with **pnpm**
2. Your system has **npm** but not **pnpm** 
3. The project tried to run pnpm commands but couldn't find pnpm

## 🎉 That's It!

After running any of the solutions above, your Mini App will be ready to run with npm instead of pnpm. The application works perfectly with either package manager.