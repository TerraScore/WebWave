# QR Code Download Widget — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a fixed, dismissable QR code pill widget to the bottom-right of the Wavy website that expands on hover to reveal a scannable QR code linking to `https://wavydating.com/download`, backed by a new `/download` page that auto-redirects iOS and Android users to the correct app store.

**Architecture:** Pure static HTML/CSS/JS — no build tools, no package manager, no framework. The `/download` route is a new `download.html` using `navigator.userAgent` to redirect at runtime. The QR SVG is pre-generated once with a Python script and embedded inline in `index.html`. The widget is `position: fixed`, expands on `:hover`/`:focus-within` via CSS transitions, dismiss state stored in `sessionStorage`.

**Tech Stack:** Vanilla HTML5, CSS3 custom properties, ES5-compatible JavaScript, Python 3 + `segno` library (one-time QR generation only — not a runtime dependency).

## Global Constraints

- No external CDN or runtime external requests — all assets are local
- No npm, no build step, no framework
- Widget hidden on `max-width: 767px` (mobile users are already on the device)
- QR encodes `https://wavydating.com/download`, error correction level M
- Brand colors: `--rose: #D31C5C`, `--rose-bright: #FF4D8D`, `--ink: #15070E`
- Font: `Outfit` (already loaded via Google Fonts in `<head>`)
- Custom easing: `--ease: cubic-bezier(.22, 1, .36, 1)` (already in `styles.css`)
- Widget `z-index: 200` (nav sits at `z-index: 100`)
- Dismiss persists for the browser session only (`sessionStorage`)

---

### Task 1: Create `download.html` — device-detection redirect

**Files:**
- Create: `download.html`

**Interfaces:**
- Produces: visiting `/download` immediately redirects iOS → App Store, Android → Play Store, desktop → fallback page with both links

- [ ] **Step 1: Create `download.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Download Wavy</title>
<style>
  body {
    font-family: system-ui, -apple-system, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    background: #15070E;
    color: #fff;
    gap: 1rem;
    text-align: center;
    padding: 2rem;
    box-sizing: border-box;
  }
  a { color: #FF4D8D; text-decoration: none; }
  a:hover { text-decoration: underline; }
  p { margin: 0; }
</style>
<script>
  (function () {
    var ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(ua)) {
      location.replace('https://apps.apple.com/us/app/wavy-live-spots-networking/id6763865183');
    } else if (/Android/i.test(ua)) {
      location.replace('https://play.google.com/store/apps/details?id=com.wavydating.app');
    }
  }());
</script>
</head>
<body>
  <p>Redirecting to the app&hellip;</p>
  <p style="font-size:.9rem;opacity:.6">
    <a href="https://apps.apple.com/us/app/wavy-live-spots-networking/id6763865183">App Store</a>
    &nbsp;&middot;&nbsp;
    <a href="https://play.google.com/store/apps/details?id=com.wavydating.app">Google Play</a>
  </p>
</body>
</html>
```

- [ ] **Step 2: Verify redirect logic in browser**

Start local server: `python3 -m http.server 8080` in the project root.

Open `http://localhost:8080/download.html` on desktop.
Expected: fallback view stays visible — "Redirecting to the app…" + both links.

Open DevTools → Network conditions → set User Agent to:
`Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15`
Hard-refresh. Expected: immediate redirect to the App Store URL.

Set UA to:
`Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36`
Hard-refresh. Expected: immediate redirect to the Play Store URL.

- [ ] **Step 3: Commit**

```bash
git add download.html
git commit -m "feat: add /download redirect page with iOS/Android detection"
```

---

### Task 2: Generate QR SVG and build the widget

**Files:**
- Modify: `index.html` — add widget HTML just before `</body>`
- Modify: `styles.css` — append `.qr-widget` block
- Modify: `script.js` — append dismiss IIFE after closing `})();`

**Interfaces:**
- Consumes: `https://wavydating.com/download` as QR payload (Task 1)
- Produces:
  - `#qrWidget` — widget container
  - `#qrClose` — dismiss button
  - `.qr-widget--dismissed` — class applied on dismiss
  - `sessionStorage` key `'qrDismissed'` set to `'1'` on dismiss

- [ ] **Step 1: Generate the QR code SVG (one-time)**

Install `segno`:
```bash
pip3 install segno
```

Generate the SVG:
```bash
python3 -c "import segno; segno.make('https://wavydating.com/download', error='m').save('qr_temp.svg', scale=10, border=4)"
```

Open `qr_temp.svg`. Copy everything from `<svg` to `</svg>` — skip the `<?xml …?>` declaration line at the top. You'll paste this in the next step.

- [ ] **Step 2: Add widget HTML to `index.html`**

Find the line `<script src="script.js" defer></script>` near the bottom of `index.html`. Insert this block directly before it, replacing the comment with the actual `<svg>…</svg>` copied in Step 1:

```html
<!-- ===== QR Download Widget ===== -->
<div class="qr-widget" id="qrWidget" role="complementary" aria-label="Scan to download Wavy">
  <button class="qr-widget__close" id="qrClose" aria-label="Close download widget">&#x2715;</button>
  <div class="qr-widget__qr">
    <!-- paste <svg>…</svg> from qr_temp.svg here -->
  </div>
  <div class="qr-widget__label">
    <img src="assets/iconMark.png" alt="" aria-hidden="true" width="20" height="20" />
    <span>Scan to download</span>
  </div>
</div>
```

Then delete the temp file:
```bash
rm qr_temp.svg
```

- [ ] **Step 3: Append `.qr-widget` styles to `styles.css`**

Add to the very end of `styles.css`:

```css
/* ===== QR Download Widget ===== */
.qr-widget {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, var(--rose-bright), var(--rose));
  border-radius: 100px;
  padding: 10px 18px;
  cursor: default;
  box-shadow: 0 8px 32px -8px rgba(211,28,92,.5);
  transition: border-radius .25s var(--ease), padding .25s var(--ease);
  user-select: none;
}
.qr-widget:hover,
.qr-widget:focus-within {
  border-radius: 16px;
  padding: 14px 16px 10px;
}
.qr-widget__qr {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height .3s var(--ease), opacity .2s ease;
  display: flex;
  justify-content: center;
}
.qr-widget:hover .qr-widget__qr,
.qr-widget:focus-within .qr-widget__qr {
  max-height: 200px;
  opacity: 1;
}
.qr-widget__qr svg {
  width: 160px;
  height: 160px;
  background: #fff;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 10px;
  display: block;
  flex-shrink: 0;
  box-sizing: content-box;
}
.qr-widget__close {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: #fff;
  color: var(--rose);
  font-size: 13px;
  line-height: 1;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(0,0,0,.2);
  z-index: 1;
  padding: 0;
  transition: background .15s, color .15s;
}
.qr-widget__close:hover { background: var(--rose); color: #fff; }
.qr-widget:hover .qr-widget__close,
.qr-widget:focus-within .qr-widget__close { display: flex; }
.qr-widget__label {
  display: flex;
  align-items: center;
  gap: 8px;
}
.qr-widget__label img {
  width: 20px;
  height: 20px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  flex-shrink: 0;
}
.qr-widget__label span {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: .75rem;
  color: #fff;
  white-space: nowrap;
  letter-spacing: .02em;
}
.qr-widget--dismissed { display: none !important; }
@media (max-width: 767px) { .qr-widget { display: none; } }
```

- [ ] **Step 4: Append dismiss logic to `script.js`**

`script.js` ends with `})();`. Add this block after that line:

```js
/* ---- QR widget dismiss ---- */
(function () {
  var widget = document.getElementById('qrWidget');
  var closeBtn = document.getElementById('qrClose');
  if (!widget || !closeBtn) return;
  if (sessionStorage.getItem('qrDismissed')) {
    widget.classList.add('qr-widget--dismissed');
  }
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    widget.classList.add('qr-widget--dismissed');
    sessionStorage.setItem('qrDismissed', '1');
  });
}());
```

- [ ] **Step 5: Verify widget in browser**

With local server running, open `http://localhost:8080/index.html` on desktop.

1. **Pill visible:** Rose gradient pill is fixed to bottom-right. Shows Wavy icon + "Scan to download".
2. **Hover expands:** Hover pill → QR code animates in above the label, pill transitions to card shape, × button appears.
3. **QR is scannable:** Scan with a phone camera → opens `https://wavydating.com/download` → redirects to app store.
4. **Dismiss works:** Click × → widget disappears.
5. **Dismiss persists:** Refresh page → widget stays hidden.
6. **Reappears on new session:** Open incognito tab → widget is visible again.
7. **Hidden on mobile:** DevTools device toolbar at 375px → widget not visible.
8. **No console errors.**

- [ ] **Step 6: Commit**

```bash
git add index.html styles.css script.js
git commit -m "feat: add QR code download widget — pill/expand, dismissable"
```
