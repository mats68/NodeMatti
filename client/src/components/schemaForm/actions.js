import * as Const from './constants'


export function handleSwitchPosition(data) {
  return {
    type: Const.SWITCH_POSITION,
    data
  }
}
