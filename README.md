# Christmas Text Adventure

A detective text adventure set at the North Pole. Santa is missing. Find him, save Christmas, get the promotion.

Credit to WebDevSimplified - forked from https://github.com/WebDevSimplified/JavaScript-Text-Adventure

## Run

Open the project in VS Code, right-click `index.html` and choose **Open with Live Server**.

## Structure

```
game.js          engine (state, buttons, restart)
story/           all story content, one file per location or character
  index.js       combines every node file - add new files here
story.md         readable version of the whole story (generated)
tools/           optional Node scripts (see below)
```

Each scene is `{ id, text, options }`. An option can have `requiredState(currentState)` to gate it and `setState` to give or take items and flags. IDs are prefixed by their file, e.g. `phone-sigh`, `elf-threaten`.

## Tools (optional, needs Node)

```
node tools/build-story.mjs   # regenerates story.md and checks for broken links
node tools/state-check.mjs   # random playthroughs: checks every ending is reachable, no soft-locks
```