# Voyaverse — Overseas Consultancy & Immigration (Plain React)

A premium landing page built with **React 18 + Vite + Tailwind CSS v4 + Framer Motion + Swiper + React Router**.
Plain JavaScript (`.jsx`) — easy to edit and extend.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── main.jsx              # App entry + React Router setup
├── index.css             # Tailwind v4 + design tokens (colors, gradients, shadows)
├── pages/
│   └── Home.jsx          # Landing page (composes all sections)
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── WhyChooseUs.jsx
    ├── Services.jsx
    ├── Countries.jsx
    ├── Opportunities.jsx
    ├── Process.jsx
    ├── Testimonials.jsx
    ├── Gallery.jsx
    ├── FAQ.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    ├── FloatingActions.jsx
    ├── ScrollProgress.jsx
    ├── Loader.jsx
    └── SectionHeader.jsx
```

## Adding new pages

Edit `src/main.jsx`:

```jsx
import About from "./pages/About.jsx";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

## Customizing the design

All colors, gradients, and shadows are defined in `src/index.css` under `@theme` and `:root`.
Change the values there and every component updates automatically.

## Tech

- React 18
- Vite 5
- Tailwind CSS v4 (@tailwindcss/vite plugin)
- Framer Motion 11
- Swiper 11
- Lucide React + React Icons
- React Router v6
