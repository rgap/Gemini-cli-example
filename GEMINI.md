# Project Overview: Lumina

Lumina is a modern React-based landing page prototype for a digital infrastructure platform. It features a clean, responsive design, interactive elements, and a modular architecture.

## Main Technologies
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (using `@tailwindcss/vite`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Linting:** [ESLint](https://eslint.org/)

## Architecture
The project follows a standard Vite + React structure:
- `src/main.jsx`: The application entry point.
- `src/App.jsx`: The main application component, containing the layout (Navbar, Footer) and page-level components (HomePage, AboutPage).
- `src/index.css`: Global styles and Tailwind directives.
- `public/`: Static assets like icons and favicons.

## Building and Running

### Development
To start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Production Build
To create an optimized production build:
```bash
npm run build
```

### Linting
To run ESLint and check for code quality issues:
```bash
npm run lint
```

### Preview
To preview the production build locally:
```bash
npm run preview
```

## Development Conventions

### Coding Style
- **Functional Components:** Prefer functional components with React Hooks (`useState`, `useEffect`).
- **ES Modules:** Use ESM syntax (`import`/`export`).
- **Utility-First CSS:** Use Tailwind CSS 4 utility classes for styling.
- **Iconography:** Use `lucide-react` for consistent icons.

### Project Structure
- Keep reusable components in the `src/` directory (consider moving sub-components in `App.jsx` to a `src/components/` directory as the project grows).
- Use `src/assets/` for local images and SVG files.

### State Management
- Simple page navigation is currently handled via local state (`useState`) in `App.jsx`. For more complex routing, consider adding `react-router-dom`.
