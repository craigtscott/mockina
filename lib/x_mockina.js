
class XMockina {
  constructor() {
    this.currentPosition = [50,50];
    this.direction = 0;

    this.move;
    this.turn;
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

  move (dir)  {
    if (!dir) { dir === this.direction;}
  };


}

module.exports = XMockina;
