# Jaydev's Personal Portfolio Website

This is a modern, premium, and fully responsive personal portfolio website built with React, Vite, and Tailwind CSS v4.

👉 Live Site: [https://jeypc.github.io](https://jeypc.github.io)

---

## 🚀 Technologies Used

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Background Effects**: Custom canvas-based [ParticleBackground](file:///Users/jaydev/Projects/jeypc.github.io/src/components/UI/ParticleBackground.jsx)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [GitHub Actions](file:///Users/jaydev/Projects/jeypc.github.io/.github/workflows/deploy.yml) (Automated deployment to GitHub Pages)

---

## ✨ Features

- **Dark Mode Only**: Clean, high-contrast, premium dark mode styling.
- **Fluid Animations**: Smooth page transitions, entry animations, scroll progress indicators, and interactive hover scales powered by Framer Motion.
- **Dynamic Particle Overlay**: Light, interactive floating particle background.
- **Section Layout**:
  - **Hero**: Brief bio & primary call to action.
  - **About**: Journey, core values, and career stats.
  - **Skills**: Visual indicators of tech stacks and language proficiencies.
  - **Experience**: Timeline of work history.
  - **Projects**: Category-filterable portfolio showcase.
  - **Services**: Listing of service offerings.
  - **Testimonials**: Interactive slider showing client/peer quotes.
  - **Contact**: Interactive email form (configured for EmailJS).
- **SEO Optimized**: Pre-configured `sitemap.xml`, `robots.txt`, and standard meta elements.

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Dev Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 📦 Deployment

This project deploys automatically to **GitHub Pages** on every push to the `main` branch. 

The deployment process is configured via [deploy.yml](file:///Users/jaydev/Projects/jeypc.github.io/.github/workflows/deploy.yml). Whenever a push occurs, GitHub Actions:
1. Installs Node.js dependencies.
2. Builds the static production assets (`dist/`).
3. Uploads and deploys the build folder to GitHub Pages.

---
<sub>Last updated: 2026</sub>
