import React from 'react'
import './Tab.css'
import * as renderer from './renderItems'
import { getColumnWidths } from './utils'



export class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }

    this.linkClick = this.linkClick.bind(this)
    this.renderTabs = this.renderTabs.bind(this)
    this.renderInhalt = this.renderInhalt.bind(this)
  }
  linkClick(e) {
    e.preventDefault()
    let ind = 0
    for (var i = 0; i < this.props.item.items.length; i++) {
      if (this.props.item.items[i].id === e.target.id) {
        ind = i
        break
      }

    }
    this.setState({ activeTab: ind })
  }

  /*  renderItems() {
      return this.inhalt.map((item) => {
        const cl = this.state.activeTab === item.id ? "nav-link active" : "nav-link"
        return (
          <li className="nav-item">
            <a id={item.id} onClick={this.linkClick} className={cl} href="#">{item.title}</a>
          </li>
        )
      })
    }
    renderInhalt() {
      return this.inhalt.map((item) => {
        const cl = this.state.activeTab === item.id ? "" : "hide-true"
        return (
          <p className={cl}>{item.inhalt}</p>
        )
      })
    }
  */
  renderTabs() {
    //console.log('item',this.props.item)
    return this.props.item.items.map((item, ind) => {
      //console.log('item',item)
      return (
        <li key={item.id} className="nav-item">
          <a id={item.id} onClick={this.linkClick} className={this.state.activeTab === ind ? "nav-link active" : "nav-link"} href="#">{item.options.title}</a>
        </li>
      )
    })
  }

  renderInhalt() {
    return this.props.item.items.map((item, ind) => {
      // console.log('it', item)
      return (
        <div key={'In_' + item.id} className={this.state.activeTab === ind ? "" : "hide-true"}>
        {renderer.renderItems(item.items)}
        </div>
      )
    })

  }


  render() {
    return (
      <div className={getColumnWidths(this.props.item.options.cols)}>
        <ul className="nav nav-tabs">
          {this.renderTabs()}
        </ul>

        {this.renderInhalt()}

      </div>
    );
  }
}


