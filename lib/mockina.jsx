import React from 'react';
import ReactDOM from 'react-dom';
import Inputs from './inputs';
const Movement  = require("./movement");
const XMockina  = require("./x_mockina");
const Board = require("./board");


document.addEventListener("DOMContentLoaded", () => {
  let dropDown = document.getElementById("dropDown");
  ReactDOM.render(<Inputs />, dropDown);
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const ctx = canvasEl.getContext("2d");
  canvasEl.width = 600;
  canvasEl.height = 400;
  const board = new Board(ctx);
  board.render();
  const xmockina = new XMockina(ctx, board);
  const movement = new Movement(xmockina);
  xmockina.render();



}
);
