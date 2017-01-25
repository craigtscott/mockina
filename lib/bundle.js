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
	  const xmockina = new XMockina();
	  const movement = new Movement(xmockina);
	
	
	  const base_image = new Image();
	  let x_pos = xmockina.currentPosition[0];
	  let y_pos = xmockina.currentPosition[1];
	  console.log(x_pos);
	  let dir = 0;
	  base_image.src = `assets/robot_${dir}.png`;
	  base_image.onload = function(){
	    ctx.drawImage(base_image, x_pos, y_pos);
	
	  };
	
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
	    this.direction = 0;
	
	    this.addStart();
	    this.buildMoves();
	    this.runProgram();
	  }
	
	  addStart() {
	    document.getElementById("start").addEventListener("click", () => {
	      this.buildMoves();
	      this.runProgram();
	    });
	  }
	
	  buildMoves() {
	    let count = 8;
	    this.moves = [];
	    for (var i = 0; i < count; i++) {
	      this.moves.push(document.getElementById(`move${i}`).value);
	    }
	
	  }
	
	
	
	  runProgram() {
	    for (var i = 0; i < this.moves.length; i++) { setTimeout(() => {
	      if (this.moves[i] === "move"){ console.log("move");}
	      if (this.moves[i] === "wait"){ console.log("wait");}
	      if (this.moves[i] === "left"){ this.xmockina.turn(-1);
	      }
	      if (this.moves[i] === "right"){ this.xmockina.turn(1);}
	      if (this.moves[i] === "pick"){ console.log("pick");}
	    }, 1000);
	
	    }
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


/***/ },
/* 4 */
/***/ function(module, exports) {

	class Board {
	  constructor(ctx){
	    this.ctx = ctx;
	
	
	
	
	  }
	  render() {
	    const ctx = this.ctx
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