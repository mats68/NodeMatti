import React from 'react';
import ModalOkCancel from './ModalOkCancel';


const ModalSchema = (props) => {
  const onClose = (item) => {
    alert(item)
    props.onClose(item)
  }


  return (
    <ModalOkCancel  {...props} onClose={onClose}>
      <div className="col-12">
          <div className="form-group">
            <label htmlFor="label">Schema</label>
            <textarea rows={20} cols={200} id="label" className="form-control">{JSON.stringify(props.schema)}</textarea> 
          </div>
      </div>
    </ModalOkCancel>
  )
}

export default ModalSchema