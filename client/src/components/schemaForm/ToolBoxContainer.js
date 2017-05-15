import { connect } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
//import { actions, cn } from './../../imports'
import ToolBox from './ToolBox';

const mapStateToProps = (state) => {
  return {
    schemaList: state.schemaList,
    currentformSchemaId: state.formSchema.present.formSchema._id,
    designerOptions: state.designerOptions,
    canUndo: state.formSchema.past.length > 0,
    canRedo: state.formSchema.future.length > 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    handleUndoClick: () => {
      dispatch(UndoActionCreators.undo())
    },
    handleRedoClick: () => {
      dispatch(UndoActionCreators.redo())
    },
    handleUndoClearHistory: () => {
      dispatch(UndoActionCreators.clearHistory())
    }

  }
}

const ToolBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBox)

export default ToolBoxContainer

