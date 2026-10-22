# BuildWithMe website

A responsive multi-page static website with a black-and-yellow luxury style.

## Website pages
- `index.html` — Home / About
- `websites.html` — Website packages and pricing
- `thumbnails.html` — Thumbnail maker with editable text/colours and PNG download
- `how-it-works.html` — Project process
- `order.html` — Order enquiry form

## Order form behaviour
When a customer submits the form, the website opens Gmail's compose screen and fills in the recipient (`darkevilevil480@gmail.com`), subject, and order details. The customer must be signed in to Gmail and press **Send**. This GitHub Pages website does not send or store emails automatically.

## Test locally
Open `index.html` in a browser. For best testing, use a browser signed in to Gmail.

## Publish on GitHub Pages
1. Sign in at https://github.com and create a new repository, for example `buildwithme`.
2. Set the repository to **Public** if you are using the free GitHub Pages option.
3. On the repository page, click **Add file → Upload files**.
4. Extract this ZIP on your computer first. Upload the *contents* of the extracted folder—not the ZIP itself—so `index.html`, `style.css`, and `app.js` are at the top level of the repository.
5. Scroll down and click **Commit changes**.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, select **Deploy from a branch**.
8. Choose branch **main** and folder **/(root)**, then click **Save**.
9. Wait a little, refresh the Pages section, and open the website link GitHub shows you. It will usually look like `https://YOUR-USERNAME.github.io/buildwithme/`.

## Important
- Keep the five HTML files, `style.css`, and `app.js` together in the same root folder.
- Do not upload only `index.html`; the other pages and assets are needed too.
- Any code changes need to be committed/pushed to GitHub before the live website updates.
- The Gmail compose window may be blocked by browser settings; allow pop-ups for your GitHub Pages website if needed.
- This is a front-end-only website. For automatic email delivery, a real form service or backend would be required.
