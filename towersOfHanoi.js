const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class TowersGame {

  constructor(numDisk = 3) {
    this.board = [[],[],[]];
    for (let i = numDisk; i > 0; i--) {
      this.board[0].push(i);
    }
  }

  display() {
    console.log(this.board);
  }

  gameWon() {
    return ((this.board[0].length === 0) &&
                  (this.board[1].length === 0 ||
                    this.board[2].length === 0 ));
  }

  move(moveArr) {
    this.board[moveArr[1]].push(this.board[moveArr[0]].pop());
    this.display();
    console.log(this.gameWon());

    if (this.gameWon()) {
      this.display();
      console.log("Congrats you win!!");
      reader.close();
    } else {
      this.prompt();
    }
  }

  isValid(moveArr) {
    const pick = moveArr[0];
    const put = moveArr[1];
    const pickTower = this.board[pick];
    const putTower = this.board[put];
    let valid = true;

    if (pick === put) { valid = false; }

    else if (pickTower.length === 0) { valid = false; }

    else if (putTower.length !== 0) {
      if (pickTower[pickTower.length - 1] > putTower[putTower.length - 1]) {
         valid = false;
      }
    }

    if (valid) { this.move([pick, put]); }
    else {
      console.log("Sorry, this move is not valid. Try again.");
      this.prompt();
    }
  }

  prompt( callback ) {
    let pick, put;

    this.display();

    reader.question("Choose pick up tower:", (pickResp) => {
      reader.question("Choose drop off tower:", (putResp) => {
            this.isValid([parseInt(pickResp), parseInt(putResp)]);
      });
    });
  }


  play() {
    this.prompt();
  }
}

const g = new TowersGame();

g.play();
