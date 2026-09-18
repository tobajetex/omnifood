# Omnifood - AI-Powered Food Subscription Landing Page

![Status](https://img.shields.io/badge/Status-Completed-success) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

A modern, fully responsive landing page for "Omnifood," an AI-powered food subscription service. Built from scratch using semantic HTML5, modern CSS architecture, and Vanilla JavaScript.

🔗 **Live Demo:** [View Live Site](https://omnifood-ten-eta.vercel.app)

---

## 📖 About The Project

Omnifood is a high-converting landing page designed to showcase a food subscription service. The project focuses on clean UI/UX, accessibility, and high-performance interactions. It features a custom design token system, a responsive multi-column grid layout, and smooth, non-blocking JavaScript animations.

## ✨ Key Features

### CSS & UI Architecture

- **Custom Design System:** Implemented a comprehensive design token system (colors, typography, spacing, shadows) for consistent UI scaling.
- **Modern Layouts:** Engineered complex layouts using CSS Grid (including asymmetric grids and fractional units) and Flexbox.
- **BEM Naming Convention:** Utilized Block-Element-Modifier (BEM) methodology for scalable, maintainable, and collision-free CSS classes.
- **Fully Responsive:** Adapted the desktop-first design for tablets and mobile devices using three distinct media query breakpoints (`944px`, `704px`, `544px`).
- **Interactive Components:** Built reusable components including pricing cards with pseudo-element ribbons, overlapping image galleries with hover-zoom effects, and custom form styling.

### JavaScript & Performance

- **High-Performance Sticky Navigation:** Implemented the `Intersection Observer API` to create a sticky header without blocking the main thread (avoiding the performance pitfalls of the traditional `scroll` event).
- **Smooth Scrolling:** Added custom smooth-scrolling behavior for navigation links, overriding default browser jumps.
- **Mobile Navigation:** Built a fully functional, animated off-canvas mobile menu with dynamic icon toggling.
- **Dynamic Content:** Automated the footer copyright year using the JavaScript `Date` object.

## 🛠️ Tech Stack

- **Frontend:** HTML5 (Semantic), CSS3 (Grid, Flexbox, Custom Properties, Media Queries), Vanilla JavaScript (ES6+)
- **Tools:** Git, GitHub
- **Design:** Figma (Original design concept by Jonas Schmedtmann)

## 💼 Professional Workflow

This project was built simulating a real-world engineering environment:

- **Feature Branching:** Every new section or feature was developed in an isolated branch.
- **Conventional Commits:** Used standardized commit prefixes (`feat:`, `chore:`, `fix:`) to create a clean, readable Git history.
- **Pull Requests:** All features were merged into the `main` branch via Pull Requests to simulate code review workflows.

## 📂 Project Structure

```text
omnifood/
├── css/
│   ├── general.css       # Design tokens, reset, typography, and reusable components
│   ├── style.css         # Main layout and section-specific styling
│   └── queries.css       # Responsive media queries
├── img/                  # Optimized project assets
├── js/
│   └── script.js         # Vanilla JS for interactions and observers
├── index.html            # Semantic HTML structure
└── README.md
```
