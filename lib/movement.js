
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
    this.moves=[];
    let count = 8;
    for (let i = 0; i < count; i++) {
      if (document.getElementById(`move${i}`).value === "sub1"){
        for (let j = 0; j < 8; j++) {
          this.moves.push(document.getElementById(`sub${j}`).value);
        }
      }
      this.moves.push(document.getElementById(`move${i}`).value);
    }

    this.runProgram();
    console.log(this.moves);
  }


  runProgram(i=0) {
    setTimeout(() => {
      if (i === 8) { this.xmockina.win();}
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
      if (this.moves[i] === "pick"){
        this.xmockina.pickUp();
      }
      i++;
      this.runProgram(i);
    },1000 );

  }
}
// let Movement = new Movement();
// Movement.DIR = this.direction;
// console.log(this.direction);
module.exports = Movement;
