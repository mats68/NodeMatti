import React from 'react';
import ModalBasic from './ModalBasic';


const ModalOkCancel = (props) => {

const onOkClick = () => {
    props.onClose({isOk: true})
  }

const onCancelClick = () => {
    props.onClose({isOk: false})
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