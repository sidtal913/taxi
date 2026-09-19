# Hire brief
Project: Mobile Taxi
Hire agent: rae
Task id: task_e78eb525
Title: Mobile Taxi iOS Home Page – Booking Flow UI
Shape: page → app/page.tsx
## Description
Delivery order: 1.

Build one working iOS native home page (Expo-ready) for Mobile Taxi app. Display static mock taxi categories (Luxe, Economy, Green, Van) with pricing and vehicle images. Include location input fields (pickup/dropoff), category selector, and Book Now CTA. No backend calls; all data hardcoded or from local JSON fixture. Public page—no auth wall, anonymous browse only.

Visual structure in scope: navigation header with app logo, photographic hero banner (taxi/city scene), location input section, category grid (4 cards: Luxe/Economy/Green/Van with mock images + price/capacity), Book Now button, footer with app info. First viewport: hero + location inputs + top 2 categories visible without scroll.

Given: User opens app on iOS device (Simulator or physical).
When: Home page loads.
Then: (1) Hero image and app branding render; (2) location input fields (From/To) are interactive; (3) four category cards display with mock data (name, icon, price, capacity); (4) Book Now button is tappable; (5) no API calls fire; (6) page responds to device orientation (portrait primary).

Requires: none

## Scope
In scope: the primary landing / hero and the named user flow on this card.
Out of scope: other pages, payment processors, admin consoles, and work this ticket does not name.

Labels: vpods-generated
## Rules
- Read `.vpods/FRONTEND_AGENT.md` (frontend), `.vpods/MAYA_AGENT.md` (iOS), `.vpods/PROJECT.md`, `.vpods/CRAFT_*.md` (packed craft grammar including `CRAFT_UX.md` / `CRAFT_MOTION.md` / `CRAFT_IOS.md` when present), `.vpods/DESIGN_PACK.md` when present, and Brand Kit when present before writing code.
- Stay on this ticket's lane. Do not rewrite sibling hire pages/APIs unless required for integration.
- Ship a complete artifact for this shape — not a stub.
- If the brief is genuinely ambiguous, ask exactly one intake question before writing code (waiting-on-answer). After generation starts, do not stop mid-execution to ask.
- Frontend: replicate attached mockups under `public/design-refs/` (composition, photography, bands). Labels on the mockup are direction, not a copy deck.
