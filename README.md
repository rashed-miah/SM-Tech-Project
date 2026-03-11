# FINTRIXX Landing Page

This repository contains the static website for **FINTRIXX**, an Amazon seller services platform. The site showcases the company's services, approach, and offers a booking form for strategy sessions. It is built using plain HTML, CSS, and JavaScript with no frameworks.

## Features

- Responsive design with breakpoints for desktop, tablet, and mobile
- Interactive elements (tabs, calendar navigation)
- Font Awesome icons and Google Fonts
- Static deployment friendly (hosts easily on Vercel or similar)
- Custom favicon and SVG-based logo

## Project Structure

```
/ (workspace root)
├─ index.html        # Main landing page
├─ styles.css        # Global stylesheet and responsive rules
├─ script.js         # JavaScript for tabs, calendar UI, hamburger menu
├─ favicon.svg       # SVG logo used as favicon
├─ assets/           # Images used across the site
└─ README.md         # This documentation file
```

## Development

1. Clone the repository:

   ```bash
   git clone https://github.com/rashed-miah/sm-technology-frontend-task.git
   cd SM-Tech-Project
   ```

2. Open `index.html` in your browser or serve via Live Server extension to preview changes.
3. Edit HTML, CSS, or JavaScript as needed; refresh to see updates.

## Deployment

The site was deployed to [Vercel](https://vercel.com):

- Production URL: https://smt-technical-task.vercel.app

To redeploy:

1. Commit and push changes to the `main` branch on GitHub.
2. Vercel automatically builds and deploys the updated site.

## Adding New Assets

- Place images in the `assets/` directory.
- Update `index.html` references accordingly.

## Notes

- The site is intentionally minimal and dependency-free, making it easy to host on any static hosting provider.
- All layout and responsiveness is handled via `styles.css` using CSS Grid and Flexbox.

Feel free to customize further or integrate into a larger application as needed!
