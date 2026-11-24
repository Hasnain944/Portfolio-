# Summary of changes

**Content (src/data/profile.js, src/data/site.js)**
- Added Whoopit (Web Developer, August 2026 - Present) as the latest role, with a gold "current" marker.
- Added three projects: ShadBaad.pk (Shopify), InClick and InspireClick (WordPress/WooCommerce), with live links, shown in their own "Live e-commerce sites" group.
- Added a category label to every project.
- Reorganized skills into Frontend, Backend, WordPress/WooCommerce/Shopify, Databases, Tools, Other.
- Rewrote the summary, hero intro, About text, strengths, and contact call-to-action.
- All earlier experience, projects, education, and certifications are preserved.

**Design and structure**
- Hero: new title line, "Web Developer at Whoopit" badge, added "Contact me" button, tech chips now include WordPress, WooCommerce, Shopify.
- Projects section split into live commercial sites and web applications; live-site buttons show the domain.
- Existing visual language (dark theme, teal accent, fonts, animations) kept.

**Fixes**
- ASIT project image path pointed to asit.jpg but the file is asit.png (broken image). Fixed.
- Image alt text for illustrative previews no longer claims to be a screenshot.
- README: removed stray "powershell" heading text, added run/deploy/edit guide.

**SEO**
- New page title, meta description, keywords, Open Graph/Twitter title, social preview image text, and JSON-LD (jobTitle, worksFor, knowsAbout).
- Semantic heading order verified (one h1, section h2s, item h3s).

**Not changed**
- Framework (Next.js 15, Tailwind, Framer Motion), dependencies, contact form, navigation.

**Certificates (added later)**
- 15 HP LIFE certificates added to the Education section as clickable cards (each opens its PDF from `public/certificates/`).
- Four identical duplicate files ("- Copy") in the upload were skipped.
- CV Certifications section now lists the existing courses plus the HP LIFE courses (still 2 pages).
