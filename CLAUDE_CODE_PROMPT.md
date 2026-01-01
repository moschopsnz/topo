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

### 2. TIMELINE: Topo Gigio's Story

**Sticky Visual:** Changes with each timeline milestone (photos noted per event)

**Section intro:**
- Title: "Topo Gigio's Story"
- No subtitle needed — the timeline speaks for itself

**Timeline Events:**

1. **2015 — Born**
   - Photos: early litter / baby shots, if available
   - "Topo Gigio was born on 2 December 2015 in Wellington, New Zealand, to experienced chinchilla owners. From the start, he was healthy, alert, and well cared for during his early weeks with his mother."

2. **2016 — A New Home**
   - Photos: first days, early cage setup, small-scale play
   - "On 18 February 2016, Topo moved into his long-term home in Miramar. He was given space, consistency, and time to settle — learning routines, voices, and the rhythms of daily life."
   - "This was also when his name settled naturally: Topo Gigio."

3. **2017–2018 — Learning the World**
   - Photos: playtime, climbing, interaction
   - "As he grew, Topo became confident and exploratory. Rooms were carefully chinchilla-proofed, and supervised free-roaming became part of his normal routine."
   - "During this period, he learned trust — how to approach people, how to communicate boundaries, and how to engage safely."

4. **2019 — A Lesson in Curiosity**
   - Photos: optional; can be text-only if preferred
   - "At around two years old, Topo had his first true learning moment: an unexpected encounter with water during supervised play."
   - "Handled immediately and calmly, he recovered fully — and quickly learned that swimming was not for him."

5. **2020 — Confidence & Independence**
   - Photos: confident poses, relaxed posture
   - "By his fourth year, Topo was fully at ease in his environment. He navigated spaces confidently, explored independently, and chose when to interact."
   - "His personality became unmistakable: curious, cheeky, and observant — often waiting until the room was empty before testing boundaries."

6. **2021–2022 — Climate & Care**
   - Photos: custom cage, cooling setup, summer environment
   - "As environments changed, Topo's setup evolved with him. A custom, climate-controlled living space was built to ensure safe temperatures year-round, including cooling during warmer months — reinforcing the principle that his comfort always came first."

7. **2023 — Trust & Routine**
   - Photos: interaction, chin scratches, relaxed moments
   - "Daily rhythms became deeply familiar. Topo enjoyed structured affection, voice recognition, and gentle handling — always on his terms."
   - "He remained healthy, injury-free, and emotionally expressive, clearly communicating comfort, curiosity, and the occasional complaint."

8. **2024 — Fully Himself**
   - Photos: everyday life, candid moments
   - "At nine years old, Topo was settled, self-assured, and deeply bonded to his environment. Unfazed by everyday household noise and confident in his space, he continued to explore, observe, and engage with quiet intelligence."

9. **2025 — A Milestone Year**
   - Photos: recent portraits, quiet moments
   - "Topo turned 10 years old in December 2025 — healthy, alert, and unchanged in spirit."
   - "With a major relocation approaching, careful planning began to ensure his next chapter would offer the same quality of life he had always known."

10. **2026 — Ready for What's Next** (highlighted as current)
    - Photos: present-day, calm and composed
    - "This page now exists to help guide Topo into his next home — thoughtfully, responsibly, and with continuity at its heart."
    - "The goal is not change, but care carried forward."

---

### 3. PERSONALITY: Temperament & Communication

**Sticky Visual:** Close-up portrait showing Topo's expressive features; additional photos of interaction moments

---

**Overview:**

> Topo Gigio has a distinct, expressive personality shaped by trust, familiarity, and choice.
>
> He is curious, emotionally aware, and communicative — affectionate on his own terms and confident enough to set boundaries when something doesn't feel right. He is not aggressive or demanding, but he is deeply responsive to people who understand him.

---

**Temperament at a Glance** (visual trait list):

- **Curious & observant** — mirrors human attention and interest
- **Affectionate (self-directed)** — seeks contact when he wants it
- **Cheeky & self-aware** — understands when he's testing limits
- **Sensitive but resilient** — startles easily, recovers quickly
- **Highly communicative** — clear vocal and physical signals
- **Trust-based** — calm and gentle with those he knows

---

**How He Relates to People:**

Topo enjoys human company and is comfortable with close physical presence. He will climb onto shoulders, walk across arms or legs, investigate faces, and gently touch noses — behaviours that indicate trust rather than dependency.

He prefers clear, confident handling. Firm, deliberate strokes feel more reassuring to him than light, uncertain touches, and he settles quickly when he feels physically secure.

**He is particularly fond of:**
- Chin and ear scratches
- Gentle head strokes
- Belly rubs during playtime

*Affection is always initiated by him. Like a cat, he chooses when to engage — and that choice matters.*

---

**Communication & Vocalisation:**

Topo is expressive, though generally quiet.

**He uses:**
- **Soft nibbling** (never biting) as a sign of trust and comfort
- **Short barks or warning sounds** to communicate boundaries or mild annoyance
- **Occasional vocal "singing"** — rare, enthusiastic bursts of sound that appear to be exploratory or playful rather than distress-related

These vocal moments are uncommon (noticed only every few months) and often occur when he seems relaxed and content — as though rediscovering his own voice.

*Understanding these signals is key: what may seem alarming to unfamiliar owners is, in practice, clear and non-aggressive communication.*

---

**Early Attachment & Emotional Awareness:**

From his earliest days, Topo showed a strong capacity for emotional connection.

On his first night away from his mother, he became unsettled and vocalised loudly — settling immediately when held and comforted. Physical closeness and calm voice were enough to reassure him, and he quickly learned that he was safe.

That early need for reassurance has evolved into a secure, confident temperament rather than ongoing anxiety. He is independent, but emotionally aware and responsive.

---

**Sensitivity & Confidence:**

Topo is naturally wary of sudden noises or unfamiliar events, as most chinchillas are. When startled, he will retreat briefly — then return quickly once he understands the situation is safe.

He is notably unfazed by everyday household sounds, including vacuuming and movement, and is confident navigating familiar environments.

---

**Social Suitability:**

Topo is gentle, non-biting, and tolerant, including around calm, supervised children.

**His wellbeing depends on:**
- Respect for his signals
- Secure handling
- An environment that allows him choice and retreat

*He thrives with people who understand chinchilla behaviour and appreciate communication over constant interaction.*

---

### 4. ENVIRONMENT: Ideal Home & Habitat

**Sticky Visual:** Photos of Topo's actual living space, cage setup, free-roaming area

---

**Overview:**

> Topo Gigio thrives in an environment designed around space, safety, and calm.
>
> He has always lived with generous room to move, explore, and rest — both inside and outside his cage — and his wellbeing is closely tied to having a predictable, chinchilla-safe space where he can act naturally without constant restriction.

---

**Space & Freedom:**

Topo is accustomed to significantly more space than is typical for a chinchilla.

Over the years, his usable area has ranged from approximately **8–20 m²**, depending on the home and season. His current setup provides around **8 m² of safe, open floor space**, with his cage positioned within that area rather than acting as his sole enclosure.

**Key principles:**
- His cage door is often left open, allowing him to move in and out freely
- The cage functions as his private, elevated sleeping space
- Free movement is only possible because the room is deliberately chinchilla-proofed

*He prefers sleeping up high, where he can look down on his surroundings — a natural behaviour that has remained consistent throughout his life.*

---

**Flooring & Surfaces:**

Topo has lived primarily on carpeted flooring, which has proven safer for him than loose or peelable materials.

- Carpet reduces the risk of ingestion if chewed
- Edges are kept out of reach where possible
- Solid flooring is preferred over wire or grid floors

**Cage floors are always solid, not mesh.** While mesh floors can be easier to clean, solid surfaces significantly reduce the risk of foot injury and long-term discomfort.

---

**Walls, Barriers & Safety:**

Topo is an active jumper and enjoys bouncing off solid surfaces during play.

**For this reason:**
- Hard walls are safer than cage-style barriers
- Grid or wire fencing poses a risk to feet and limbs
- Any barriers used must be secure, smooth, and escape-resistant

*The guiding rule has always been to reduce injury risk before convenience, especially if he is left alone in the space.*

---

**Enrichment & Objects:**

Topo does not require constant toys, but he values purposeful, familiar items.

**He particularly enjoys:**
- Cardboard tubes (appropriately sized and replaced as he grew)
- Objects he can move, enter, and climb through
- Dedicated chew materials provided both inside and outside his cage

*His environment prioritises open movement over clutter.*

---

**Dust Bath:**

Topo has continuous access to a dust bath in his room.

- Dust is refreshed regularly (approximately weekly)
- Bathing is self-regulated rather than restricted
- He uses it when he feels the need, not on a schedule

*This has been his routine for many years and works well for him.*

---

**Light, Noise & Rest:**

Topo sleeps during the daytime and is accustomed to a quiet, dim environment.

- Blackout blinds are used to reduce daytime light
- His room is kept calm while he rests
- He tolerates household noise when necessary, but his normal routine is quiet

*This mirrors natural chinchilla rhythms and supports good rest.*

---

**Temperature & Climate** (⚠️ Critical):

Temperature control is the **most important environmental requirement**.

Topo has always lived in a carefully managed climate:

| Condition | Range |
|-----------|-------|
| **Ideal range** | ~14–18 °C |
| **Caution zone** | Above ~20 °C |
| **Heat risk** | Genuine health danger — chinchillas cannot sweat |

**Safeguards used:**
- Dehumidifier running continuously
- Active monitoring with temperature sensors
- Alerts when temperatures rise
- Air conditioning used during hot periods when needed

*Warm days require active observation, not passive trust.*

---

**The Ideal Home:**

Topo is best suited to a home that can offer:

- ✓ Prior chinchilla experience
- ✓ A dedicated, chinchilla-proofed space
- ✓ Solid flooring and safe wall surfaces
- ✓ Reliable temperature control
- ✓ Respect for his need for independence and choice

*This section isn't about luxury — it's about continuity.*

---

### 5. CARE ROUTINE: Nutrition, Water & Bedding

**Sticky Visual:** Photos of food setup, hay, water station, bedding materials

---

**Overview:**

> Topo Gigio's diet and daily care have been built around consistency, quality, and digestive safety.
>
> His routine prioritises natural fibre, controlled variety, and fresh preparation — with food, water, and bedding refreshed every single day.

---

**Core Diet:**

Topo's primary diet combines a high-quality commercial chinchilla feed with carefully selected natural plant matter.

**Fortified Base:**
- **Science Selective – Balanced Chinchilla Food**
- Purchased from Animates
- Forms the nutritional foundation and ensures balanced vitamins and minerals

---

**Natural Plant Foods (Organic):**

In addition to his base diet, Topo receives a rotating mix of organic dried plants and flowers, selected for safety and variety.

**Ordered from iHerb:**
- Organic red clover blossoms
- Cut & sifted hibiscus flowers
- Whole hawthorn berries
- Cut & sifted rosehips
- Whole chamomile flowers
- Calendula flowers
- Cut & sifted dandelion leaf
- Cut & sifted red raspberry leaf

*These are offered in measured quantities, not as free-feed items, and provide enrichment as well as dietary interest.*

---

**Favourite Treat: Whole Oats**

Topo's favourite food is whole oats, sourced from **Quality Bird and Pet Supplies** (Top Flight brand).

**He enjoys:**
- Holding the oats in his paws
- Opening the husks himself
- Eating the grain and discarding the husk

*This food is offered sparingly and deliberately — more as engagement than indulgence.*

---

**Hay (Daily, Unlimited Access):**

Topo always has access to **lucerne hay**, which forms the bulk of his fibre intake.

- Purchased in bulk from **Appletons** (50-litre boxes)
- Replenished daily
- Chosen for both quality and practicality

*Hay is available at all times.*

---

**Water:**

Fresh water is provided daily.

- For most of his life, Topo received bottled spring water
- He now receives filtered tap water, using a household filtration system
- Water containers are cleaned and refilled every day

---

**Bedding:**

Topo's bedding is changed daily, without exception.

- **Kiln-dried pine shavings** are used
- Purchased in bulk from **Bunnings** (19 kg bags)
- Chosen for absorbency, cleanliness, and consistency

*This forms part of his daily hygiene routine and keeps his sleeping area dry and comfortable.*

---

**Daily Care Commitment:**

Topo's care involves a non-negotiable daily routine, including:

- ✓ Refreshing food
- ✓ Replacing water
- ✓ Replenishing hay
- ✓ Changing bedding
- ✓ Basic visual health checks

*This routine has been maintained consistently over many years.*

---

**Treats: Used Sparingly, With Intention**

Topo Gigio does not receive routine treats.

Because his daily diet already includes a wide variety of high-quality foods, he naturally treats some of his regular items — particularly whole oats — as rewards in their own right. This helps maintain healthy eating habits and prevents selective feeding.

*Sweet foods are intentionally limited.*

---

**Why Treats Are Restricted:**

Like many chinchillas, Topo has a clear preference for sweet foods. If offered too frequently, he will:

- Begin ignoring his regular meals
- Hold out for sweet items
- Disrupt his digestive balance

Rather than negotiating with this behaviour, treats are managed carefully and predictably.

*If sweet foods are reduced or removed entirely, he reliably returns to normal eating within a few days. Consistency matters more than indulgence.*

---

**When Treats Are Given:**

Treats are reserved for specific, infrequent occasions, such as:

- Birthdays or seasonal events (e.g. Christmas)
- Reuniting after time away
- Calm introductions to new people

**In social settings, treats serve a practical purpose:**
- Helping wake him gently during daytime rest
- Allowing visitors to interact positively
- Enabling safe, gentle hand-feeding experiences

*This is as much about human education and reassurance as it is about Topo himself.*

---

**Preferred Treat: Goji Berries**

When treats are offered, **goji berries** are used exclusively.

**Reasons for this choice:**
- Lower moisture content than raisins or cranberries
- Less stickiness on fur and hands
- Easy for him to hold and eat
- Longer shelf life when refrigerated

Goji berries are stored separately (in the fridge) to:
- Reduce temptation
- Reinforce that treats are not part of daily feeding
- Maintain clear boundaries in routine

---

**Treats Previously Tried (and Avoided):**

Earlier in life, raisins and cranberries were used occasionally. While Topo enjoyed them, they were discontinued due to:

- High sugar concentration
- Sticky residue on fur
- Less predictable portion control

*Over time, goji berries proved the most manageable and least disruptive option.*

---

**Guiding Principle:**

> Treats are never used to compensate for routine, boredom, or guilt.

Topo's long-term health has benefited from:
- Controlled sweetness
- Predictable meals
- Clear limits
- Consistent care

*This approach keeps him engaged, healthy, and content — without dependency or dietary conflict.*

---

**Why This Section Matters:**

This isn't about being strict — it's about protecting digestive health and long-term behaviour.

**Topo thrives when:**
- Food remains familiar
- Sweet items remain special
- Appetite is stable
- Expectations are clear

---

### 5b. CARE ROUTINE: Daily Rhythm & Handling

**Sticky Visual:** Photos of evening routine, playtime, handling moments

---

**Overview:**

> Topo Gigio does best with a predictable rhythm: quiet daytime rest, followed by a consistent evening routine that includes fresh food, a clean environment, and calm social time.
>
> Routine is not about rigidity. It's about giving him a stable pattern he can rely on, so he can choose interaction confidently and rest without interruption.

---

**Daily Rhythm:**

**Daytime (Rest)**

Topo generally sleeps during the day. He may occasionally wake briefly for a drink or a short run, but his room is set up to support daytime rest:

- Low light (blackout blinds)
- Reduced noise where practical
- Minimal disruption unless necessary

*If visitors arrive during the day, he can be gently roused if needed, but his normal routine prioritises sleep.*

---

**Evening Wake-up (~7pm)**

Around 7pm, Topo's day begins.

**This is the "good morning" check-in:**
- Open the upper cage door (if closed overnight)
- Quick water check
- Open curtains / adjust airflow (weather-dependent)
- Calm greeting and a little conversation
- Gentle head / chin scratches if he wants them
- Room door left open so he can hear and observe the household

*This moment sets the tone: calm, familiar, and unhurried.*

---

**Late Evening Care & Play (10pm–11pm)**

Between 10pm and 11pm (sometimes a little later), the main care routine happens:

- Cage clean (as needed)
- Water refreshed
- Food replenished
- Hay topped up
- Bedding changed
- Quick visual health check

**After cleaning, Topo usually has his main social/play time:**
- Free movement in his chinchilla-proofed room
- Calm interaction, talking, gentle affection on his terms
- Extra time on weekends or Fridays when available

---

**Overnight**

Topo is active overnight. His door is often closed mainly for sound isolation (e.g., wheel running), and to keep the household routine consistent.

**A simple verbal "check" helps avoid mistakes before leaving him for the night:**
- Water ✅
- Food ✅
- Hay ✅

*This reduces the chance of a missed refill, especially in warm weather.*

---

**Where He Spends Time:**

Topo mostly stays in his own dedicated room. This is deliberate:

- The room is chinchilla-proofed
- It's safe for chewing behaviour
- It avoids household hazards (wires, plastics, furniture damage, etc.)

*Occasionally, he'll be carried for a brief "tour" of the house while being held securely — a way to satisfy curiosity without exposing him to risk.*

---

**Handling & Safety:**

**General Approach**

Topo is a delicate animal. Safe handling is built around two principles:

1. **Security** — he must feel stable and supported
2. **Gentleness** — firm enough to prevent falls, never squeezing

*He responds best to calm voice and confident movement. Silence and hesitation can make him uncertain.*

---

**How He Likes to Be Held:**

Topo is not typically a "pick-me-up" chinchilla anymore.

When younger, he was more willing to hop onto hands. Around age 4–5, he became more selective about being picked up.

**If he is picked up:**
- He needs a solid base under his feet
- He will adjust his hind feet to find balance
- Once stable, he settles and becomes calm

*He should never be carried in a way that encourages jumping down from height.*

---

**Shoes, Feet, and Movement:**

When in his play space:

- Shoes are avoided where possible
- Slow steps and constant awareness are essential

Chinchillas can sit very close to feet unexpectedly, and their bones are brittle. Socks/bare feet reduce risk and increase awareness.

*Shoelaces and shoe soles are also highly attractive chew targets.*

---

**Communication & Boundaries:**

**"Mouth as a tool" (not biting)**

Topo uses his front teeth as a way to move things, explore, or communicate.

A common example is feeding time:
- He may try to gently push or pull a hand away to reach the bowl
- This can look alarming to unfamiliar handlers, but it is not aggression
- He does not pierce skin and does not "bite" in the conventional sense

---

**When He's Not Happy:**

Topo communicates displeasure clearly and quickly:

- A bark/grunt-like warning sound
- A sharp, visible "don't do that" motion
- Short-lived irritation if boundaries are repeatedly ignored

**He particularly dislikes tail handling** (including accidental contact). If that happens, the right response is simple:
- Back off
- Give him space
- Allow a few minutes to reset

*He typically returns to normal quickly once respected.*

---

**Play Behaviour & Chewing:**

Topo loves chewing and will always investigate anything protruding, loose, or textured — especially:

- Clothing tags and labels
- Belt leather and belt ends
- Jeans patches (e.g. leather logo patches)

**This is normal chinchilla behaviour. It's best managed by:**
- Wearing "Topo-safe" clothes during play time
- Removing dangling labels
- Keeping tempting items out of reach where possible

---

**Practical Summary (for a new home):**

Topo thrives when:

- ✓ His evenings follow a predictable rhythm
- ✓ His space is safe enough for free movement
- ✓ Handling is confident and supportive
- ✓ His boundaries are respected
- ✓ He is allowed to initiate affection

*Routine + trust = a calm, bonded chinchilla.*

---

**⚠️ CRITICAL: Water (Bowl Only)**

Topo has always used a water bowl, not a bottle.

- He has never reliably taken to a water bottle
- Fresh water is provided daily
- Bowls are cleaned and refilled as part of his nightly routine

Because hydration is critical, introducing a bottle after ten years is not recommended. A familiar bowl ensures:
- Immediate access
- Predictable drinking behaviour
- No risk of dehydration due to unfamiliar equipment

**Any future home should continue using a water bowl.**

*This is a non-negotiable safety preference, not a convenience choice.*

---

**Sleeping & Resting Spots:**

Topo sleeps almost exclusively inside his enclosed house, positioned at the top of his cage.

- The space is shaded and secure
- It has a soft, fabric-style base (hammock-like)
- An external ledge allows him to rest with partial visibility if he chooses

**Approximately 90% of the time, he sleeps inside this house.**

Occasionally, he may nap on a ledge, but his default preference is enclosed, elevated rest.

**This setup supports:**
- Daytime sleep
- A sense of safety
- Natural chinchilla behaviour (height + cover)

**Any future setup should preserve:**
- ✓ Elevation
- ✓ Partial enclosure
- ✓ A soft resting surface

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
