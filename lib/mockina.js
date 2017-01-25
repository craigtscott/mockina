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
  const xmockina = new XMockina(ctx, board);
  const movement = new Movement(xmockina);
  xmockina.render();



}
);
