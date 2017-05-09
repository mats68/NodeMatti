import * as Const from './constants'


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

