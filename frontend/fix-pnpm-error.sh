#!/bin/bash

# Quick fix for pnpm ENOENT error
echo "🔧 Fixing pnpm ENOENT error..."

# Remove pnpm lock file
if [ -f pnpm-lock.yaml ]; then
    echo "🗑️ Removing pnpm-lock.yaml..."
    rm pnpm-lock.yaml
    echo "✅ Removed pnpm-lock.yaml"
fi

# Install with npm
echo "📦 Installing dependencies with npm..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo "🏗️ Building project..."
    npm run build
    
    if [ $? -eq 0 ]; then
        echo "🎉 Project built successfully!"
        echo ""
        echo "✅ pnpm error fixed! You can now use:"
        echo "  npm run dev     - Start development"
        echo "  npm run build   - Build for production"
        echo "  npm run preview - Preview build"
    else
        echo "❌ Build failed. Check for errors above."
    fi
else
    echo "❌ Failed to install dependencies."
    echo "💡 Try: npm cache clean --force && npm install"
fi