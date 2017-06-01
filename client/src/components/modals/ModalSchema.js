import React from 'react';
import ModalOkCancel from './ModalOkCancel';
import CodeMirror from 'components/CodeMirror';


const ModalSchema = (props) => {
  let code = JSON.stringify(props.schema, null, 2)
  const onClose = (item) => {
    if (item.isOk) {
      item.code =  JSON.parse(code)
    }
    props.onClose(item)
  }
  const onChange = (newCode) => {
    code = newCode
  }

  return (
    <ModalOkCancel  {...props} onClose={onClose}>
      <div className="col-12">
          <div className="form-group">
            <CodeMirror code={code} onChange={onChange}></CodeMirror>
          </div>
      </div>
    </ModalOkCancel>
  )
}

export default ModalSchema