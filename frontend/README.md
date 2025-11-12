# Mini App - React Frontend

A modern React application built with Vite, TypeScript, and shadcn/ui components.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm (comes with Node.js)

### 🔧 IMPORTANT: Fix for "spawn pnpm ENOENT" Error

If you see the error `spawn pnpm ENOENT`, follow these steps:

#### Option 1: Quick Fix with npm (Recommended)
```bash
# For Linux/Mac
chmod +x setup-npm.sh && ./setup-npm.sh

# For Windows
setup.bat

# Or manually:
rm pnpm-lock.yaml  # Remove pnpm lock file
npm install        # Install dependencies
npm run build      # Build the project
```

#### Option 2: Install pnpm first
```bash
npm install -g pnpm    # Install pnpm globally
pnpm install          # Install dependencies
pnpm run build        # Build the project
```

#### Option 3: Auto-setup (tries pnpm, falls back to npm)
```bash
chmod +x setup.sh && ./setup.sh
```

### Installation

The project works with both npm and pnpm. If you get pnpm errors, just use npm instead.

## 🏃‍♂️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Run tests
npm run test
```

## 🔧 Fix for "pnpm ENOENT" Error

If you encounter the error `spawn pnpm ENOENT`, it means pnpm is not installed. Here are the solutions:

### Solution 1: Install pnpm globally
```bash
npm install -g pnpm
```

### Solution 2: Use npm instead
```bash
rm pnpm-lock.yaml  # Remove pnpm lock file
npm install        # Install with npm
```

### Solution 3: Use npx
```bash
npx pnpm install
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   └── ui/             # shadcn/ui components
├── pages/              # Page components
│   └── auth/           # Authentication pages
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── schemas/            # Zod validation schemas  
├── services/           # API service functions
├── types/              # TypeScript type definitions
└── styles/             # Global styles
```

## ✅ Implemented Features

### 🔐 Authentication System
- **Login Page** - Complete with form validation, loading states, and error handling
- **Dashboard** - Basic dashboard with user info and logout functionality
- **Protected Routes** - Route guards for authenticated users
- **Mock Data Support** - Works with mock data when backend is not available

### 🎨 UI/UX Features
- **Responsive Design** - Mobile-first approach
- **Dark/Light Theme** - Theme switching support
- **Toast Notifications** - User feedback system
- **Form Validation** - Zod schemas with React Hook Form
- **Loading States** - Proper loading indicators

## 🔜 Coming Soon Pages

The following pages have placeholder implementations:
- Signup Page
- Profile Management  
- Items Management
- Settings Page
- Forgot Password

## 🔨 Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type safety and better DX
- **Vite** - Fast build tool and dev server
- **TanStack Query** - Server state management
- **React Router v7** - Client-side routing
- **React Hook Form + Zod** - Form handling and validation
- **shadcn/ui + Radix** - Accessible UI components
- **Tailwind CSS v4** - Utility-first styling
- **Lucide React** - Icon system

## 🌟 Key Features

- ✅ JWT-based authentication with refresh tokens
- ✅ Automatic token refresh handling
- ✅ Mock data support for development
- ✅ Responsive mobile-first design
- ✅ Dark/light theme support
- ✅ Form validation with error handling
- ✅ Loading states and error boundaries
- ✅ TypeScript strict mode

## 🚀 Deployment

The application is ready for deployment to any static hosting service:

```bash
npm run build
# Deploy the 'dist' folder to your hosting service
```

Popular hosting options:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🐛 Troubleshooting

### Dependencies Issues
If you have dependency conflicts:
```bash
rm -rf node_modules package-lock.json pnpm-lock.yaml
npm install
```

### TypeScript Errors
Run type checking:
```bash
npm run typecheck
```

### Build Issues
Clean build:
```bash
rm -rf dist
npm run build
```

## 📝 Environment Variables

The app supports mock data mode:
```bash
VITE_USE_MOCK_DATA=true  # Enable mock data mode
```

## 🤝 Development Workflow

1. All API calls go through services in `src/services/`
2. Use TanStack Query for server state management
3. Form validation with Zod schemas in `src/schemas/`
4. UI components from shadcn/ui in `src/components/ui/`
5. Follow the existing code patterns and conventions

---

**🎉 The Mini App is ready for further development based on the project plan!**