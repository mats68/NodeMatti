import { connect } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import {addInput} from './actions';
import ToolBox from './ToolBox';

const mapStateToProps = (state) => {
  return {
    designOptions: state.present.designOptions,
    canUndo: state.past.length > 0,
    canRedo: state.future.length > 0
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleAddClick: (text) => {
      dispatch(addInput(text))
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

