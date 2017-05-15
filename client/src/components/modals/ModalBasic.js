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


const ModalBasic = (props) => {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
        contentLabel="Basic"
      >
        <div className="container-fluid">
          <div className="row">
            {props.children}
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalBasic