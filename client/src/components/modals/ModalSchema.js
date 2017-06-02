import React from 'react';
import ModalOkCancel from './ModalOkCancel';
import CodeMirror from 'components/CodeMirror';



class ModalSchema extends React.Component {
  constructor(props) {
    super(props)
    this.state = { code: props.code }
  }

  onClose = (item) => {
    if (item.isOk) {
      item.code = this.state.code
    }
    this.props.onClose(item)

  }

  onChange = (newCode) => {
    this.setState({ code: newCode })
  }

  render() {
    const renderError = () => {
      if (this.props.error) {
        return (
          <div className="alert alert-danger">
            {this.props.error}
          </div>
        )
      } else {
        return null
      }
    }
    return (
      <ModalOkCancel  {...this.props} onClose={this.onClose}>
        <div className="col-12">
          <div className="form-group">
            <CodeMirror code={this.state.code} onChange={this.onChange}></CodeMirror>
          </div>
          {renderError()}
        </div>
      </ModalOkCancel>
    )
  }
}

export default ModalSchema