# Tony C's Hair Styling — Dearborn, MI

A polished template site for a Dearborn barbershop. Custom build, hosted for free on GitHub Pages.

**Live site:** https://dylanthrp.github.io/tonycs-barbershop-demo/

## What this is

A single-page marketing site for Tony C's Hair Styling at 2809 Monroe St, Dearborn, MI 48124. Built as a learning project and a sales demo — better than the WebNovare template the shop is currently on, at $0/month instead of $10–25/month.

## Tech

- Plain HTML + CSS + a small JS file. No frameworks, no build step.
- Free hosting on GitHub Pages.
- Custom domain (when ready): point a CNAME to `dylanthrp.github.io` and add a `CNAME` file in this repo.

## Layout

```
index.html
assets/
  site.css       # palette, layout, responsive
  site.js        # booking form (mailto), footer year, hash nav
```

## Sections on the page

1. **Hero** — brand, headline, two CTAs, "today at the shop" card
2. **Meet the barbers** — Amir & Ramoon
3. **Services** — 9 service cards with prices
4. **Book a seat** — form that opens the user's email app with the request pre-filled
5. **Price list** — clean table with dotted leaders
6. **Visit us** — address, hours, contact, Google Maps embed
7. **Footer**

## What's real vs placeholder

**Real (pulled from the live Yelp page and the existing WebNovare site):**
- Shop name: Tony C's Hair Styling
- Address: 2809 Monroe St, Dearborn, MI 48124
- Phone: (313) 565-3633
- Email: amouri.chahin@gmail.com
- Barbers: Amir, Ramoon
- Prices: Haircut $25, Beard Trim $20, Razor Cut $25, Shaves $20, Styling $20, Wax $7, Long-hair $30, Wash $5, Kids $25
- Hours: Tue–Sat 9–6:30, Sun 10–5, Mon closed

**Placeholders (need to be replaced before going to a real customer):**
- Barber photos — currently gray placeholders with "Photo coming soon" labels
- Service photos — same placeholders
- Facebook / Instagram links — currently `href="#"` (placeholder)

**Honest disclaimers kept on the page:**
- "Photo coming soon" tags on every missing image (no fake stock photos)
- "No live booking yet" note on the booking form (uses `mailto:` to send a real request to the shop's email)

## When Amir wants real photos

1. Drop images into `assets/photos/` (e.g. `amir.jpg`, `ramoon.jpg`, `haircut-1.jpg`)
2. Replace each `<div class="barber-photo" ...>` and `<div class="service-photo" ...>` with `<img src="assets/photos/filename.jpg" alt="...">`
3. Remove the "Photo coming soon" tag spans
4. Commit and push — live site updates in ~30 seconds

## When a booking system is ready

Open `assets/site.js` and replace the `mailto:` URL in the form's submit handler with a link to the booking system (Calendly, Squire, Booksy, etc.).

## License

This template is original work. Photos must be added under whatever license Amir/Ramoon's photographer agrees to.
