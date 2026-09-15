# Components Guide

- `HomePage.tsx`: homepage composition inside `.home-page`, which controls the 600px maximum width, outer padding, and vertical centering. Its `<main className="home-page-content">` groups the page sections, followed by the contact footer.
- `HomeHero.tsx`: homepage intro, typing animation, utility controls, and short about copy.
- `mode-toggle.tsx`: shared light/dark theme control.
- `theme-provider.tsx` and `theme-context.ts`: persistent theme state.
- `SectionHeading.tsx`: shared heading, optional description, and expand/collapse control.
- `RouteSeo.tsx`: route-aware browser metadata updates from `src/data/seoRoutes.json`.
- `ExperienceSection.tsx`: primary and expandable Experience entries.
- `ExpandableSection.tsx`: shared first-entry preview and accessible See more/See less panel; `.section-list` sets the same gap within the panel as the gap above it.
- `ProjectPage.tsx`: reusable project case-study route.
- `EducationSection.tsx` and `AwardsSection.tsx`: retained for later use; intentionally hidden on the homepage.
- `SkillsSection.tsx`: all six categories share `SkillRow`, a heading and wrapping list of icons and labels. Mobile stacks the heading above the list; desktop uses a 140px heading column.
- `ContactSection.tsx`: closing footer message.
- `RevealOnScroll.tsx`: reusable one-time IntersectionObserver reveal helper.

Most visual layout changes belong in the matching section component or `src/index.css`.
Typography uses the shared Geist Light font at weight 300, with 15px headings/body text and 14px section controls.
Mobile homepage padding stays at 32px vertically and 24px horizontally. Skills use 12px heading-to-list and item row gaps, 24px item column gaps, and 24px between categories. Keep these rules shared across categories.
Most content edits belong in the matching data file under `src/data`.
Most route title and meta description edits belong in `src/data/seoRoutes.json`.
Project image dimensions and media types live in `src/data/imageMetadata.json`, shared by project image markup, route metadata, and generated HTML. Add metadata there when adding project images.
Page-load, scroll-reveal, reduced-motion, and expand/collapse animation styles live in `src/index.css`.

## Markup and class names

Each route owns one `<main>` element. Use `<section>` for a named content section, `<header>` for introductory content, and `<footer>` for the closing message.

CSS class names use lowercase words separated by hyphens, with the component name first: `home-page`, `hero-header`, `hero-title`, and `hero-description`. Give styled elements explicit class names instead of targeting generic children such as `> div`.

The hero uses a 16px gap below its header and above the contact button. Update matching class names in both the component and `src/index.css`, including responsive rules.
