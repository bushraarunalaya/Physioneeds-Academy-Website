# PhysioNeeds Academy — Next.js (App Router)

```bash
npm install
npm run dev     # http://localhost:3000
```

- `app/` routes (`page.tsx` = home, `api/lead` = form endpoint; add `courses/`, `webinars/`, `faculty/` next)
- `components/ui` shared primitives · `layout` header/footer · `sections` home sections · `forms` · `motion` (Lenis+GSAP smooth scroll, parallax, pinned horizontal scroll) · `three` (hero background)
- `lib/data/*` content and course data. This is the only layer to swap for a database/API when the backend arrives.
- `public/brand/logo.png` official logo (black lettering: keep on light surfaces).
- TODOs: real offer end date (`OFFER_ENDS_AT`), demo/testimonial videos and patient-result media (`MediaSlot`), lead persistence in `app/api/lead/route.ts`.
