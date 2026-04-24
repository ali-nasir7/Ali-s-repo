# LivLong MD — Longevity & Wellness

Concierge luxury website. **React + Vite + React Router DOM + Tailwind + Framer Motion + Lucide.**

## Requirements
- Node v22.22.2
- NPM v10.9.7

## Setup
```bash
npm install
npm run dev
```

## Build for GoDaddy
```bash
npm run build
```
Then upload the **entire contents** of the `dist/` folder to your GoDaddy hosting `public_html/` (or a subfolder).

The included `.htaccess` (copied automatically into `dist/` from `public/`) handles client-side routing for React Router on Apache.

## Adding the manual images
Place these files in `public/resources/` before building:
- `public/resources/logo.png` — the navbar/footer logo
- `public/resources/asalphoto.png` — Asal Dean's portrait

After building, both files end up in `dist/resources/` automatically.

## Booking
Every "Book" CTA opens:
```
https://app.acuityscheduling.com/schedule.php?owner=39145070&ref=booking_button
```

## Tech notes
- `vite.config.js` uses `base: "./"` so the build works at the domain root or in a subfolder.
- No SSR. No edge runtime. Pure static SPA.
