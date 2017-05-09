import React from 'react';

const ToolBox = (props) => {
  const handleAddClick = () => {
    let name = prompt('Name:')
    if (name) {
      props.handleAddClick(name)
    }
  }
  const handleUndoClick = () => {
    props.handleUndoClick()
  }
  const handleRedoClick = () => {
    props.handleRedoClick()
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <button className="btn btn-success" onClick={handleAddClick}>
          Add Item
        </button>
        <button className="btn btn-success" disabled={!props.canUndo} onClick={handleUndoClick}>
          Undo
        </button>
        <button className="btn btn-success" disabled={!props.canRedo} onClick={handleRedoClick}>
          Redo
        </button>
        <div className="form-group">
          <label htmlFor="selid">Selected ID</label>
          <input type="text" id='selid' value={props.selectedId} className="form-control" />
        </div>
      </div>
    </div>
  )
}

export default ToolBox
