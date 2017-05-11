import * as Const from './constants'
import axios from 'axios';


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

export function handleNewSchema(data) {
  return {
    type: Const.ADD_SCHEMA,
    data
  }
}

export function handleSaveSchemaStart(data) {
  return {
    type: Const.SAVE_SCHEMA_START,
    data
  }

}

export function handleSaveSchemaEnd(data) {
  return {
    type: Const.SAVE_SCHEMA_END,
    data
  }
}


export function handleSaveSchemaError(data) {
  return {
    type: Const.SAVE_SCHEMA_ERROR,
    data
  }
}

export function handleSaveSchemaErrorClose(data) {
  return {
    type: Const.SAVE_SCHEMA_ERROR_CLOSE,
    data
  }
}


export function handleSaveSchema(data,schema) {
  return function (dispatch) {
    dispatch(handleSaveSchemaStart())
    let url = 'http://localhost:3001/api/'
    let s = {name: 'data', schema: schema.schema}

    axios.post(url + 'insert/' + Const.MONGO_TBL_FORMSCHEMA, s)
    .then((response) => {
      return dispatch(handleSaveSchemaEnd())
    })
    .catch((err) => {
      return dispatch(handleSaveSchemaError(err.message))
    })
  }
}



export function handleLoadSchema(data) {
  return {
    type: Const.LOAD_SCHEMA,
    data
  }
}
