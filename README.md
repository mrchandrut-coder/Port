# Chandru.dev portfolio upgrade

A responsive static portfolio package using HTML, CSS, and vanilla JavaScript. Keeps the dark + mint-green theme and adds:

- Responsive mobile navigation with keyboard-friendly controls
- Project cards with tech-stack tags and GitHub links
- Certificate cards with editable Drive links
- Resume view/download actions
- Bottom-right blinking green portfolio assistant
- Responsive layouts and reduced-motion support

## Publish to GitHub Pages

1. Download and extract this ZIP.
2. Review `index.html` and replace any placeholders before publishing:
   - `YOUR_EMAIL@example.com`
   - `https://www.linkedin.com/` with your actual profile URL
   - Certificate links with your real Google Drive share links
   - Add your resume PDF at `assets/Chandru-Resume.pdf` (create the `assets` folder), or update the resume URLs.
3. Verify internship count, role dates, project descriptions, and certificate titles.
4. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the root of your repository, keeping a backup of the current files.
5. In GitHub, open **Settings → Pages** and confirm Pages deploys from the correct branch and root folder.
6. Wait for the deployment workflow to finish, then test the live site on desktop and mobile.

## Accuracy notes

The current stats intentionally avoid claiming `1.5+ years building`. The internship count is marked for verification because the exact number and dates should be confirmed before publication. Certificate and resume buttons need your real file links to work. The LinkedIn and email links are placeholders and should be updated.

## Files

- `index.html` — page content and sections
- `styles.css` — theme, layout, responsiveness, and animations
- `script.js` — mobile menu, assistant interactions, and current year
