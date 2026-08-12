# Leon Mayer Fund — new site

Static HTML/CSS. No build step, no framework, no dependencies, no webfonts.
Open `index.html` in a browser and it works. That's the whole thing.

## Pages

| File | Replaces on the old site |
|---|---|
| `index.html` | Home / What We Do |
| `mission.html` | Mission Statement + What We Do (merged) |
| `chesed-center.html` | Mark Ramer Chesed Center + About Mark Ramer (merged, `#mark-ramer`) |
| `free-loans.html` | Schulder Free Loan Fund + About Howard Schulder (merged, `#howard-schulder`) |
| `rabbi-lefkowitz.html` | **New** — bio, shiurim, timeline |
| `pesach.html` | Pesach Orders |
| `media.html` | Media |
| `contact.html` | Contact |
| `404.html` | — |

Nine pages down from eleven; the two "About [person]" pages are now sections on the
program page they belong to, so nobody has to hunt for them.

## Why it's fast

- Zero external requests. No Google Fonts, no jQuery, no analytics, no Weebly runtime.
- One 6 KB stylesheet, one 700-byte script (mobile menu only), one 5 KB logo.
- System font stack — text paints immediately, no layout shift.
- The whole site is smaller than a single photo on most charity sites.

## Deploying

### Option A — Netlify Drop (fastest, ~2 minutes, no account needed to test)

1. Go to <https://app.netlify.com/drop>
2. Drag this entire `LMF` folder onto the page.
3. It gives you a live URL immediately.
4. To use `leonmayerfund.com`: Site settings → Domain management → Add custom domain,
   then point the domain's DNS at Netlify as instructed.

### Option B — GitHub Pages (matches how `lmf-pesach` is already hosted)

1. Create a repo, e.g. `ymtseries/lmf-site`.
2. Push these files to the `main` branch.
3. Settings → Pages → Source: `main` / root.
4. For `leonmayerfund.com`: add a file named `CNAME` containing just `leonmayerfund.com`,
   then at your DNS host create four `A` records for the apex pointing to
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
   and a `CNAME` for `www` pointing to `ymtseries.github.io`.

Either way, **do this before pointing DNS**: the Weebly site is still answering on
`leonmayerfund.com` right now (I checked — the order-portal landing page is live).
Once you cut DNS over, that page and `/volunteer-form.html` go away, so make sure the
Pesach order links on the new `pesach.html` are where you want them first.

## Things I need from you

These are the only gaps. Everything else is done.

1. **Photos.** Three placeholders say "Photograph coming soon":
   Rabbi Lefkowitz, Mark Ramer, Howard Schulder. Drop the JPGs into `assets/img/`
   and swap the placeholder `<div>` for the `<img>` tag — the exact line to use is
   already written as an HTML comment right above each one.
2. **Shiurim links.** `rabbi-lefkowitz.html` has a ready-made list. There's a
   commented-out template block showing exactly what to copy for each shiur —
   YouTube, Drive, MP3, TorahAnytime, anything with a URL works.
3. **The two videos** on `media.html` (Pesach 2022, About LMF 2022). The old Wix
   player didn't expose the source URLs. If they're on YouTube, send the links.
4. **Chesed Center intake form URL.** The old page had a "fill out the Intake Form"
   button but the link went to a Wix-hosted form. Right now that button opens an
   email to `chesedcenter@guraljcc.org` instead — fine as a fallback, but send me the
   real form link if there is one.
5. **Contact form.** It's wired to Formspree but needs a real form ID —
   sign up free at [formspree.io](https://formspree.io), then replace
   `YOUR_FORM_ID` in `contact.html`. (On Netlify you can instead just add the word
   `netlify` to the `<form>` tag and delete the `action` — no third party at all.)
   Until then the page still shows the email address and phone number prominently.

## Two discrepancies I found in the old site

- The old Schulder page said HFLS has operated **since 1892**; the Howard Schulder
  page said **1872**. I used 1892 (that's the founding year HFLS itself publishes).
- The old contact page listed `chesedcenter@guraljcc.org` as the Fund's main email,
  but the homepage listed `rabbi@leonmayerfund.org`. I made `rabbi@` the Fund's
  address and kept `chesedcenter@` under the Chesed Center where it belongs.

Tell me if either is wrong and I'll flip it.

## Editing

Header and footer are copy-pasted into each page (no includes — that's what keeps it
dependency-free). If you change a nav link, change it in all nine files, or tell me
and I'll do it in one pass.

Colors, spacing and type are all CSS variables at the top of `assets/css/style.css`.
The brand orange is `--brand: #E2601F`, pulled from the logo.
