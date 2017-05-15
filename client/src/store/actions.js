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


  handleSaveSchemaErrorAction: function (data) {
    return {
      type: cn.SAVE_SCHEMA_ERROR_CLOSE,
      data
    }
  },


  handleSaveSchema: function (status = cn.HTTP_STATUS.START, data) {
    const doAction = (dispatch, status, err) => dispatch({ type: cn.SAVE_SCHEMA, data: { status, data, err } })

    return function (dispatch, getState) {
      if (status === cn.HTTP_STATUS.START) {
        doAction(dispatch, cn.HTTP_STATUS.START)
      } else if (status === cn.HTTP_STATUS.LOADING) {
        doAction(dispatch, cn.HTTP_STATUS.LOADING)
        if (data.isOK) {
          let url = 'http://localhost:3001/api/'
          let s = { collectionId: data.collectionId, schemaName: data.schemaName, schema: getState().formSchema.present.formSchema.schema }

          return axios.post(url + 'insert/' + cn.MONGO_TBL_FORMSCHEMA, s)
            .then((response) => {
              doAction(dispatch, cn.HTTP_STATUS.FINISHED)
            })
            .catch((err) => {
              doAction(dispatch, cn.HTTP_STATUS.ERROR, err.message)
            })
        }
      }
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