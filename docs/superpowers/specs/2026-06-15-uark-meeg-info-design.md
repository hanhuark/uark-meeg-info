# UARK MEEG Info Hub Design

## Goal

Create a lightweight public GitHub Pages hub for useful University of Arkansas Mechanical Engineering links for students, faculty, and staff.

## Audience

- MEEG students looking for course, catalog, form, honors, and student organization links.
- MEEG faculty and staff looking for proposal, purchasing, travel, hiring, teaching, safety, parking, outreach, and room reservation resources.

## Approach

Use a static, no-build website hosted from the `uark-meeg-info` repository with GitHub Pages. The homepage will be a practical directory with category cards and a client-side search/filter field. This keeps the site easy to maintain while still helping users find links quickly as the list grows.

## Content Model

Each resource has:

- Title
- URL
- Category
- Audience
- Optional short description
- Tags for search

Initial categories:

- Student Information
- Proposal Related
- Purchase Related
- Travel Related
- Hiring Related
- Other Faculty Resources

## User Experience

The first viewport should immediately signal "UARK MEEG Info Hub" and provide search plus category filters. Resource cards should show the link title, short context, audience, and category. External links should open in a new tab.

The visual style should be professional, clean, and UARK-adjacent without overusing red. It should feel like a practical departmental tool, not a marketing landing page.

## Technical Design

- `index.html` contains the page structure and resource data as a readable JavaScript array.
- `styles.css` contains responsive layout and visual styling.
- `script.js` renders categories, search results, filters, and no-result state.
- `README.md` explains how to update links and enable GitHub Pages.

## Testing

Verify locally by opening `index.html` or serving the folder. Check desktop and mobile widths, search behavior, category filters, and that all resource links are present.
