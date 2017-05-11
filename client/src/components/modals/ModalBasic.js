import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};


class ModalBasic extends React.Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
    this.cancelModal = this.cancelModal.bind(this)
  }

  closeModal() {
  }

  cancelModal() {
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.isOpen}
          shouldCloseOnOverlayClick={false}
          style={customStyles}
          contentLabel="Basic"
        >
          {this.props.children}
        </Modal>
      </div>
    )
  }
}

export default ModalBasic