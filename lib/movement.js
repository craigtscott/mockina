
class Movement {
  constructor(xmockina) {
    this.xmockina = xmockina;
    this.moves = {};
    this.addStart();
    this.buildMoves();
    this.runProgram = this.runProgram.bind(this);
    this.run = false;
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
        this.run = true;

      }

    });
  }

  buildMoves() {
    if (this.run === true) {
      this.moves = {};
      let move = 0;
      let count = 8;
      if (document.getElementById('inputs')){
        for (let i = 0; i < count; i++) {
          if (document.getElementById(`move${i}`).value === "sub1"){
            for (let j = 0; j < 8; j++) {
              this.moves[move] = [document.getElementById(`sub${j}`).value, ` subs${j}`];
              move += 1;
            }
          } else {
            this.moves[move] = [document.getElementById(`move${i}`).value, ` move${i}`];
            move += 1;
          }
        }
      }
      if (this.moves[0] !== "wait"){
        console.log(this.moves);
        this.runProgram();
      }
    }
  }


  runProgram(i=0) {
    const moves = this.moves;
    setTimeout(() => {
      if (i === Object.keys(moves).length) { this.xmockina.win();}
      switch (this.moves[i][0]){
        case "move":
          this.xmockina.move();
          break;
        case "left":
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
