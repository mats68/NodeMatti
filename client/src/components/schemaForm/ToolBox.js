import React from 'react';
import AddItemModal from '../modals/AddItemModal';
import { actions, cn } from './../../imports'
import ModalMessage from '../modals/ModalMessage'
import ModalOkCancel from '../modals/ModalOkCancel'
import ModalSaveSchema from '../modals/ModalSaveSchema'
import Select from 'react-select';

class ToolBox extends React.Component {
  addItemModal = () => {
    this.props.handleAddItemModal()
  }
  undoClick = () => {
    this.props.handleUndoClick()
  }
  redoClick = () => {
    this.props.handleRedoClick()
  }
  addNewSchema = () => {
    this.props.dispatch(actions.handleNewSchema())
  }
  repairSchema = () => {
    this.props.dispatch(actions.handleRepairSchema())
  }
  saveSchemaModal = () => {
    this.props.dispatch(actions.handleSaveSchema(cn.HTTP_STATUS.START))
  }
  saveSchema = (data) => {
    this.props.dispatch(actions.handleSaveSchema(cn.HTTP_STATUS.LOADING, data))
  }
  closeError = () => {
    this.props.dispatch(actions.handleSaveSchemaErrorClose())
    this.props.dispatch(actions.handleSaveSchemaEnd())

  }

  changeSchema = (val) => {
    this.props.dispatch(actions.handleLoadSchema(val))

  }

  componentDidMount() {
    this.props.dispatch(actions.handleLoadSchemaList(cn.HTTP_STATUS.LOADING))
  }

  render() {
    let options = []

    this.props.schemaList.forEach(function (item) {
      options.push({ value: item._id, label: item.schemaName })
    }, this);
    return (
      <div className="form-inline">
        <Select className="mb-2 mr-2 ml-2"
          style={{minWidth: 150}}
          options={options}
          onChange={this.changeSchema}
        />
        <button className="btn btn-primary mb-2 mr-2 ml-2" onClick={this.addNewSchema}>
          Add new Schemna
        </button>
        <button className="btn btn-primary mb-2 mr-2 ml-2" onClick={this.repairSchema}>
          Repair Schemna
        </button>
        <button className="btn btn-primary mb-2 mr-2 ml-2" onClick={this.addItemModal}>
          Add Item
        </button>
        <button className="btn btn-primary  mb-2 mr-2 ml-2" disabled={!this.props.canUndo} onClick={this.undoClick}>
          Undo
        </button>
        <button className="btn btn-primary  mb-2 mr-2 ml-2" disabled={!this.props.canRedo} onClick={this.redoClick}>
          Redo
        </button>
        <label htmlFor="selid" className="mb-2 mr-2 ml-2">Selected ID</label>
        <input type="text" id='selid' value={this.props.designerOptions.selectedItemText} className="form-control mb-2 mr-4 ml-2" />

        <button className="btn btn-primary  mb-2 mr-2 ml-2" onClick={this.saveSchemaModal}>{this.props.designerOptions.saving ? "saving..." : "save"}</button>

        <AddItemModal isOpen={this.props.designerOptions.newItem.ModalIsOpen} onClose={this.props.handleCloseAddItemModal}></AddItemModal>
        <ModalMessage isOpen={this.props.designerOptions.errorItem.ModalIsOpen} title={"Error on Save"} message={this.props.designerOptions.errorItem.message} onClose={this.closeError}></ModalMessage>
        <ModalSaveSchema isOpen={this.props.designerOptions.newSchema.ModalIsOpen} title={"Save Schema"} onClose={this.saveSchema}></ModalSaveSchema>

      </div>
    )
  }
}

export default ToolBox

