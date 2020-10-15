
// User can see a game display

// User can see a 'start game' button

// User can see an 'instructions' button.

// Instructions button shows a modal with rules

// Start game will initiate gameplay

// Computer will play one move. Stores move in an array

// Player repeats move.
// On success, computer plays again.
// On fail, game ends.

// Computer picks new move, adds next move adds move to array. Replays sequence in array from start.

// Player repeats sequence (game play loop ends here, go back to success/fail condition)


// '#003DB5', '#C30110', '#E4B522', '#108047'

let computerMoves = [];
let numberOfChoices = 4;
let currentTurn = 0;
let colorsArray = ['#003DB5', '#C30110', '#108047', '#E4B522']
// Initial set of colors from flatuicolors.com
// let colorsArray = ['#e74c3c', '#f1c40f', '#2980b9', '#27ae60', '#d35400', '#34495e', '#8e44ad']
let isComputerTurn = false;

// Base Game Logic
const gameLoop = () => {
  // $('#start').css('display', 'none') // Hide 'Start Game' button
  $('#message').empty() // Clear any previous 'Game Over' message

  // Get computer move
  getComputerMove();
  console.log(computerMoves) // Remove this line for completed version; it shows the computer move list in the console.

  // Create the game board. Uses numberOfChoices to determine game size.
  generateBoard();

  // Replay computer moves for player to copy.
  computerReplay(0)

  // Event handlers on squares will handle the logic for tracking the player move and will restart the game loop when the player matches all the correct moves.

}

const generateBoard = () => {
  
  $('#game').empty();
  for (let i = 0; i < numberOfChoices; i++) {
    let $bgDiv = $('<div>')
    $bgDiv.addClass('bg-div')
    let $colorButton = $('<div>')
    $colorButton.addClass('colorButton')
    
    // Chose a color from array of colors, If there are more buttons than colors, pick a random color
    if (i < colorsArray.length) {
      $colorButton.css('background-color', colorsArray[i])
    } else {
      $colorButton.css('background-color', `rgba(${randomColor()}, ${randomColor()}, ${randomColor()})`)
    }
    $colorButton.attr('id', i) // Identify which button is which. The internal logic doesn't care about the colors, that will all be done with CSS
    $colorButton.on('click', choice)
    $($bgDiv).append($colorButton)
    $('#game').append($bgDiv)
  }
  
  $('#game').children().eq(0).css('border-radius', '50% 50% 0 0')
  $('#game').children().eq(1).css('border-radius', '50% 50% 0 0')
  $('#game').children().eq(2).css('border-radius', '0 0 50% 50%')
  $('#game').children().eq(3).css('border-radius', '0 0 50% 50%')
}

// Randomly select computer move
const getComputerMove = () => {
  computerMoves.push(Math.floor(Math.random() * numberOfChoices))
}

// Replay computer pattern
const computerReplay = (move) => {
  if (move < computerMoves.length) {
    // Disable input event handlers on computer replay.
    // Use a flag variable like 'isComputerTurn' and set true in else statement and have a check in the on 'choice' function?
    isComputerTurn = true;

    // Found information about the CSS brightness filter (as well as opacity) and its use without preprocessors here: https://stackoverflow.com/questions/1625681/dynamically-change-color-to-lighter-or-darker-by-percentage-css-javascript

    $(`#${computerMoves[move]}`).css('filter', 'brightness(50%)')
    // $(`#${computerMoves[move]}`).css('border', '2px solid black')
    setTimeout(() => {
      $(`#${computerMoves[move]}`).css('filter', 'brightness(100%)')
      // $(`#${computerMoves[move]}`).css('border', 'none')

    }, 350)
    setTimeout(() => {
      computerReplay(move + 1)
    }, 600)
  } else {
    isComputerTurn = false
  }
}

// Manage input from player on color square click
const choice = (event) => {
  if (isComputerTurn === true) {
    return;
  }
  console.log($(event.currentTarget).attr('id'))
  if (parseInt($(event.currentTarget).attr('id')) === computerMoves[currentTurn]) {
    console.log(`yes! turn ${currentTurn}`)
    currentTurn++;
    if (currentTurn === computerMoves.length) {
      console.log('end of turns')
      currentTurn = 0;
      gameLoop();
    }
  } else {
    console.log(`you lose ${currentTurn}`)
    // Reset game here!
    resetGame()
    $('#message').html('<h1>Game Over</h1>')
    $('#start').css('display', 'block')
  }
}

const randomColor = () => {
  return Math.floor(Math.random() * 256)
}

const resetGame = () => {
  computerMoves = [];
  currentTurn = 0;
}

$(() => {

  $('#startGame').on('click', gameLoop)

})


// Mainly for future reference: https://stackoverflow.com/questions/12813573/position-icons-into-circle and http://jsfiddle.net/ThiefMaster/LPh33/4/
// Dynamically generate a ring of elements. This is something I may come back to for my stretch goal.