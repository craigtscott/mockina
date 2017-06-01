import React from 'react';
import ReactDOM from 'react-dom';
import Inputs from './inputs';
import HowTo from './howto';
import Name from './name';
const Movement  = require("./movement");
const XMockina  = require("./x_mockina");
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
  let xmockina = new XMockina(ctx, board, theLevel);
  let movement = new Movement(xmockina);
  xmockina.render();
  var levels = document.getElementById("levels");
  levels.addEventListener("change", (event) => {
    theLevel = event.target.value;
    board = new Board(ctx);
    board.render();
    xmockina = new XMockina(ctx, board, theLevel);
    movement = new Movement(xmockina);
    xmockina.render();
  });
}
);
