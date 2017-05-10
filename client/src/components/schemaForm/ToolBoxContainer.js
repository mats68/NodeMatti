import { connect } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { handleAddItemModal, handleCloseAddItemModal, handleAddItem } from './actions';
import ToolBox from './ToolBox';

const mapStateToProps = (state) => {
  return {
    formSchema: state.formSchema.present.formSchema,
    designerOptions: state.designerOptions,
    canUndo: state.formSchema.past.length > 0,
    canRedo: state.formSchema.future.length > 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    handleAddItemModal: () => {
      dispatch(handleAddItemModal())
    },
    handleCloseAddItemModal: (data) => {
      dispatch(handleCloseAddItemModal(data))
      if (data.isOK) {
        dispatch(handleAddItem(data))
      }
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

