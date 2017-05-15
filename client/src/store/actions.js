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


  handleSaveSchema: function (status, data) {
    const doAction = (dispatch, status, data, err) => dispatch({ type: cn.SAVE_SCHEMA, data: { status, data, err } })

    return function (dispatch, getState) {
      if (status === cn.HTTP_STATUS.START) {
        doAction(dispatch, cn.HTTP_STATUS.START)
      } else if (status === cn.HTTP_STATUS.LOADING) {
        doAction(dispatch, cn.HTTP_STATUS.LOADING, data)
        if (data.isOk) {
          let url = 'http://localhost:3001/api/'
          let s = { collectionId: data.collectionId, schemaName: data.schemaName, schema: getState().formSchema.present.formSchema.schema }

          return axios.post(url + 'insert/' + cn.MONGO_TBL_FORMSCHEMA, s)
            .then((response) => {
              doAction(dispatch, cn.HTTP_STATUS.FINISHED)
            })
            .catch((err) => {
              doAction(dispatch, cn.HTTP_STATUS.ERROR, {}, err.message)
            })
        }
      }
    }
  },

  handleLoadSchemaList: function (status, data) {
    const doAction = (dispatch, status, data, err) => dispatch({ type: cn.LOAD_SCHEMA_LIST, data: { status, data, err } })

    return function (dispatch, getState) {
      let url = 'http://localhost:3001/api/'
      doAction(dispatch, cn.HTTP_STATUS.LOADING)
      axios.get(url + 'query/' + cn.MONGO_TBL_FORMSCHEMA)
        .then(res => {
          doAction(dispatch, cn.HTTP_STATUS.FINISHED, res.data)
        })
        .catch(err => {
          doAction(dispatch, cn.HTTP_STATUS.ERROR, {}, err.message)
        })

    }
  },


  handleLoadSchema: function (data) {
    return function (dispatch, getState) {
      let schema = getState().schemaList.filter((item) => {
        return item._id === data.value
      })
      if (schema.length === 0) {
        //todo suche nach name
      }

      if (schema.length > 0) {
        dispatch({ type: cn.LOAD_SCHEMA, data: schema[0] })
      }


    }
  }
}

export default functions