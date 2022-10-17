# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Rock, Paper, Scissors solution](#frontend-mentor---rock-paper-scissors-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)
  - [Scripts](#scripts)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the game depending on their device's screen size
-   Play Rock, Paper, Scissors against the computer
-   Maintain the state of the score after refreshing the browser _(optional)_
-   **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

![](https://github.com/charlesmiller0412/rock_paper_scissors/blob/main/Project%20Display%20Images/rpslsDesktop.png?raw=true)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

-   Solution URL: [https://github.com/charlesmiller0412/rock_paper_scissors](https://github.com/charlesmiller0412/rock_paper_scissors)
-   Live Site URL: [https://rock-paper-scissors-ruddy-ten.vercel.app/](https://rock-paper-scissors-ruddy-ten.vercel.app/)

## My process

### Built with

-   TypeSctipt
-   CSS custom properties
-   [React](https://reactjs.org/) - JS library
-   [Next.js](https://nextjs.org/) - React framework
-   Sass / SCSS - CSS Compiler
-   [Block Element Modifier - BEM](https://getbem.com)
-   [Zustand](https://github.com/pmndrs/zustand) - State Management

### What I learned

The gameplay function was a fun challenge to get the timings down on adding the width as the result is displayed. I didn't want the difference in width to just flash to the wider image so I added classes to give a smooth transition.

```js
function gamePlay() {
    setResult(null);
    setIsLoading(true);
    getAI();
    console.log("input: " + input + " ai: " + aiSelect);
    setTimeout(() => {
        setIsLoading(false);
    }, 1500);
    setTimeout(() => {
        logic(aiSelect, input);
        document.getElementById("announce")?.classList.add("widen");
        document.getElementById("playAgain")?.classList.add("show");
    }, 3000);
    return;
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

## Author

-   Website - [Charles Miller](https://charlesmiller.dev)
-   Frontend Mentor - [@charlesmiller0412](https://www.frontendmentor.io/profile/charlesmiller0412)

## Scripts

`npm run sass`

`npm run dev`
