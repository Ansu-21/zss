# Zenith Safety Solutions — website

Premium, concept-led site. Light + dark mode (toggle in nav). Sky-blue trust + violet aspiration + coral CTA palette.

## Run
    npm install
    npm run dev      # http://localhost:3000

## Pages
- / : landing hero + the work + 40-course universe + Gulf + why Zenith + testimonials + close
- /courses : full course universe
- /courses/[slug] : a full SEO page for each of the 40 real courses
- /login : gated career quiz
- /report : unlocked personal report (and shows the exact lead data sent to you)

## Lead capture -> your inbox / sheet
Every signup POSTs to /api/leads (app/api/leads/route.ts) with:
name, whatsapp, email, education, experience, interest, gulfInterest,
careerScore, recommendedCourses[], viewedCourses[], capturedAt.

To receive leads in a Google Sheet:
1. Sheet -> Extensions -> Apps Script. Add:
     function doPost(e){
       var d = JSON.parse(e.postData.contents);
       var s = SpreadsheetApp.getActiveSheet();
       s.appendRow([new Date(), d.name, d.whatsapp, d.email, d.education,
         d.experience, d.interest, d.gulfInterest, d.careerScore,
         (d.recommendedCourses||[]).join(", "), (d.viewedCourses||[]).join(", ")]);
       return ContentService.createTextOutput("ok");
     }
2. Deploy -> Web app -> Execute as you -> Access: Anyone. Copy the URL.
3. Create .env.local:  LEADS_WEBHOOK_URL=<that url>
Without the env var, leads are logged to the server console (nothing breaks).

## IMAGES to add
- Hero visual: components/Hero.tsx — the .photo panel. Add a real training photo (CSS background-image or an <img>), 4:5 portrait.
- "The work" panel: app/page.tsx, the .photo block, 5:6 portrait.
- Course images: set the optional `image` field per course in data/courses.ts ("/images/iosh.jpg"). Drop files in public/images/. ~8 category photos reused across tracks is enough.
- Testimonial photos: add `photo` per entry in data/testimonials.ts.
- Logo: replace the "Z" mark in components/Nav.tsx with the eagle logo.

## Replace before launch
- data/testimonials.ts : real student names, quotes, roles, photos (current ones are placeholders).
- data/courses.ts : salaryLow/High, demand, durations are ILLUSTRATIVE — set real values.
- WhatsApp number 919585252099 is from your brochure; confirm it's current.

## Update (real data integrated)
- Testimonials: now the real ones from your live site (Rajesh R, Karthikeyan, Baskar, Kingsley) in data/testimonials.ts. Photos load from /assets/images/testimonial/ — copy that folder into /public.
- Categories section (Diploma 15 / Certificate 13 / IOSH 1 / International 2) added after the hero, matching your reference image.
- Clients section uses /assets/images/brand/c1..c11.jpg — copy your existing /assets/images/brand/ folder into /public to make logos appear.
- Course pages + tiles now show rating stars.
- Nav transparency fixed (always has a readable frosted background).
- Hero/proof stats use real site figures (29K+ enrolled, since 2013, ISO + NSDI). NOTE: your brochure said "5,000 trained" while the live site shows "29.3K enrolled" — pick the accurate number and set it in components/Hero.tsx and app/page.tsx.

### To make all images appear
Copy your current site's `assets/` folder into this project's `/public/` folder, so paths like `/assets/images/brand/c1.jpg` resolve. Then set per-course `image` fields in data/courses.ts if you want photos on course tiles.


## Images — now wired to LIVE URLs
All images now load directly from your live site (https://www.zss.co.in/assets/...):
- Client logos: brand/c1..c11.jpg
- Testimonial photos: testimonial/testimonial-01..04.png
- Course tiles (Fire & Safety, Industrial Safety, HSE): course/course-01..03.jpg
- Hero + "the work" photos: about/about-03.webp, about/1.jpg
No folder copying needed — they appear automatically in any browser.
To add more course photos: set the `image` field per course in data/courses.ts to a full
https://www.zss.co.in/assets/images/course/... URL (or upload new ones to that path).
If any image 404s, it hides itself gracefully and the gradient placeholder shows.

## New interactive features
- Safety Universe map (components/SafetyUniverse.tsx): six orbiting "planets" (safety domains); tap one to see its courses, job roles, and the country with highest demand. Edit the `worlds` array to change countries/courses.
- Why Safety section (components/WhySafety.tsx): impact stats + interactive course→role career-path map.
- Founder section (components/Founder.tsx): premium editorial Air Force heritage layout (uses about/2.jpg).
- Quiz + reward (app/quiz/page.tsx, app/api/quiz/route.ts): 5-question safety quiz; score 3+ to spin a prize wheel; generates a unique coupon (ZSS-INITIALS-XXXX) and lets them claim on WhatsApp. Results POST to /api/quiz.
  - IP GATING: app/api/quiz uses an in-memory Set keyed by IP — this is BEST-EFFORT and resets on restart / isn't shared across serverless instances. For a real one-play-per-IP guarantee, back it with a database or KV store (Upstash Redis, Vercel KV). The client also gets blocked if the API reports the IP already played.
  - Prize odds are in the `prizes` array (weights) in app/quiz/page.tsx.
