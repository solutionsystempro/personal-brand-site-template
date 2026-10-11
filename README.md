# Personal Brand Site Template

A free, open-source website template for consultants, coaches, freelancers and creators.
Edit one content file, change seven colours if you want, and deploy to Vercel in a few minutes.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/solutionsystempro/personal-brand-site-template)

> **Screenshot:** add a screenshot of your deployed site here, for example `docs/screenshot.png`, then reference it with `![Screenshot](docs/screenshot.png)`.

## What you get

- **Home page** with Hero, Problem, Origin story, Proof (stats and example testimonials), Offers, Free guide (email capture), Who it is for / not for, Community, FAQ and a final call to action.
- **About**, **Contact** and **404** pages.
- Sticky header with an accessible mobile menu, plus a footer with social links.
- **All copy in one file:** `src/content.ts`.
- **All colours in one place:** `tailwind.config.js`.
- Per-page title, description, Open Graph and canonical tags.
- Accessible by default: semantic HTML, visible focus rings, skip link, keyboard-friendly FAQ accordion, `prefers-reduced-motion` respected, WCAG AA text contrast.
- Responsive from 360px phones to 1440px desktops.
- No backend, no analytics, no tracking, no API keys.

**Stack:** Vite 5, React 18, TypeScript, Tailwind CSS 3, React Router 6, Lucide icons. All dependency versions are pinned.

## Quick start

You need [Node.js](https://nodejs.org) 18 or newer.

**macOS / Linux (Terminal)**

```bash
git clone https://github.com/solutionsystempro/personal-brand-site-template.git my-site
cd my-site
npm install
npm run dev
```

**Windows (PowerShell)**

```powershell
git clone https://github.com/solutionsystempro/personal-brand-site-template.git my-site
cd my-site
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173). Changes show up as you save.

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the local dev server                    |
| `npm run build`   | Type-check and build the site into `dist/`    |
| `npm run preview` | Serve the built site locally to check it      |

## Make it yours

### 1. Edit your content

Open `src/content.ts`. Every headline, paragraph, link, stat, offer, FAQ and SEO tag lives there, grouped by section with comments.

- Anything in `[square brackets]` is a placeholder. Search the file for `[` to find what is left.
- The testimonials are clearly marked **examples**. Replace them with real quotes from real clients, with their permission, before you launch. Do not publish invented testimonials.
- To reorder or remove home page sections, edit `src/pages/Home.tsx`.

### 2. Change the colours

Open `tailwind.config.js` and edit the `brand` object at the top:

| Token          | Default   | Used for                                   |
| -------------- | --------- | ------------------------------------------ |
| `primary`      | `#2563EB` | Buttons, links, key accents                |
| `primary-dark` | `#1E40AF` | Hover states, text on soft blue            |
| `primary-soft` | `#EAF1FF` | Tinted chips, icon backgrounds             |
| `ink`          | `#0F172A` | Headings and main text                     |
| `muted`        | `#475569` | Body copy and secondary text               |
| `surface`      | `#F5F8FE` | Alternate section backgrounds              |
| `border`       | `#DCE5F3` | Card outlines and dividers                 |

Keep `ink` and `muted` dark enough to stay readable on white (a contrast checker such as WebAIM's helps). Also update `theme-color` in `index.html` and the hex values inside the SVGs in `/public` if you want them to match.

### 3. Swap the images

Placeholder images live in `/public`:

| File              | Where it shows                      | Suggested size |
| ----------------- | ----------------------------------- | -------------- |
| `headshot.svg`    | Hero and About page                 | 960 x 1120     |
| `story.svg`       | Origin story section                | 1120 x 1280    |
| `guide.svg`       | Free guide cover                    | 680 x 880      |
| `og-image.svg`    | Link previews on social media       | 1200 x 630     |
| `favicon.svg`     | Browser tab icon                    | square         |

You can use `.jpg`, `.png` or `.webp` instead. Drop the file in `/public` and update the path in `src/content.ts`.

**Social preview image:** most social networks do not render SVG previews. Export a 1200 x 630 PNG, save it as `public/og-image.png`, and update `site.ogImage` in `src/content.ts` and the two `og:image` / `twitter:image` tags in `index.html`.

### 4. Update the default SEO tags

Link-preview crawlers do not run JavaScript, so they read the tags in `index.html`. Update the title, description and image there to match `src/content.ts`. Each page also sets its own title and description at runtime from the `seo` block in `src/content.ts`. Set `site.url` to your real domain so canonical and Open Graph URLs are correct.

## Connect the email forms

The free guide form and the contact form are plain HTML forms that POST to any URL you choose. There is no backend to run. Until you add a URL, submitting shows a friendly "not connected yet" message, so nothing is sent anywhere.

### Formspree (works for both forms)

1. Create a form at [formspree.io](https://formspree.io).
2. Copy its endpoint, for example `https://formspree.io/f/abcdwxyz`.
3. In `src/content.ts`, set `leadMagnet.formAction` (and/or `contact.formAction`) to that URL.
4. Leave `leadMagnet.emailFieldName` as `"email"`.

### Kit (ConvertKit)

1. In Kit, create a form and open its embed options (HTML).
2. Copy the `action` URL from the embed code, for example `https://app.kit.com/forms/1234567/subscriptions` (older accounts show `app.convertkit.com`).
3. Set `leadMagnet.formAction` to that URL.
4. Set `leadMagnet.emailFieldName` to `"email_address"`.

### Any other provider

Mailchimp, Tally, Basin, Getform and most email tools give you an HTML form with an `action` URL. Copy the URL into `formAction` and set `emailFieldName` to the input name they use.

## Deploy

### Vercel (one click)

Click the **Deploy with Vercel** button at the top. Vercel copies the repo to your GitHub account and deploys it. Every push to your main branch redeploys automatically.

### Vercel (from your own copy)

1. Push your copy to GitHub.
2. In Vercel, choose **Add New > Project** and import the repo.
3. Vercel detects Vite. The defaults (`npm run build`, output `dist`) are correct.

`vercel.json` rewrites every path to `index.html`, so routes like `/about` work when visited directly.

### Other hosts

Any static host works (Netlify, Cloudflare Pages, GitHub Pages). Build with `npm run build`, publish the `dist` folder, and add a single-page-app fallback so unknown paths serve `index.html`.

## Sitemap and robots

`public/robots.txt` allows all crawlers. After you deploy, add a `public/sitemap.xml` listing your pages, for example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.yourdomain.com/</loc></url>
  <url><loc>https://www.yourdomain.com/about</loc></url>
  <url><loc>https://www.yourdomain.com/contact</loc></url>
</urlset>
```

Then uncomment the `Sitemap:` line in `robots.txt` and point it at that file.

## Project structure

```
public/             Images, favicon, robots.txt
src/
  content.ts        All site copy, links and SEO  <- edit this
  pages/            Home, About, Contact, NotFound
  sections/         One file per home page section
  components/       Header, Footer, Button, forms, SEO hook
  index.css         Base styles and focus rings
tailwind.config.js  Colour tokens and fonts        <- and this
index.html          Default meta tags and fonts
vercel.json         SPA rewrite for Vercel
```

## Notes on dependencies

Versions are pinned exactly. On 11 October 2026, `npm audit` reported 11 findings (6 high, 5 moderate) in three groups:

- **Tailwind CSS 3.4.19** (high): `braces`, `micromatch`, `fast-glob` and `chokidar` in Tailwind's build-time file watcher, plus moderate `postcss-nested` and `postcss-selector-parser`. Build-time only, nothing ships to visitors.
- **Vite 5.4.21** (high, via moderate `esbuild`): affects the local dev server only. Do not expose `npm run dev` to the internet.
- **React Router 6.30.4** (moderate): an open redirect via backslash paths in `<Link>` and `useNavigate`, and a server-side rendering hydration issue. This site renders on the client only and every link target comes from your own `content.ts`, so neither path is reachable unless you add user-supplied links.

Clearing them all needs major upgrades (Tailwind 4, Vite 6 or later, React Router above 7.17.0), which involve breaking changes. Run `npm audit` yourself for the current state.

Fonts load from Google Fonts (a third-party request, no tracking). To self-host instead, remove the `<link>` tags in `index.html` and add the font files to `public/`.

## License

MIT. Copyright (c) 2026 Ian Ryan Kirk. See [LICENSE](LICENSE).
You are free to use this template for personal and commercial sites. Keep the LICENSE file in your copy of the code. A visible credit on your site is not required.
