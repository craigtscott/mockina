import React from 'react';
import Modal from 'react-modal';


class HowTo extends React.Component {
  constructor(){
    super();

    this.state = {
      modalIsOpen: false,
      level: "level1"
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);

  };

  handleLevelChange(changeEvent){
    this.setState({level: changeEvent.target.value});
    console.log(this.state.level);
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
            <div id="levels" className="levels">
              <form>
                <div className="radio">
                  <lable>
                    <input type="radio" value= "level1"
                      checked={this.state.level === "level1"}
                      onChange={this.handleLevelChange} />
                    1
                  </lable>
                </div>
                <div className="radio">
                  <lable>
                    <input type="radio" value= "level2"
                      checked={this.state.level === "level2"}
                      onChange={this.handleLevelChange} />
                    2
                  </lable>
                </div>
                <div className="radio">
                  <lable>
                    <input type="radio" value= "level3"
                      checked={this.state.level === "level3"}
                      onChange={this.handleLevelChange} />
                    3
                  </lable>
                </div>
                <div className="radio">
                  <lable>
                    <input type="radio" value= "demo"
                      checked={this.state.level === "demo"}
                      onChange={this.handleLevelChange} />
                    demo
                  </lable>
                </div>
              </form>
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
