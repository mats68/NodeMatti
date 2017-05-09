import { connect } from 'react-redux'
import { handleSwitchPosition } from './actions';

import SchemaFormDnD from './SchemaFormDnD'




const mapStateToProps = (state) => {
  return state.present

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    funktionen: {
      handleSwitchPosition: (data) => {
        dispatch(handleSwitchPosition(data))
      }
    }

  }
}

const SchemaFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SchemaFormDnD)

export default SchemaFormContainer 
