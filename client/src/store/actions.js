import { cn } from 'imports'
import axios from 'axios'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

const functions = {
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


  handleAddItem: function (status, data) {

    const doAction = (dispatch, status, data) => dispatch({ type: cn.ADD_ITEM, data: { status, data } })
    return function (dispatch, getState) {
      if (status === cn.STATUS.MODAL_OPEN) {
        doAction(dispatch, cn.STATUS.MODAL_OPEN)
      } else if (status === cn.STATUS.MODAL_CLOSE) {
        doAction(dispatch, cn.STATUS.MODAL_CLOSE)
      } else if (status === cn.STATUS.ACTION_START) {
        doAction(dispatch, cn.STATUS.ACTION_START, data)
      }
    }

  },


  handleSaveSchema: function (status, data) {
    const doAction = (dispatch, status, data, err) => dispatch({ type: cn.SAVE_SCHEMA, data: { status, data, err } })

    return function (dispatch, getState) {
      if (status === cn.STATUS.MODAL_OPEN) {
        doAction(dispatch, cn.STATUS.MODAL_OPEN)
      } else if (status === cn.STATUS.MODAL_CLOSE) {
        doAction(dispatch, cn.STATUS.MODAL_CLOSE)
      } else if (status === cn.STATUS.ACTION_START) {
        doAction(dispatch, cn.STATUS.HTTP_LOADING)
        let url = 'http://localhost:3001/api/'
        let formSchema = getState().formSchema.present.formSchema
        let s
        if (!data) { //update
          s = { collection: formSchema.collection, name: formSchema.name, schema: formSchema.schema }
          axios.put(url + 'update/' + cn.MONGO_TBL_FORMSCHEMA + '/' + formSchema._id, s)
            .then((response) => {
              doAction(dispatch, cn.STATUS.HTTP_FINISHED)
              let d = response.data
              d._id = formSchema._id
              dispatch({type: cn.SCHEMA_LIST_UPDATE, data: d})
              dispatch(UndoActionCreators.clearHistory())
            })
            .catch((err) => {
              doAction(dispatch, cn.STATUS.HTTP_ERROR, {}, err.message)
            })
        } else {
          s = { collection: data.collection, name: data.name, schema: formSchema.schema }
          axios.post(url + 'insert/' + cn.MONGO_TBL_FORMSCHEMA, s)
            .then((response) => {
              doAction(dispatch, cn.STATUS.HTTP_FINISHED)
              if (response.data && response.data.ops && response.data.ops.length > 0) {
                dispatch({type: cn.SCHEMA_LIST_ADD, data: response.data.ops[0]})
              }
              dispatch(UndoActionCreators.clearHistory())
            })
            .catch((err) => {
              doAction(dispatch, cn.STATUS.HTTP_ERROR, {}, err.message)
            })
        }

      }
    }
  },

  handleLoadSchemaList: function (status, data) {
    const doAction = (dispatch, status, data, err) => dispatch({ type: cn.LOAD_SCHEMA_LIST, data: { status, data, err } })

    return function (dispatch, getState) {
      if (status === cn.STATUS.HTTP_LOADING) {
        let url = 'http://localhost:3001/api/'
        doAction(dispatch, cn.STATUS.HTTP_LOADING)
        axios.get(url + 'query/' + cn.MONGO_TBL_FORMSCHEMA)
          .then(res => {
            doAction(dispatch, cn.STATUS.HTTP_FINISHED, res.data)
          })
          .catch(err => {
            doAction(dispatch, cn.STATUS.HTTP_ERROR, {}, err.message)
          })
      }
    }
  },


  handleLoadSchema: function (data) {
    return function (dispatch, getState) {
      let schema = getState().schemaList.filter((item) => {
        return item._id === data.id
      })
      if (schema.length === 0) {
        //todo suche nach name
      }

      if (schema.length > 0) {
        dispatch({ type: cn.LOAD_SCHEMA, data: schema[0] })
        dispatch(UndoActionCreators.clearHistory())
      }


    }
  }
}

export default functions