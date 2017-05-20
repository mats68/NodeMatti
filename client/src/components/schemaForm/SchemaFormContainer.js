import { connect } from 'react-redux'
import { actions } from 'imports'

import SchemaFormDnD from './SchemaFormDnD'



const mapStateToProps = (state) => {
  return {
    formSchema: state.formSchema.present.formSchema
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    designFunktionen: {
      handleSwitchPosition: (data) => {
        dispatch(actions.handleSwitchPosition(data))
      },
      handleChangeSelectedItem: (data) => {
        dispatch(actions.handleChangeSelectedItem(data))
      },

    }

  }
}

const SchemaFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SchemaFormDnD)

export default SchemaFormContainer
