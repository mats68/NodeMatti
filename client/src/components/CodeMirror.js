import React from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'


class CM extends React.Component {
  constructor(props) {
    super(props)
    this.state = { code: props.code, mode: {name: "javascript", json: true}}
    this.updateCode = this.updateCode.bind(this)
  }

  updateCode(newCode) {
    this.setState({
      code: newCode
    });
  }

  componentDidMount() {
    //this.refs.editor.focus()
    this.refs.editor.getCodeMirror().setSize("100%",500)

  }

  render() {
    var options = {
      lineNumbers: true,
      readOnly: false,
      mode: this.state.mode
    };
    return <CodeMirror ref="editor" style={{height: "auto"}} value={this.state.code} onChange={this.updateCode} options={options} autoFocus/>
  }
}

export default CM