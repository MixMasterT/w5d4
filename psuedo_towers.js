// 1. Three towers implemented with arrays (nested arrays).

// 2. Starting board [[3, 2, 1], [], []]
// 3. Winning setup : [[], [3, 2, 1], []] or [[], [], [3, 2, 1]]

// Move Logic
// 1. Higher disk can't go on top of lower disk NO [1, 2, 3]


// Prompting
// 1. Ask for Take and Push towers.
// 2. Check validity of input and reprompt if invald





// Game logic
// 1. Prompt
// Execute move unless won


//  Prompt >> render board. reader.question >> move(inout), >> prompt(recursively)
// constructor:
// 1. set up board

play() {
  const board = this.board;
  const readline = require('readline');
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function prompt() {
    let pick, put;
    let isValid = true;
    reader.question("Choose pick up tower:", (resp) => {
      pick = parseInt(resp);
      console.log(board);
      if (board[pick] === []) { isValid = false; }
    });
    reader.question("Choose drop off tower:", (resp) => {
      put = parseInt(resp);
      if (board[put].slice(-1) < board[pick].slice(-1)){
        isValid = false;
      }
    });
    if (isValid) { return [pick, put]; }
    else {
      console.log("Sorry, that move is not valid!");
      prompt();
    }
  }
  prompt();
