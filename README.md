# Ashraf's Software Engineering Portfolio

Welcome to my personal portfolio website! I am **Ashraf Abdulmuumin**, a passionate **Full Stack Software Engineer** dedicated to creating impactful web applications. This portfolio showcases my skills, projects, and professional experience in the software engineering field.

## Table of Contents
- [About Me](#about-me)
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)

---

## About Me

I specialize in building web applications using modern technologies and tools. My journey in software development has equipped me with a diverse skill set that enables me to tackle complex problems and deliver user-friendly solutions. I am also a photography enthusiast and an anime lover!

---

## Project Overview

This portfolio website is designed to provide an overview of my work and experience as a software engineer. The website includes several key sections:

1. **Bio Section**: A brief introduction about me.
2. **Experience Section**: A detailed breakdown of my work experience.
3. **Projects Section**: A searchable table showcasing the projects I’ve worked on, complete with tech stack details and live links.
4. **Contact Section**: Information for contacting me, including a link to my resume and social media profiles.

The website has been designed with a focus on performance, accessibility, and responsiveness across different devices.

---

## Features

- **Dark/Light Mode**: Users can switch between light and dark themes.
- **Responsive Design**: The layout adapts to different screen sizes and devices.
- **Smooth Scrolling & Active Link Detection**: Provides a smooth navigation experience with scroll-based active link highlighting.
- **Parallax Backgrounds**: Beautiful, dynamically loaded parallax images enhance visual appeal.
- **Projects Search**: A search feature that allows filtering projects by name and tech stack.
- **Downloadable Resume**: Visitors can download my resume directly from the website.
- **Lazy Loading**: Images are lazy-loaded to improve performance.

---

## Tech Stack

This portfolio is built using the following technologies:

- **React 18**: Modern React with hooks for component-based architecture
- **Vite**: Fast build tool and development server
- **TailwindCSS**: Utility-first CSS framework with custom color palette
- **JavaScript (ES6+)**: Modern JavaScript features and modules
- **React Hooks**: Custom hooks for theme management, scroll observation, and image loading
- **Unsplash API**: For dynamically loading background images
- **Local Storage**: To persist the user's theme preference (light/dark)
- **Google Fonts**: For custom fonts (Lumanosimo, Manrope, Courier Prime)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dynamic-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your Unsplash API key (optional - defaults will be used if not provided)

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

6. Preview production build:
```bash
npm run preview
```

### Project Structure

```
dynamic-portfolio/
├── public/           # Static assets (images, favicon)
├── src/
│   ├── components/  # React components
│   ├── hooks/       # Custom React hooks
│   ├── data/        # JSON data files
│   ├── styles/      # CSS and Tailwind configuration
│   ├── App.jsx      # Main app component
│   └── main.jsx     # React entry point
├── index.html       # HTML entry point
├── vite.config.js  # Vite configuration
└── tailwind.config.js # Tailwind configuration
```
