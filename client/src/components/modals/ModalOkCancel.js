import React from 'react';
import ModalBasic from './ModalBasic';

const ModalOkCancel = (props) => {
  return (
    <ModalBasic {...props}>
      <h4>{props.title}</h4>
      {props.children}
      <div className="col">
        <button onClick={props.onOkClick} className="btn btn-success fa fa-check"></button>
        <button onClick={props.onCancelClick} className="btn btn-default fa fa-times"></button>
      </div>
    </ModalBasic>
  )
}

export default ModalOkCancel