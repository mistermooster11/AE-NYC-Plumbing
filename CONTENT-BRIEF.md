# A&E NYC Plumbing — Content Brief
**QuickFlip Sites | Build Log**
Date: 2026-05-08
Prospect: https://www.topplumbernyc.com/
Template: PipeMonkey-Redesign
Reference site: N/A (template structure used as reference)

---

## Source Material Summary

- **Business name:** A&E NYC Plumbing
- **Phone:** (646) 392-7164
- **Service area:** Manhattan + all NYC boroughs (Brooklyn, Queens, The Bronx, Staten Island)
- **Hours:** Monday–Sunday, 9am–9pm
- **Differentiators extracted:** Licensed & insured, free quotes over phone, free onsite estimates, upfront pricing, residential & commercial, fast turnaround
- **Services:** 16 services extracted (see Service Inventory below)
- **Testimonials:** None found on prospect site — placeholders written (flagged TODO)
- **Social media:** None found on prospect site — flagged TODO in Footer
- **Google Business / address:** No fixed address listed — Maps embed centered on Manhattan as placeholder

---

## Service Inventory

1. Drain Repair
2. Faucets & Sinks
3. Leak Detection
4. Toilet Repair
5. Shower & Tub
6. Water Heater Installation
7. Gas Line Installation & Repair
8. Piping & Re-piping
9. Water Line Repair & Installation
10. Water Pressure Repair
11. Water Filter & Purification
12. Kitchen & Bath Plumbing
13. Garbage Disposal
14. Dishwasher Repair
15. Plumbing Fixtures
16. Residential Plumbing

All 16 services have matching slugs in `data/craft-catalog/crafts.ts` and full detail pages in `data/craft-catalog/service-pages.tsx`.

---

## Services Consolidated

None. All 16 services were kept as distinct entries. No merges performed.

---

## Pages Built & Content Decisions

### data/channel/ae-nyc-plumbing.tsx (About Us / Channel page)
- Hero headline generated (no tagline on prospect site) — logged below
- Business description extracted from homepage intro copy
- learnMore section: 4 subheadings extracted from prospect's stated differentiators (Licensed, Free Quotes, Residential & Commercial, Fast Turnaround)
- 6 featured craftLinks: Drain Repair, Faucets & Sinks, Leak Detection, Water Heater Installation, Gas Line Services, Toilet Repair
- Testimonial: placeholder (TODO — no real reviews extracted)
- flexFeature: Emergency/after-hours section using prospect's hours and phone
- getInTouch: Contact CTA using prospect's phone

### data/craft-catalog/crafts.ts
- Replaced Pipe Monkeys' drain-focused service list with all 16 A&E services
- Categories: "Plumbing" for all except gas-line-services ("Gas & Heating")
- Disciplines: "Residential" + "Commercial" for all except shower-and-tub and dishwasher-repair (Residential only) and residential-plumbing (Residential only)

### data/craft-catalog/service-pages.tsx
- 16 full service detail pages, each with 4 sections: Overview, When You Need It, Our Process, Related Services
- Copy: mix of extracted prospect language and generated trade-specific content where gaps existed
- All generated content logged in Copy Generation Log below

### data/programs.tsx
- 16 program cards replacing template's placeholder services
- Each card: title + 1 focused paragraph

### lib/constants/mainNavItems.ts
- 5-item flat nav: Home, Services, Service Areas, FAQs, Contact
- Added Service Areas vs. template default 4-item (removed NCCER-era mega-dropdown)

### components/custom/Hero.tsx
- New headline: "Manhattan's Licensed Plumbers — Trusted Across All NYC Boroughs"
- Phone CTA: (646) 392-7164
- Replaced video background with static image from prospect site

### components/custom/header/Topnav.tsx
- Phone bar updated to (646) 392-7164
- Tagline: "Licensed NYC Plumbers, Mon–Sun 9am–9pm"

### components/custom/Footer.tsx
- A&E NYC Plumbing branding throughout
- All 5 boroughs listed in service area summary
- Social links: empty array (TODO)
- Copyright: ©2026 A&E NYC Plumbing

### components/custom/Announcements.tsx
- Section title: "Diagnosed, Quoted, and Fixed — Every Time"
- 3-step process extracted from prospect's stated process/differentiators
- CTAs: "Call for a Free Quote" + "See All Services"

### components/custom/Difference.tsx
- 3 trust stats: Mon–Sun availability, 5★ rating placeholder, Free Quotes
- (TODO: replace rating stat with actual review count once verified)

### components/custom/HomeCTA.tsx
- Headline: "Plumbing Problem? Call Now for a Free Quote"
- Phone: (646) 392-7164

### components/custom/Testimonial.tsx
- 3 placeholder testimonials written (all flagged TODO)
- Heading changed to "Real Reviews From Real New Yorkers"

### components/custom/Insights.tsx
- Intro paragraph updated to describe A&E's full-range plumbing

### app/general-faqs/page.tsx
- 8 FAQs covering: service area, free quotes, licensing, hours, commercial capability, turnaround time, gas line work, emergency procedures
- All answers reflect prospect's stated differentiators

### app/contact-us/page.tsx
- 5 borough service area cards (Manhattan, Brooklyn, Queens, The Bronx, Staten Island)
- Full neighborhood lists per borough
- 16 services in form dropdown
- Maps embed centered on Manhattan (TODO: replace with business-specific embed)
- Phone (646) 392-7164 throughout

### app/gallery/page.tsx
- 4 placeholder job cards with TODO image comments
- Structured around top service categories

### app/service-areas/page.tsx
- 5 borough sections: headline, description, 4 callouts, full neighborhood list
- Copy written to reflect A&E's actual service area

### app/blog/page.tsx
- 6 placeholder NYC plumbing post titles and excerpts
- All flagged TODO for replacement with real content

### app/privacy-policy/page.tsx
- Business name, phone, email updated via script (removed Pipe Monkeys references)

---

## Navigation Changes

| Change | Reason |
|--------|--------|
| Removed NCCER mega-dropdown | NCCER is an education org — not applicable to plumbing trade business |
| Added "Service Areas" as top-level nav item | Plumbing businesses rank on geo pages; makes service footprint prominent |
| Simplified to 5 flat items | Trade clients don't need complex nav; reduces friction for phone-call conversion |

---

## Copy Generation Log

All extracted copy came from https://www.topplumbernyc.com/. The following sections were generated due to genuine content gaps:

| Item | Location | Notes |
|------|----------|-------|
| Hero headline | Hero.tsx | Prospect had no tagline; generated from service area + license status |
| 3 testimonials | Testimonial.tsx | No reviews on site; placeholder quotes written — must be replaced |
| Gallery job cards | gallery/page.tsx | No gallery on prospect site; placeholder structure only |
| Blog post titles/excerpts | blog/page.tsx | No blog on prospect site; placeholder posts only |
| Service detail page body copy | service-pages.tsx | 16 pages written using extracted service names + trade content library patterns where prospect had no descriptions |
| FAQ answers | general-faqs/page.tsx | Generated using prospect's stated differentiators as source for answers |
| Service area neighborhood lists | service-areas/page.tsx, contact-us/page.tsx | Borough coverage implied by "all NYC boroughs" — specific neighborhood lists generated from standard NYC geography |
| Announcements 3-step process | Announcements.tsx | Extracted from prospect differentiators, restructured into step format |

---

## TODOs for Client Before Launch

| Item | File | Notes |
|------|------|-------|
| Real customer photos | gallery/page.tsx | Replace all 4 placeholder job cards with actual before/after photos |
| Hero background image | Hero.tsx | Currently using prospect's WordPress upload URL — should be replaced with self-hosted asset |
| Testimonials (×3) | Testimonial.tsx | Replace placeholder quotes with real Google/Yelp reviews with real names/locations |
| Google Maps embed | contact-us/page.tsx | Replace Manhattan-centered generic embed with business-specific embed or service area map |
| Social media URLs | Footer.tsx | Add Facebook, Instagram, Yelp, and Google Business links once confirmed |
| Contact form backend | contact-us/page.tsx | Form UI is built; backend submission handler / email forwarding needs to be wired up |
| Blog content | blog/page.tsx | Replace all 6 placeholder posts with real articles |
| Review count / rating stat | Difference.tsx | Replace "5★" placeholder with actual verified review count and platform |
| Delete unused channel files | data/channel/ | pipemonkeys.tsx, associations.tsx, corrections.tsx, high-schools.tsx, postsecondary.tsx are no longer imported but still in folder — delete before production deploy |
| Email address | privacy-policy/page.tsx | Confirm business contact email and replace placeholder |
