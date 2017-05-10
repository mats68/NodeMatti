import { connect } from 'react-redux'
import { handleSwitchPosition, handleChangeSelectedItem } from './actions';

import SchemaFormDnD from './SchemaFormDnD'




const mapStateToProps = (state) => {
  return {
    formSchema: state.formSchema.present.formSchema
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    funktionen: {
      handleSwitchPosition: (data) => {
        dispatch(handleSwitchPosition(data))
      },
      handleChangeSelectedItem: (data) => {
        dispatch(handleChangeSelectedItem(data))
      },

    }

  }
}

const SchemaFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SchemaFormDnD)

export default SchemaFormContainer 
