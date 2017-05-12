import { cn } from '../imports'
import axios from 'axios';

const functions = {
  handleAddItemModal: function (data) {
    return {
      type: cn.ADD_ITEM_MODAL,
      data
    }
  },

  handleCloseAddItemModal: function (data) {
    return {
      type: cn.CLOSE_ADD_ITEM_MODAL,
      data
    }
  },

  handleAddItem: function (data) {
    return {
      type: cn.ADD_ITEM,
      data
    }
  },


  handleSwitchPosition: function (data) {
    return {
      type: cn.SWITCH_POSITION,
      data
    }
  },

  handleChangeSelectedItem: function (data) {
    return {
      type: cn.CHANGE_SELECTED_ITEM,
      data
    }
  },

  handleNewSchema: function (data) {
    return {
      type: cn.ADD_SCHEMA,
      data
    }
  },

  handleRepairSchema: function (data) {
    return {
      type: cn.REPAIR_SCHEMA,
      data
    }
  },

  handleSaveSchemaStart: function (data) {
    return {
      type: cn.SAVE_SCHEMA_START,
      data
    }

  },

  handleSaveSchemaEnd: function (data) {
    return {
      type: cn.SAVE_SCHEMA_END,
      data
    }
  },


  handleSaveSchemaError: function (data) {
    return {
      type: cn.SAVE_SCHEMA_ERROR,
      data
    }
  },

  handleSaveSchemaErrorClose: function (data) {
    return {
      type: cn.SAVE_SCHEMA_ERROR_CLOSE,
      data
    }
  },

  handleSaveSchema: function (data, schema) {
    return function (dispatch, getState) {
      dispatch(functions.handleSaveSchemaStart())
      let url = 'http://localhost:3001/api/'
      let s = { name: 'data', schema: getState().formSchema.present.formSchema.schema }

      axios.post(url + 'insert/' + cn.MONGO_TBL_FORMSCHEMA, s)
        .then((response) => {
          return dispatch(functions.handleSaveSchemaEnd())
        })
        .catch((err) => {
          return dispatch(functions.handleSaveSchemaError(err.message))
        })
    }
  },

  handleLoadSchema: function (data) {
    return {
      type: cn.LOAD_SCHEMA,
      data
    }
  }
}

export default functions