📱 Overview

This project is a React Native mobile application built as part of a technical assignment to demonstrate the implementation of a real-world product listing and detail module.

The focus of this project is on:

Clean architecture

Proper state management

API integration

Mobile-friendly UI

Clear handling of loading, error, and empty states

The application prioritizes clarity, correctness, and maintainability over visual complexity.

🎯 Features
🧾 Product List Screen

Fetches product data from a public API

Displays products using FlatList

Each item shows:

Product title

Price

Rating

Handles UI states clearly:

Loading

Error with retry

Empty state

Supports:

Pull-to-refresh

Infinite scrolling (pagination)

Search and filter functionality

📄 Product Detail Screen

Navigates from the list screen on item selection

Displays:

Product image (with proper aspect ratio handling)

Title

Price

Rating

Description

Gracefully handles:

Missing product fields

API failures

Includes a clear back navigation to return to the list screen

🧭 Navigation

Stack-based navigation using React Navigation

Follows standard mobile UX patterns

✨ Optional Enhancements Implemented

All optional enhancements mentioned in the assignment have been implemented:

🔍 Search / Filter

Local filtering of products by title

Optimized using memoization

Search input always remains visible to avoid UX dead-ends

🔄 Pull-to-Refresh

Reloads product data using existing state logic

♾️ Pagination / Infinite Scroll

Loads products incrementally as the user scrolls

Prevents unnecessary API calls when no more data is available

🔁 Retry Handling

Error state includes a retry action for failed API requests

🌐 Basic Offline Awareness

Displays meaningful error messages when data cannot be fetched due to network issues

🛠 Tech Stack

React Native (Expo)

TypeScript

Zustand – state management

Axios – API communication

React Navigation (Stack)

🗂 Project Structure
src/
├── api/            # API client and endpoints
├── components/     # Reusable UI components (Loader, ErrorView, EmptyState)
├── navigation/     # Navigation configuration
├── screens/
│   ├── ProductList/
│   └── ProductDetail/
├── store/          # Zustand state management
├── types/          # TypeScript interfaces
└── utils/          # Shared utilities


This structure ensures separation of concerns, scalability, and maintainability.

🧠 Architectural Decisions
State Management

Zustand was chosen because:

The application scope is limited

It avoids unnecessary boilerplate

It keeps state logic simple, readable, and scalable

For larger applications with more complex workflows, Redux could be considered.

API Layer

A centralized API layer is used to:

Keep networking logic separate from UI components

Improve reusability and testability

Simplify future API changes

Performance Considerations

FlatList used instead of ScrollView

Pagination to avoid rendering large datasets at once

Memoized search filtering to reduce unnecessary re-renders

Lightweight, reusable components for better performance

🚀 Getting Started
Prerequisites

Node.js

Expo CLI

Installation & Run
npm install
npm start


Run the application using Expo Go or an emulator.

🔮 Improvements With More Time

If more time were available, the following enhancements could be added:

Offline caching using persistent storage

Unit and integration tests

Accessibility improvements

UI theming and design system

Enhanced error handling and analytics

🎥 Submission Notes

A short explanatory video (maximum 5 minutes) accompanies this project

The video explains:

Application flow

Architecture decisions

State management

Optional enhancements

Areas for future improvement

✅ Conclusion

This project demonstrates:

Strong React Native fundamentals

Clean and maintainable architecture

Proper handling of real-world UI states

Thoughtful technical decision-making

The implementation is intentionally simple, scalable, and easy to reason about, aligning closely with real production expectations.