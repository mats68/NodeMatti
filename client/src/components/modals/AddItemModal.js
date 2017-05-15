import React from 'react';
import ModalOkCancel from './ModalOkCancel';

/*class ModalAddItem extends React.component {
  constructor(props) {
    super(props)
    this.onOkClick = this.onOkClick.bind(this)
    this.onCancelClick = this.onCancelClick.bind(this)
  }

  onOkClick() {
    let item = {
      isOK: true,
      ModalIsOpen: false,
      id: this.refs.feld.value,
      label: this.refs.label.value
    }
    this.props.onClose(item)

  }

  onCancelClick() {
    let item = {}
    item.isOK = false
    item.ModalIsOpen = false
    this.props.onClose(item)
  }


  render() {
    return (
      <ModalOkCancel {...this.props}>
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

*/