import React from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'


class CM extends React.Component {
  constructor(props) {
    super(props)
    this.state = { code: props.code, mode: 'javascript' }
    this.updateCode = this.updateCode.bind(this)
  }

  updateCode(newCode) {
    this.setState({
      code: newCode
    });
  }

  render() {
    var options = {
      lineNumbers: true,
      readOnly: false,
      mode: this.state.mode
    };
    return <CodeMirror width={0} value={this.state.code} onChange={this.updateCode} options={options} autoFocus/>
  }
}

export default CM