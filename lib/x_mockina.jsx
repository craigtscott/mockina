class XMockina  {
  constructor(ctx, board, theLevel, inputs) {
    this.ctx = ctx;
    this.board = board;
    this.theLevel = theLevel;
    this.inputs = inputs;
    this.currentPositionStart = [];
    this.nextPositionStart = [];
    this.directionStart = 1;
    this.batteryStart = [];
    this.battery = [];
    this.count = 0;
    this.winCount = 100;
    this.renderCount = 0;
    }

  setGame(){
    this.setLevel();
    this.currentPosition = this.currentPositionStart;
    this.nextPosition = this.nextPositionStart;
    this.direction = this.directionStart;
    this.count = 0;
    this.render();
  }
  resetGame(){
    this.setLevel();
    this.currentPosition = this.currentPositionStart;
    this.nextPosition = this.nextPositionStart;
    this.direction = this.directionStart;
    this.count = 0;
    this.render();

  }

  componentDidLoad(){
    inputs.setCount(this.winCount);
  }



  resetPos() {
    this.currentPositionStart = [];
    this.nextPositionStart = [];
    this.directionStart = 1;
    this.batteryStart = [];
    this.battery = [];
    this.count = 0;
    this.winCount = 1000;
  }

  getWinCount() {
    return(this.winCount);
  }

  setLevel(bool){
    switch(this.theLevel){
      case "0":
        this.currentPositionStart = [];
        this.nextPositionStart = [];
        this.battery = [];
        this.directionStart = 1;
        this.winCount = 1;
        break;
      case "1":
        this.currentPositionStart = [150,100];
        this.nextPositionStart = [150,100];
        this.battery = [[300, 100]];
        this.directionStart = 1;
        this.winCount = 1;
        break;
      case "2":
        this.currentPositionStart = [150,300];
        this.nextPositionStart = [150,300];
        this.battery = [[300, 300], [300, 200]];
        this.directionStart = 1;
        this.winCount = 2;
        break;
      case "3":
        this.currentPositionStart = [150,300];
        this.nextPositionStart = [150,300];
        this.battery = [[300, 300], [400, 300], [400, 200]];
        this.directionStart = 1;
        this.winCount = 3;
        break;
      case "4":
        this.currentPositionStart = [150,50];
        this.nextPositionStart = [150,50];
        this.battery = [ [200, 50 ], [250, 50], [250, 100], [250, 150],
                              [250, 200],[300, 250], [350, 250], [400, 250],
                              [450, 200], [450, 150], [450, 100], [50, 150],
                              [0, 300], [100, 200], [200, 200], [200, 150],
                              [200, 300], [200, 350], [300, 150], [350, 200],
                              [400, 200], [350, 0], [400, 0],[450, 300],
                              [500, 350]];
                              this.directionStart = 1;
        this.winCount = 8;
        break;
    }
  }


  render() {
    console.log(this.theLevel);
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
    console.log("turn");
    if (num) {
      this.direction = (this.direction += num);
      this.direction = (this.direction % 4);
      if (this.direction < 0){ this.direction += 4;}
      this.render();
    }

  }

  pickUp() {
    console.log("pickup");
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
    this.board.render();
    let ctx = this.ctx;
    ctx.font="100px VT323";
    // Create gradient
    let gradient=ctx.createLinearGradient(0,0,300,0);
    gradient.addColorStop("0","magenta");
    gradient.addColorStop("0.5","green");
    gradient.addColorStop("1.0","red");
    // Fill with gradient
    ctx.fillStyle=gradient;
    if (this.count >= this.winCount) {
        ctx.fillText("YOU WIN!",140,100);
        ctx.fillText("Play Again?",90,200);
    } else {
      ctx.fillText("YOU LOSE",140,100);
      ctx.fillText("Play Again?",90,200);
    }
    ctx.fillText("Press Reset",90,300);
  }

  move()  {
    console.log("move");
    if ((this.direction === 0) && (this.currentPosition[1] - 50) >= 0) {
      this.nextPosition = [this.currentPosition[0], (this.currentPosition[1] - 50)];};
    if ((this.direction === 1) && (this.currentPosition[0] + 50) <= 550 ){ this.nextPosition = [(this.currentPosition[0] + 50), this.currentPosition[1]]; };
    if ((this.direction === 2) && (this.currentPosition[1] + 50) <= 350) { this.nextPosition = [this.currentPosition[0], (this.currentPosition[1] + 50)]; };
    if ((this.direction === 3) && (this.currentPosition[0] - 50) >= 0) { this.nextPosition = [(this.currentPosition[0] - 50), this.currentPosition[1]]; };
    this.render();
  };


}

module.exports = XMockina;
