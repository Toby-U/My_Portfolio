# Portfolio Style Guide

## 1) Color Tokens

```css
:root {
  --brand-100: #e6f2f6;
  --brand-200: #d4e9ef;
  --brand-500: #2f6f88;
  --brand-600: #275c72;
  --brand-700: #1e495a;

  --accent-200: #d9ece6;
  --accent-500: #4b8a79;

  --surface-page: #f4f7f8;
  --surface-elevated: #ffffff;
  --surface-soft: #f1f5f6;

  --text-primary: #1f2f37;
  --text-secondary: #40535d;
  --text-tertiary: #6d8088;
  --text-on-brand: #f2f8fa;

  --border-subtle: #d7e2e5;
  --border-strong: #b8c7cc;
}
```

## 2) Typography

- Heading font: Space Grotesk (geometric sans)
- Body font: Manrope (neutral sans)

Scale:
- Hero H1: 2rem to 3.4rem (responsive clamp)
- Section H2: 1.6rem to 2.4rem
- Body: 1rem base
- Small labels/chips: 0.76rem to 0.9rem

## 3) Spacing Scale

- 0.3rem
- 0.45rem
- 0.6rem
- 0.8rem
- 1rem
- 1.25rem
- 1.6rem
- 2rem
- 3rem+

Section padding uses responsive clamp values for desktop/mobile balance.

## 4) Button System

Base class:
- .button

Variants:
- .button-primary
- .button-secondary

Behavior:
- Hover scale: 1.02
- Hover duration: 150ms to 180ms ease-out
- Strong visible focus ring using :focus-visible

## 5) Cards and Elevation

- Border radius: 0.8rem to 1rem
- Border: 1px solid tokenized borders
- Elevation:
  - Rest: --shadow-soft
  - Hover: --shadow-card-hover

## 6) Motion

Section reveal:
- .reveal-section -> .is-visible
- Fade + translateY
- Duration: 220ms
- Easing: ease-out

Micro-interactions:
- Buttons: scale 1.02
- Cards: translateY(-3px to -4px)

Reduced motion support:
- honors prefers-reduced-motion and disables non-essential transitions.

## 7) Focus States and Accessibility

Global keyboard focus:
```css
:focus-visible {
  outline: 3px solid color-mix(in oklab, var(--brand-500) 75%, white);
  outline-offset: 2px;
}
```

Guidelines:
- Keep text contrast high against light surfaces.
- Ensure links and CTAs have clear hover + focus visuals.
- Keep form controls with visible border and focus state.

## 8) Figma Handoff Notes

This workspace cannot generate a native .fig binary directly. For handoff:
- Import these tokens into your Figma variables.
- Recreate component set:
  - Header/Nav
  - Hero with portrait + badges
  - Skill cards + proficiency meter
  - Project card
  - Contact form + aside
  - Footer badges + social links
- Use the CSS values as source-of-truth for spacing, radii, type, and motion.
