
import React from 'react';
class XMockina extends React.Component {
  constructor(ctx, board, theLevel) {
    super();

    this.state = {
      ctx: ctx,
      board: board,
      theLevel: theLevel,
      currentPositionStart: [],
      nextPositionStart: [],
      directionStart: 1,
      batteryStart: [],
      battery: [],
      count: 0,
      winCount: 100,
      renderCount: 0,
    };
    this.setGame();
    }

  setGame(){
    this.setLevel();
    this.currentPosition = this.state.currentPositionStart;
    this.nextPosition = this.state.nextPositionStart;
    this.direction = this.state.directionStart;
    this.state.count = 0;
    this.render();
  }
  resetGame(){
    this.setLevel();
    this.currentPosition = this.currentPositionStart;
    this.nextPosition = this.nextPositionStart;
    this.direction = this.directionStart;
    this.state.count = 0;
    this.render();

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

  setLevel(bool){
    switch(this.state.theLevel){
      case "0":
      this.setState({
        currentPositionStart: [],
        nextPositionStart: [],
        battery: [],
        directionStart: 1,
        winCount: 1}
      );
        break;
      case "1":
      this.setState({
        currentPositionStart: [150,100],
        nextPositionStart: [150,100],
        battery: [[300, 100]],
        directionStart: 1,
        winCount: 1});
        break;
      case "2":
      this.setState({
        currentPositionStart: [150,300],
        nextPositionStart: [150,300],
        battery: [[300, 300], [300, 200]],
        directionStart: 1,
        wincount: 2,
      });
        break;
      // case "3":
      //   this.currentPositionStart = [150,300];
      //   this.nextPositionStart = [150,300];
      //   this.battery = [[300, 300]];
      //   this.directionStart = 1;
      //   this.wincount = 1;
      //   break;
      // case "4":
      //   this.currentPositionStart = [150,50];
      //   this.nextPositionStart = [150,50];
      //   this.battery = [ [200, 50 ], [250, 50], [250, 100], [250, 150],
      //                         [250, 200],[300, 250], [350, 250], [400, 250],
      //                         [450, 200], [450, 150], [450, 100], [50, 150],
      //                         [0, 300], [100, 200], [200, 200], [200, 150],
      //                         [200, 300], [200, 350], [300, 150], [350, 200],
      //                         [400, 200], [350, 0], [400, 0],[450, 300],
      //                         [500, 350]];
      //                         this.directionStart = 1;
      //   this.wincount = 8;
      //   break;
    }
  }


  render() {
    // debugger;
    console.log(this.theLevel);
      let ctx = this.state.ctx;
      let oldX = this.state.currentPosition[0];
      let oldY = this.state.currentPosition[1];
      ctx.clearRect(0,0 , 400, 600);
      ctx.clearRect(oldX, oldY,  50,  50);
      this.board.render();
      for (let i = 0; i < this.state.battery.length; i++) {
        let xPos = this.state.battery[i][0];
        let yPos = this.state.battery[i][1];
        this.renderBattery(xPos, yPos);
      }
      const base_image = new Image();
      let xPos = this.state.nextPosition[0];
      let yPos = this.state.nextPosition[1];
      let dir = this.state.direction;
      base_image.src = `assets/robot_${dir}.png`;
      base_image.onload = function(){
        ctx.drawImage(base_image, xPos, yPos);
      };
      this.state.currentPosition = [xPos, yPos];
  }

  renderBattery (xPos, yPos) {
    let ctx = this.state.ctx;
    const batteryIm = new Image();
    batteryIm.src = `assets/battery.png`;
      batteryIm.onload = function(){
        ctx.drawImage(batteryIm, xPos, yPos);
      };
  }

  turn(num) {
    console.log("turn");
    if (num) {
      this.state.direction = (this.state.direction += num);
      this.state.direction = (this.state.direction % 4);
      if (this.state.direction < 0){ this.state.direction += 4;}
      this.render();
    }

  }

  pickUp() {
    console.log("pickup");
    for (var i = 0; i < this.state.battery.length; i++) {
      if (this.state.currentPosition[0] === this.state.battery[i][0] &&
          this.state.currentPosition[1] === this.state.battery[i][1]){
            this.state.count++;
            this.state.battery[i] = [500,500];
      }
    }
    this.render();
  }

  win() {
    this.board.render();

    let ctx = this.state.ctx;
    ctx.font="100px VT323";
    // Create gradient
    let gradient=ctx.createLinearGradient(0,0,300,0);
    gradient.addColorStop("0","magenta");
    gradient.addColorStop("0.5","green");
    gradient.addColorStop("1.0","red");
    // Fill with gradient
    ctx.fillStyle=gradient;
    if (this.state.count >= this.state.winCount) {
        ctx.fillText("YOU WIN!",140,200);
        ctx.fillText("Play Again?",90,300);
    } else {
      ctx.fillText("YOU LOSE",140,200);
      ctx.fillText("Play Again?",90,300);
    }
    ctx.fillText("press start",90,360);
  }

  move()  {
    console.log("move");
    if ((this.state.direction === 0) && (this.state.currentPosition[1] - 50) >= 0) {
      this.state.nextPosition = [this.state.currentPosition[0], (this.state.currentPosition[1] - 50)];};
    if ((this.state.direction === 1) && (this.state.currentPosition[0] + 50) <= 550 ){ this.state.nextPosition = [(this.state.currentPosition[0] + 50), this.state.currentPosition[1]]; };
    if ((this.state.direction === 2) && (this.state.currentPosition[1] + 50) <= 350) { this.state.nextPosition = [this.state.currentPosition[0], (this.state.currentPosition[1] + 50)]; };
    if ((this.state.direction === 3) && (this.state.currentPosition[0] - 50) >= 0) { this.state.nextPosition = [(this.state.currentPosition[0] - 50), this.state.currentPosition[1]]; };
    this.render();
  };


}

export default XMockina;
