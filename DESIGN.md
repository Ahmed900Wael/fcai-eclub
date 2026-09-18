---
name: Nebula Forge
colors:
  surface: '#111412'
  surface-dim: '#111412'
  surface-bright: '#373a37'
  surface-container-lowest: '#0c0f0d'
  surface-container-low: '#1a1c1a'
  surface-container: '#1e201e'
  surface-container-high: '#282b28'
  surface-container-highest: '#333533'
  on-surface: '#e2e3df'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#e2e3df'
  inverse-on-surface: '#2f312e'
  outline: '#87929a'
  outline-variant: '#3d484f'
  surface-tint: '#79d1ff'
  primary: '#98d9ff'
  on-primary: '#003549'
  primary-container: '#2cc2ff'
  on-primary-container: '#004c68'
  inverse-primary: '#006689'
  secondary: '#bac8dc'
  on-secondary: '#243141'
  secondary-container: '#3a4859'
  on-secondary-container: '#a8b6ca'
  tertiary: '#c6d1ec'
  on-tertiary: '#263046'
  tertiary-container: '#aab5d0'
  on-tertiary-container: '#3c475d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3e8ff'
  primary-fixed-dim: '#79d1ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c68'
  secondary-fixed: '#d6e4f9'
  secondary-fixed-dim: '#bac8dc'
  on-secondary-fixed: '#0f1c2c'
  on-secondary-fixed-variant: '#3a4859'
  tertiary-fixed: '#d7e2ff'
  tertiary-fixed-dim: '#bbc6e2'
  on-tertiary-fixed: '#101b30'
  on-tertiary-fixed-variant: '#3c475d'
  background: '#111412'
  on-background: '#e2e3df'
  surface-variant: '#333533'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 80px
---

## Brand & Style

The brand personality is **visionary, technical, and high-velocity**. It is designed for a community of entrepreneurs and engineers who are building the future. The UI evokes a sense of "mission control"—an interface that feels advanced yet highly functional.

The aesthetic leans into **Glassmorphism** mixed with **Corporate Modern** precision. It utilizes deep, immersive backgrounds paired with luminous, translucent surfaces. The design creates a "looking through the cockpit" experience, where content floats over a deep technical void, signifying the limitless potential of the FCAI E-club.

Key visual pillars:
- **Atmospheric Depth:** Layered transparency and background blurs.
- **Luminous Accents:** Cyan glows that mimic hardware LEDs.
- **Precision Engineering:** Sharp typography and perfectly aligned geometric structures.

## Colors

The palette is rooted in the deep space of the logo, utilizing a dark-first approach to maximize the "high-tech" feel.

- **Primary (Electric Cyan):** Used for calls to action, active states, and focal points. It represents innovation and the "spark" of an idea.
- **Secondary (Deep Space Blue):** The primary background color. It provides a stable, professional foundation.
- **Tertiary (Atmospheric Blue):** Used for surface containers, cards, and navigation bars to provide subtle separation from the background.
- **Neutral (Titanium White):** Used strictly for high-contrast typography and iconography to ensure legibility against dark backgrounds.
- **Functional Accents:** Success and error states should utilize neon-tinted variations of green and red, maintaining the high-saturation futuristic aesthetic.

## Typography

Typography balances the bold confidence of **Montserrat** for branding and headlines with the clinical precision of **Hanken Grotesk** for long-form reading.

- **Display & Headlines:** Set in Montserrat with tight letter-spacing for a modern, impactful look. Headlines should frequently use "Sentence case" to feel approachable yet professional.
- **Body Text:** Hanken Grotesk provides a sharp, contemporary feel that is highly legible even at small sizes on technical dashboards.
- **Technical Labels:** JetBrains Mono is used for metadata, timestamps, and "system" information (like member IDs or event tags) to reinforce the high-tech, developer-adjacent theme.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a maximum content width of 1440px. 

- **Grid System:** A 12-column grid for desktop, 8-column for tablet, and 4-column for mobile.
- **Rhythm:** Spacing is based on a 4px/8px incremental scale. Generous vertical spacing (lg and xl) is encouraged between major sections to allow the glassmorphic elements "room to breathe."
- **Margins:** Desktop utilizes wide margins (80px) to center the focus on content, while mobile scales down to 16px to maximize screen real estate for functional elements.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Luminous Borders** rather than traditional heavy shadows.

- **Level 0 (Floor):** The base background, #0D1B2A.
- **Level 1 (Surfaces):** Cards and sections use #1B263B with a 60% opacity and a 20px backdrop blur.
- **Level 2 (Active Elements):** Modals and popovers use a slightly lighter blue with a 1px inner border of 20% white to simulate a "beveled glass" edge.
- **The Glow:** High-priority elements (like the primary button or active slider thumb) feature a 0px 0px 15px cyan glow (`rgba(44, 194, 255, 0.4)`) to simulate light emission.

## Shapes

The design uses a **Soft** shape language to balance the "sharp" typography.

- **Standard Elements:** Buttons, input fields, and small tags use a `0.25rem` (4px) radius. This maintains a technical, "industrial" feel.
- **Containers:** Large cards and member cards use `rounded-lg` (8px) to feel more contained and structured.
- **Avatars:** Member avatars should be perfect circles to provide a soft contrast to the otherwise geometric and linear interface.

## Components

### Buttons
- **Primary:** Solid Cyan (#2CC2FF) with dark text. Includes a subtle outer glow on hover.
- **Secondary:** Transparent background with a 1px Cyan border and Cyan text.
- **Ghost:** No border, Cyan or White text, used for low-priority actions.

### Member Cards
- **Structure:** Vertical layout with a circular avatar at the top. 
- **Style:** Glassmorphic background (Level 1 elevation). Use JetBrains Mono for the "Role" tag (e.g., SOFTWARE ENGINEER) in all caps.
- **Interaction:** On hover, the 1px border brightens from subtle blue to full Cyan.

### Timelines (Roadmaps)
- **Line:** A 2px vertical or horizontal line in #1B263B.
- **Nodes:** Hollow circles that fill with Cyan when a milestone is "Complete."
- **Typography:** Dates should use `label-sm` (JetBrains Mono) for a technical log feel.

### Sliders (Range Inputs)
- **Track:** A dark navy bar with a 1px border.
- **Filled Track:** Solid Cyan gradient.
- **Thumb:** A white circle with a Cyan glow. 

### Input Fields
- **Background:** Darker than the surface level (#0D1B2A).
- **Border:** Bottom-only border for a "terminal" feel, or a full 1px subtle border that turns Cyan on focus.
- **Text:** White for input, Atmospheric Blue for placeholders.