# Commerce_ Homepage — Reproduction Guide

Reproduce the homepage of [commerce.framer.media](https://commerce.framer.media/) as a static page.

Reference screenshots are in `screenshots/` at three breakpoints: mobile (390px), tablet (810px), desktop (1440px).

---

## Stack

- **Vite** — dev server + build
- **Tailwind CSS v4** — styling via `@theme` CSS config (no `tailwind.config.js`)
- **Alpine.js** — lightweight interactivity (carousel, scroll-triggered nav)
- **No framework** — plain HTML

---

## Provided Assets

All assets are in `public/assets/`.

### Fonts (`assets/fonts/`)

Inter in woff2 format — weights 400, 500, 600, 700, 900 in normal and italic variants.

### Videos (`assets/videos/`)

| File                  | Usage                                     |
| --------------------- | ----------------------------------------- |
| `hero-background.mp4` | Autoplaying background behind hero text   |
| `hero-video.mp4`      | Autoplaying background in showcase section |

### Images (`assets/images/`)

| File                                    | Usage                                      |
| --------------------------------------- | ------------------------------------------ |
| `commerce-logo-wordmark.png`            | Logo in navigation bar                     |
| `favicon.png`                           | Browser tab icon                           |
| `shopping-bag-icon.svg`                 | Cart icon in nav (used as CSS mask)        |
| `og-share-image.jpeg`                   | Open Graph meta image                      |
| `product-retro-handheld-console.png`    | Product card — transparent PNG on purple   |
| `product-horizon-glow-sneakers.png`     | Product card — transparent PNG on purple   |
| `product-tropical-paradise-plant.png`   | Product card — transparent PNG on purple   |
| `collection-home.png`                   | Collection card — plant/decor imagery      |
| `collection-footwear.png`              | Collection card — sneaker imagery          |
| `collection-technology.png`             | Collection card — headphones imagery       |
| `testimonial-avatar-1.png`              | Headshot for testimonial 1                 |
| `testimonial-avatar-2.png`              | Headshot for testimonial 2                 |
| `testimonial-avatar-3.png`              | Headshot for testimonial 3                 |
| `blog-featured-digital-backgrounds.png` | Hero image for featured blog post          |
| `blog-author-sarah-miller.jpg`          | Author avatar for featured blog post       |
| `blog-post-social-media-templates.png`  | Blog card image                            |
| `blog-post-mockups-guide.png`           | Blog card image                            |
| `blog-post-mobile-friendly-store.png`   | Blog card image                            |

---

## Design Tokens

### Colors

**Brand purple scale** — use custom names (e.g. `brand-50`, `brand-100`, etc.) to avoid colliding with Tailwind's built-in color palette:

| Token     | Hex       | Where it appears                                                                         |
| --------- | --------- | ---------------------------------------------------------------------------------------- |
| brand-50  | `#F9F6FE` | Product card image backgrounds, hero fallback bg, feature card bg, testimonial card bg    |
| brand-100 | `#EDE4FC` | Footer bg, newsletter card bg, blog card image bg, category badges, decorative circles    |
| brand-150 | `#E5D9FB` | Hover state fills                                                                        |
| brand-200 | `#D2BBF7` | Decorative accents                                                                       |
| brand-300 | `#B690F0` | Decorative accents                                                                       |
| brand-400 | `#9B65E7` | Decorative accents                                                                       |
| brand-500 | `#8345D8` | Primary buttons, "Buy Template" nav button, hero accent word, play circle, feature icons |
| brand-600 | `#6F33BD` | Button hover states                                                                      |

**Neutrals:**

| Value                    | Where it appears                                                     |
| ------------------------ | -------------------------------------------------------------------- |
| `#FFFFFF`                | Page background, nav bar fill, footer logo box                       |
| `rgba(255,255,255,0.80)` | Nav glassmorphism background, blog card category badges              |
| `rgba(255,255,255,0.56)` | Hero "Powered by Shopify" badge background                           |
| `#000000`                | Headings, body text, nav links, icons                                |
| `rgba(0,0,0,0.56)`       | Secondary text — subtitles, prices, categories, footer links         |
| `rgba(0,0,0,0.20)`       | Marquee brand name text                                              |
| `rgba(0,0,0,0.12)`       | Input borders                                                        |
| `rgba(0,0,0,0.08)`       | Footer divider line                                                  |

### Typography

The entire site uses **Inter**. Key styles observed:

| Element                    | Size (desktop)  | Weight   | Other                                    |
| -------------------------- | --------------- | -------- | ---------------------------------------- |
| Hero heading               | ~72px           | Medium   | Tight letter-spacing (~-0.06em), "beautiful" in purple italic |
| Section headings           | ~56px           | Medium   | Tight letter-spacing                     |
| Collection overlay names   | ~56px           | Medium   | Tight letter-spacing                     |
| Video overlay heading      | ~56px           | Medium   | White, tight letter-spacing              |
| Testimonial quote          | ~32px           | Medium   | Tight letter-spacing                     |
| Card titles                | ~24px           | Medium   | Slight letter-spacing (~-0.04em)         |
| Feature card titles        | ~18px           | Medium   |                                          |
| Body / descriptions        | 16px            | Normal   | 150% line-height, 56% black opacity      |
| Nav links                  | 14px            | Medium   |                                          |
| Category badges            | 12px            | Medium   | Uppercase, wide letter-spacing (~0.04em) |
| Prices                     | 14px            | Normal   | 56% black opacity                        |
| Footer headings            | 14px            | Medium   | Uppercase                                |
| Footer links               | 14px            | Normal   | 56% black opacity                        |

Text sizes scale down on mobile — headings roughly halve, body stays ~16px.

### Spacing & Layout

- Page max-width: **1440px**, centered with auto margins
- Horizontal padding: ~24px (mobile), ~48px (tablet), ~64px (desktop)
- Sections separated by ~64px vertical padding
- Cards use **16px border-radius** everywhere
- Responsive grid: 1 col (mobile) → 2 col (tablet) → 3 col (desktop)

### Shadows

Cards and nav use a soft multi-layer shadow:
```
0px 0.6px 0.6px -1.25px rgba(0,0,0,0.18),
0px 2.3px 2.3px -2.5px rgba(0,0,0,0.16),
0px 10px 10px -3.75px rgba(0,0,0,0.06)
```

### Breakpoints

| Name    | Min-width | Notes            |
| ------- | --------- | ---------------- |
| tablet  | 810px     | 2-col grids      |
| desktop | 1200px    | 3-col grids, full layout |

---

## Page Sections (top to bottom)

Reference the screenshots in `screenshots/` for exact visual appearance at each breakpoint.

---

### 1. Navigation Bar

**Appearance:** Fixed to top of viewport. Floats ~12px below the browser edge inside a glassmorphic pill (white at 80% opacity + backdrop blur). Rounded corners (16px). Soft card shadow.

**Behavior:** Visible near the top of the page. Hides (fades up) when user scrolls down. Reappears when user scrolls back up.

**Contents (left to right):**
- Commerce_ wordmark logo image (~106px wide)
- Nav links (hidden on mobile): **Shop**, **Collections**, **Blog**, **Support**
- Search magnifying glass icon (hidden on mobile)
- Shopping bag icon (CSS mask of the SVG, filled black)
- **Buy Template** button: purple (brand-500) pill with bag icon + text (hidden on mobile)

---

### 2. Hero Section

**Appearance:** Full-width card (max 1440px) with 16px border-radius. Sits below the nav with ~80px top margin (space for fixed nav). Background is a looping muted video (`hero-background.mp4`) showing abstract purple/white fluid motion.

**Video treatment:** A progressive blur overlay covers the left portion — achieved with `backdrop-blur` masked by a left-to-right gradient (solid left, transparent right). This keeps the left side (where text sits) legible while the right side shows the raw video.

**Content (left-aligned, overlaid on video):**
1. **Badge:** Frosted glass pill — star icon + "Powered by Shopify"
2. **Heading:** "The **beautiful** way to sell anything with Framer." — The word "beautiful" is rendered in purple (brand-500) italic. The rest is black. Word-by-word reveal animation on scroll (each word fades in from blurred/below with a stagger delay).
3. **Subtitle:** "Designed with Framer, this template makes it easy to turn your website into a powerful ecommerce store." — muted text (56% black).
4. **CTA button:** "Shop Products" with right arrow icon. Purple (brand-500) pill, white text.

**Responsive:** Heading shrinks from ~72px (desktop) to ~36px (mobile). Padding reduces. Content stays left-aligned at all sizes.

---

### 3. Most Popular Products

**Header row:** Left side has the heading "Most Popular" and subtitle "Showcase your most popular products, front and center." Right side has a "View All →" text link (hidden on mobile).

**Grid:** 3 product cards (1-col mobile, 2-col tablet, 3-col desktop), 24px gap.

**Product card anatomy:**
- **Image container:** Square aspect ratio, light purple (brand-50) background, 16px border-radius. Product image is `object-contain` (transparent PNGs float within the purple box). Subtle scale-up on hover.
- **Decorative circle:** Light purple circle (brand-100, ~80-100px) positioned at the **bottom-left** corner of the image container, overlapping the edge. Contains a 45°-rotated arrow icon (↗ direction).
- **Text below image:** Product name (24px medium), category label (12px uppercase muted), price (14px muted).

**Product data:**

| Name                    | Category   | Price       |
| ----------------------- | ---------- | ----------- |
| Retro Handheld Console  | Technology | USD $59.99  |
| Horizon Glow Sneakers   | Footwear   | USD $129.99 |
| Tropical Paradise Plant | Home       | USD $34.99  |

---

### 4. Testimonials

**Appearance:** A large light purple (brand-50) card centered on the page. All content centered within.

**Navigation arrows:** Two small white circular buttons (shadow, ~36px) in the **top-right corner** of the card. Left/right arrows. Clicking cycles through testimonials.

**Content (vertically stacked, centered):**
1. **Avatar:** ~80px circle. Three avatars are stacked in the same position — only the active one is visible (crossfade on change, ~500ms).
2. **Quote text:** Large (~32px desktop), medium weight. Wraps to ~3 lines max.
3. **Star rating:** 5 filled black star icons in a row.
4. **Attribution:** Small muted text — name and role.

**Testimonial content:**

| Quote | Attribution |
| ----- | ----------- |
| "Showcase customer testimonials that build trust and inspire confidence in your products." | Marcus, Editor at WorkLife |
| "The checkout experience is incredibly smooth. My customers love how easy it is to browse and purchase products." | Sarah, Designer at Pixel Co |
| "Setting up my online store was a breeze. The templates are beautiful and customizable to match my brand perfectly." | Emily, Founder of Bloom Studio |

---

### 5. Brand Logos Marquee

**Appearance:** A horizontal ticker of brand name text scrolling continuously left-to-right. Both edges fade to transparent via a CSS mask gradient.

**Brand names (repeated twice for seamless loop):** amsterdam, vsco, monday, notion, linear, figma, webflow, stripe

**Style:** ~20px semibold text at 20% black opacity. ~64px gap between names. Scrolls via CSS `translateX(-50%)` animation, ~30s duration, linear, infinite.

---

### 6. Our Collections

**Header row:** Same pattern as Most Popular — "Our Collections" heading + subtitle on left, "View All →" link on right.

**Grid:** 3 collection cards (same responsive breakpoints as products), 24px gap.

**Collection card anatomy:**
- **Container:** Landscape aspect ratio (~1.4:1), light purple (brand-50) background, 16px border-radius, overflow hidden.
- **Collection image:** Positioned to the right side, takes up roughly 75% of the card width. `object-contain`, right-aligned. Scale-up on hover.
- **Collection name:** Large text (~56px desktop) positioned at the **bottom-left** of the card, overlaid on the background.
- **Decorative circle:** Light purple circle (brand-100, ~80-100px) at the **bottom-right** corner with a rotated arrow icon.

**Collection data:**

| Name       | Image shows          |
| ---------- | -------------------- |
| Home       | Plant/vase decor     |
| Footwear   | Colorful sneakers    |
| Technology | White headphones     |

---

### 7. Product Showcase Video

**Appearance:** Full-width card (max 1440px, 16px radius). Background is `hero-video.mp4` autoplaying, looped, muted, with reduced brightness (~80%). Tall section — roughly 400-500px of vertical space on desktop.

**Content (overlaid, left-aligned):**
- **Heading:** "Showcase your products in action and outline their benefits." in white, ~56px desktop. Word-by-word blur/fade reveal animation on scroll.

**Decorative:** A purple (brand-500) circle (~64px) in the bottom-right corner with a rotated white arrow icon.

---

### 8. Features

**Header:** Centered — "Highlight what makes you stand out" heading + "Use this section to show off the key features like these." subtitle.

**Grid:** 3 feature cards side-by-side (stacks on mobile). 24px gap.

**Feature card anatomy:**
- Light purple (brand-50) background, 16px radius, ~32px padding, centered text.
- **Icon:** Purple (brand-500) circle (~48px) with a white icon inside (download, shield, truck respectively).
- **Title:** ~18px medium weight.
- **Description:** ~14px muted text.

**Feature data:**

| Title                      | Icon    | Description                                                                    |
| -------------------------- | ------- | ------------------------------------------------------------------------------ |
| Curated Digital Downloads  | Download | Access a wide range of premium digital products, from templates to creative assets. |
| Premium Quality Materials  | Shield   | Every product is crafted with the highest quality standards to ensure customer satisfaction. |
| Fast & Secure Shipping     | Truck    | Reliable delivery with real-time tracking and secure packaging for every order. |

---

### 9. Blog ("Explore the Blog")

**Header row:** Same pattern — "Explore the Blog" heading + subtitle left, "View Posts →" link right.

#### Featured Card

Horizontal layout on desktop (image left, content right, ~500px tall). Stacks vertically on mobile.

- **Left half:** Full-bleed image (`blog-featured-digital-backgrounds.png`), `object-cover`.
- **Right half:** Padded content area with:
  - "Must Read" purple badge pill
  - Title: "10 Creative Ways to Use Digital Backgrounds in Your Projects"
  - Description paragraph (muted text)
  - Author row at bottom: 32px avatar circle + "Written by Sarah Miller" (medium) / "Graphic Designer" (muted)

#### Blog Post Grid

3 cards below the featured card (same responsive grid). 24px gap.

**Blog card anatomy:**
- **Image container:** ~1.5:1 aspect ratio, purple-100 background, 16px radius. Image is `object-cover` with hover scale-up.
- **Category badge:** Positioned top-left inside the image area. Frosted white pill (white at 80% + backdrop blur). Uppercase text.
- **Title below image:** ~24px medium weight.

**Blog post data:**

| Title                                                              | Category     | Image file                       |
| ------------------------------------------------------------------ | ------------ | -------------------------------- |
| How to Make Your Social Media Posts Stand Out with Templates       | Productivity | `blog-post-social-media-templates.png` |
| A Beginner's Guide to Creating Professional Mockups                | Design       | `blog-post-mockups-guide.png`    |
| Building a Mobile-Friendly Online Store That Converts              | Ecommerce    | `blog-post-mobile-friendly-store.png` |

---

### 10. Newsletter

**Appearance:** A large card with purple-100 background, 16px radius. Horizontal layout on desktop (text left, phone mockup right). Centers/stacks on mobile.

**Left side:**
- **Heading:** "Join our newsletter and get 20% off your first purchase with us." (~44px desktop, medium weight, tight tracking)
- **Form row:** Email text input (white bg, subtle border, rounded pill, placeholder "Enter your email") + "Join Now" purple pill button.

**Right side (desktop only):** A phone/device mockup placeholder — tall white rounded rectangle (~280x400px) with soft shadow. (No phone mockup image is provided in assets; use a placeholder.)

---

### 11. Footer

**Background:** Purple-100, full-width.

**Commerce_ logo:** The text "Commerce_" in a white box with a bottom-right border radius. This is plain text (not the logo image).

**Link grid:** 4 columns (2 on mobile):

| Shop         | Collections | Company   | Support        |
| ------------ | ----------- | --------- | -------------- |
| All Products | Home        | About Us  | Help Center    |
| New Arrivals | Footwear    | Blog      | Shipping       |
| Best Sellers | Technology  | Careers   | Returns        |
| Sale         | Accessories | Contact   | Privacy Policy |

Column headings are 14px uppercase medium. Links are 14px muted, darken on hover.

**Bottom bar:** Separated by a thin top border (8% black). Copyright text on the left ("© 2026 Commerce_. All rights reserved."). Social icons on the right (Twitter, Instagram, LinkedIn) — muted, darken on hover.

---

## Animations & Interactions

### Scroll Reveal
Every major section starts invisible (`opacity: 0`, translated ~48px down) and fades/slides up into view when it enters the viewport. One-shot — once revealed, stays visible. Use `IntersectionObserver`.

### Word-by-Word Text Reveal
The hero heading and video overlay heading animate word-by-word. Each word starts blurred (4px), slightly translated down (~10px), and at 0 opacity. Words reveal in sequence with ~80ms stagger. Triggered on scroll into view.

### Testimonial Carousel
Clicking left/right arrows cycles through 3 testimonials. The avatar crossfades (opacity transition ~500ms). Quote text and name update instantly.

### Nav Show/Hide
The navigation bar is visible near the top of the page. When the user scrolls down, it fades out and translates up. When the user scrolls back up, it reappears. Transition ~300ms.

### Hover Effects
- Product and blog card images scale up ~5% on hover (300ms transition)
- Nav links and footer links shift to muted color on hover
- Buttons darken on hover (brand-500 → brand-600)

### Video
Both videos (`hero-background.mp4` and `hero-video.mp4`) autoplay, loop, and are muted. They should have `playsinline` for mobile support.

### Marquee
The logo strip is duplicated so it loops seamlessly when translated by -50%. Can be done CSS-only (a `@keyframes` animation that translates the track) or with JS (requestAnimationFrame updating a transform). Both edges fade via CSS `mask-image` gradient.
