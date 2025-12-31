# Claude Code Prompt: Topo Gigio's Scrollytelling Adoption Page

## Project Overview

Build a **product-first, story-led single-page website** that tells the story of **Topo Gigio**, a 10-year-old male Standard Grey chinchilla (born 2 December 2015) who is looking for a new forever home. The page should use a **scrollytelling pattern** where scrolling reveals each section in sequence, with **sticky visuals that stay anchored** while the narrative text evolves beside or below them.

## Design Philosophy

This isn't a typical pet listing—it's a premium product page for a living companion. Think Apple product page meets heartfelt animal rescue. The goal is to:

1. **Tell Topo's story** in a way that emotionally connects with potential adopters
2. **Educate** about chinchilla care requirements so only serious adopters inquire
3. **Convert** the right person to submit an expression of interest

## Technical Requirements

### Core Scrollytelling Mechanic

Implement a **scroll-triggered reveal system** where:

- **Hero section** displays Topo's name and tagline with a full-bleed chinchilla portrait
- As the user scrolls, a **sticky image/visual** remains pinned to one side (on desktop) or stays in view (on mobile) while text content scrolls past it
- Each major section has its own anchored visual that transitions smoothly as the user progresses
- Use CSS `position: sticky` or JavaScript-based scroll detection (Intersection Observer) to trigger transitions
- Consider using a library like GSAP ScrollTrigger, Locomotive Scroll, or vanilla JS for scroll-based animations

### Responsive Design

- **Mobile-first**: The primary experience is vertical scrolling with full-width sections
- **Desktop**: Use a split-layout where visuals stick to one side (e.g., left 50%) while content scrolls on the other side
- Breakpoints: 640px (sm), 768px (md), 1024px (lg)

### Tech Stack

- HTML5 + TailwindCSS (via CDN is fine: `https://cdn.tailwindcss.com`)
- Vanilla JavaScript for scroll interactions (or GSAP if preferred)
- Google Fonts: Inter (weights: 300, 400, 500, 600, 700, 800, 900)
- Material Symbols Outlined for icons
- No framework required—single HTML file is acceptable

### Color Palette

```javascript
{
  "primary": "#ec6d13",        // Warm orange (CTA buttons, accents)
  "background-light": "#f8f7f6", // Off-white page background
  "background-dark": "#221810",  // Dark brown for dark mode
  "text-dark": "#181411",        // Near-black for light mode text
  "text-light": "#f8f7f6",       // Off-white for dark mode text
  "accent-brown": "#897261",     // Muted brown for secondary text
  "surface-light": "#ffffff",    // Card backgrounds
  "surface-dark": "#2d2118"      // Dark mode card backgrounds
}
```

---

## Content Sections (Story Flow)

### 1. HERO: Introduction

**Sticky Visual:** Full-bleed portrait of Topo Gigio, soft grey chinchilla looking at camera

**Content:**

- Name: **TOPO GIGIO** (large, bold typography)
- Tagline: **"Curious. Cheeky. Entirely his own."**
- Subtitle: "Meet Topo Gigio — a gentle, intelligent chinchilla with a strong sense of curiosity, a playful streak, and a life shaped by trust, space, and attentive care."
- Primary CTA: **"Meet Topo"** button with scroll hint "(Scroll to learn his story)"

**Key Stats** (visually understated — small type, generous spacing):

| Age | Sex | Weight | Location |
|-----|-----|--------|----------|
| 10 years (born 2 December 2015) | Male | ~750g | Wellington, New Zealand |

**Biography:**

> Topo Gigio has lived a calm, carefully considered life.
>
> Raised from a young age in a stable home environment, he has always had space to explore, time to observe, and the freedom to engage on his own terms.
>
> He is confident without being demanding, affectionate without being needy, and deeply curious about the world around him. He enjoys human company, communicates clearly, and forms bonds built on familiarity and trust rather than routine handling.
>
> This page exists to introduce Topo as he is — his personality, his history, and the kind of environment in which he thrives.

---

### 2. TIMELINE: Topo's Journey

**Sticky Visual:** Changes with each timeline milestone

**Section intro:**
- Title: "Topo's Journey"
- Subtitle: "From a shy kit to a beloved companion. A look back at the moments that shaped his personality."

**Timeline Events:**

1. **January 2020 – "A Star is Born"**
   - Image: Baby chinchilla looking curious
   - "Topo entered the world with big ears and an even bigger heart. His early days were spent snuggling with his siblings and learning the basics of being a chinchilla."

2. **June 2021 – "Discovering Dust Baths"**
   - Image: Chinchilla rolling in dust bath (can include a play icon overlay)
   - "It didn't take long for Topo to discover his favorite activity. The spin-dry cycle! He loves a good roll in volcanic ash to keep his coat dense and healthy."

3. **December 2022 – "Making Friends"**
   - Image: Chinchilla sniffing a human hand
   - "Socialization is key. Topo learned that humans bring treats (mostly dried rose hips) and gentle chin scratches. He's curious, gentle, and rarely bites."

4. **Today – "Ready for a Forever Home"** (highlighted as current)
   - Image: Adult portrait of Topo sitting calmly
   - "Topo is now a fully grown, healthy male looking for a quiet home with plenty of ledges to jump on. He is potty trained and loves evening playtime."

---

### 3. PERSONALITY: Temperament & Preferences

**Sticky Visual:** Close-up portrait showing Topo's expressive features

**Traits Grid** (3 columns):
- 🧠 Smart
- 🌙 Nocturnal
- 🤫 Quiet

**Personality Scales** (slider-style visualization):

| Spectrum | Position | Note |
|----------|----------|------|
| Independent ←→ Affectionate | 75% toward Affectionate | "Loves chin scratches but values personal space." |
| Couch Potato ←→ Zoomies | 85% toward Zoomies | "Active at dusk and dawn with high bursts of energy." |

**Preferences Cards:**

**❤️ Loves:**
- ✅ Dust baths – The highlight of his day, every day
- ✅ Apple sticks – A crunchy snack he can carry around
- ✅ Free roam – Exploring the living room (supervised)

**👎 Loathes:**
- ❌ Loud noises – Sudden bangs or shouting startle him
- ❌ Humidity – Prefers cool, dry environments below 70°F
- ❌ Plastic – Not safe for chewing, so keep it away!

**Foster Quote Block:**
> "Topo isn't just a pet, he's a tiny roommate. He greets me every evening by standing on his hind legs, waiting for his chin scratch tax."
> — **Sarah J.**, Current Foster Mom

**Adoption Note (warning banner):**
> ⚠️ Chinchillas can live 15-20 years. At 10 years old, Topo still has many healthy years ahead — this is still a meaningful, long-term commitment requiring a cool, climate-controlled home.

---

### 4. ENVIRONMENT: Habitat Requirements

**Sticky Visual:** Multi-level cage setup or environmental shots

**Section intro:**
- Title: "The Ideal Habitat"
- Subtitle: "A chinchilla's environment is the key to their longevity. Topo needs a cool, spacious sanctuary to thrive physically and mentally."

**Critical Stats:**
| Requirement | Value | Note |
|-------------|-------|------|
| Temperature | 60-70°F | 🔴 Critical Requirement |
| Cage Height | 4ft+ | Minimum Vertical Space |

**Housing Essentials:**
1. **Chin Spin Wheel** – Must be at least 15" diameter to protect their spine. Metal or wood only.
2. **Wooden Ledges** – Staggered placement to encourage jumping. Kiln-dried pine is safest.
3. **Hiding Spots** – Fleece hammocks or wooden houses for daytime sleeping privacy.

**Material Safety Guide** (two-column):

| ✅ Safe | ❌ Unsafe |
|---------|----------|
| Kiln-dried Pine | Plastic (Any kind) |
| Apple Wood | Wire Mesh Floors |
| Anti-pill Fleece | Cardboard (Ingestion) |
| Metal (Non-galvanized) | Cedar / Fresh Pine |

**Image Gallery (horizontal scroll on mobile):**
- Multi-Level Layout – "Focus on vertical height"
- Dust Bath Station – "Designated cleaning area"
- Enrichment – "Safe chewing materials"

---

### 5. CARE ROUTINE: Daily Rituals

**Sticky Visual:** Soft texture shot of chinchilla fur or daily activity image

**Section intro:**
- Title: "A day in the life of Topo"
- Subtitle: "Consistent care is key to a happy chin. Here is what his daily schedule looks like to ensure he stays healthy and social."

**Daily Schedule (timeline format):**

| Time | Activity | Tags | Description |
|------|----------|------|-------------|
| 7:00 AM | Morning Refresh | Quick, Essential | Top up Timothy hay and check water bottle. Quick visual health check. |
| 6:00 PM | Dinner & Dust | Moderate, Hygiene | 1/4 cup of pellets. 15-minute dust bath to keep his coat clean and oil-free. |
| 8:00 PM | Playtime & Bonding | Social, High Effort | Safe roaming time in a chin-proofed area. This is the best time for bonding. |

**Handling Guide (accordion/expandable):**

1. **The Scoop Method**
   - "Topo feels safest when his feet are supported. Place one hand under his chest and scoop his hind legs with the other."
   - ⚠️ "Always support his weight fully. Do not dangle."

2. **Approach & Trust**
   - "Chinchillas are prey animals. Always approach from the side, never from directly above, which simulates a bird of prey."

3. **⚠️ Critical Warnings** (red-themed)
   - **Never grab the tail:** This can cause a "fur slip" or serious spinal injury.
   - **Ribs are floating:** Squeezing too hard can break them. Gentle hands only.

---

### 6. EXPRESSION OF INTEREST: Adoption Form

**Sticky Visual:** Circular portrait of Topo with a soft glow effect

**Section intro:**
- Title: "Ready to meet Topo?"
- Subtitle: "If you believe your home is the sanctuary Topo needs, please share a little about yourself below."
- Badge: "5-10 more years of companionship"

**Form Fields:**
1. **Your Name** (text input)
2. **Email Address** (email input)
3. **Why are you the right match?** (textarea)
   - Helper text: "Please mention if you have other pets or children."
4. **Checkbox:** "I understand this is a long-term commitment."
   - Subtext: "We carefully review every submission to ensure the perfect match."
5. **Submit Button:** "Send Expression of Interest"

**Secondary Links:**
- "Read Adoption FAQ"

**Footer:**
- Paw icon + "Topo & Current Guardians"

---

## Scrollytelling Implementation Notes

### Desktop Layout (≥1024px)
```
┌─────────────────────────────────────────────┐
│  [Sticky Visual - 50%]  │  [Scrolling Text] │
│                         │                   │
│   Image stays fixed     │   Content scrolls │
│   as user scrolls       │   revealing story │
│                         │                   │
└─────────────────────────────────────────────┘
```

### Mobile Layout (<1024px)
```
┌─────────────────────┐
│  [Hero Image]       │
│                     │
├─────────────────────┤
│  [Content Block 1]  │
│                     │
├─────────────────────┤
│  [Inline Image]     │
│                     │
├─────────────────────┤
│  [Content Block 2]  │
│                     │
└─────────────────────┘
```

### Scroll Trigger Behavior

1. **Section Entry:** When a section enters the viewport, its associated image fades/slides into the sticky container
2. **Progress Indicator:** Optional subtle progress bar or dot navigation on the side
3. **Smooth Transitions:** Use `opacity`, `transform`, and `clip-path` for image transitions
4. **Performance:** Use `will-change: transform` sparingly, prefer CSS-only solutions where possible

### Example Scroll Implementation (Vanilla JS)

```javascript
const sections = document.querySelectorAll('.story-section');
const stickyImage = document.querySelector('.sticky-image');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const newImage = entry.target.dataset.image;
      stickyImage.src = newImage;
      stickyImage.classList.add('fade-in');
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
```

---

## Image Assets

Use placeholder images from the example files or source appropriate chinchilla imagery. Key images needed:

1. Hero portrait (full-bleed, high-quality)
2. Baby chinchilla (timeline)
3. Dust bath action shot (timeline)
4. Human interaction shot (timeline)
5. Adult portrait (timeline + personality)
6. Cage/environment setup photos (3+)
7. Texture/fur close-up (care routine)
8. Circular avatar for form section

---

## Final CTA

Every major section should have a secondary way to progress or express interest. The sticky footer or floating action button with "Inquire to Adopt" should be visible after scrolling past the hero section.

---

## Deliverables

1. Single `index.html` file with embedded CSS/JS (or separate files if preferred)
2. Mobile-responsive scrollytelling experience
3. Smooth scroll-triggered image transitions
4. Dark mode support (optional but appreciated)
5. Accessible (proper heading hierarchy, alt text, focus states)

---

## Tone & Voice

- **Warm but sophisticated** – This isn't baby talk; it's appreciating Topo as a unique individual
- **Informative but not clinical** – Care requirements are presented as features, not barriers
- **Gently characterful** – Let Topo's personality shine through observation and detail
- **Honest about commitment** – Even at 10, Topo has years ahead; this is still a significant commitment

---

Build this page to make someone fall in love with Topo Gigio and understand exactly what adopting him means. Good luck!
