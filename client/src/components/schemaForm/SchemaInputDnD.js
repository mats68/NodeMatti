import React, { Component } from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import flow from 'lodash/flow'
import Input from './SchemaInput'
import * as Const from './constants'


const inputSource = {
  beginDrag(props) {
    return { props };
  },
  endDrag(props, monitor, component) {
    //console.log('end drag')
  }
};

const inputTarget = {
  canDrop(props, monitor) {
    const targetItem = props
    const sourceItem = monitor.getItem().props
    //console.log(sourceItem,targetItem)
    return targetItem.item.id !== sourceItem.item.id
  },

  drop(props, monitor, component) {
    const targetItem = props.item
    const sourceItem = monitor.getItem().props.item
    if (targetItem.id === sourceItem.id) { return }

    let dropBefore = true;
    if (targetItem.pos === (sourceItem.pos + 1)) {
      dropBefore = false;
    } else if (targetItem.pos === (sourceItem.pos - 1)) {
      dropBefore = true;
    } else {
      const hoverBoundingRect = component.decoratedComponentInstance.node.getBoundingClientRect();
      //const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // console.log(hoverBoundingRect, clientOffset)
      let middle = ((hoverBoundingRect.right - hoverBoundingRect.left) / 2) + hoverBoundingRect.left
      if (clientOffset.x > middle) {
        dropBefore = false;
      }
    }

    sourceItem.handleDrop(sourceItem, targetItem, dropBefore)
  }

};

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    getClientOffset: monitor.getClientOffset()
  };
}

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    getSourceOffset: monitor.getClientOffset()
  }
}


const InputDnD = (props) => {
  const { connectDragSource, connectDropTarget } = props;
  return connectDragSource(connectDropTarget(
    <div>
      <Input {...props} />
    </div>
  ))
}


export default flow(
  DragSource(Const.INPUT, inputSource, collectSource),
  DropTarget(Const.INPUT, inputTarget, collectTarget)

)(InputDnD);