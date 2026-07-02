# Wobb Vibe Coder Assignment

## Live Demo

🔗 **Live Application:** https://wobb-assignment-rouge.vercel.app/

## GitHub Repository

🔗 https://github.com/vinn31-git/Wobb-assignment

---

# Overview

This project is an enhanced version of the provided Influencer Search application built with **React, TypeScript, Vite, and Tailwind CSS**.

The focus of this submission was to improve functionality, fix bugs, modernize the UI, improve state management, and enhance the overall user experience while maintaining clean and maintainable code.

---

# Features Implemented

## State Management

- Implemented global state management using **Zustand**
- Added persistent storage using Zustand Persist middleware
- Centralized selected profiles state

---

## Selected Profiles

Implemented the complete **Add to List** feature:

- Add profiles to selected list
- Prevent duplicate additions
- Remove selected profiles
- Persist selected profiles after refresh
- Drag & Drop reordering

---

## Bug Fixes

Fixed several issues present in the starter project:

- Fixed incorrect engagement rate calculation
- Added graceful fallback for unavailable profile details
- Fixed broken profile image issues
- Improved overall UI responsiveness
- Removed unnecessary debug code

---

## UI / UX Improvements

- Redesigned profile cards
- Improved typography and spacing
- Responsive dashboard layout
- Sticky Selected Profiles sidebar
- Better button styling
- Improved hover interactions
- Added smooth animations using Framer Motion
- Improved overall visual hierarchy

---

## Performance Improvements

- Reduced unnecessary renders
- Cleaner component organization
- Improved maintainability
- Better state management using Zustand

---

# Libraries Added

- Zustand
- Framer Motion
- @hello-pangea/dnd

---

# Engineering Decisions

The provided dataset contains detailed profile information for only a subset of the available influencer profiles.

Instead of generating artificial profile data, the application gracefully handles unavailable profile details by displaying a user-friendly fallback screen. This preserves data integrity while providing a better user experience.

---

# Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- Framer Motion
- @hello-pangea/dnd

---

# Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Production build

```bash
npm run build
```

---

# Project Structure

```
src
├── assets
├── components
├── pages
├── store
├── types
├── utils
```

---

# Assumptions

- The provided dataset intentionally contains only a limited number of detailed profile JSON files.
- Missing detailed profile information is handled gracefully instead of generating placeholder data.
- Existing project architecture was preserved while improving functionality.

---

# Trade-offs

Due to the limited assignment timeline, I prioritized implementing the core functionality and improving the overall user experience over adding additional enhancements.

Priority was given to:

- State management with Zustand
- Complete "Add to List" workflow
- Persistent selected profiles
- Drag & Drop functionality
- Bug fixes
- UI redesign
- Performance improvements

Some enhancements were intentionally deferred to keep the implementation stable and maintainable.

---

# Known Limitations

- Mobile responsiveness can be further improved on smaller screen sizes.
- Dark mode/theme switching has not been implemented.
- Only a subset of influencer profiles include detailed profile data in the provided dataset. Missing profile details are handled gracefully instead of generating placeholder content.
- Some UI components can be further refined for better accessibility.

---

# Future Improvements

Given additional development time, I would implement:

- Full mobile-first responsive design
- Dark mode with theme persistence
- Skeleton loading states
- Improved accessibility (ARIA labels, keyboard navigation)
- Unit and integration tests
- Search debouncing
- Image lazy loading
- Error boundaries
- Additional animations and micro-interactions
- Deployment monitoring and analytics

---

# Future Improvements

Given additional time, the following features could be added:

- Dark Mode
- Skeleton loading states
- Improved accessibility (ARIA)
- Unit & Integration tests
- Mobile-first refinements
- Search debouncing
- Image lazy loading
- Error boundaries

---

# Submission Checklist

- ✅ Bug fixes
- ✅ UI redesign
- ✅ Zustand state management
- ✅ Add to List feature
- ✅ Duplicate prevention
- ✅ Remove profiles
- ✅ Persistent selected profiles
- ✅ Drag & Drop reordering
- ✅ Responsive design
- ✅ Performance improvements
- ✅ Production build passes
- ✅ Deployed on Vercel

---

# Thank You

Thank you for reviewing my submission. I enjoyed working on this assignment and focused on delivering a clean, maintainable, and user-friendly solution while following modern React development practices.
