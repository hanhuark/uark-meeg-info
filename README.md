# UARK MEEG Info Hub

A GitHub Pages resource hub for students, faculty, and staff in the Department of Mechanical Engineering at the University of Arkansas.

## Local Preview

Serve the folder with any static file server. For example:

```powershell
python -m http.server 8080
```

Then open:

```text
http://localhost:8080/
```

## Update Links

Resources are stored in `script.js` in the `resources` array. To add a link, copy an existing object and update:

- `title`
- `url`
- `category`
- `audience`
- `description`
- `tags`

Keep category names consistent so filters stay tidy.

## Run Tests

```powershell
npm test
```

The tests check that the starter catalog is complete and that search/category filtering works.

## Enable GitHub Pages

After pushing the repository to GitHub:

1. Open the repository on GitHub.
2. Go to Settings -> Pages.
3. Set Source to "Deploy from a branch".
4. Select the `main` branch and `/ (root)`.
5. Save.

The site should publish at:

```text
https://<github-user>.github.io/uark-meeg-info/
```
