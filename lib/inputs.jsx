import React from 'react';

class Inputs extends React.Component {
  constructor(){
    super();

    this.state = {
    };

    this.demo = this.demo.bind(this);
    };

  demo() {
    let element0 = document.getElementById('move0');
    element0.value = "move";
    let element1 = document.getElementById('move1');
    element1.value = "pick";
    let element2 = document.getElementById('move2');
    element2.value = "move";
    let element3 = document.getElementById('move3');
    element3.value = "pick";
    let element4 = document.getElementById('move4');
    element4.value = "right";
    let element5 = document.getElementById('move5');
    element5.value = "sub1";
    let element6 = document.getElementById('move6');
    element6.value = "sub1";
    let element7 = document.getElementById('move7');
    element7.value = "wait";
    let element8 = document.getElementById('sub0');
    element8.value = "move";
    let element9 = document.getElementById('sub1');
    element9.value = "pick";
    let element10 = document.getElementById('sub2');
    element10.value = "move";
    let element11 = document.getElementById('sub3');
    element11.value = "pick";
    let element12 = document.getElementById('sub4');
    element12.value = "move";
    let element13 = document.getElementById('sub5');
    element13.value = "pick";
    let element14 = document.getElementById('sub6');
    element14.value = "move";
    let element15 = document.getElementById('sub7');
    element15.value = "left";
  };
  render(){
    return(
      <div id="inputs" className="inputs">
        <button id="start" >Start</button>
        <div className="div"><h1>main</h1></div>
        <div className="moves">
          <select  id="move0" className="move0">
              <option value="wait" >wait</option>
              <option value="move" >move</option>
              <option value="left" >turn left</option>
              <option value="right" >turn right</option>
              <option value="pick" >pick up</option>
              <option value="sub1" >subroutine</option>
          </select><br />
          <select  id="move1" className="move1">
              <option value="wait" >wait</option>
              <option value="move" >move</option>
              <option value="left" >turn left</option>
              <option value="right" >turn right</option>
              <option value="pick" >pick up</option>
              <option value="sub1" >subroutine</option>
          </select><br />
          <select  id="move2" className="move2">
              <option value="wait" >wait</option>
              <option value="move" >move</option>
              <option value="left" >turn left</option>
              <option value="right" >turn right</option>
              <option value="pick" >pick up</option>
              <option value="sub1" >subroutine</option>
          </select><br />
          <select  id="move3" className="move3">
              <option value="wait" >wait</option>
              <option value="move" >move</option>
              <option value="left" >turn left</option>
              <option value="right" >turn right</option>
              <option value="pick" >pick up</option>
              <option value="sub1" >subroutine</option>
          </select><br />
          <select  id="move4" className="move4">
              <option value="wait" >wait</option>
              <option value="move" >move</option>
              <option value="left" >turn left</option>
              <option value="right" >turn right</option>
              <option value="pick" >pick up</option>
              <option value="sub1" >subroutine</option>
          </select><br />
          <select  id="move5" className="move5">
              <option value="wait" >wait</option>
              <option value="move" >move</option>
              <option value="left" >turn left</option>
              <option value="right" >turn right</option>
              <option value="pick" >pick up</option>
              <option value="sub1" >subroutine</option>
          </select><br />
          <select  id="move6" className="move6">
              <option value="wait" >wait</option>
              <option value="move" >move</option>
              <option value="left" >turn left</option>
              <option value="right" >turn right</option>
              <option value="pick" >pick up</option>
              <option value="sub1" >subroutine</option>
          </select><br />
          <select  id="move7" className="move7">
              <option value="wait" >wait</option>
              <option value="move" >move</option>
              <option value="left" >turn left</option>
              <option value="right" >turn right</option>
              <option value="pick" >pick up</option>
              <option value="sub1" >subroutine</option>
          </select>
        </div>
<div className="div"><h1>subroutine</h1></div>
        <div className="sub">
          <select  id="sub0" className="sub0">
              <option value="wait" >wait</option>
              <option value="move" >move</option>
              <option value="left" >turn left</option>
              <option value="right" >turn right</option>
              <option value="pick" >pick up</option>
          </select><br />
        <select  id="sub1" className="sub1">
              <option value="wait" >wait</option>
              <option value="move" >move</option>
              <option value="left" >turn left</option>
              <option value="right" >turn right</option>
              <option value="pick" >pick up</option>
          </select><br />
        <select  id="sub2" className="sub2">
              <option value="wait" >wait</option>
              <option value="move" >move</option>
              <option value="left" >turn left</option>
              <option value="right" >turn right</option>
              <option value="pick" >pick up</option>
          </select><br />
        <select  id="sub3" className="sub3">
              <option value="wait" >wait</option>
              <option value="move" >move</option>
              <option value="left" >turn left</option>
              <option value="right" >turn right</option>
              <option value="pick" >pick up</option>
          </select><br />
        <select  id="sub4" className="sub4">
              <option value="wait" >wait</option>
              <option value="move" >move</option>
              <option value="left" >turn left</option>
              <option value="right" >turn right</option>
              <option value="pick" >pick up</option>
          </select><br />
        <select  id="sub5" className="sub5">
              <option value="wait" >wait</option>
              <option value="move" >move</option>
              <option value="left" >turn left</option>
              <option value="right" >turn right</option>
              <option value="pick" >pick up</option>
          </select><br />
        <select  id="sub6" className="sub6">
              <option value="wait" >wait</option>
              <option value="move" >move</option>
              <option value="left" >turn left</option>
              <option value="right" >turn right</option>
              <option value="pick" >pick up</option>
          </select><br />
        <select  id="sub7" className="sub7">
              <option value="wait" >wait</option>
              <option value="move" >move</option>
              <option value="left" >turn left</option>
              <option value="right" >turn right</option>
              <option value="pick" >pick up</option>
          </select>
        </div>
        <button onClick={this.demo} id="demo">Demo</button>
      </div>
);}

};
export default Inputs;
