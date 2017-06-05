import React from 'react';
import Modal from 'react-modal';
import XMockina from './x_mockina';



class HowTo extends React.Component {
  constructor(XMockina){
    super(XMockina);

    this.state = {
      modalIsOpen: false,
      level: "1",
      winCount: "1",
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);

  };

  handleLevelChange(changeEvent){
    this.setState({level: changeEvent.target.value});
    if (changeEvent.target.value < 4){
      this.setState({winCount: changeEvent.target.value});
    } else {
      this.setState({winCount: 8});
    }
  }


  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
      return (
        <div id="howto">
          <div>
            <div id="test" hidden="true">{this.state.level}</div>
            <div >
              <div id="levels" >
                <h3>Levels</h3>
                <form className="levelsForm">
                  <div className="radio">
                    <lable>
                      <input type="radio" value= "1"
                        checked={this.state.level === "1"}
                        onChange={this.handleLevelChange} />
                      1
                    </lable>
                  </div>
                  <div className="radio">
                    <lable>
                      <input type="radio" value= "2"
                        checked={this.state.level === "2"}
                        onChange={this.handleLevelChange} />
                      2
                    </lable>
                  </div>
                  <div className="radio">
                    <lable>
                      <input type="radio" value= "3"
                        checked={this.state.level === "3"}
                        onChange={this.handleLevelChange} />
                      3
                    </lable>
                  </div>
                  <div className="radio">
                    <lable>
                      <input type="radio" value= "4"
                        checked={this.state.level === "4"}
                        onChange={this.handleLevelChange} />
                      4
                    </lable>
                  </div>
                </form>
                <div className="pickUp">
                  <h3>Pick up {this.state.winCount} </h3>
                  <img className="battery" src="././assets/battery.png" />
                </div>
              </div>
            </div>
            </div>
          <button onClick={this.openModal}>How to Play</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
          <p> Make the robot pick up 8 or more batteries </p>
          <p> You can run a subroutine from the main </p>
          <p> Protip dont forget to pick up </p>
          <p> Press demo to get one of the solutions </p>
          </Modal>
        </div>

    );
  };


}

export default HowTo;
