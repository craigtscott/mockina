import React from 'react';
import Modal from 'react-modal';


class HowTo extends React.Component {
  constructor(){
    super();

    this.state = {
    modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
