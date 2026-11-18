---
name: MauzLagi Precision Gourmet
colors:
  surface: '#f9f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f9f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f5'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e4'
  on-surface: '#1a1c1d'
  on-surface-variant: '#4f4633'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f0f2'
  outline: '#817660'
  outline-variant: '#d3c5ac'
  surface-tint: '#785a00'
  primary: '#785a00'
  on-primary: '#ffffff'
  primary-container: '#eab308'
  on-primary-container: '#604700'
  inverse-primary: '#f7be1d'
  secondary: '#5f5e60'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfe1'
  on-secondary-container: '#636264'
  tertiary: '#5e5e63'
  on-tertiary: '#ffffff'
  tertiary-container: '#bbbbc0'
  on-tertiary-container: '#4a4b4f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdf9a'
  primary-fixed-dim: '#f7be1d'
  on-primary-fixed: '#251a00'
  on-primary-fixed-variant: '#5a4300'
  secondary-fixed: '#e4e2e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1b1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#e3e2e7'
  tertiary-fixed-dim: '#c7c6cb'
  on-tertiary-fixed: '#1a1b1f'
  on-tertiary-fixed-variant: '#46464b'
  background: '#f9f9fb'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e4'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.035em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 19px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 25px
    letterSpacing: -0.011em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.009em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: -0.004em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.006em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The brand balances culinary craftsmanship with the engineering discipline of premium consumer hardware. Designed for epicurean snackers and design-conscious urban consumers, the interface communicates purity, crisp tactile freshness, and effortless utility. The emotional response is calm, confident, and immediately appetizing without relying on loud promotional clutter.

The aesthetic follows an ultra-refined, Human Interface-inspired minimalism. The workspace is pristine and deliberate, featuring generous negative space, continuous curvature, studio-lit gourmet photography, micro-fine structural hairlines, and liquid-smooth frosted glass sheets. Physicality is expressed through soft ambient shadows and haptic-feel tactile affordances, while warm ripe banana gold is introduced with surgical restraint to punctuate core actions and active states.

## Colors

The palette operates on strict chromatic economy to preserve visual calm and amplify food imagery.

- **Canvas & Backing (`#F5F5F7`)**: The foundational off-white ground. Provides warmth and eliminates clinical sterile glare while remaining distinctly neutral.
- **Card & Sheet Surfaces (`#FFFFFF`)**: Pure white containers elevated subtly from the canvas to delineate content groupings.
- **Translucent Overlays (`rgba(255, 255, 255, 0.8)`)**: Used exclusively for floating docks, navigation bars, and sheet headers with backdrop blur.
- **Primary Accent (`#EAB308`)**: The signature ripe banana yellow. Reserved strictly for conversion actions, active segmented indicators, interactive toggles, and premium badge fills. Never applied broadly to large decorative surfaces.
- **Text & High-Contrast Anchors (`#1D1D1F`)**: Deep obsidian for headlines, body copy, and high-priority glyphs. Delivers crisp legibility without the harshness of pure black.
- **Muted Labeling (`#86868B`)**: Neutral slate used for metadata, captions, secondary specs, empty states, and inactive icons.
- **Structural Dividers (`rgba(0, 0, 0, 0.06)`)**: 1px micro-borders providing edge definition across light fields.

## Typography

Typography establishes an architectural cadence between expressive contemporary geometry and rigorous utilitarian clarity.

- **Headlines (`Plus Jakarta Sans`)**: Configured with optical negative letter-spacing (`-0.015em` to `-0.035em`) and strict proportional line-heights. Headlines should be styled with confident hierarchy, keeping title wraps short and rhythmic.
- **Body & Controls (`Inter`)**: Engineered for effortless legibility across dense ingredient listings, nutritional metrics, and operational interfaces. Small labels and badges switch to higher tracking (`+0.02em` to `+0.04em`) to maintain definition at compact sizes.
- **Emoji Policy**: The design system strictly prohibits unicode emoji icons. Expressive context must be delivered via precise monochrome vector glyphs or isolated studio product photography.

## Layout & Spacing

The interface uses a 12-column responsive fluid grid on desktop and tablet, collapsing to a single-column 4-grid unit on mobile.

- **Breakpoints**: Mobile (`< 768px`), Tablet (`768px – 1024px`), Desktop (`> 1024px` with max-width content container pegged at `1280px`).
- **Margins & Gutters**: Outer canvas margins enforce an airy border frame (`2rem` desktop, `1.25rem` mobile). Element columns maintain consistent `1.5rem` gutters (`1rem` mobile) ensuring structured white space between modules.
- **Vertical Spacing Rhythm**: Content groups follow an 8-point base spatial rhythm. Related text elements stack using `space-xs` to `space-sm`, component interiors utilize `space-md` to `space-lg`, and primary structural sections deploy `space-xl` for uninterrupted visual flow.

## Elevation & Depth

Visual hierarchy uses frosted glassmorphism paired with layered multi-stop ambient shadows and hairline borders.

- **Base Layer (Canvas)**: Non-elevated flat field at `#F5F5F7`.
- **Card Tier**: Surface `#FFFFFF` encased with a continuous 1px outline of `rgba(0, 0, 0, 0.06)` and illuminated with a dual shadow:
  - `0 1px 2px rgba(0, 0, 0, 0.03), 0 8px 24px rgba(0, 0, 0, 0.04)`
- **Floating Overlays & Docks**: Translucent layers built with `background: rgba(255, 255, 255, 0.8)` complemented by `backdrop-filter: blur(20px) saturate(180%)`. Outlined with a top-weighted highlight border `rgba(255, 255, 255, 0.6)` and grounded by an ambient cast of `0 12px 32px rgba(0, 0, 0, 0.08)`.
- **Active Sheet / Modal**: Elevated container featuring a deep ambient spread:
  - `0 24px 48px -12px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1)`

## Shapes

The shape vocabulary applies pill-shaped geometry and organic continuous curvature (squircle profile) to evoke tactile smoothness.

- **Pills & Complete Rounds (`9999px`)**: Standard for all interaction nodes, including primary CTA buttons, search pills, nutritional tag chips, quantity selectors, and segmented control thumbs.
- **Standard Surfaces & Panels (`rounded-xl` / 3rem equivalent on desktop, scaled to 1.5rem–2rem on mobile cards)**: Expressive corner radii that soften card boundaries while preserving internal content alignment.
- **Inner Nested Elements**: Strict concentric curve alignment—nested inner containers scale down their radius relative to their parent container minus the intervening padding.

## Components

### Buttons
- **Primary**: Full pill shape (`rounded-full`), `#EAB308` background, `#1D1D1F` high-weight label (`label-md`). Subtly dynamic: scales to `0.98` with a soft gold rim glow on active touch.
- **Secondary**: Translucent white backdrop (`rgba(255, 255, 255, 0.9)`), 1px border (`rgba(0, 0, 0, 0.08)`), obsidian text.
- **Ghost**: Zero-fill pill with obsidian or muted slate text, activating a subtle `rgba(0, 0, 0, 0.04)` fill on hover.

### Segmented Controls (iOS-Grade)
- Contained within an encased pill trough (`#E5E5EA` or `rgba(0, 0, 0, 0.05)`).
- The active sliding selector is a pure white pill with a crisp ambient drop shadow (`0 2px 6px rgba(0,0,0,0.1)`), gliding beneath black label typography.

### Chips & Badges
- Pill-form indicator chips. Active category filters take solid `#1D1D1F` with white text, or pale banana tint (`rgba(234, 179, 8, 0.15)`) with `#854D0E` text.
- Metadata & origin tags: minimal outline, `caption` typography, zero emojis.

### Lists
- Framed within continuous rounded white cards.
- Rows separated by inset 1px dividers (`rgba(0, 0, 0, 0.05)`) starting after the lead icon or thumbnail.
- Chevron indicators use fine 1.5px monochrome stroke weights.

### Checkboxes & Radio Controls
- Radio controls are micro-pill rings with a dynamic central dot that animates in with a quick ease-out curve.
- Checkboxes adopt continuous squircle curves (8px radius) with crisp pure-white checkmarks nested within a primary yellow active fill.

### Input Fields
- Enclosed pill or 16px soft-corner modules with an off-white baseline fill (`#FFFFFF` on canvas, `#F5F5F7` inside white cards).
- Zero heavy outer borders: 1px hairline border transitioning cleanly to a focused state marked by a 2px `#EAB308` ring.

### Product Presentation Cards
- Minimal pure-white canvas panels with edge-to-edge studio product imagery against floating soft shadows.
- Direct spatial separation between crisp item typography, gram weight badges, and pill-shaped quick-add interactions.