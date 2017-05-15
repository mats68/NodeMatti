import React from 'react';
import ModalOkCancel from './ModalOkCancel';

class ModalSaveSchema extends React.Component {
  onOKClick = () => {
    let item = {
      isOk: true,
      ModalIsOpen: false,
      collectionId: this.refs.collectionId.value,
      schemaName: this.refs.schemaName.value
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
            <label htmlFor="label">Schema Name</label>
            <input type="text" id="label" ref="schemaName" className="form-control" />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="feld">Collection Id</label>
            <input type="text" id="feld" ref="collectionId" className="form-control" />
          </div>
        </div>
      </ModalOkCancel>
    )
  }
}
export default ModalSaveSchema