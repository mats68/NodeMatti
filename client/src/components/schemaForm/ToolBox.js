import React from 'react';
import Select from 'react-select';

import { actions, cn } from 'imports'
import ModalAddItem from 'components/modals/ModalAddItem';
import ModalMessage from 'components/modals/ModalMessage'
import ModalSaveSchema from 'components/modals/ModalSaveSchema'

class ToolBox extends React.Component {
  addItemModal = () => {
    this.props.dispatch(actions.handleAddItem(cn.STATUS.MODAL_OPEN))
  }

  addItem = (data) => {
    this.props.dispatch(actions.handleAddItem(cn.STATUS.MODAL_CLOSE))
    if (data.isOk) {
      this.props.dispatch(actions.handleAddItem(cn.STATUS.ACTION_START, data))
    }
  }
  undoClick = () => {
    this.props.handleUndoClick()
  }
  redoClick = () => {
    this.props.handleRedoClick()
  }
  addNewSchema = () => {
    this.props.dispatch(actions.handleNewSchema())
    this.props.handleUndoClearHistory()
  }
  repairSchema = () => {
    this.props.dispatch(actions.handleRepairSchema())
  }
  saveSchemaModal = () => {
    if (this.props.currentformSchemaId) {
      this.props.dispatch(actions.handleSaveSchema(cn.STATUS.ACTION_START))
    } else {
      this.props.dispatch(actions.handleSaveSchema(cn.STATUS.MODAL_OPEN))
    }
  }
  saveSchemaModalAs = () => {
    this.props.dispatch(actions.handleSaveSchema(cn.STATUS.MODAL_OPEN))
  }
  saveSchema = (data) => {
    this.props.dispatch(actions.handleSaveSchema(cn.STATUS.MODAL_CLOSE))
    if (data.isOk) {
      this.props.dispatch(actions.handleSaveSchema(cn.STATUS.ACTION_START, data))
    }
  }
  closeError = () => {
    this.props.dispatch(actions.handleSaveSchemaErrorClose())
    this.props.dispatch(actions.handleSaveSchemaEnd())
  }


  changeSchema = (val) => {
    this.props.dispatch(actions.handleLoadSchema({ name: val.label, id: val.value }))

  }

  componentDidMount() {
    this.props.dispatch(actions.handleLoadSchemaList(cn.STATUS.HTTP_LOADING))
  }

  render() {
    let options = []
    if (this.props.schemaList) {
      this.props.schemaList.forEach(item => options.push({ value: item._id, label: item.name }))
    }
    return (
      <div className="form-inline">
        <Select className="mb-2 mr-2 ml-2"
          style={{ minWidth: 150 }}
          options={options}
          onChange={this.changeSchema}
          placeholder="Schema laden.."
        />
        <button className="btn btn-primary mb-2 mr-2 ml-2" onClick={this.addNewSchema}>
          Add new Schema
        </button>
        <button className="btn btn-primary mb-2 mr-2 ml-2" onClick={this.repairSchema}>
          Repair Schema
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

        <button className="btn btn-primary  mb-2 mr-2 ml-2" onClick={this.saveSchemaModal}>{this.props.designerOptions.saving ? "saving..." : "Save"}</button>
        <button className="btn btn-primary  mb-2 mr-2 ml-2" onClick={this.saveSchemaModalAs}>{this.props.designerOptions.saving ? "saving..." : "Save as..."}</button>

        <ModalAddItem isOpen={this.props.designerOptions.newItem.ModalIsOpen} onClose={this.addItem}></ModalAddItem>
        <ModalMessage isOpen={this.props.designerOptions.errorItem.ModalIsOpen} title={"Error on Save"} message={this.props.designerOptions.errorItem.message} onClose={this.closeError}></ModalMessage>
        <ModalSaveSchema isOpen={this.props.designerOptions.newSchema.ModalIsOpen} title={"Save Schema"} onClose={this.saveSchema}></ModalSaveSchema>

      </div>
    )
  }
}

export default ToolBox

