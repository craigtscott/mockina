const Game = require("./game");
const Movement  = require("./movement");
// const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const ctx = canvasEl.getContext("2d");
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;
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
  const movement = new Movement();

  base_image = new Image();
  const dir = 0;
  console.log(movement.direction);
  base_image.src = `assets/robot_${dir}.png`;
  base_image.onload = function(){
    ctx.drawImage(base_image, 100, 100);
  };

  const game = new Game();
  // new GameView(game, ctx).start();
});
