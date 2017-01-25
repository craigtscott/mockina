
class XMockina {
  constructor(ctx, board) {
    this.ctx = ctx;
    this.board = board;
    this.currentPosition = [50,50];
    this.nextPosition = [50,50];
    this.direction = 1;

    this.move;
    this.turn;
    this.render;
  }

  render() {
    let ctx = this.ctx;
    let oldX = this.currentPosition[0];
    let oldY = this.currentPosition[1];
    ctx.clearRect(0,0 , 400, 600);
    ctx.clearRect(oldX, oldY,  50,  50);

    this.board.render();
    const base_image = new Image();
    let xPos = this.nextPosition[0];
    let yPos = this.nextPosition[1];
    let dir = this.direction;
    base_image.src = `assets/robot_${dir}.png`;
    base_image.onload = function(){
      ctx.drawImage(base_image, xPos, yPos);
    };
    this.currentPosition = [xPos, yPos];
  }

  turn(num) {
    if (num) {
      console.log(this.direction);
      this.direction = (this.direction += num);
      console.log(this.direction);
      this.direction = (this.direction % 4);
      if (this.direction < 0){ this.direction += 4;}
      console.log(this.direction);
      this.render();
    }

  }

  move()  {
    console.log(this.currentPosition);
    if ((this.direction === 0) && (this.currentPosition[1] - 50) >= 0) {
      this.nextPosition = [this.currentPosition[0], (this.currentPosition[1] - 50)];};
    if ((this.direction === 1) && (this.currentPosition[0] + 50) <= 600 ){ this.nextPosition = [(this.currentPosition[0] + 50), this.currentPosition[1]]; };
    if ((this.direction === 2) && (this.currentPosition[1] + 50) <= 400) { this.nextPosition = [this.currentPosition[0], (this.currentPosition[1] + 50)]; };
    if ((this.direction === 3) && (this.currentPosition[0] - 50) >= 0) { this.nextPosition = [(this.currentPosition[0] - 50), this.currentPosition[1]]; };

    console.log(this.currentPosition);
    this.render();
  };


}

module.exports = XMockina;
