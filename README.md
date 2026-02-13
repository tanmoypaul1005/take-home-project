# my-project

A React single-page application bootstrapped with Create React App.

## Setup & Run

- Prerequisites: Node.js 16+ and npm (or Yarn).
- Install dependencies:

```
npm install
```
- Run in development mode:

```
npm start
```

Open http://localhost:3000 in your browser. The dev server uses `react-scripts start`.

- Build for production:

```
npm run build
```

- Run tests:

```
npm test
```

## Tech stack

- **Framework:** React 19 (via `react` and `react-dom`)
- **Tooling:** Create React App (`react-scripts`)
- **Styling:** Tailwind CSS (`tailwindcss` listed in devDependencies)
- **Testing:** @testing-library/react, @testing-library/jest-dom, @testing-library/user-event
- **Metrics:** web-vitals

## Assumptions & Exceptions

- This repository is a front-end SPA only; no backend server included.
- Environment variables: none required by default; add a `.env` file if you need custom values.
- Default dev server port is `3000`; change via `PORT` env variable if necessary.
- The project targets modern browsers as configured by `browserslist` in `package.json`.

## Known limitations

- Accessibility and full test coverage may be incomplete for some components.
- No CI/CD or deployment scripts are included — use the generated `build/` output with your preferred static host.
- The documentation for internal components (in `src/components`) is limited; refer to the source for behaviour.
- The project uses `react-scripts` (Create React App). Running `npm run eject` is irreversible.

## Where to look next

- Source code: `src/`
- Static build output: `build/`
- Tailwind config: `tailwind.config.js`

If you want, I can add contributor notes, component docs, or deployment instructions next.
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
