import React, { Component } from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import flow from 'lodash/flow'

import { cn } from 'imports'
import Input from './SchemaInput'



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
    const sourceItemProps = monitor.getItem().props
    const sourceItem = sourceItemProps.item
    if (targetItem.id === sourceItem.id) { return }

    let dropBefore = true
    const hoverBoundingRect = component.decoratedComponentInstance.node.getBoundingClientRect();
    const clientOffset = monitor.getClientOffset();
    let middle = ((hoverBoundingRect.right - hoverBoundingRect.left) / 2) + hoverBoundingRect.left
    if (clientOffset.x > middle) {
      dropBefore = false
    }
    const data = { sourceItem, targetItem, dropBefore }
    sourceItemProps.designFunktionen.handleSwitchPosition(data)
    //sourceItem.handleDrop(sourceItem, targetItem, dropBefore)
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

class InputDnD extends Component {
  render() {
    const { connectDragSource, connectDropTarget } = this.props;
    return connectDragSource(connectDropTarget(
      <div ref={node => (this.node = node)} onClick={(e) => { this.props.designFunktionen.handleChangeSelectedItem(this.props.item) }}>
        <Input {...this.props} />
      </div>
    ))
  }
}



export default flow(
  DragSource(cn.INPUT, inputSource, collectSource),
  DropTarget(cn.INPUT, inputTarget, collectTarget)

)(InputDnD);