
# SecurePass — Random String Generator

A modern, client‑side password (random string) generator built with React and Vite, styled with Tailwind CSS, animated with GSAP, and using accessible UI primitives. It includes a Home page for generation, plus About and Contact pages.


## Features

- Password generation with live preview
  - Adjustable length (8–50)
  - Include/exclude: numbers, special characters, uppercase letters (lowercase always included)
- One‑click Copy to clipboard with visual feedback
- Responsive, accessible UI built from composable components
- Smooth entrance animations via GSAP
- Client‑side only: no storage or transmission of generated passwords
- Routing for Home (/), About (/About), and Contact (/Contact)


## Tech Stack

- React 19 + Vite 7
- React Router DOM 7
- Tailwind CSS 4 (via @tailwindcss/vite)
- Radix UI primitives (label, separator, slider, switch)
- lucide-react icons
- GSAP for animations
- ESLint for linting


## Getting Started

Prerequisites
- Node.js >= 18
- npm (comes with Node). This repo uses npm (see package-lock.json).

Installation
- Install dependencies:
  ```bash
  npm install
  ```
- Start a local dev server:
  ```bash
  npm run dev
  ```
  Vite will print a local URL (typically http://localhost:5173). Open it in your browser.

Build
- Create a production build:
  ```bash
  npm run build
  ```
- Preview the production build locally:
  ```bash
  npm run preview
  ```

Lint
- Run ESLint:
  ```bash
  npm run lint
  ```


## Usage

- Move the Length slider to choose the desired length (8 to 50).
- Toggle options to include Numbers, Special Characters, and Uppercase letters.
- The password updates automatically as you change options.
- Click Copy to copy the current password to your clipboard. A “Copied!” indicator appears briefly.

Security & Privacy
- All generation happens in your browser. Nothing is sent to a server.
- Generated values are not stored. Refreshing the page resets the state.

Note on Clipboard
- The app currently uses `document.execCommand('copy')` for clipboard. Some browsers may restrict this in certain contexts. If you encounter issues, consider switching to `navigator.clipboard.writeText` (requires a secure context/HTTPS) in the implementation.


## Pages and Routing

- / — Home: Main generator interface
- /About — About: Project information and team section
- /Contact — Contact: Contact details and a simple form (console‑logs submissions)

Routing is implemented with BrowserRouter and Routes in `src/main.jsx` and `src/App.jsx`.


## Project Structure

```
random-string-generator/
├─ index.html
├─ package.json
├─ public/
│  ├─ S1.jpg
│  ├─ S2.jpg
│  ├─ S3.jpg
│  ├─ s4.jpg
│  └─ vite.svg
├─ src/
│  ├─ index.css
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Footer.jsx
│  │  ├─ PasswordGeneratorCard.jsx
│  │  ├─ About.jsx
│  │  ├─ Contact.jsx
│  │  ├─ HOC/
│  │  │  ├─ HOME.HOC/Home.Hoc.jsx
│  │  │  ├─ ABOUT.HOC/About.HOC.jsx
│  │  │  └─ CONTACT.HOC/Contact.HOC.jsx
│  │  └─ ui/
│  │     ├─ Button.jsx
│  │     ├─ Card.jsx
│  │     ├─ Input.jsx
│  │     ├─ Label.jsx
│  │     ├─ Separator.jsx
│  │     ├─ Slider.jsx
│  │     ├─ Switch.jsx
│  │     ├─ Textarea.jsx
│  │     └─ utils.jsx
├─ vite.config.js
└─ eslint.config.js
```

Styling
- Tailwind CSS v4 is enabled via the Vite plugin (`@tailwindcss/vite`).
- Global Tailwind import lives in `src/index.css` using `@import "tailwindcss";`.


## Development Notes

- UI Components: Simple, composable components live in `src/components/ui`. They follow accessible defaults and are easy to adapt.
- Animations: Entrance animations use GSAP timelines in page and card components.
- Forms: The Contact form uses `react-hook-form` and performs basic client-side validation; submissions are logged to the console.


## Deployment

- Build the app with `npm run build`. The production assets go to `dist/`.
- Deploy the `dist/` directory to any static host (e.g., Netlify, Vercel, GitHub Pages, Cloudflare Pages, static S3 site).
- For SPA routing on static hosts, configure a fallback to `index.html` (e.g., Netlify `_redirects` rule: `/* /index.html 200`).


## Assets

- Team images referenced in `About.jsx` are served from `/public` (S1.jpg, S2.jpg, S3.jpg, s4.jpg). Update or replace them as needed.


<!-- ## Known Issues / TODO

- Clipboard API: `document.execCommand('copy')` is deprecated in some contexts. Consider migrating to `navigator.clipboard.writeText` for better compatibility.
- Nav links: `Navbar.jsx` uses anchor tags (`<a href>`). Converting to React Router `<Link>` can avoid full page reloads.
- index.html stylesheet link: Ensure the stylesheet reference matches your setup. This project imports Tailwind via `src/index.css`. -->


## Contributing

- Fork the repo, create a feature branch, commit your changes, and open a pull request.
- Run linting locally before submitting.



