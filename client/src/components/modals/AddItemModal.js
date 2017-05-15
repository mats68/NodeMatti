import React from 'react';
import ModalOkCancel from './ModalOkCancel';

class ModalAddItem extends React.Component {
  onOkClick = () => {
    let item = {
      isOk: true,
      ModalIsOpen: false,
      id: this.refs.feld.value,
      label: this.refs.label.value
    }
    this.props.onClose(item)

  }

  onCancelClick = () => {
    let item = {}
    item.isOk = false
    item.ModalIsOpen = false
    this.props.onClose(item)
  }


  render() {
    return (
      <ModalOkCancel {...this.props} onOKClick={this.onOKClick} onCancelClick={this.onCancelClick}>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="label">Label</label>
            <input type="text" id="label" ref="label" className="form-control" />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="feld">Feldname</label>
            <input type="text" id="feld" ref="feld" className="form-control" />
          </div>
        </div>
      </ModalOkCancel>
    )
  }
}

export default ModalAddItem