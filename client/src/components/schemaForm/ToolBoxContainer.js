import { connect } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { handleAddItemModal,handleCloseAddItemModal, handleAddItem } from './actions';
import ToolBox from './ToolBox';

const mapStateToProps = (state) => {
  return {
    designerOptions: state.present.designerOptions,
    canUndo: state.past.length > 0,
    canRedo: state.future.length > 0
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
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

