# Mini App - Frontend Implementation Plan

## Tech Stack
- **React 19** with modern features and concurrent rendering
- **Vite** for fast development and optimized builds
- **shadcn/ui** components with Radix UI primitives
- **Tailwind CSS v4** for styling
- **TypeScript** for type safety
- **React Router v7** for navigation
- **TanStack Query v5** for data fetching
- **React Hook Form + Zod** for forms and validation

## Application Architecture

### Common Components & Utilities
- **Layout System**: Sidebar-based layout using existing `SidebarProvider`
- **Theme System**: Dark/light mode support with `next-themes`
- **Auth System**: JWT-based authentication with refresh tokens
- **API Layer**: Axios instance with interceptors for auth
- **Error Handling**: Global error boundary and toast notifications

## Page-by-Page Implementation Plan

### 1. Authentication Pages

#### 1.1 Login Page (`/login`)
**Components:**
- `LoginForm` - Main login form component
- `LoginCard` - Wrapper card with branding

**Features:**
- Email/password authentication
- Form validation with Zod
- Loading states and error handling
- Remember me functionality
- Link to signup page

**API Endpoints:**
- `POST /api/v1/auth/login`

**Files:**
- `src/pages/auth/LoginPage.tsx`
- `src/components/auth/LoginForm.tsx`
- `src/components/auth/LoginCard.tsx`
- `src/schemas/auth.ts`

#### 1.2 Signup Page (`/signup`)
**Components:**
- `SignupForm` - Registration form
- `SignupCard` - Wrapper with terms and conditions

**Features:**
- User registration with email verification
- Password strength indicator
- Terms acceptance
- Auto-redirect after successful signup

**API Endpoints:**
- `POST /api/v1/auth/signup`
- `POST /api/v1/auth/send-verification-email`

**Files:**
- `src/pages/auth/SignupPage.tsx`
- `src/components/auth/SignupForm.tsx`
- `src/components/auth/PasswordStrength.tsx`

### 2. Dashboard Page (`/dashboard`)

#### Main Dashboard
**Components:**
- `DashboardLayout` - Main layout with sidebar
- `DashboardHeader` - Header with user menu and notifications
- `StatsCards` - Key metrics display
- `ActivityFeed` - Recent activities
- `QuickActions` - Shortcut buttons

**Features:**
- Real-time stats and metrics
- Activity timeline
- Quick access to main features
- Responsive grid layout

**API Endpoints:**
- `GET /api/v1/dashboard/stats`
- `GET /api/v1/dashboard/activities`

**Files:**
- `src/pages/DashboardPage.tsx`
- `src/components/dashboard/DashboardLayout.tsx`
- `src/components/dashboard/StatsCards.tsx`
- `src/components/dashboard/ActivityFeed.tsx`
- `src/components/dashboard/QuickActions.tsx`

### 3. Profile Management

#### 3.1 Profile Page (`/profile`)
**Components:**
- `ProfileHeader` - Avatar, name, and basic info
- `ProfileTabs` - Tabbed interface for different sections
- `PersonalInfoForm` - Editable personal information
- `SecuritySettings` - Password change, 2FA setup
- `NotificationPreferences` - User notification settings

**Features:**
- Avatar upload with preview
- Inline editing for profile fields
- Password change functionality
- Account deletion option

**API Endpoints:**
- `GET /api/v1/users/profile`
- `PUT /api/v1/users/profile`
- `POST /api/v1/users/change-password`
- `POST /api/v1/users/upload-avatar`

**Files:**
- `src/pages/ProfilePage.tsx`
- `src/components/profile/ProfileHeader.tsx`
- `src/components/profile/PersonalInfoForm.tsx`
- `src/components/profile/SecuritySettings.tsx`
- `src/components/profile/AvatarUpload.tsx`

### 4. Data Management Pages

#### 4.1 Items List Page (`/items`)
**Components:**
- `ItemsTable` - Data table with sorting/filtering
- `ItemsToolbar` - Search, filters, and actions
- `ItemCard` - Card view for mobile
- `ItemsEmptyState` - Empty state illustration

**Features:**
- Searchable and sortable table
- Bulk actions (select all, delete multiple)
- Pagination with configurable page sizes
- Export functionality (CSV, JSON)
- Responsive card layout for mobile

**API Endpoints:**
- `GET /api/v1/items?page=1&limit=20&search=query`
- `DELETE /api/v1/items/bulk`
- `GET /api/v1/items/export`

**Files:**
- `src/pages/ItemsPage.tsx`
- `src/components/items/ItemsTable.tsx`
- `src/components/items/ItemsToolbar.tsx`
- `src/components/items/ItemCard.tsx`

#### 4.2 Item Details Page (`/items/:id`)
**Components:**
- `ItemDetails` - Full item information display
- `ItemActions` - Edit, delete, share actions
- `ItemHistory` - Change history timeline
- `RelatedItems` - Similar or connected items

**Features:**
- Detailed view with all item properties
- Edit mode toggle
- History tracking with timestamps
- Related items suggestions

**API Endpoints:**
- `GET /api/v1/items/:id`
- `PUT /api/v1/items/:id`
- `DELETE /api/v1/items/:id`
- `GET /api/v1/items/:id/history`

**Files:**
- `src/pages/ItemDetailsPage.tsx`
- `src/components/items/ItemDetails.tsx`
- `src/components/items/ItemActions.tsx`
- `src/components/items/ItemHistory.tsx`

#### 4.3 Create/Edit Item Page (`/items/new`, `/items/:id/edit`)
**Components:**
- `ItemForm` - Comprehensive form for item creation/editing
- `ItemFormTabs` - Multi-step form with tabs
- `ItemPreview` - Live preview of changes
- `FormSaveActions` - Save, draft, cancel buttons

**Features:**
- Multi-step form with validation
- Auto-save drafts
- Image/file upload support
- Rich text editor for descriptions
- Preview mode

**API Endpoints:**
- `POST /api/v1/items`
- `PUT /api/v1/items/:id`
- `POST /api/v1/items/draft`
- `POST /api/v1/upload`

**Files:**
- `src/pages/ItemFormPage.tsx`
- `src/components/items/ItemForm.tsx`
- `src/components/items/ItemFormTabs.tsx`
- `src/components/items/ItemPreview.tsx`
- `src/components/forms/RichTextEditor.tsx`

### 5. Settings Pages

#### 5.1 Application Settings (`/settings`)
**Components:**
- `SettingsLayout` - Sidebar navigation for settings
- `GeneralSettings` - App preferences
- `IntegrationSettings` - Third-party integrations
- `DataSettings` - Import/export preferences

**Features:**
- Tabbed or sidebar navigation
- Real-time settings updates
- Integration management
- Data backup/restore options

**API Endpoints:**
- `GET /api/v1/settings`
- `PUT /api/v1/settings`
- `POST /api/v1/settings/backup`

**Files:**
- `src/pages/SettingsPage.tsx`
- `src/components/settings/SettingsLayout.tsx`
- `src/components/settings/GeneralSettings.tsx`
- `src/components/settings/IntegrationSettings.tsx`

### 6. Admin Pages (Role-based)

#### 6.1 User Management (`/admin/users`)
**Components:**
- `UsersTable` - Admin table for user management
- `UserActions` - Role assignment, account actions
- `UserModal` - Create/edit user modal
- `BulkUserActions` - Mass operations

**Features:**
- User role management
- Account status controls (active/inactive)
- Bulk user operations
- User activity monitoring

**API Endpoints:**
- `GET /api/v1/admin/users`
- `PUT /api/v1/admin/users/:id`
- `POST /api/v1/admin/users`
- `DELETE /api/v1/admin/users/:id`

**Files:**
- `src/pages/admin/UsersPage.tsx`
- `src/components/admin/UsersTable.tsx`
- `src/components/admin/UserModal.tsx`
- `src/components/admin/BulkUserActions.tsx`

## Common Utilities & Hooks

### Custom Hooks
- `useAuth()` - Authentication state management
- `useApi()` - API call wrapper with loading states
- `useLocalStorage()` - Persistent local storage
- `useDebounce()` - Debounced values for search
- `usePagination()` - Table pagination logic
- `useFormPersist()` - Form draft persistence

### Utility Functions
- `api.ts` - Enhanced API client with retry logic
- `auth.ts` - Authentication helpers
- `validation.ts` - Common Zod schemas
- `formatting.ts` - Date, currency, text formatters
- `permissions.ts` - Role-based access control
- `storage.ts` - Local/session storage helpers

### Types & Interfaces
- `api.ts` - API response types
- `user.ts` - User and auth types
- `items.ts` - Item-related types
- `common.ts` - Shared interface definitions

## Implementation Phases

### Phase 1: Foundation (Week 1)
- Authentication pages and flow
- Dashboard layout and basic navigation
- Common components setup

### Phase 2: Core Features (Week 2)
- Items management (list, details, CRUD)
- Profile management
- Basic search and filtering

### Phase 3: Advanced Features (Week 3)
- Admin panel and user management
- Settings and preferences
- Advanced filtering and export

### Phase 4: Polish & Testing (Week 4)
- Error boundaries and loading states
- Mobile responsiveness optimization
- Unit and integration tests
- Performance optimization

## Key Implementation Notes

1. **State Management**: Use TanStack Query for server state, React Context for global UI state
2. **Forms**: React Hook Form with Zod validation for all forms
3. **Routing**: React Router v7 with loader functions for data fetching
4. **Styling**: Tailwind v4 with CSS variables from shadcn/ui theme system
5. **Testing**: Vitest for unit tests, React Testing Library for component tests
6. **Performance**: React.memo for expensive components, useMemo for calculations
7. **Accessibility**: ARIA labels, keyboard navigation, screen reader support
8. **Mobile**: Responsive design with mobile-first approach

This plan provides a comprehensive structure for building a modern, scalable mini app with all the essential features while maintaining code quality and user experience standards.