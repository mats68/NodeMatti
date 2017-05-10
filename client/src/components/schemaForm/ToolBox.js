import React from 'react';
import AddItemModal from '../modals/AddItemModal';

const ToolBox = (props) => {
  const handleAddItemModal = () => {
    props.handleAddItemModal()
  }
  const handleUndoClick = () => {
    props.handleUndoClick()
  }
  const handleRedoClick = () => {
    props.handleRedoClick()
  }

  return (
    <div className="form-inline">
      <button className="btn btn-primary mb-2 mr-2 ml-2" onClick={handleAddItemModal}>
        Add Item
          </button>
      <button className="btn btn-primary  mb-2 mr-2 ml-2" disabled={!props.canUndo} onClick={handleUndoClick}>
        Undo
        </button>
      <button className="btn btn-primary  mb-2 mr-2 ml-2" disabled={!props.canRedo} onClick={handleRedoClick}>
        Redo
        </button>
      <label htmlFor="selid" className="mb-2 mr-2 ml-2">Selected ID</label>
      <input type="text" id='selid' value={props.designerOptions.selectedItemText} className="form-control mb-2 mr-2 ml-2" />
      <AddItemModal isOpen={props.designerOptions.newItem.ModalIsOpen} onClose={props.handleCloseAddItemModal}></AddItemModal>
    </div>
  )
}

export default ToolBox

