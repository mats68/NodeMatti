import React from 'react';
import AddItemModal from '../modals/AddItemModal';
import { actions, cn } from './../../imports'
import ModalMessage from '../modals/ModalMessage'
import ModalOkCancel from '../modals/ModalOkCancel'
import ModalSaveSchema from '../modals/ModalSaveSchema'

const ToolBox = (props) => {
  const addItemModal = () => {
    props.handleAddItemModal()
  }
  const undoClick = () => {
    props.handleUndoClick()
  }
  const redoClick = () => {
    props.handleRedoClick()
  }
  const addNewSchema = () => {
    props.dispatch(actions.handleNewSchema())
  }
  const repairSchema = () => {
    props.dispatch(actions.handleRepairSchema())
  }
  const saveSchemaModal = () => {
    props.dispatch(actions.handleSaveSchema(cn.HTTP_STATUS.START))
  }
  const saveSchema = (data) => {
    debugger
    props.dispatch(actions.handleSaveSchema(cn.HTTP_STATUS.LOADING,data))
  }
  const closeError = () => {
    props.dispatch(actions.handleSaveSchemaErrorClose())
    props.dispatch(actions.handleSaveSchemaEnd())
    
  }

  return (
    <div className="form-inline">
      <button className="btn btn-primary mb-2 mr-2 ml-2" onClick={addNewSchema}>
        Add new Schemna
      </button>
      <button className="btn btn-primary mb-2 mr-2 ml-2" onClick={repairSchema}>
        Repair Schemna
      </button>
      <button className="btn btn-primary mb-2 mr-2 ml-2" onClick={addItemModal}>
        Add Item
      </button>
      <button className="btn btn-primary  mb-2 mr-2 ml-2" disabled={!props.canUndo} onClick={undoClick}>
        Undo
      </button>
      <button className="btn btn-primary  mb-2 mr-2 ml-2" disabled={!props.canRedo} onClick={redoClick}>
        Redo
      </button>
      <label htmlFor="selid" className="mb-2 mr-2 ml-2">Selected ID</label>
      <input type="text" id='selid' value={props.designerOptions.selectedItemText} className="form-control mb-2 mr-4 ml-2" />

      <button className="btn btn-primary  mb-2 mr-2 ml-2" onClick={saveSchemaModal}>{props.designerOptions.saving ? "saving..." : "save"}</button>
      <input type="text" id='save' placeholder="Name eingeben" className="form-control mb-2 mr-2 ml-2" />



      {/*<AddItemModal isOpen={props.designerOptions.newItem.ModalIsOpen} onClose={props.handleCloseAddItemModal}></AddItemModal>*/}
      <ModalMessage isOpen={props.designerOptions.errorItem.ModalIsOpen} title={"Error on Save"} message={props.designerOptions.errorItem.message} onClose={closeError}></ModalMessage>
      <ModalSaveSchema isOpen={props.designerOptions.newSchema.ModalIsOpen} title={"Save Schema"} onClose={saveSchema}></ModalSaveSchema>

    </div>
  )
}

export default ToolBox

