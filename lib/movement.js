class Movement {
  constructor() {
    this.moves = [];
    this.direction = 0;

    this.addStart();
    this.buildMoves();
    this.runProgram();
    this.turn();
  }

  addStart() {
    document.getElementById("start").addEventListener("click", () => {
      this.buildMoves();
      this.runProgram();
    });
  }

  buildMoves() {
    let count = 8;
    this.moves = [];
    for (var i = 0; i < count; i++) {
      this.moves.push(document.getElementById(`move${i}`).value);
    }

  }

  turn(num) {
    if (num) {
      debugger;
      console.log(this.direction);
      this.direction = (this.direction += num);
      if (this.direction < 0) {this.direction === 0;}
      if (this.direction > 3) {this.direction === 3;}
      console.log(this.direction);
    }

  }

  runProgram() {
    for (var i = 0; i < this.moves.length; i++) {
      if (this.moves[i] === "move"){ console.log("move");}
      if (this.moves[i] === "wait"){ console.log("wait");}
      if (this.moves[i] === "left"){ this.turn(-1);}
      if (this.moves[i] === "right"){ this.turn(1);}
      if (this.moves[i] === "pick"){ console.log("pick");}
      setTimeout('',100);

    }
  }
}
// let Movement = new Movement();
// Movement.DIR = this.direction;
// console.log(this.direction);
module.exports = Movement;
