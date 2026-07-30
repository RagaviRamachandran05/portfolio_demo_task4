# Personal Portfolio Website

**Prodigy Infotech — Task 04**

A personal portfolio website for Ragavi, a MERN Stack Developer, built with plain HTML, CSS, and JavaScript. It showcases skills, projects, education, and goals in a single-page, scroll-based layout.

## Live features

- **Fixed navigation bar** — stays pinned to the top; switches from transparent to a solid, blurred background once the user scrolls past 40px
- **Hero section** — captivating headline, short intro, and an avatar placeholder (swap in a real photo)
- **Signature learning-path strip** — an animated SVG path that draws itself in on load, with milestones (Schooling → Certifications → Internship → Projects → Next Stop) that light up as they scroll into view, using the `IntersectionObserver` API
- **About Me** — detailed background, education, CGPA, schooling percentage, and a quick-facts card
- **Skills section** — technical and soft skills displayed as hoverable chips, grouped by category
- **Projects section** — two real projects (Personalized Learning Path Generator, SkillSwap), each with the problem it solves, a description, and the tech stack used
- **Goals section** — short-term and long-term career goals as their own dedicated section
- **Contact form** — client-side validation for name, email, and message fields, with inline feedback
- **Mobile menu** — a hamburger icon toggles a slide-down nav on small screens
- **Fully responsive** — adapts down to mobile widths (tested at 900px and 640px breakpoints)

## File structure

```
ragavi-portfolio/
├── index.html   → page structure (nav, hero, about, skills, projects, goals, contact)
├── style.css    → styling, theming, layout, and responsive rules
├── script.js    → nav scroll behavior, path animation, mobile menu, form validation
└── README.md    → this file
```

## How to run it

No build steps or installs needed.

1. Keep all three files (`index.html`, `style.css`, `script.js`) in the same folder.
2. Double-click `index.html` or open it in any browser.

## Customizing it further

- **Photo** — replace the circular "R" avatar in the hero with a real photo by swapping the `.avatar` div for an `<img>` tag.
- **Colors** — all theme colors live at the top of `style.css` inside the `:root { ... }` block. Change the hex values there to update the whole site's color scheme at once.
- **Contact form** — currently front-end only (validates input but doesn't send anywhere). Connecting it to a service like Formspree or a custom backend would make it fully functional.
- **Resume download** — a "Download resume" button can be added to the hero by linking an `<a href="resume.pdf" download>` tag to an uploaded PDF.

## Tech used

- **HTML5** — semantic structure throughout (`<header>`, `<nav>`, `<section>`, `<footer>`)
- **CSS3** — custom properties for theming, CSS Grid and Flexbox for layout, media queries for responsiveness
- **Vanilla JavaScript** — no frameworks or libraries; handles scroll detection, the `IntersectionObserver`-driven path animation, mobile menu toggling, and form validation
- **Google Fonts** — Space Grotesk (headings), Inter (body text), IBM Plex Mono (labels/tags)
