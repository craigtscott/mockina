const Game = require("./game");
const Movement  = require("./movement");
const XMockina  = require("./x_mockina");
const Board = require("./board");


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
