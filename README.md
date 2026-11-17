# KindleWood — the complete website

This is the only current website folder. Keep everything inside it together.

## Open locally

From this folder run:

    python3 -m http.server 4173 --bind 127.0.0.1

Open http://127.0.0.1:4173/#home.

## Experience

Home → Open workspace → click Teacher or Family to enter directly.

- Teacher → Teacher Studio.
- Family → Book Studio.
- Website returns to the home page. Start over and Switch workspace return directly to the role chooser without clearing books.

All three experiences run together on the same server, without a build step.
Login, AI, and sharing remain front-end prototypes. Books and drafts are stored on this device.
Community book links and app-store links still open their original external services.

## Upload to GitHub Pages

Upload all contents of this KindleWood folder to one repository root.
Keep assets/, teacher-studio/, and book-studio/ in place.
In Settings → Pages select Deploy from a branch → main → / (root) → Save.
Open the URL GitHub provides. No URL edits are required for a repository subpath.
