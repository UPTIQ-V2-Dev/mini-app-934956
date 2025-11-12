#!/bin/bash

# Mini App Setup Script - NPM Only
echo "🚀 Setting up Mini App with npm..."

# Check if npm is available
if ! command -v npm >/dev/null 2>&1; then
    echo "❌ npm not found. Please install Node.js and npm first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Using npm $(npm --version)"

# Remove pnpm lock file to avoid conflicts
if [ -f pnpm-lock.yaml ]; then
    echo "🗑️  Removing pnpm-lock.yaml to avoid conflicts..."
    rm pnpm-lock.yaml
fi

# Install dependencies
echo "📦 Installing dependencies with npm..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    echo "💡 Try: npm cache clean --force && npm install"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Build the application
echo "🏗️ Building application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    echo "💡 Check for TypeScript or linting errors"
    exit 1
fi

echo "✅ Build completed successfully!"
echo "🎉 Mini App is ready to run!"
echo ""
echo "Available commands:"
echo "  npm run dev      - Start development server"
echo "  npm run build    - Build for production" 
echo "  npm run preview  - Preview production build"
echo "  npm run lint     - Run ESLint"
echo "  npm run test     - Run tests"
echo ""
echo "🚀 To start development:"
echo "  npm run dev"