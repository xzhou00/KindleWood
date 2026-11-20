# KindleWood — the complete website

Keep this folder together. It contains the website, Teacher Studio, and Book Studio.

## Open from the folder

Open index.html to start from the website. Workspace, Community, Website, and role-switching links explicitly target index.html files instead of directories. Keep the two studio folders alongside the root index.html.

## Local preview

From this folder run:

    python3 -m http.server 4173 --bind 127.0.0.1

Open http://127.0.0.1:4173/#home.

Open workspace → click Teacher or Author & family to enter directly. No real login is required.

## Picture books

Add new book → Picture book → enter a story or use the example → Make my picture book.
Generation opens the editable book directly. Use the left/right controls to move between the cover and each page. The title and author can be edited on the cover. Add page and picture editing remain available.

Characters are optional before or after generation: choose saved characters, let the prototype infer them, or create a sample AI character and edit its name and appearance.
Story settings are optional and collapsed by default. They include a visual 0L–800L reading-target slider with Auto, a MAP/Lexile help disclosure, story-focus chips (Adventure, Learning, STEM, Friendship, Creative), and additional instructions. No fixed age is assigned to a Lexile value. Settings remain available in the editor. Updates use sample text and can be undone. Lexile targets are preferences, not measured scores.
Chapter-book writing and reading keep their existing flow. AI writing and art remain authored prototype examples, not a connected AI service.

## Reset and switch

- Switch workspace: return to the role chooser, keeping this studio's content.
- Start over: immediately clear the current studio's demo books, drafts, characters, profile, and story preferences; open its new-user home page.
- No recovery copies or restore controls are created.

The two studios keep separate local browser data. Resetting one does not reset the other.

## Account menu

The avatar menu includes demo profile settings, rewards, progress & usage, Community, Website, and workspace switching. Password previews are never stored or sent. Reading and learning statistics are sample data.

## GitHub Pages

Upload the contents of this folder to the repository root, including assets/, teacher-studio/, and book-studio/.
Settings → Pages → Deploy from a branch → main → / (root) → Save.
Repository subpaths work without editing URLs.

## Teacher story settings

Prepare a workshop, Make a class book, and resource review include optional, collapsed Story settings. The slider, Auto, MAP help, focus chips, and notes are stored with the preparation/class draft and saved resource. Class contributions remain unchanged.

## Reading options

The reader has an Options button. Picture books offer optional word meanings, spelling, and simple phonics practice. Matching words open a word card; Hear word pronounces the word, while Hear letters reads the letter names. Simple sound-spelling groups are visual examples, not individual phoneme audio.

Bigger story asks for optional direction before expansion. Picture books support Playful, Funny, and STEM. Chapter books support Grammar, New words, Adjectives, and More detail. Choices can be combined; length can be short or long. Preferences carry across pages/chapters and invalidate older sample expansions when changed. Original writing stays unchanged. These are authored sample expansions, not a live AI service or a reading assessment.

## Homepage and examples

The homepage uses the original warm palette and drawing/book composition with shorter copy and consistent, upright titles across the website. The Create / Read / Grow tabs provide an interactive introduction below the hero. Create a book opens the workspace chooser; Read a sample opens the current picture-book reader. All three products use the selected outlined-pencil K logo.

Picture-book examples share the same reader as created books, with side arrows, mobile swipe support, Reading help, and Bigger story options. Chapter examples retain chapter chips with side page controls. Longer versions paginate to fit the screen.

## Product and learning pages

Products introduces Book Studio (picture and chapter books), Teacher Studio (workshop preparation and class books), and the KindleWood Kids reading app, with working entry links. Interior pages use one simple page title. The homepage retains Create / Read / Grow tabs and a compact Teacher Studio invitation.

How it works includes interactive sample reading activities and five illustrative learner stages. The 5 milestones / 100 skills / 50 states figures describe the framework published at https://www.kindlewoodstudio.ai/reading-science; they are not measured learning outcomes. Teaching evidence ratings link to the IES K–3 foundational reading guide (https://ies.ed.gov/ncee/wwc/PracticeGuide/21). Learner records are labeled illustrative.
