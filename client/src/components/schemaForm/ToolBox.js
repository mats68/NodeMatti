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
        <div className="col-lg-1">
          <button className="btn btn-success" onClick={handleAddClick}>
            Add Item
          </button>
        </div>
        <div className="col-lg-1">
          <button className="btn btn-success" disabled={!props.canUndo} onClick={handleUndoClick}>
            Undo
        </button>
        </div>
        <div className="col-lg-1">
          <button className="btn btn-success" disabled={!props.canRedo} onClick={handleRedoClick}>
            Redo
        </button>
        </div>
        <div className="col-lg-2">
          <div className="form-group">
            <label htmlFor="selid">Selected ID</label>
            <input type="text" id='selid' value={props.designerOptions.selectedItemText} className="form-control" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToolBox
