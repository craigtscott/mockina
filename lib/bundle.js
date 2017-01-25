/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(1);
	const Movement  = __webpack_require__(2);
	const XMockina  = __webpack_require__(3);
	const Board = __webpack_require__(4);
	
	
	document.addEventListener("DOMContentLoaded", () => {
	  const canvasEl = document.getElementsByTagName("canvas")[0];
	  const ctx = canvasEl.getContext("2d");
	  canvasEl.width = Game.DIM_X;
	  canvasEl.height = Game.DIM_Y;
	  const board = new Board(ctx);
	  board.render();
	  const xmockina = new XMockina(ctx, board);
	  const movement = new Movement(xmockina);
	  xmockina.render();
	
	
	
	}
	);


/***/ },
/* 1 */
/***/ function(module, exports) {

	
	
	class Game {
	  constructor() {
	    this.board = [];
	
	  }
	
	
	
	}
	
	Game.BG_COLOR = "#C0C0C0";
	Game.DIM_X = 600;
	Game.DIM_Y = 400;
	Game.FPS = 32;
	
	
	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

	
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


/***/ },
/* 3 */
/***/ function(module, exports) {

	
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


/***/ },
/* 4 */
/***/ function(module, exports) {

	class Board {
	  constructor(ctx){
	    this.ctx = ctx;
	
	
	
	
	  }
	  render() {
	    const ctx = this.ctx;
	    ctx.clearRect(0, 0, 600, 400);
	    ctx.fillStyle = "black";
	    ctx.fillRect(0, 0, 600, 400);
	    ctx.strokeStyle = "red";
	    ctx.beginPath();
	    ctx.moveTo(0, 50); ctx.lineTo(600, 50);
	    ctx.moveTo(0,100); ctx.lineTo(600, 100);
	    ctx.moveTo(0,150); ctx.lineTo(600, 150);
	    ctx.moveTo(0,200); ctx.lineTo(600, 200);
	    ctx.moveTo(0,250); ctx.lineTo(600, 250);
	    ctx.moveTo(0,300); ctx.lineTo(600, 300);
	    ctx.moveTo(0,350); ctx.lineTo(600, 350);
	    ctx.moveTo(0,400); ctx.lineTo(600, 400);
	    ctx.moveTo(0,450); ctx.lineTo(600, 450);
	    ctx.moveTo(0,500); ctx.lineTo(600, 500);
	    ctx.moveTo(0,550); ctx.lineTo(600, 550);
	
	    ctx.moveTo(50, 0); ctx.lineTo(50, 400);
	    ctx.moveTo(100,0); ctx.lineTo(100, 400);
	    ctx.moveTo(150,0); ctx.lineTo(150, 400);
	    ctx.moveTo(200,0); ctx.lineTo(200, 400);
	    ctx.moveTo(250,0); ctx.lineTo(250, 400);
	    ctx.moveTo(300,0); ctx.lineTo(300, 400);
	    ctx.moveTo(350,0); ctx.lineTo(350, 400);
	    ctx.moveTo(400,0); ctx.lineTo(400, 400);
	    ctx.moveTo(450,0); ctx.lineTo(450, 400);
	    ctx.moveTo(500,0); ctx.lineTo(500, 400);
	    ctx.moveTo(550,0); ctx.lineTo(550, 400);
	
	    ctx.stroke();
	  };
	}
	
	module.exports = Board;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map