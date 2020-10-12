
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

// Base Game Logic
const gameLoop = () => {
  
  // Get computer move
  getComputerMove();
  console.log(computerMoves)

  generateBoard();

  // Play computer moves
  computerReplay(0)

  // Wait for player input. Each button should have an event listener which passes target id to compare against computer move.


}

const generateBoard = () => {
  
  $('#game').empty();
  for (let i = 0; i < numberOfChoices; i++) {
    let $colorButton = $('<div>')
    $colorButton.addClass('colorButton')
    $colorButton.attr('id', i) // Identify which button is which. The internal logic doesn't care about the colors, that will all be done with CSS

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
  $('#startGame').prop('disabled', false)
  if (move < computerMoves.length) {
    $(`#${computerMoves[move]}`).empty()
    $(`#${computerMoves[move]}`).text(move)
    $(`#${computerMoves[move]}`).append(`<div>${computerMoves[move]}</div>`)
    setTimeout(() => {
      computerReplay(move + 1)
    }, 500)

    $('#startGame').prop('disabled', true)
  }
}


$(() => {

  $('#startGame').on('click', gameLoop)

})