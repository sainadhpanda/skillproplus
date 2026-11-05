# SkillproPlus website

SkillproPlus is a React single-page website built with Vite. It includes pages for the company, student internships, final-year and academic project guidance, research and documentation support, and contact enquiries.

## Local development

Use Node.js 20 or newer.

```sh
npm install
npm run dev
```

## Production build and preview

```sh
npm run build
npm run preview
```

Vite writes the production site to `dist/`. Vercel is configured to build the Vite app, serve `dist/`, route client-side page URLs to the app, and attach basic browser security headers. The contact form opens the visitor's email application; this site does not store or transmit submitted form data to a backend.

## Deployment note

Update the canonical website URL in `index.html`, `src/App.jsx`, `public/robots.txt`, and `public/sitemap.xml` if the production domain changes. Search engines may need time to crawl and index new pages.
