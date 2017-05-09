import * as Const from './constants'


export function handleAddItemModal(data) {
  return {
    type: Const.ADD_ITEM_MODAL,
    data
  }
}

export function handleCloseAddItemModal(data) {
  return {
    type: Const.CLOSE_ADD_ITEM_MODAL,
    data
  }
}

export function handleAddItem(data) {
  return {
    type: Const.ADD_ITEM,
    data
  }
}


export function handleSwitchPosition(data) {
  return {
    type: Const.SWITCH_POSITION,
    data
  }
}

export function handleChangeSelectedItem(data) {
  return {
    type: Const.CHANGE_SELECTED_ITEM,
    data
  }
}

