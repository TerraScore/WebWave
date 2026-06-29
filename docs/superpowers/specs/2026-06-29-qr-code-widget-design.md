# QR Code Download Widget — Design Spec

**Date:** 2026-06-29
**Status:** Approved

## Overview

Add a floating QR code widget to the bottom-right of the Wavy website so desktop visitors can instantly scan and download the app. The widget uses a compact pill/expand pattern to stay unobtrusive until the user engages with it.

## Goals

- Let desktop users download the app without hunting for the App Store / Play Store buttons
- Stay visually consistent with the Wavy brand (rose gradient, Outfit font, dark palette)
- Zero dependency on external CDNs or third-party QR services

## Out of Scope

- Mobile devices (widget is hidden below 768px — users are already on the device)
- Analytics/click tracking on the QR scan

---

## Components

### 1. `/download.html` — Universal Redirect Page

A minimal HTML page with no visible UI. On load, a script reads `navigator.userAgent`:

- iOS (`/iPhone|iPad|iPod/i`) → redirect to `https://apps.apple.com/us/app/wavy-live-spots-networking/id6763865183`
- Android (`/Android/i`) → redirect to `https://play.google.com/store/apps/details?id=com.wavydating.app`
- Fallback → show a centered message with both store links

No stylesheet needed beyond a minimal inline style for the fallback message.

### 2. QR Code Widget — HTML

Injected just before `</body>` in `index.html` (and can be added to other pages later).

```html
<div class="qr-widget" id="qrWidget" aria-label="Scan to download Wavy">
  <button class="qr-widget__close" id="qrClose" aria-label="Close">×</button>
  <div class="qr-widget__qr"><!-- inline SVG QR --></div>
  <div class="qr-widget__label">
    <img src="assets/iconMark.png" alt="Wavy" />
    <span>Scan to download</span>
  </div>
</div>
```

### 3. QR Code Widget — CSS (added to `styles.css`)

**Collapsed (default):**
- `position: fixed; bottom: 28px; right: 28px; z-index: 200`
- Rose gradient pill, ~48px height
- Shows icon + label only; QR hidden (`max-height: 0; opacity: 0; overflow: hidden`)

**Expanded (`:hover`, `:focus-within`):**
- Pill widens and QR area animates in: `max-height: 200px; opacity: 1`
- Transition: `250ms ease` on `max-height`, `opacity`, `width`
- Close button (×) appears at top-right corner

**Hidden state (`.qr-widget--dismissed`):**
- `display: none`

**Mobile:**
```css
@media (max-width: 767px) { .qr-widget { display: none; } }
```

### 4. QR Code — Inline SVG

Generated from `https://wavydating.com/download` using the QR encoding algorithm embedded directly as an inline SVG in the HTML. White modules on a transparent background (widget card provides dark backdrop). No external image requests.

The QR SVG will be generated with a quiet zone (4-module border) and error correction level M for good scan reliability.

### 5. Dismiss Behavior — JS (added to `script.js`)

```js
// QR widget dismiss
const qrWidget = document.getElementById('qrWidget');
const qrClose  = document.getElementById('qrClose');
if (qrClose && qrWidget) {
  if (sessionStorage.getItem('qrDismissed')) qrWidget.classList.add('qr-widget--dismissed');
  qrClose.addEventListener('click', () => {
    qrWidget.classList.add('qr-widget--dismissed');
    sessionStorage.setItem('qrDismissed', '1');
  });
}
```

Dismissed state is persisted in `sessionStorage` — widget stays hidden for the rest of the browser session but reappears on a fresh visit.

---

## Visual Design

| Property | Value |
|---|---|
| Background | Rose gradient `linear-gradient(135deg, #FF4D8D, #D31C5C)` |
| QR code colors | White modules on dark card (`#1c0a16`) |
| Font | Outfit, 700, 0.75rem, white |
| Border radius | 100px (pill) → 16px (expanded card) |
| Shadow | `0 8px 32px -8px rgba(211,28,92,.5)` |
| Icon | `assets/iconMark.png`, 24×24px |
| Close button | White ×, top-right, 28×28px tap target |

---

## File Changes

| File | Change |
|---|---|
| `download.html` | New file — device-detection redirect |
| `index.html` | Add widget HTML just before `</body>` |
| `styles.css` | Add `.qr-widget` styles |
| `script.js` | Add dismiss logic |

---

## Open Questions

None — all resolved during design.
