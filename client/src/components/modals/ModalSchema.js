import React from 'react';
import ModalOkCancel from './ModalOkCancel';
import CodeMirror from 'components/CodeMirror';


const ModalSchema = (props) => {
  const onClose = (item) => {
    alert(item)
    props.onClose(item)
  }


  return (
    <ModalOkCancel  {...props} onClose={onClose}>
      <div className="col-12">
          <div className="form-group">
            <CodeMirror code={JSON.stringify(props.schema, null, 2)}></CodeMirror>
          </div>
      </div>
    </ModalOkCancel>
  )
}

export default ModalSchema