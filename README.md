# Sunil Sunhare · Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite 7](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sunil_Sunhare-0A66C2?style=flat-square)](https://in.linkedin.com/in/sunil-sunhare-042bb1190)

Personal portfolio for Sunil Sunhare, a Technology Architect and Delivery Leader with 18+ years of experience across banking, insurance, healthcare and media/product platforms.

The site presents enterprise architecture, application modernization, AI/GenAI delivery, career history, selected client engagements, education and contact details based on the 2026 CV.

## Technology

React 19, TypeScript, Vite 7, Tailwind CSS 4, Framer Motion and Lenis. The production build uses `vite-plugin-singlefile` to inline JavaScript and CSS; images remain in `dist/images/`.

## Local development

Use Node.js 22.12+ and npm.

```sh
npm ci
npm run dev
```

## Validation and production build

```sh
npx tsc --noEmit
npm run build
npm run preview
```

Deploy the complete `dist/` directory to a static host. For GitHub Pages, configure a build/deployment workflow that installs dependencies, runs the build and publishes `dist/`.

## Content and structure

- `src/data.ts`: profile, contact links, skills, education, employment history and projects.
- `src/components/`: animated portfolio sections and shared interface components.
- `src/index.css`: global styles.
- `public/images/`: portfolio imagery.
- `index.html`: page title and search description.

Dependencies, generated builds and local environment files are excluded from Git.

## Contact

[GitHub](https://github.com/sunilsunharedev) · [LinkedIn](https://in.linkedin.com/in/sunil-sunhare-042bb1190) · [Email](mailto:sunilsunhare@gmail.com)

## License

[MIT](LICENSE) · Copyright 2026 Sunil Sunhare.
