# Animal Flashcards

A small flashcard app written in plain JavaScript. The front of each card shows an animal, the back shows three facts about it. The on-screen texts are in Turkish.

## Live demo

https://humanur.github.io/flashcards/

## Screenshots

<img width="1173" height="916" alt="image" src="https://github.com/user-attachments/assets/3c1d2251-1b1c-4700-8ae3-b790eef97685" />
<img width="1173" height="916" alt="image" src="https://github.com/user-attachments/assets/dd97a7d1-eb00-4b7a-89ae-53fdb225b8a7" />


## Features

- 8 animal cards with a 3D flip animation (CSS transform).
- Flip a card by click, tap or the Enter / Space key.
- **Previous**, **Next** and **Shuffle** buttons; left and right arrow keys also work.
- Card counter (for example "Kart 3 / 8").
- Screen reader support: only the visible side is read, and the card content is announced in a live region.
- Animation is turned off for users who prefer reduced motion.

## How it works

- The animals are stored in an array of objects at the top of `script.js`.
- Two variables keep the state: `index` (current card) and `isFlipped` (which side is shown).
- The `render()` function updates the page from that state. Buttons only change the state and call `render()`.
- Shuffle uses the Fisher-Yates algorithm.

## Add a new animal

Add one object to the `animals` array in `script.js`:

```js
{ name: "Tavşan", emoji: "🐰", category: "Memeli", features: ["Fact 1", "Fact 2", "Fact 3"] }
```

The counter and navigation update automatically.

## How to run

Download the folder and open `index.html` in your browser.
