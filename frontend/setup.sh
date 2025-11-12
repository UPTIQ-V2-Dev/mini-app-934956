#!/bin/bash

# Mini App Setup Script
echo "🚀 Setting up Mini App dependencies..."

# Function to install pnpm if not available
install_pnpm() {
    echo "📦 Installing pnpm..."
    if command -v npm >/dev/null 2>&1; then
        npm install -g pnpm
        # Add pnpm to PATH for current session
        export PATH="$HOME/.local/share/pnpm:$PATH"
        hash -r  # Refresh command hash table
    else
        echo "❌ npm not found. Please install Node.js and npm first."
        exit 1
    fi
}

# Check if pnpm is available
if command -v pnpm >/dev/null 2>&1; then
    echo "✅ Using existing pnpm installation"
    pnpm install
    echo "✅ Dependencies installed with pnpm"
    echo "🏗️ Building application..."
    pnpm run build
else
    echo "⚠️  pnpm not found"
    
    # Try to install pnpm
    install_pnpm
    
    # Check if pnpm is now available
    if command -v pnpm >/dev/null 2>&1; then
        echo "✅ pnpm installed successfully"
        pnpm install
        echo "✅ Dependencies installed with pnpm"
        echo "🏗️ Building application..."
        pnpm run build
    else
        echo "⚠️  Falling back to npm"
        # Remove pnpm lock file to avoid conflicts
        [ -f pnpm-lock.yaml ] && rm pnpm-lock.yaml
        echo "📦 Installing dependencies with npm..."
        npm install
        echo "✅ Dependencies installed with npm"
        echo "🏗️ Building application..."
        npm run build
    fi
fi

echo "✅ Setup complete!"
echo "🎉 Mini App is ready to run!"
echo ""
echo "Available commands:"
echo "  npm run dev      - Start development server"
echo "  npm run build    - Build for production" 
echo "  npm run preview  - Preview production build"
echo "  npm run lint     - Run ESLint"
echo "  npm run test     - Run tests"
echo ""
echo "Or with pnpm:"
echo "  pnpm dev         - Start development server"
echo "  pnpm build       - Build for production"
echo "  pnpm preview     - Preview production build"