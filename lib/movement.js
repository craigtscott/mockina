
class Movement {
  constructor(xmockina) {
    this.xmockina = xmockina;
    this.moves = [];
    // this.direction = 0;

    this.addStart();
    this.buildMoves();
    // this.runProgram();
  }

  addStart() {
    document.getElementById("start").addEventListener("click", () => {
      this.buildMoves();
    });
  }

  buildMoves() {
    let count = 8;
    this.moves = [];
    for (let i = 0; i < count; i++) {
      this.moves.push(document.getElementById(`move${i}`).value);
    }
    this.runProgram();
    console.log(this.moves);
  }


  runProgram(i=0) {
    setTimeout(() => {
      if (i >= 8) {
        clearTimeout(moveTimeout);
      }
      if (this.moves[i] === "move"){
        this.xmockina.move();
      }
      if (this.moves[i] === "wait"){ }
      if (this.moves[i] === "left"){
        this.xmockina.turn(-1);
      }
      if (this.moves[i] === "right"){
        this.xmockina.turn(1);
      }
      if (this.moves[i] === "pick"){ console.log("pick");}
      i++;
      this.runProgram(i);
    },1000 );

  }
}
// let Movement = new Movement();
// Movement.DIR = this.direction;
// console.log(this.direction);
module.exports = Movement;
