# Stitch Prompt v2 — Personal Website Prototype for "Felice"
# (Reference Visual Style: Medieval Manuscript × Gothic Floral Painting)

---

## Visual Reference Description

The overall visual style must closely follow this reference image:

- **Outer frame:** A thick dark brown / burnt-sienna rectangular border frames the entire composition — like an aged wooden or leather picture frame. Apply this as the outermost chrome of every page.
- **Background:** Cream / ivory parchment texture (`#F5F0E8`) — soft, aged paper feel across all pages.
- **Upper content zone:** Styled as an **illuminated medieval manuscript / royal decree** — a small gothic heraldic crest/emblem at the top center (decorative vector, rust-red), followed by a large gothic display title in rust/bittersweet red, then multiple lines of smaller manuscript-style body text arranged like a medieval charter.
- **Center architectural motif:** A **gothic cathedral spire / castle tower** illustration rendered in dark teal painterly style, rising vertically from the lower-center of the composition. It sits in atmospheric mist — blurred edges, impressionistic treatment.
- **Foreground flora (dominant visual element):** Oversized **coral-red roses and peonies** (Living Coral, PANTONE 16-1546) fill the lower half and sides of the composition. Rendered in loose, expressive **oil painting + watercolor hybrid** brushwork. Large **misty jade green leaves** (PANTONE 13-6008) are interspersed throughout. Flowers and leaves partially overlap the text area and border, creating depth.
- **Layering logic (back → front):** parchment background → manuscript text → gothic architecture → floral foreground
- **No real photographs or portraits anywhere.** Decorative elements only: flat vector ornaments, illustrated flora, wireframe placeholders.

---

## Site Structure — 4 Pages

---

### Page 1: Home (`/`)

**Composition:**
- Apply the dark brown outer frame border to the full viewport.
- Parchment cream background fills the inner area.
- **Top-right corner:** Fixed navigation bar — links: `Home` · `About` · `Contact` · `Works` — styled in gothic serif font, rust-red (`#B84040`), small caps style.
- **Top-center:** A small gothic heraldic crest/emblem (decorative vector placeholder, rust-red).
- **Hero title area (upper third):** Large gothic display font reads **"This is Felice"** — Bittersweet red, ornate letterforms with slight manuscript irregularity. Below it, a thin decorative rule line (rust-red).
- **Terminal block (center):** A dark panel (`#2C2C2C`, slight parchment texture overlay) styled as a CLI terminal interface. Monospaced font, amber/coral text on dark background:

```
$ whoami
> Felice

$ cat about.md
> A romantic rationalist | ESFJ
> Art 🎨  Finance 💰  AI — cross-disciplinary by nature
> AI wellbeing researcher

$ Courage is mankind's hymn.
$ Me + AI = 1 team = A legend written by me.
$ Welcome to my fairy tale.
}
```

- **Oversized "F" logo:** Positioned top-left, large gothic letterform watermark, low opacity, decorative.
- **CTA button:** Below the terminal block — "Contact Me" button, coral background, cream text, rounded gothic border.
- **Foreground flora:** Large coral roses and jade green leaves rendered in painterly style fill the lower portion and side edges, overlapping slightly into the content area. No photos — illustrated/CSS vector treatment.
- **Gothic cathedral spire:** A narrow illustrated tower rises from the bottom-center, partially obscured by flowers, adding depth behind the floral layer.

---

### Page 2: About (`/about`)

**Composition:**
- Same dark brown outer frame and parchment background.
- **Center of page:** A large ornate rectangular frame styled as an **open medieval book / illuminated manuscript inner page**. Frame has gothic arch decoration and aged corner flourishes.
- Inside the frame:
  - Cream/ivory background with faint horizontal ruled lines (like aged paper).
  - A small gothic heraldic crest at the top of the inner page.
  - Placeholder text lines in manuscript-style script (lorem ipsum in gothic serif layout).
  - Decorative drop-cap initial letter at paragraph start.
- **Surrounding the book frame:** Coral roses and jade leaves cascade around the edges — painterly, overlapping the frame border for depth.
- Misty gothic tower illustration visible in the background behind the book, softly blurred.

---

### Page 3: Contact (`/contact`)

**Composition:**
- Same dark brown outer frame and parchment background.
- **Center card layout:**
  - A circular avatar placeholder — styled as an ornate gothic portrait frame (dark brown engraved border, no photo inside — use a delicate floral or heraldic pattern fill as placeholder).
  - Below the avatar frame: three contact method rows, each with an icon and placeholder text:
    - `[WeChat icon]  @handle`
    - `[GitHub icon]  @handle`
    - `[RED / Xiaohongshu icon]  @handle`
  - Icons styled in rust-red or Black Onyx, monospace text.
- **Decorative treatment:** The card sits on parchment background. Coral floral elements frame the upper and lower edges of the card. Manuscript-style section heading above the card reads: **"Find Me"** in gothic display type.
- Gothic tower silhouette faintly visible in background.

---

### Page 4: Works (`/works`)

**Composition:**
- Same dark brown outer frame and parchment background.
- **Two-column split layout:**
  - **Left column (~40% width):** A **vintage retro television set** — rendered as a flat vector / wireframe illustration. The TV screen interior: an ornate decorative frame pattern (no real media — use a gothic floral or heraldic tile pattern as screen placeholder). TV body styled in dark teal/charcoal tones with rounded corners and vintage knobs.
  - **Right column (~60% width):** Vertical text content area. Manuscript-style section heading at top. Below: project title entries styled as manuscript list items with decorative bullet ornaments (fleur-de-lis or gothic cross). Placeholder text for project descriptions in two-column readable body text.
- **Floral decoration:** Coral roses and jade leaves frame the outer edges and bottom of the page. Some leaves curl around the TV illustration frame.

---

## Color Palette

| Role | Color Name | PANTONE | Hex Approx. |
|------|-----------|---------|-------------|
| Primary / Background | White Swan | PANTONE 11-0601 TCX | `#F5F0E8` |
| Secondary / Ambient | Misty Jade | PANTONE 13-6008 TCX | `#A8C4B8` |
| Accent / Focal Flowers | Living Coral | PANTONE 16-1546 TCX | `#F08060` |
| Text / Headings | Bittersweet | PANTONE 18-1662 TCX | `#B84040` |
| Frame / Outline / Dark | Black Onyx | PANTONE 19-3903 TCX | `#2C2C2C` |
| Outer Border Frame | Burnt Sienna / Dark Brown | — | `#6B3A2A` |

---

## Typography System

| Element | Style |
|---------|-------|
| Display / Page titles | Gothic blackletter serif, large, rust-red |
| Section headings | Gothic serif, medium weight, rust-red |
| Body text | Elegant serif (Garamond-style), Black Onyx, regular weight |
| Terminal / CLI text | Monospaced (Courier / JetBrains Mono), amber on dark |
| Decorative labels | Small caps, letter-spaced, rust-red |

---

## Navigation

- **Position:** Fixed, top-right corner, present on all 4 pages
- **Items:** `Home` · `About` · `Contact` · `Works`
- **Style:** Gothic serif, small caps, rust-red, no background — floats over the parchment
- **Transition:** Click-based; smooth fade crossfade between pages

---

## Interaction & Animation Guidelines

### Page Transitions
- **Fade in / fade out** — slow, cinematic crossfade between pages (≈ 600ms)

### Element Entrance
- Slide in from **left or right** (content panels)
- Float in from **bottom** (floral elements)
- **Scale-up fade** — elements appear small and grow to full size (terminal block, title text)

### Element Exit
- Opacity decreases → **gentle fade out**
- Elements drift toward page edges before disappearing

### Parallax & Depth
- **Background parchment + architecture:** slow scroll speed
- **Foreground flora:** faster scroll speed → creates depth separation
- **Mouse parallax:** subtle tilt effect — floral layer shifts slightly on mouse move

### Continuous Motion
- Foreground flowers and leaves have **very subtle slow drift** (CSS animation, infinite, gentle sway)
- Floral arrangements feel alive — petals shift softly as user scrolls

### Edge Spring-In
- Decorative leaf and petal elements **partially enter from screen edges** — not fully visible, creating framed tension
- Adds visual intrigue and romantic composition feel

### Motion Rhythm
- All animations: **smooth, unhurried, ease-out**
- **Soft overshoot / gentle bounce** on some elements (CTA button, card entrance)
- Overall pacing: slow and graceful — matches the medieval, romantic aesthetic

---

## Prototype Scope Notes

- Show all **4 pages** as separate screens in the prototype
- Apply the **dark brown outer frame border** consistently to all pages — it is a signature visual element
- The **gothic cathedral spire** appears as a recurring background motif across pages (faded/blurred in background)
- **No real images or photos** — all human figures, portraits, and media replaced with decorative frame placeholders or heraldic patterns
- Floral elements (roses, peonies, leaves) rendered as **painterly flat vector or CSS-illustrated style** — loose, expressive brushwork feel
- The terminal text block must look like a real CLI: dark panel, monospaced font, amber/coral text
- Maintain the **parchment + gothic frame + oversized flora** trifecta as the core visual signature on every page
