import React from 'react';
import ModalBasic from './ModalBasic';

//class ModalBasic extends React.Component {


const ModalMessage = (props) => {
  return (
    <ModalBasic {...props}>
      <h4>{props.title}</h4>
      <p>{props.message}</p>
      <button onClick={props.onClose} className="btn btn-primary">ok</button>
    </ModalBasic>
  )
}

export default ModalMessage