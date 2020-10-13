
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


let computerMoves = [];
let numberOfChoices = 4;
let currentTurn = 0;
let colorsArray = ['red', 'yellow', 'blue', 'green', 'orange', 'indigo', 'purple']

// Base Game Logic
const gameLoop = () => {
  $('#start').css('display', 'none')
  $('#message').empty()
  // Get computer move
  getComputerMove();
  console.log(computerMoves)

  generateBoard();

  // Play computer moves
  computerReplay(0)

  // Wait for player input. Each button should have an event listener which passes target id to compare against computer move.
  // playerRepeat()

}

const generateBoard = () => {
  
  $('#game').empty();
  for (let i = 0; i < numberOfChoices; i++) {
    let $colorButton = $('<div>')
    $colorButton.addClass('colorButton')
    $colorButton.css('background-color', colorsArray[i])
    $colorButton.attr('id', i) // Identify which button is which. The internal logic doesn't care about the colors, that will all be done with CSS
    $colorButton.on('click', choice)
    $('#game').append($colorButton)
  }
  
  $('#game')
}

// Randomly select computer move
const getComputerMove = () => {
  computerMoves.push(Math.floor(Math.random() * numberOfChoices))
}

// Replay computer pattern
const computerReplay = (move) => {
  // $('#startGame').prop('disabled', false)
  if (move < computerMoves.length) {

    // Found information about the CSS brightness filter (as well as opacity) and its use without preprocessors here: https://stackoverflow.com/questions/1625681/dynamically-change-color-to-lighter-or-darker-by-percentage-css-javascript

    $(`#${computerMoves[move]}`).css('filter', 'brightness(50%)')
    setTimeout(() => {
      $(`#${computerMoves[move]}`).css('filter', 'brightness(100%)')
    }, 350)
    $(`#${computerMoves[move]}`).empty()
    // $(`#${computerMoves[move]}`).text(move)
    // $(`#${computerMoves[move]}`).append(`<div>${computerMoves[move]}</div>`)
    setTimeout(() => {
      computerReplay(move + 1)
    }, 600)

    // $('#startGame').prop('disabled', true)
  }
}

// Manage input from player on color square click
const choice = (event) => {
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

const resetGame = () => {
computerMoves = [];
currentTurn = 0;
}

$(() => {

  $('#startGame').on('click', gameLoop)

})