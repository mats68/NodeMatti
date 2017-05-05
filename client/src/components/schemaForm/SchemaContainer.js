import React from 'react'
import * as Const from './Constants'


const Container = (props) => {
  const { options } = props.item
  console.log(options)
  if (options.type === Const.panel) {
    return (
      <div className="card">
        <div className="card-header">{options.label}</div>
        <div className="card-block">
          <div className="row">
            {props.children}
          </div>
        </div>
        <div className="card-footer">{options.label}</div>
      </div>

    )
  }
}

export default Container