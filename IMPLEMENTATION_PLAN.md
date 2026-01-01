# Topo Gigio Scrollytelling Site - Implementation Plan

## Overview

Build a premium, story-led single-page scrollytelling website for Topo Gigio's adoption page. The site uses scroll-triggered visual transitions with a split-layout on desktop and vertical flow on mobile.

---

## File Structure

```
/home/user/topo/
├── index.html          # Main HTML structure
├── styles.css          # Custom CSS (supplements Tailwind)
├── script.js           # Scroll interactions & form handling
├── assets/             # Image assets folder (for future real photos)
│   └── .gitkeep
├── CLAUDE_CODE_PROMPT.md
├── IMPLEMENTATION_PLAN.md
└── example_page/       # Reference designs (keep for reference)
```

---

## Technical Approach

### 1. Core Technologies
- **HTML5** - Semantic structure with proper heading hierarchy
- **TailwindCSS via CDN** - Primary styling (with forms plugin)
- **Custom CSS** (`styles.css`) - Scrollytelling mechanics, animations, sticky behavior
- **Vanilla JavaScript** (`script.js`) - IntersectionObserver for scroll triggers, form handling
- **Google Fonts** - Inter (300, 400, 500, 600, 700, 800, 900)
- **Material Symbols Outlined** - Icons

### 2. Scrollytelling Mechanics

**Desktop (≥1024px):**
```
┌─────────────────────────────────────────────────┐
│  [Sticky Visual - 50%]  │  [Scrolling Content]  │
│                         │                       │
│   Image transitions     │   Text sections       │
│   as sections scroll    │   scroll past         │
└─────────────────────────────────────────────────┘
```

**Mobile (<1024px):**
- Full-width sections stacked vertically
- Images appear inline before their content
- No sticky behavior (performance)

### 3. Image Configuration

All images centralized in `script.js` as a config object:

```javascript
const IMAGES = {
  hero: {
    main: "https://...",
    alt: "Portrait of Topo Gigio..."
  },
  timeline: {
    2015: { src: "...", alt: "Baby Topo..." },
    2016: { src: "...", alt: "..." },
    // ... all timeline images
  },
  personality: {
    portrait: { src: "...", alt: "..." },
    interaction: { src: "...", alt: "..." }
  },
  environment: {
    cage: { src: "...", alt: "..." },
    room: { src: "...", alt: "..." }
  },
  care: {
    food: { src: "...", alt: "..." },
    routine: { src: "...", alt: "..." }
  },
  form: {
    avatar: { src: "...", alt: "..." }
  }
};
```

### 4. Form Implementation

```javascript
const FORM_CONFIG = {
  endpoint: null,  // Set to Formspree URL when ready, e.g. "https://formspree.io/f/xxxxx"
  mailto: "topo@example.com",  // Fallback mailto address
  subject: "Expression of Interest - Topo Gigio Adoption"
};
```

**Form behavior:**
- On submit: Validate fields → Generate formatted message
- Display modal with:
  - Formatted message preview
  - "Copy to Clipboard" button
  - "Open in Email App" button (mailto: link)
- Easy migration: When `FORM_CONFIG.endpoint` is set, switch to fetch POST

---

## Implementation Phases

### Phase 1: Project Setup
- [ ] Create folder structure (`/assets/`)
- [ ] Create `index.html` with base HTML structure, head elements, font/icon imports
- [ ] Create `styles.css` with CSS custom properties, base styles
- [ ] Create `script.js` with image config object and form config

### Phase 2: Hero Section
- [ ] Full-bleed hero with Topo's portrait
- [ ] Name (TOPO GIGIO), tagline, subtitle
- [ ] Key stats strip (Age, Sex, Weight, Location)
- [ ] Biography text
- [ ] "Meet Topo" CTA with scroll hint
- [ ] Scroll indicator animation

### Phase 3: Timeline Section
- [ ] Section header ("Topo Gigio's Story")
- [ ] 10 timeline events (2015-2026)
- [ ] Visual timeline with connecting line
- [ ] Current year (2026) highlighted
- [ ] Desktop: Sticky image that changes per milestone
- [ ] Mobile: Inline images per event

### Phase 4: Personality Section
- [ ] Overview quote block
- [ ] "Temperament at a Glance" trait list with icons
- [ ] "How He Relates to People" subsection
- [ ] "Communication & Vocalisation" subsection
- [ ] "Early Attachment & Emotional Awareness" subsection
- [ ] "Sensitivity & Confidence" subsection
- [ ] "Social Suitability" subsection

### Phase 5: Environment Section
- [ ] Overview quote block
- [ ] "Space & Freedom" subsection
- [ ] "Flooring & Surfaces" subsection
- [ ] "Walls, Barriers & Safety" subsection
- [ ] "Enrichment & Objects" subsection
- [ ] "Dust Bath" subsection
- [ ] "Light, Noise & Rest" subsection
- [ ] "Temperature & Climate" (critical warning styling)
- [ ] "The Ideal Home" checklist

### Phase 6: Care Routine Section (5a + 5b)

**5a - Nutrition, Water & Bedding:**
- [ ] Overview quote
- [ ] Core Diet (Science Selective)
- [ ] Natural Plant Foods list
- [ ] Favourite Treat (Whole Oats)
- [ ] Hay details
- [ ] Water details
- [ ] Bedding details
- [ ] Daily Care Commitment checklist
- [ ] Treats subsection (discipline, when given, goji berries)
- [ ] Guiding Principle quote

**5b - Daily Rhythm & Handling:**
- [ ] Overview quote
- [ ] Daily Rhythm (Daytime, Evening wake-up, Late evening, Overnight)
- [ ] Where He Spends Time
- [ ] Handling & Safety guidelines
- [ ] Communication & Boundaries
- [ ] Play Behaviour & Chewing
- [ ] Water (Bowl Only) - critical warning
- [ ] Sleeping & Resting Spots

### Phase 7: Expression of Interest Section
- [ ] Overview intro text
- [ ] "What Matters Most" section
- [ ] "Environment & Lifestyle Expectations" checklist
- [ ] "Other Pets" warning
- [ ] "Time, Commitment & Cost" section
- [ ] "Location & Transition" section
- [ ] "Keeping His Name" note
- [ ] "A Supportive Hand-Over" section
- [ ] Form UI with all fields:
  - Name, Email, Experience, Current/past pets, Space/setup, Temperature control, Daily routine, Location, Questions
- [ ] Disclaimer note
- [ ] Submit button
- [ ] Form submission modal (copy + mailto)

### Phase 8: Scrollytelling JavaScript
- [ ] IntersectionObserver setup for section detection
- [ ] Desktop sticky image container
- [ ] Image transition animations (fade/slide)
- [ ] Section-to-image mapping
- [ ] Smooth scroll behavior

### Phase 9: Responsive Layout
- [ ] Mobile-first base styles
- [ ] Desktop split-layout (≥1024px)
- [ ] Tablet adjustments (768px-1023px)
- [ ] Touch-friendly interactions

### Phase 10: Polish & Accessibility
- [ ] Proper heading hierarchy (h1 → h2 → h3...)
- [ ] Alt text for all images
- [ ] Focus states for interactive elements
- [ ] Reduced motion media query
- [ ] Semantic HTML (section, article, nav, etc.)
- [ ] Meta tags (description, og:tags)

### Phase 11: Final Review
- [ ] Test scroll behavior on desktop
- [ ] Test mobile layout
- [ ] Test form copy/mailto functionality
- [ ] Validate HTML
- [ ] Check color contrast
- [ ] Commit and push to branch

---

## Color Palette (from spec)

```css
:root {
  --primary: #ec6d13;           /* Warm orange - CTAs, accents */
  --background-light: #f8f7f6;  /* Off-white page background */
  --background-dark: #221810;   /* Dark brown (for reference) */
  --text-dark: #181411;         /* Near-black text */
  --text-light: #f8f7f6;        /* Light text (for dark backgrounds) */
  --accent-brown: #897261;      /* Muted brown - secondary text */
  --surface-light: #ffffff;     /* Card backgrounds */
  --surface-dark: #2d2118;      /* Dark mode cards (for reference) */
}
```

---

## Key Design Principles

1. **Premium product page feel** - Apple-inspired, not a typical pet listing
2. **Story-led** - Emotional narrative that unfolds as user scrolls
3. **Educational** - Care requirements presented as features, not barriers
4. **Conversion-focused** - Guide the right person to express interest
5. **Content density** - The spec is content-heavy; prioritize readability with generous whitespace
6. **Responsive** - Works beautifully on mobile and desktop

---

## Questions Resolved

| Question | Answer |
|----------|--------|
| Images | Placeholder URLs from examples, centralized in config |
| Form | mailto: with copy/email buttons, swappable to Formspree |
| Dark mode toggle | No |
| Progress indicator | No |
| Floating CTA | No |
| Output format | Separate files + /assets/ folder |

---

## Estimated Deliverables

1. `index.html` - Complete semantic HTML structure (~800-1000 lines)
2. `styles.css` - Custom styles for scrollytelling, animations (~200-300 lines)
3. `script.js` - Image config, scroll observer, form handling (~300-400 lines)
4. `/assets/.gitkeep` - Placeholder for future image assets

---

## Ready to Proceed?

This plan covers all sections from the CLAUDE_CODE_PROMPT.md specification. Once approved, I'll implement in the order shown above, committing progress incrementally.
