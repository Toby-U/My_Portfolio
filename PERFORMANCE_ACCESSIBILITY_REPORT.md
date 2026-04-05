# Performance and Accessibility Report

## Scope
Review target for portfolio redesign in React + Vite.

## Performance Checklist

- Critical above-the-fold content in hero is plain HTML/CSS (fast first paint).
- Navigation and section content avoid heavy JS dependencies.
- Images in project cards are lazy-loaded (`loading="lazy"`).
- Transitions are short and lightweight (opacity/transform).
- No long-running animations or parallax effects.
- Component structure is simple and static for rapid render.

Recommended next checks before release:
- Compress all image assets in public folder (portrait + project images) to WebP/AVIF where possible.
- Confirm total image weight under mobile budget.
- Run Lighthouse in mobile + 3G simulation and verify LCP/CLS.

## Accessibility Checklist

Implemented:
- Semantic sectioning and headings.
- Keyboard focus states using `:focus-visible`.
- Visible CTA buttons and links on mobile and desktop.
- Form labels associated with controls.
- Accessible progressbar roles for proficiency bars.
- Reduced-motion fallback for motion-sensitive users.

Manual validation to run:
- Verify all color pairs meet WCAG AA contrast.
- Test tab order from header through footer.
- Confirm screen-reader announcements for links and form errors.

## Lighthouse Target

Acceptance target:
- Accessibility score >= 90

How to verify:
1. Run production build.
2. Serve built app locally.
3. Run Lighthouse mobile profile.

## 5-Second Recruiter Scan Validation

Content visible immediately in hero:
- Name
- Role
- One-line outcome-focused summary
- Three badges (CS Student, Full-Stack, ML)
- Primary CTA (View Resume)
- Secondary CTA (Contact)

This satisfies fast-scan requirements for recruiter review.
