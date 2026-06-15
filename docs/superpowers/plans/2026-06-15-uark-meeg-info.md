# UARK MEEG Info Hub Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a no-build GitHub Pages resource hub for UARK MEEG students, faculty, and staff.

**Architecture:** A static site with one HTML entry point, one stylesheet, and one JavaScript renderer. Link data lives in `script.js` as structured objects so updates are simple and reviewable.

**Tech Stack:** HTML, CSS, vanilla JavaScript, GitHub Pages.

---

### File Structure

- Create: `index.html` for semantic page shell and app mount points.
- Create: `styles.css` for responsive, professional departmental UI styling.
- Create: `script.js` for resource data, filtering, rendering, and counts.
- Create: `README.md` for repository purpose, editing instructions, and Pages setup.

### Task 1: Static Page Shell

**Files:**
- Create: `index.html`

- [ ] **Step 1: Add the HTML shell**

Create `index.html` with:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>UARK MEEG Info Hub</title>
  <link rel="stylesheet" href="styles.css">
  <script defer src="script.js"></script>
</head>
<body>
  <header class="site-header">
    <nav class="topbar" aria-label="Primary">
      <a class="brand" href="#">UARK MEEG Info Hub</a>
      <a class="uark-link" href="https://mechanical-engineering.uark.edu/" target="_blank" rel="noreferrer">MEEG Website</a>
    </nav>
    <section class="hero">
      <p class="eyebrow">University of Arkansas Mechanical Engineering</p>
      <h1>Useful links for MEEG students, faculty, and staff.</h1>
      <p class="hero-copy">A central directory for course tools, forms, proposal systems, travel, hiring, and recurring department resources.</p>
      <div class="search-panel">
        <label for="search">Search resources</label>
        <input id="search" type="search" placeholder="Search course search, Streamlyne, travel, forms..." autocomplete="off">
      </div>
    </section>
  </header>
  <main>
    <section class="filters" aria-label="Resource filters">
      <div id="categoryFilters" class="filter-row"></div>
      <p id="resultCount" class="result-count"></p>
    </section>
    <section id="resourceGrid" class="resource-grid" aria-live="polite"></section>
  </main>
  <footer class="site-footer">
    <p>Maintained for the Department of Mechanical Engineering, University of Arkansas.</p>
  </footer>
</body>
</html>
```

- [ ] **Step 2: Open the page**

Run: `Start-Process .\index.html`

Expected: Browser opens the unstyled page with empty filter and resource areas.

### Task 2: Resource Data and Rendering

**Files:**
- Create: `script.js`

- [ ] **Step 1: Add resource data**

Create `script.js` with one `resources` array containing every user-provided link, preserving the given titles and URLs.

- [ ] **Step 2: Add rendering**

Implement category buttons, search matching across title, description, category, audience, and tags, and resource cards with external links.

- [ ] **Step 3: Verify behavior**

Open the page, search for `Streamlyne`, `travel`, and `course`, and confirm expected resources remain visible.

### Task 3: Styling and Responsiveness

**Files:**
- Create: `styles.css`

- [ ] **Step 1: Add responsive styling**

Style the site with a restrained UARK red accent, clear typography, stable cards, visible focus states, and responsive grid behavior.

- [ ] **Step 2: Verify at common widths**

Use browser viewports around 390px, 768px, and 1280px. Confirm no text overlap, buttons wrap cleanly, and cards remain readable.

### Task 4: Repository Documentation

**Files:**
- Create: `README.md`

- [ ] **Step 1: Add maintenance instructions**

Document how to add or edit resources in `script.js` and how to enable GitHub Pages from the repository's main branch.

- [ ] **Step 2: Initialize and commit**

Run:

```powershell
git init
git add .
git commit -m "Initial UARK MEEG info hub"
```

Expected: A clean first commit exists in the new project repository.

### Task 5: GitHub Repository and Pages

**Files:**
- Modify: local git remote configuration

- [ ] **Step 1: Create the GitHub repository**

Run:

```powershell
gh repo create uark-meeg-info --public --source . --remote origin --push
```

Expected: Repository is created under the authenticated GitHub account and the main branch is pushed.

- [ ] **Step 2: Enable Pages**

Run:

```powershell
gh api repos/:owner/uark-meeg-info/pages -X POST -f source.branch=main -f source.path=/
```

Expected: GitHub Pages is enabled for the repository root.

- [ ] **Step 3: Report URL**

Expected URL pattern: `https://<github-user>.github.io/uark-meeg-info/`.
