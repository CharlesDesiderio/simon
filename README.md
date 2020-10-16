# simon

A README.md file with explanations of the technologies used, the approach taken, a link to your live site, unsolved problems, etc.

## Technologies

This Simon clone makes use of HTML, CSS, JavaScript and jQuery.

## Approach

The game itself is a relatively simple concept, featuring four color-coded buttons. But from the start of the project, I had the idea of expansion and adding layers of difficulty to the project. So to facilitate this, the code was structured in a way that all the facets of the game could be easily upgraded. In the first phase, before the final style was decided on, I regularly tested the game with varying numbers of buttons. Additionally, the the speed of the game can be increased without much alteration, and can even be calculated mathematically, though this feature doesn't exist in the current form of the game.

The main idea behind the design was to allow customization and avoid having any aspect (beyond the basic rule of 'match the pattern') set in stone.

## Unresolved Issues

The grand scheme of the design was allowing multiple levels of difficulty, user-selectable amounts of colors, an option to increase speed over time and a countdown timer. Most of these ideas were dropped, but the skeletons of them can still be seen in the code. The most notable example is the random color generation function still being called when the game is called to generate more buttons than there are colors in the colors array.

## Link

The link to the live site can be found at [Github Pages](https://charlesdesiderio.github.io/simon/)
