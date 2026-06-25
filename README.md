# PHX WebSpace Website

A clean static website for PHX WebSpace, focused on affordable website design and redesign services for small businesses.

## Project type

Static website using plain HTML, CSS, and JavaScript.

## Files

- `index.html` - main website page
- `styles.css` - responsive styling and layout
- `script.js` - mobile menu, scroll effects, and form validation
- `.nojekyll` - GitHub Pages marker

## Run locally

Open `index.html` in a browser.

For a local server, you can also run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages deployment

1. Go to the repository settings.
2. Open **Pages**.
3. Set the source to the `main` branch.
4. Use the root folder.
5. Save and wait for GitHub Pages to publish.

## Before launch

Replace these placeholders before publishing the site publicly:

- Package prices
- Contact email in `script.js`
- Phone number, if you want one shown
- Service area
- Real portfolio examples

## Notes

The site avoids external dependencies, tracking scripts, and heavy frameworks. The contact form prepares an email instead of submitting visitor information to a server.
