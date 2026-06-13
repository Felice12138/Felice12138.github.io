# Stitch Prompt — Personal Website Prototype for "Felice"

## Overview

Design a **personal portfolio website** prototype for a creator named **Felice**. The site serves two purposes: showcasing creative works and providing contact information. The overall aesthetic fuses **medieval manuscript calligraphy** with **modern web design**, using gothic fantasy imagery and classical oil-painting references as the primary visual language. Do **not** include any real photographs or character portrait images in the prototype — use placeholder shapes or decorative frames instead.

---

## Site Structure — 4 Pages

### 1. Home Page (`/`)

**Layout:**
- Fixed navigation bar in the **top-right corner** of the screen. Nav links: `Home` · `About` · `Contact` · `Works`
- The largest visual element on the page is a bold oversized letter **"F"** as the logo, positioned top-left or as a hero watermark
- Main hero area text (display as a **terminal / command-line style** text block, monospaced font, dark background panel):

```
$ whoami
> Felice

$ cat about.md
> A romantic rationalist | ESFJ
> Art 🎨 Finance 💰 AI — cross-disciplinary by nature
> AI wellbeing researcher

$ Courage is mankind's hymn.
$ Me + AI = 1 team = A legend written by me.
$ Welcome to my fairy tale.
}
```

- Below the hero area: a prominent **"Contact Me"** CTA button
- Hero section tagline displayed separately in large serif type: **"This is Felice"**

---

### 2. About Page (`/about`)

**Layout:**
- Centered on the page, display a **medieval book / open manuscript** decorative frame (no real image — use an ornate rectangular border styled like aged parchment)
- Inside the frame: blank lined content area representing an old manuscript inner page (cream/off-white background, faint ruled lines)
- Surrounding the frame: decorative Gothic floral and vine border elements

---

### 3. Contact Page (`/contact`)

**Layout:**
- A circular **avatar placeholder** (no real photo — use a styled empty circle or silhouette outline with decorative frame border)
- Below the avatar: contact method icons/links listed as:
  - WeChat (icon + handle placeholder)
  - GitHub (icon + handle placeholder)
  - Xiaohongshu / RED (icon + handle placeholder)
- Elegant, centered card layout

---

### 4. Works / Portfolio Page (`/works`)

**Layout:**
- Left side: a **vintage retro television set** (wireframe/illustration style, no real image inside the screen — show a decorative static/noise pattern or ornate frame as placeholder)
- Right side: a vertical text content area for project descriptions and titles
- Split two-column layout, TV illustration on left ≈ 40% width, text area on right ≈ 60% width

---

## Visual Style

- **Core aesthetic:** Medieval manuscript meets modern web — gothic fantasy with classical art references
- **Hero background:** Classical black-and-white engraving or oil painting texture (use CSS pattern or flat illustrated treatment — no real painting photos)
- **Typography:** Mix of large gothic serif headings and clean modern body text; manuscript-style hand-lettering feel for decorative text elements
- **Decorative motifs:** Large-scale **vintage vines and roses** surrounding page edges — watercolor-style treatment in ivy green and cream tones; delicate thin leaves creating soft contrast with floral elements
- **Frame style:** Gothic arch frames and ornate rectangular borders for content blocks
- **Figures/subjects:** Where human figures appear in decorative elements, render as classical engraving silhouettes or framed portrait placeholder outlines only — no photos

---

## Color Palette

| Role | Color Name | PANTONE | Hex Approx. |
|------|-----------|---------|-------------|
| Primary / Background | White Swan | PANTONE 11-0601 TCX | `#F5F0E8` |
| Secondary / Ambient | Misty Jade | PANTONE 13-6008 TCX | `#A8C4B8` |
| Accent / Focal Point | Living Coral | PANTONE 16-1546 TCX | `#F08060` |
| Text Color | Bittersweet | PANTONE 18-1662 TCX | `#B84040` |
| Dark / Outline | Black Onyx | PANTONE 19-3903 TCX | `#2C2C2C` |

---

## Navigation

- **Position:** Fixed, top-right corner, persists across all pages
- **Items:** Home · About · Contact · Works
- **Transition:** Click-based page navigation with smooth fade transitions between pages

---

## Interaction & Animation Guidelines

### Page Transitions
- Fade in / fade out between pages — smooth, unhurried crossfade

### Element Entrance Animations
- Elements slide in from **left or right**
- Elements float in from **top or bottom**
- Elements **fade in while scaling up** — small to full size gradually

### Element Exit Animations
- Opacity decreases and elements **fade out**
- Elements **drift toward page edges** before disappearing; previous group exits fully before next group enters

### Parallax & Depth
- Background and foreground text move at **different scroll speeds**
- Foreground and background layers create a **multi-layer depth** effect
- Mouse-tracking subtle **tilt/camera push** sensation

### Continuous Motion
- Central content remains the **primary visual anchor**
- Surrounding decorative elements (vines, flowers) have **subtle continuous drift**
- Floral arrangements **gently reorganize** as user scrolls

### Edge Spring-In
- Some elements **leap in from screen edges**
- Certain decorative elements remain **partially off-screen** — adding tension and visual intrigue to the composition

### Motion Rhythm
- Overall pacing: **slow and smooth**
- Easing: **soft ease-out with gentle overshoot/bounce** on some elements — lightweight, springy feel

---

## Prototype Scope Notes

- Show all **4 pages** in the prototype
- Use **placeholder text** (lorem ipsum or actual copy above) — no real images or portraits
- Decorative vines, roses, and borders should be rendered as **flat vector illustration style** or CSS-drawn elements
- The terminal text block on the homepage should look like a real CLI interface (dark panel, monospaced font, green or amber text on dark background)
- Maintain consistent **gothic serif + modern sans-serif** typographic hierarchy across all pages
