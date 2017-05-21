import React from 'react'
import './Tab.css'
import { utils } from 'imports'


export class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }

    this.linkClick = this.linkClick.bind(this)
    this.renderTabs = this.renderTabs.bind(this)
    this.renderInhalt = this.renderInhalt.bind(this)
  }
  linkClick(e) {
    const { item, schema } = this.props
    e.preventDefault()
    let ind = 0
    for (var i = 0; i < item.fields.length; i++) {
      const sItem = utils.getItemFromSchema(item.fields[i], schema)
      if (sItem.id === e.target.id) {
        ind = i
        break
      }

    }
    this.setState({ activeTab: ind })
  }

  renderTabs() {
    const { item, schema } = this.props

    return item.fields.map((it, ind) => {
      const sItem = utils.getItemFromSchema(it, schema)
      //todo error if not type = tab
      return (
        <li key={sItem.id} className="nav-item">
          <a id={sItem.id} onClick={this.linkClick} className={this.state.activeTab === ind ? "nav-link active" : "nav-link"} href="#">{sItem.label}</a>
        </li>
      )
    })
  }

  renderInhalt() {
    const { item, schema, renderItems } = this.props

    return item.fields.map((it, ind) => {
      const sItem = utils.getItemFromSchema(it, schema)
      return (
        <div key={sItem.id} className={this.state.activeTab === ind ? "" : "hide-true"}>
          {renderItems(sItem.fields)}
        </div>
      )
    })

  }

  render() {
    return (
      <div className={utils.getColumnWidths(this.props.item.cols)}>
        <ul className="nav nav-tabs">
          {this.renderTabs()}
        </ul>
        {this.renderInhalt()}
      </div>
    );
  }
}


