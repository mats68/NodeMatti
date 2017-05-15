import { connect } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { actions, cn } from './../../imports'
import ToolBox from './ToolBox';

const mapStateToProps = (state) => {
  return {
    schemaList: state.schemaList,
    designerOptions: state.designerOptions,
    canUndo: state.formSchema.past.length > 0,
    canRedo: state.formSchema.future.length > 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    handleAddItemModal: () => {
      dispatch(actions.handleAddItemModal())
    },
    handleCloseAddItemModal: (data) => {
      dispatch(actions.handleCloseAddItemModal(data))
      if (data.isOk) {
        dispatch(actions.handleAddItem(data))
      }
    },
    handleCloseSchemaSaveModal: (data) => {
      dispatch(actions.handleSaveSchema(cn.HTTP_STATUS.LOADING,data))
    },
    handleUndoClick: () => {
      dispatch(UndoActionCreators.undo())
    },
    handleRedoClick: () => {
      dispatch(UndoActionCreators.redo())
    }
  }
}

const ToolBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBox)

export default ToolBoxContainer

