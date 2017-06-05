
class Movement {
  constructor(xmockina, inputs) {
    this.xmockina = xmockina;
    this.inputs = inputs;
    this.moves = {};
    // this.addStart();
    this.buildMoves();
    this.runProgram = this.runProgram.bind(this);
    this.run = true;
    this.sub = [];
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
              this.moves[move] = [document.getElementById(`sub${j}`).value, `sub${j}`, `move${i}`];
              move += 1;
            }
          } else {
            this.moves[move] = [document.getElementById(`move${i}`).value, `move${i}`];
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
    let moves = this.moves;
    setTimeout(() => {
      if (i === Object.keys(moves).length) {
        this.clearHighLight("move7");
        this.xmockina.win();}
      if (i > 0) {
        this.clearHighLight(this.moves[i - 1][1]);
      }
      if (this.sub[0] && this.moves[i] && ( this.moves[i].length === 2 || this.moves[i - 1][1] === "sub7") ){
        this.clearHighLight(this.sub[0]);
        this.sub.pop();
      } else if (this.moves[i][2]){
        debugger;
        this.highLight(this.moves[i][2]);
        this.sub.unshift(this.moves[i][2]);
      }
      this.highLight(this.moves[i][1]);
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
        default:
      }
      i++;
      this.runProgram(i);
    },
    775 );

  }

  highLight (input) {
    var menu= document.getElementById(input);
    menu.className = 'red';
  }

  clearHighLight(input) {
    var menu= document.getElementById(input);
    menu.className = input;
  }
}

module.exports = Movement;
