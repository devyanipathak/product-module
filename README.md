# Product Module

A production-ready React Native mobile application demonstrating best practices in mobile development with clean architecture, proper state management, and real-world API integration.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [API Integration](#api-integration)
- [State Management](#state-management)
- [Performance Optimizations](#performance-optimizations)
- [Future Improvements](#future-improvements)

## Overview

This project is a React Native mobile application built to demonstrate the implementation of a real-world product listing and detail module. The application focuses on:

- **Clean Architecture** - Well-organized code structure with clear separation of concerns
- **Type Safety** - Full TypeScript implementation for robust development
- **State Management** - Efficient global state handling with Zustand
- **API Integration** - Professional API layer with error handling
- **Mobile UX** - Native-feeling UI with proper loading, error, and empty states
- **Scalability** - Architecture designed to grow with your application needs

The implementation prioritizes clarity, correctness, and maintainability over visual complexity, aligning with real production expectations.

## Features

### Product List Screen

- **Data Fetching** - Fetches product data from [DummyJSON API](https://dummyjson.com)
- **Optimized Rendering** - Uses FlatList for efficient list rendering
- **Comprehensive Information Display**:
  - Product title
  - Price with currency formatting
  - Rating with visual indicators
  - Product thumbnails
- **State Management**:
  - Loading indicators during data fetch
  - Error handling with retry functionality
  - Empty state when no products found
- **Interactive Features**:
  - Pull-to-refresh capability
  - Infinite scrolling with pagination
  - Real-time search functionality
  - Client-side filtering
- **Navigation** - Tap any product to view detailed information

### Product Detail Screen

- **Rich Product Information**:
  - Full-size product images
  - Complete product title
  - Pricing information
  - Rating and reviews
  - Detailed description
  - Stock availability
  - Product category
  - Brand information
- **Error Resilience** - Gracefully handles missing fields and API failures
- **Smooth Navigation** - Standard back navigation to product list

### Navigation

- Stack-based navigation using React Navigation
- Type-safe navigation with TypeScript
- Standard mobile UX patterns
- Smooth transitions between screens

## Tech Stack

### Core Technologies

- **[React Native](https://reactnative.dev/)** (0.81.5) - Cross-platform mobile development
- **[Expo](https://expo.dev/)** (~54.0.30) - Development platform and tooling
- **[TypeScript](https://www.typescriptlang.org/)** (~5.9.2) - Type-safe JavaScript

### State & Data

- **[Zustand](https://zustand-demo.pmnd.rs/)** (^5.0.9) - Lightweight state management
- **[Axios](https://axios-http.com/)** (^1.13.2) - HTTP client for API calls

### Navigation

- **[@react-navigation/native](https://reactnavigation.org/)** (^7.1.26) - Navigation framework
- **[@react-navigation/native-stack](https://reactnavigation.org/)** (^7.9.0) - Stack navigator

### Supporting Libraries

- **react-native-safe-area-context** (~5.6.0) - Safe area handling
- **react-native-screens** (~4.16.0) - Native navigation primitives
- **expo-status-bar** (~3.0.9) - Status bar component

## Project Structure

```
product-module/
├── App.tsx                      # Application entry point
├── index.ts                     # Expo entry file
├── app.json                     # Expo configuration
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── assets/                     # Images, icons, and static files
└── src/
    ├── api/                    # API layer
    │   ├── client.ts          # Axios instance configuration
    │   └── products.api.ts    # Product-related API endpoints
    ├── components/            # Reusable UI components
    │   ├── Loader.tsx        # Loading indicator
    │   ├── ErrorView.tsx     # Error state display
    │   └── EmptyState.tsx    # Empty state display
    ├── navigation/           # Navigation configuration
    │   └── RootNavigator.tsx # Main navigation stack
    ├── screens/             # Screen components
    │   ├── ProductList/
    │   │   ├── ProductionListScreen.tsx  # Product list screen
    │   │   └── ProductItem.tsx           # Product list item
    │   └── ProductDetail/
    │       └── ProductionDetailScreen.tsx # Product detail screen
    ├── store/              # State management
    │   └── useProductsStore.ts # Zustand store for products
    └── types/             # TypeScript type definitions
        └── product.types.ts # Product-related types
```

### Architecture Principles

- **Separation of Concerns** - Clear boundaries between UI, business logic, and data
- **Modularity** - Reusable components and utilities
- **Scalability** - Easy to extend with new features
- **Maintainability** - Clean code that's easy to understand and modify

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **Expo CLI** - Install globally: `npm install -g expo-cli`
- **Expo Go** app on your mobile device (optional) - [iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Installation

1. **Clone the repository** (or navigate to the project directory)

```bash
cd product-module
```

2. **Install dependencies**

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

This will open the Expo Developer Tools in your browser.

#### Run on Physical Device

1. Install **Expo Go** on your iOS or Android device
2. Scan the QR code from the terminal or Expo Developer Tools
3. The app will load on your device

#### Run on Emulator/Simulator

**iOS Simulator** (macOS only):
```bash
npm run ios
```

**Android Emulator**:
```bash
npm run android
```

**Web Browser**:
```bash
npm run web
```

## Architecture

### State Management with Zustand

The application uses **Zustand** for state management, chosen for:

- **Simplicity** - Minimal boilerplate compared to Redux
- **Performance** - Efficient re-renders with built-in selector optimization
- **Developer Experience** - Intuitive API and easy debugging
- **Bundle Size** - Lightweight footprint (~1KB)

The product store ([src/store/useProductsStore.ts](src/store/useProductsStore.ts)) manages:
- Product list data
- Loading states
- Error handling
- Pagination state
- Search/filter functionality

#### Store Structure

```typescript
{
  products: Product[]           // Current product list
  isLoading: boolean           // Loading indicator
  error: string | null         // Error message
  currentPage: number          // Pagination tracking
  hasMore: boolean            // More data available
  fetchProducts: () => void   // Load products
  refreshProducts: () => void // Refresh data
  loadMore: () => void       // Load next page
  // ... other actions
}
```

### API Layer Architecture

Centralized API layer for:
- **Separation of Concerns** - Network logic separate from UI
- **Reusability** - Shared API client configuration
- **Error Handling** - Consistent error management
- **Type Safety** - TypeScript interfaces for API responses

#### API Client ([src/api/client.ts](src/api/client.ts))

Configures Axios instance with:
- Base URL configuration
- Request/response interceptors
- Default headers
- Timeout settings

#### Products API ([src/api/products.api.ts](src/api/products.api.ts))

Provides methods for:
- Fetching paginated product lists
- Retrieving individual product details
- Error handling and retry logic

### Component Architecture

#### Reusable Components

- **Loader** ([src/components/Loader.tsx](src/components/Loader.tsx)) - Consistent loading indicators
- **ErrorView** ([src/components/ErrorView.tsx](src/components/ErrorView.tsx)) - Error display with retry
- **EmptyState** ([src/components/EmptyState.tsx](src/components/EmptyState.tsx)) - No data state

These components ensure consistent UX across the application.

## API Integration

### Data Source

The application integrates with the **DummyJSON API**:
- Base URL: `https://dummyjson.com`
- Endpoint: `/products`
- Features: Pagination, filtering, sorting

### API Features Used

- **Pagination** - Load products in batches (default: 10 items)
- **Limit/Skip** - Control data fetching
- **Error Handling** - Graceful degradation on failures

### Data Flow

1. User opens app → Store triggers API call
2. API client fetches data → Returns typed response
3. Store updates state → Components re-render
4. User scrolls → Pagination loads more data

## State Management

### Why Zustand?

For this application's scope, Zustand provides the optimal balance:

| Aspect | Zustand | Redux |
|--------|---------|-------|
| Boilerplate | Minimal | Extensive |
| Learning Curve | Low | Moderate |
| Bundle Size | ~1KB | ~5KB+ |
| DevTools | Built-in | Requires setup |
| TypeScript | Excellent | Good |

### Store Pattern

```typescript
// Simple, readable state updates
const useProductsStore = create<ProductStore>((set, get) => ({
  products: [],
  fetchProducts: async () => {
    set({ isLoading: true })
    const data = await fetchProducts()
    set({ products: data, isLoading: false })
  }
}))
```

### Usage in Components

```typescript
// Selective subscription - only re-renders when products change
const products = useProductsStore(state => state.products)
const fetchProducts = useProductsStore(state => state.fetchProducts)
```

## Performance Optimizations

### List Rendering

- **FlatList** - Virtualized list for efficient rendering of large datasets
- **keyExtractor** - Unique keys for optimal reconciliation
- **getItemLayout** - Fixed height items for better scrolling performance

### Data Loading

- **Pagination** - Load data in chunks (10 items at a time)
- **Infinite Scroll** - Automatic loading as user scrolls
- **Pull-to-Refresh** - Manual refresh capability

### Rendering Optimization

- **React.memo** - Prevent unnecessary re-renders of list items
- **useMemo** - Memoized search/filter operations
- **useCallback** - Stable function references

### Network Optimization

- **Request Deduplication** - Prevent duplicate API calls
- **Loading States** - User feedback during operations
- **Error Retry** - Graceful failure recovery

## Future Improvements

With additional time and resources, the following enhancements would add significant value:

### Data Persistence

- **AsyncStorage** - Cache products for offline viewing
- **Redux Persist** - Persistent state across app restarts
- **Image Caching** - Faster image loading with local cache

### Testing

- **Unit Tests** - Jest for business logic and utilities
- **Component Tests** - React Native Testing Library
- **E2E Tests** - Detox for full user flow testing
- **API Mocking** - MSW for reliable API testing

### User Experience

- **Dark Mode** - Theme support with styled-components
- **Animations** - Smooth transitions with Reanimated
- **Skeleton Screens** - Better loading experience
- **Haptic Feedback** - Touch feedback for actions

### Accessibility

- **Screen Reader Support** - ARIA labels and roles
- **Font Scaling** - Respect system font size
- **Color Contrast** - WCAG AA compliance
- **Keyboard Navigation** - Full keyboard support

### Features

- **Favorites** - Save products for later
- **Shopping Cart** - Add to cart functionality
- **Product Comparison** - Compare multiple products
- **Advanced Filters** - Price range, category, brand
- **Sort Options** - Price, rating, name, date

### Developer Experience

- **Linting** - ESLint with React Native config
- **Code Formatting** - Prettier for consistent style
- **Pre-commit Hooks** - Husky + lint-staged
- **CI/CD** - Automated testing and deployment
- **Documentation** - Detailed component documentation

### Monitoring & Analytics

- **Error Tracking** - Sentry for crash reporting
- **Analytics** - Usage tracking and insights
- **Performance Monitoring** - React Native Performance
- **A/B Testing** - Feature flag system

## Contributing

This project was built as a technical demonstration. For production use:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and was created for demonstration purposes.

## Acknowledgments

- **DummyJSON** - For providing the free API
- **React Native Community** - For excellent libraries and tools
- **Expo Team** - For simplifying React Native development

---

**Built with** ❤️ **using React Native and TypeScript**
