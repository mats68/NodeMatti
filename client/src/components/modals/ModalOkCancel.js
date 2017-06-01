import React from 'react';
import ModalBasic from './ModalBasic';


const ModalOkCancel = (props) => {
const onOkClick = () => {
    let item = {
      isOk: true,
      ModalIsOpen: false,
    }
    props.onClose(item)
  }

const onCancelClick = () => {
    let item = {
      isOk: false,
      ModalIsOpen: false,
    }
    props.onClose(item)
  }


  return (
    <ModalBasic {...props}>
      <h4>{props.title}</h4>
      {props.children}
      <div className="col-12">
        <button onClick={onOkClick} className="btn btn-success fa fa-check"></button>
        <button onClick={onCancelClick} className="btn btn-default fa fa-times"></button>
      </div>
    </ModalBasic>
  )
}

export default ModalOkCancel