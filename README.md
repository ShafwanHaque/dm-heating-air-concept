# D&M Heating and Air Conditioning Concept

Standalone Next.js website concept, with source files in src/ and a pnpm lockfile.

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Project notes

- Brand details, palette, services, coverage, and calls to action are configured in src/config/site.config.ts.
- The header uses D&M's official logo and the hero uses the site's 1920px homepage photograph, both saved locally under public/brand and public/hero. The image sources came from the live site's CDN requests.
- The coverage section includes all 20 service areas from D&M's website and plots a marker for each location.
- The request form is a preview and does not send submissions. Service-area maps use OpenStreetMap tiles.
- Confirm business details and brand artwork with the business before publishing.

Original website: https://www.youcandependondm.com/
