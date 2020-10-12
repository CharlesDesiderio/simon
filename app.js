
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

  // Play computer moves
  computerReplay(0)

  // Wait for player input. Each button should have an event listener which passes target id to compare against computer move.


}

// Randomly select computer move
const getComputerMove = () => {
  computerMoves.push(Math.ceil(Math.random() * numberOfChoices))
}

// Replay computer pattern
const computerReplay = (move) => {
  if (move < computerMoves.length) {
    $('#game').append(`<div>${computerMoves[move]}</div>`)
    setTimeout(() => {
      computerReplay(move + 1)
    }, 500)
  }
}


$(() => {

  $('#startGame').on('click', gameLoop)

})