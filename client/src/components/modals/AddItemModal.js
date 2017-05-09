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


class AddItemModal extends React.Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
    this.cancelModal = this.cancelModal.bind(this)
    //this.canCloseModal = this.canCloseModal.bind(this)
    this.state = {
      canClose: false
    }

  }


  closeModal() {
    let item = {
      isOK: true,
      ModalIsOpen: false,
      id: this.refs.feld.value,
      label: this.refs.label.value
    }
    this.props.onClose(item)
  }

  cancelModal() {
    let item = {}
    item.isOK = false
    item.ModalIsOpen = false
    this.props.onClose(item)
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.isOpen}
          shouldCloseOnOverlayClick={false}
          style={customStyles}
          contentLabel="Add Item"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="label">Label</label>
                  <input type="text" id="label" ref="label" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="feld">Feldname</label>
                  <input type="text" id="feld" ref="feld" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button onClick={this.closeModal}>ok</button>
              </div>
              <div className="col">
                <button onClick={this.cancelModal}>cancel</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default AddItemModal