
class Movement {
  constructor(xmockina) {
    this.xmockina = xmockina;
    this.moves = [];
    this.direction = 0;

    this.addStart();
    this.buildMoves();
    this.runProgram();
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



  runProgram() {
    for (var i = 0; i < this.moves.length; i++) { setTimeout(() => {
      if (this.moves[i] === "move"){ console.log("move");}
      if (this.moves[i] === "wait"){ console.log("wait");}
      if (this.moves[i] === "left"){ this.xmockina.turn(-1);
      }
      if (this.moves[i] === "right"){ this.xmockina.turn(1);}
      if (this.moves[i] === "pick"){ console.log("pick");}
    }, 1000);

    }
  }
}
// let Movement = new Movement();
// Movement.DIR = this.direction;
// console.log(this.direction);
module.exports = Movement;
