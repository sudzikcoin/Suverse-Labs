# SuVerse Labs Design Guidelines

## Design Approach
**System-Based Approach** inspired by enterprise SaaS leaders (Stripe, Linear, Vercel) with sustainability-conscious visual language. This creates a professional, trustworthy foundation appropriate for investor/partner audiences while maintaining modern tech innovation aesthetics.

## Core Design Principles
1. **Credibility First**: Clean, structured layouts that convey technical sophistication
2. **Sustainability Signal**: Visual language that subtly reinforces green/eco themes without being heavy-handed
3. **Data Clarity**: Information hierarchy optimized for complex technical concepts
4. **Professional Restraint**: Sophisticated without being flashy

---

## Typography System

**Font Family**: Inter (via Google Fonts CDN)
- Headings: Inter, weights 700 (bold) and 600 (semibold)
- Body: Inter, weights 400 (regular) and 500 (medium)
- Code/technical: Inter, weight 500

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Page Title: text-4xl md:text-5xl, font-bold
- Section Heading: text-3xl md:text-4xl, font-semibold
- Card Title: text-xl md:text-2xl, font-semibold
- Body Large: text-lg
- Body Default: text-base
- Body Small: text-sm
- Caption: text-xs

**Line Heights**: leading-tight for headings, leading-relaxed for body text

---

## Layout System

**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-6 to p-8
- Section vertical spacing: py-16 md:py-24 lg:py-32
- Card gaps: gap-6 or gap-8
- Element margins: mb-4, mb-6, mb-8

**Container Strategy**:
- Page wrapper: max-w-7xl mx-auto px-6 md:px-8
- Content-focused sections: max-w-4xl mx-auto
- Full-width sections: w-full with inner containers

**Grid Patterns**:
- Project cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Value propositions: grid-cols-1 md:grid-cols-3
- News posts: grid-cols-1 md:grid-cols-2

---

## Component Library

### Navigation Bar
- Fixed top, backdrop-blur effect with dark background (bg-black/80)
- Height: h-16 md:h-20
- Logo left, navigation links center/right
- Subtle bottom border (border-b border-white/10)
- Hover states: text color shift to accent blue/green

### Hero Section (Homepage)
- Height: min-h-[600px] md:min-h-[700px]
- Centered content with max-w-4xl
- Gradient background overlay (subtle radial gradient from deep blue to black)
- CTA buttons with glass-morphism effect (backdrop-blur, bg-white/10 border border-white/20)
- Small badge/label above headline showing "AI · Blockchain · Green Logistics"

### Project Cards
- Dark card background (bg-slate-900/50)
- Rounded corners: rounded-xl
- Padding: p-6 md:p-8
- Hover effect: subtle scale and glow (transform, shadow)
- Tag pills for categories (rounded-full px-3 py-1 text-xs)
- "Learn more" link with arrow icon

### Value Proposition Cards (3-column)
- Equal height cards with icon/visual at top
- Clean divider lines between sections
- Icon size: w-12 h-12 or w-16 h-16
- Consistent internal spacing

### Forms (Contact Page)
- Dark input fields (bg-slate-900 border border-slate-700)
- Focus states with accent blue glow
- Label above input, text-sm font-medium
- Input padding: px-4 py-3
- Textarea min-height: min-h-[150px]
- Submit button: full-width on mobile, auto on desktop

### News/Blog Cards
- Horizontal layout on desktop (image left, content right)
- Vertical stack on mobile
- Date badge in top-left or top of content
- Excerpt limited to 2-3 lines with ellipsis

### Footer
- Multi-column grid: grid-cols-1 md:grid-cols-4
- Columns: About, Quick Links, Projects, Contact
- Social icons in row
- Copyright and tagline at bottom
- Subtle top border separator

---

## Visual Elements

### Borders & Dividers
- Primary borders: border-slate-800 or border-white/10
- Section dividers: 1px solid with gradient fade-out at edges

### Shadows
- Cards: shadow-xl with subtle colored glow on hover
- Elevated elements: shadow-2xl
- No harsh drop shadows, always subtle and diffused

### Backgrounds
- Page background: Very dark gray (#0a0a0a to #111)
- Card backgrounds: Slightly lighter dark (bg-slate-900/50 or bg-slate-800/30)
- Gradient overlays: Subtle radial gradients using deep blue (#0f172a) to black

### Icons
- Use Heroicons (outline style for general UI, solid for emphasis)
- Icon size in cards: w-6 h-6 or w-8 h-8
- Accent color for icons in feature sections

---

## Images

**Hero Image**: Yes - Large hero image showing modern data center, sustainable infrastructure, or abstract tech/network visualization with dark tones. Full-width background with overlay gradient (dark blue/green to black, opacity 60-80%).

**Additional Images**:
1. **About Page**: Team/office photo or abstract technology workspace (medium size, rounded corners)
2. **Founder Page**: Professional headshot (square or circular, 300x300px area)
3. **Project Pages**: Dashboard screenshots, UI mockups, or conceptual diagrams showing each product
4. **Sustainability Page**: Clean energy/green logistics imagery (trucks, solar panels, data visualization)
5. **Technology Page**: Abstract network visualization or architecture diagram

**Image Treatment**: All images should have subtle rounded corners (rounded-lg or rounded-xl), and when used as backgrounds, apply dark overlays for text legibility.

---

## Animation & Interactions

**Minimal, Purposeful Motion**:
- Hover states: Subtle scale (scale-105) and opacity changes
- Page transitions: Fade-in on scroll for section reveals (intersection observer)
- Card hovers: Slight lift with shadow increase
- Button hovers: Background opacity shift, no dramatic effects
- NO: Parallax scrolling, excessive animations, auto-playing carousels

**Transitions**: Use `transition-all duration-300 ease-in-out` for smooth, professional feel

---

## Accessibility

- All interactive elements have visible focus rings (ring-2 ring-blue-500)
- Minimum contrast ratio 4.5:1 for body text, 3:1 for large text
- Semantic HTML structure (header, nav, main, section, footer)
- Alt text for all images
- Form labels properly associated with inputs
- Skip-to-content link for keyboard users

---

## Page-Specific Notes

**Homepage**: 5-6 sections total (Hero, Value Props, Featured Projects, Impact Teaser, Partners Logo Strip, CTA/Contact)

**Projects Overview**: Grid layout with filtering capability visual (tabs or pills for "All", "AI", "Blockchain", "Green Logistics")

**Individual Project Pages**: Consistent template - Hero section with project name, Problem/Solution/Technology/Impact sections in alternating layouts

**News Page**: Blog-style grid with featured post at top (larger card)

**Contact Page**: Split layout - Form on left (2/3 width), contact info/map placeholder on right (1/3 width) on desktop