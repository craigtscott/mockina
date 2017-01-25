
class XMockina {
  constructor(ctx, board) {
    this.ctx = ctx;
    this.board = board;
    this.currentPosition = [100,50];
    this.nextPosition = [100,50];
    this.direction = 1;
    this.battery = [[200,50], [300, 100]];
    this.count = 0;
    this.winCount = 2;

    this.move;
    this.turn;
    this.render;
    this.battery;
    this.pickUp;
    this.win;
  }

  render() {
    let ctx = this.ctx;
    let oldX = this.currentPosition[0];
    let oldY = this.currentPosition[1];
    ctx.clearRect(0,0 , 400, 600);
    ctx.clearRect(oldX, oldY,  50,  50);

    this.board.render();
    for (let i = 0; i < this.battery.length; i++) {
      let xPos = this.battery[i][0];
      let yPos = this.battery[i][1];
      this.renderBattery(xPos, yPos);
    }
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

  renderBattery (xPos, yPos) {
    let ctx = this.ctx;
    const batteryIm = new Image();
    batteryIm.src = `assets/battery.png`;
      batteryIm.onload = function(){
        ctx.drawImage(batteryIm, xPos, yPos);
      };
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

  pickUp() {
    for (var i = 0; i < this.battery.length; i++) {
      if (this.currentPosition[0] === this.battery[i][0] &&
          this.currentPosition[1] === this.battery[i][1]){
            this.count++;
            this.battery[i] = [500,500];
      }
    }
    this.render();
  }

  win() {

    let ctx = this.ctx;
    if (this.count === this.winCount) {
      ctx.font="35px Verdana";
        // Create gradient
        let gradient=ctx.createLinearGradient(0,0,300,0);
        gradient.addColorStop("0","magenta");
        gradient.addColorStop("0.5","green");
        gradient.addColorStop("1.0","red");
        // Fill with gradient
        ctx.fillStyle=gradient;
        ctx.fillText("YOU WIN!",200,200);
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
