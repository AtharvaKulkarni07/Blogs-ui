
# React Blog UI

Clean, responsive blog UI built with React, Vite, and Tailwind CSS — a lightweight starter for building blog interfaces and prototypes.

## Features

- Responsive layout and mobile-friendly styles
- Light / dark theme toggle
- Blog list cards and dedicated blog detail pages
- Component-driven architecture using functional React
- Fast development with Vite HMR and utility-first styling via Tailwind CSS

## Tech Stack

- React
- Vite
- Tailwind CSS & PostCSS
- ESLint

## Quickstart

Prerequisites: Node.js 18+ and npm (or yarn)

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Build for production and preview the build locally:

```bash
npm run build
npm run preview
```

## Project Structure (important files)

- [src/App.jsx](src/App.jsx) — application root and routes
- [src/main.jsx](src/main.jsx) — client entry and app bootstrap
- [src/index.css](src/index.css) — global styles + Tailwind imports
- [src/components/BlogCard.jsx](src/components/BlogCard.jsx) — blog card UI
- [src/components/Navbar.jsx](src/components/Navbar.jsx) — top navigation
- [src/components/ThemeToggle.jsx](src/components/ThemeToggle.jsx) — theme switch
- [src/data/blogs.js](src/data/blogs.js) — sample blog data

## Customization

- To add or edit posts, update `[src/data/blogs.js](src/data/blogs.js)` or replace with an API data source.
- Tailwind styles are configured in `tailwind.config.js`; edit the theme or add plugins there.
- Theme state is handled in `ThemeToggle.jsx` — connect it to persistent storage if you want remembered preferences.

## Contributing

Contributions, bug reports, and suggestions are welcome. Please open an issue or submit a pull request describing the change.

## License

MIT — change this to your preferred license if needed.

## Contact

If you need help or want to collaborate, open an issue or reach out via the project repository.
