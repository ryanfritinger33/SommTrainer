# Sommelier Atlas

A world-map study game for the sommelier theory curriculum: 44 stops, study sheets, flashcards, quizzes, a blind map drill, personal map pins, and a notebook that takes pictures.

**Play it:** `https://YOUR-USERNAME.github.io/sommelier-atlas/` (replace YOUR-USERNAME after turning on GitHub Pages).

## How saving works

Everything a player does (stamps, notes, pictures, pins) is saved in their own browser on their own device. Nothing is sent to a server, so nobody sees anyone else's notes, and notes do not follow a player to another device. Clearing the browser's site data erases them.

## Collecting players' notes and pins

Every player has a **Settings** button in the top bar. "Save my data file" downloads one file with all their notes, pictures, pins (with locations) and stamps. They send you that file.

In your own copy, open Settings and use "Add a saved file" (you can pick several at once). Their notes and pins are added to yours and marked with their name. Nothing of yours is replaced.

## Put it online with GitHub Pages

1. Create a new **public** repository named `sommelier-atlas`.
2. Upload every file from this folder (Add file, Upload files; select all the files and drag them in). There are no subfolders. `index.html` must sit at the top level of the repository, not inside another folder.
3. In the repository, open Settings, then Pages. Under "Build and deployment", choose "Deploy from a branch", branch `main`, folder `/ (root)`, and save.
4. After a minute or two the site is live at the address above.

## Editing the content

Add `?edit` to the address (for example `.../sommelier-atlas/?edit`) to show the "Edit content" button. Edits are saved in your browser only.

To publish your edits to every player: in edit mode choose "Export edits", rename the downloaded file to `edits.json`, and upload it to the repository next to `index.html`. The site loads it for everyone on their next visit.

## Credits

Unofficial study aid. The scope follows the Court of Master Sommeliers, Americas curriculum guide (8.2023). Not affiliated with or endorsed by CMS-A. Map data: Natural Earth (public domain). Libraries: D3 and TopoJSON (license files included).
