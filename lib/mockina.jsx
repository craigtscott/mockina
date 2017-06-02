import React from 'react';
import ReactDOM from 'react-dom';
import Inputs from './inputs';
import HowTo from './howto';
import Name from './name';
import XMockina from './x_mockina';
const Movement  = require("./movement");
const Board = require("./board");


document.addEventListener("DOMContentLoaded", () => {
  let dropDown = document.getElementById("dropDown");
  ReactDOM.render(<Inputs />, dropDown);
  let oneDiv = document.getElementById("howto");
  ReactDOM.render(<HowTo/>, oneDiv);
  let name = document.getElementById("name");
  ReactDOM.render(<Name/>, name);
  // let levels = document.getElementById("levels");
  // ReactDOM.render(<Levels />, levels);
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const ctx = canvasEl.getContext("2d");
  canvasEl.width = 600;
  canvasEl.height = 400;
  let board = new Board(ctx);
  let theLevel = "1";
  board.render();
  let inputs = new Inputs();
  let xmockina = new XMockina(ctx, board, theLevel, inputs);
  let movement = new Movement(xmockina, inputs);
  xmockina.setGame();

  document.getElementById("Start").addEventListener("click", () => {
      movement.buildMoves();
  });

  let levels = document.getElementById("levels");
  levels.addEventListener("change", (event) => {
    theLevel = event.target.value;
    board = new Board(ctx);
    board.render();
    xmockina = new XMockina(ctx, board, theLevel, inputs);
    movement = new Movement(xmockina);
    xmockina.setGame();
  });

  let reset = document.getElementById("Reset");
  reset.addEventListener("click", (event) => {
    board = new Board(ctx);
    board.render();
    xmockina = new XMockina(ctx, board, theLevel, inputs);
    movement = new Movement(xmockina);
    xmockina.setGame();
  });
}
);
