# FCAI E-Club Design System

Reusable CSS classes for building pages that match the FCAI E-Club design. All classes are prefixed with `ds-` and defined in `app/globals.css`.

---

## Section Layout

| Class | Usage |
|---|---|
| `ds-section` | Responsive section wrapper (`px-6 py-16 md:px-12 lg:px-24`) |
| `ds-divider` | Subtle horizontal rule between sections |

---

## Cards

| Class | Usage |
|---|---|
| `ds-card` | Default glassmorphism card with backdrop blur |
| `ds-card-elevated` | Solid dark background card |
| `ds-card-accent` | Card with cyan border and glow |
| `ds-card-stat` | Centered stat/metric card |

```html
<div class="ds-card">
  <p>Content here</p>
</div>
```

---

## Section Headers

| Class | Usage |
|---|---|
| `ds-section-label` | Uppercase cyan label with horizontal line |
| `ds-section-title` | Large bold heading. Wrap highlighted word in `<span>` for cyan |
| `ds-section-subtitle` | Muted description below title |

```html
<h2 class="ds-section-label">About Us</h2>
<h2 class="ds-section-title">Engineering The <span>Future</span></h2>
<p class="ds-section-subtitle">Subtitle text here.</p>
```

---

## Buttons

| Class | Usage |
|---|---|
| `ds-btn` | Solid cyan primary button |
| `ds-btn-outline` | Bordered secondary button |
| `ds-btn-ghost` | Text-only button |
| `ds-btn-sm` | Small size (combine with any above) |

```html
<button class="ds-btn">Join the team</button>
<button class="ds-btn-outline">Explore Events &rarr;</button>
<button class="ds-btn-ghost ds-btn-sm">Read More</button>
```

---

## Badges & Tags

| Class | Usage |
|---|---|
| `ds-badge` | Cyan pill badge |
| `ds-badge-outline` | Muted pill badge |
| `ds-tag` | Small inline tag |
| `ds-status-open` | Green "open" status indicator |
| `ds-status-closed` | Gray "closed" status indicator |

```html
<span class="ds-badge">Upcoming Workshop</span>
<span class="ds-badge-outline">Engineering the Future</span>
<span class="ds-tag">Technical</span>
<span class="ds-status-open">&bull; Open</span>
```

---

## Tabs

### Pill-style

| Class | Usage |
|---|---|
| `ds-tabs` | Tab container |
| `ds-tab` | Inactive tab |
| `ds-tab-active` | Active tab (cyan highlight) |

### Underline-style

| Class | Usage |
|---|---|
| `ds-tab-underline` | Inactive underline tab |
| `ds-tab-underline-active` | Active underline tab |

```html
<div class="ds-tabs">
  <button class="ds-tab-active">All</button>
  <button class="ds-tab">Technical</button>
  <button class="ds-tab">Soft Skills</button>
</div>
```

---

## Stats

| Class | Usage |
|---|---|
| `ds-stat-number` | Large bold number |
| `ds-stat-label` | Uppercase muted label below number |
| `ds-stat-card` | Stat wrapped in a card |

```html
<div class="ds-stat-card">
  <div class="ds-stat-number">500+</div>
  <div class="ds-stat-label">Active Members</div>
</div>
```

---

## Timeline

| Class | Usage |
|---|---|
| `ds-timeline` | Vertical timeline container |
| `ds-timeline-item` | Single timeline entry |
| `ds-timeline-dot` | Hollow circle on the line |
| `ds-timeline-dot-filled` | Filled circle on the line |
| `ds-timeline-date` | Cyan uppercase date |
| `ds-timeline-title` | Bold event title |
| `ds-timeline-desc` | Muted description |

```html
<div class="ds-timeline">
  <div class="ds-timeline-item">
    <div class="ds-timeline-dot-filled"></div>
    <div class="ds-timeline-date">Q1 2024</div>
    <div class="ds-timeline-title">System Initialization</div>
    <div class="ds-timeline-desc">Description text.</div>
  </div>
</div>
```

---

## Forms

| Class | Usage |
|---|---|
| `ds-input` | Bottom-border text input |
| `ds-input-label` | Uppercase label above input |
| `ds-select` | Styled select dropdown |

```html
<label class="ds-input-label">Company Name</label>
<input class="ds-input" placeholder="e.g. Acme Aerospace" />

<label class="ds-input-label">Partnership Interest</label>
<select class="ds-select">
  <option>Select an area of interest</option>
</select>
```

---

## Avatars

| Class | Usage |
|---|---|
| `ds-avatar-sm` | 40px circle |
| `ds-avatar` | 80px circle |
| `ds-avatar-lg` | 128px rounded square |

```html
<img class="ds-avatar" src="/avatar.jpg" alt="Name" />
<img class="ds-avatar-sm" src="/thumb.jpg" alt="Name" />
```

---

## Testimonials

| Class | Usage |
|---|---|
| `ds-quote-mark` | Cyan opening quote mark |
| `ds-quote-text` | Italic quote body |
| `ds-quote-author` | Author row (avatar + text) |
| `ds-quote-name` | Author name |
| `ds-quote-role` | Author role |

```html
<div class="ds-card">
  <div class="ds-quote-mark">&ldquo;</div>
  <p class="ds-quote-text">Quote text here.</p>
  <div class="ds-quote-author">
    <img class="ds-avatar-sm" src="/avatar.jpg" alt="" />
    <div>
      <div class="ds-quote-name">Sarah Chen</div>
      <div class="ds-quote-role">AI Researcher</div>
    </div>
  </div>
</div>
```

---

## Grids

| Class | Usage |
|---|---|
| `ds-grid-2` | 1 col mobile, 2 col desktop |
| `ds-grid-3` | 1 col mobile, 2 col tablet, 3 col desktop |
| `ds-grid-4` | 1 col mobile, 2 col tablet, 4 col desktop |

---

## Navigation & Footer

| Class | Usage |
|---|---|
| `ds-nav` | Nav link container |
| `ds-nav-active` | Active nav link |
| `ds-footer` | Footer wrapper |
| `ds-footer-heading` | Footer column heading |
| `ds-footer-link` | Footer link |
| `ds-footer-copy` | Copyright bar |

```html
<footer class="ds-footer">
  <div class="ds-footer-heading">Navigation</div>
  <a class="ds-footer-link" href="#">Privacy</a>
  <div class="ds-footer-copy">&copy; 2026 FCAI E-Club.</div>
</footer>
```

---

## Text Utilities

| Class | Usage |
|---|---|
| `ds-text-gradient` | Cyan-to-blue gradient text |
| `ds-text-muted` | Muted slate text |
| `ds-text-accent` | Cyan accent text |
| `ds-text-label` | Small uppercase label |

---

## Hover Effects

| Class | Usage |
|---|---|
| `ds-glow` | Subtle cyan glow on hover |
| `ds-glow-accent` | Stronger cyan glow on hover |

---

## Other

| Class | Usage |
|---|---|
| `ds-partner-logo` | Partner logo grid cell |
