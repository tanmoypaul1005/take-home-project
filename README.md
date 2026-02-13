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

## সংক্ষিপ্ত সারমারি ও করা কাজ

- **সংক্ষিপ্ত সারমারি:** এই প্রজেক্টটি Create React App দিয়ে তৈরি করা একটি React ফ্রন্ট‑এন্ড SPA; স্টাইলিং এর জন্য Tailwind CSS ব্যবহার করা হয়েছে এবং টেস্টিংয়ের জন্য React Testing Library সেটআপ আছে।
- **কনটেন্ট (মূল):** `src/` (components, header, pagination, sideBar, threatCalendar, threatsTable, util), `public/`, `build/`, `package.json`, `tailwind.config.js`।
- **ইনস্টল ও রান:** `npm install`, `npm start` (ডেভ), `npm run build` (প্রোডাকশন), `npm test`।
- **করা কাজগুলো:**
	- প্রজেক্ট বুটস্ট্র্যাপ করা (Create React App)।
	- টেইলউইন্ড কনফিগ ও devDependency যোগ করা।
	- বিভিন্ন UI কম্পোনেন্ট তৈরি করা (`src/components/` — হেডার, সাইডবার, pagination, threatsTable ইত্যাদি)।
	- `README.md` আপডেট করা (setup, tech stack, assumptions, limitations) এবং প্রজেক্ট সামারি যোগ করা।
- **নোট/সীমানা:** টেস্টিং লাইব্রেরি ইনস্টল করা আছে, কিন্তু প্রতিটি কম্পোনেন্টের পূর্ণ টেস্ট কভারেজ সম্পূর্ণ নাও হতে পারে; CI/CD বা ডিপ্লয়মেন্ট স্ক্রিপ্ট আলাদা করে যোগ করা হয়নি।
