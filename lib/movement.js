
class Movement {
  constructor(xmockina) {
    this.xmockina = xmockina;
    this.moves = [];
    // this.direction = 0;

    this.addStart();
    this.buildMoves();
    // this.runProgram();
    this.runProgram = this.runProgram.bind(this);
  }

  addStart() {
    let played = false;
    document.getElementById("start").addEventListener("click", () => {
      // debugger;
      if (played === true){
        this.xmockina.resetGame();
        played = false;
      } else {
        this.buildMoves();
        played = true;
      }

    });
  }

  buildMoves() {
    // debugger;
    this.moves=[];
    let count = 8;
    if (document.getElementById('inputs')){
      for (let i = 0; i < count; i++) {
        if (document.getElementById(`move${i}`).value === "sub1"){
          for (let j = 0; j < 8; j++) {
            this.moves.push(document.getElementById(`sub${j}`).value);
          }
        } else {
          this.moves.push(document.getElementById(`move${i}`).value);

        }
      }
    }
    if (this.moves[0] !== "wait"){
      console.log(this.moves);
      this.runProgram();
    }
  }


  runProgram(i=0) {
    // debugger;
    const moves = this.moves;
    setTimeout(() => {
      if (i === moves.length) { this.xmockina.win();}
      // debugger;
      switch (moves[i]){
        case "move":
          this.xmockina.move();
          break;
        case "left":
        // debugger;
          this.xmockina.turn(-1);
          break;
        case "right":
          this.xmockina.turn(1);
          break;
        case "pick":
          this.xmockina.pickUp();
          break;
        case "wait":
          break;
          console.log("");
        default:
      }
      i++;
      this.runProgram(i);
    },775 );

  }
}
// let Movement = new Movement();
// Movement.DIR = this.direction;
// console.log(this.direction);
module.exports = Movement;
