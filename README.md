# Tobenna Uzoewulu - Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Vite.

## Features

- **Responsive Design** - Optimized for all screen sizes with a max-width of 1440px
- **Light/Dark Mode** - Theme toggle with semantic color variables
- **Modern UI** - Clean design with smooth animations and hover effects
- **Project Carousel** - Interactive showcase of projects with navigation
- **Contact Form** - Formspree integration for receiving messages, with social media links
- **Skills Section** - Alternating grid layout highlighting education, technical skills, and teamwork

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 7** - Build tool and dev server
- **CSS Variables** - Theming and design system
- **Formspree** - Contact form backend
- **ESLint** - Code linting

## Project Structure

```
src/
├── App.tsx              # Main app component
├── index.css            # Global styles & design system
├── main.tsx             # Entry point
└── component/
    ├── topbar/          # Navigation bar with theme toggle
    ├── Landing_page/    # Hero section
    ├── skills/          # Skills showcase
    ├── Projects/        # Project carousel
    ├── contact/         # Contact form & social links
    └── footer/          # Copyright footer
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Toby-U/tob_Portfolio.git

# Navigate to project directory
cd tob_Portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Design System

The portfolio uses CSS custom properties for consistent theming:

### Color Palette

- **Dark Wine** - Primary accent color
- **Carmel** - Secondary accent
- **Dark Coffee** - Backgrounds
- **Chocolate Brown** - Text colors
- **Light Apricot** - Highlights

### Breakpoints

- Extra small mobile: < 360px
- Mobile: < 480px
- Tablet: < 768px
- Desktop: < 1440px
- Large screens: > 1440px (centered with background color)

## License

© 2026 Tobenna Uzoewulu. All rights reserved.
