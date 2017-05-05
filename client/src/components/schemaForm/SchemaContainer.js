import React from 'react'
import * as Const from './Constants'
import { getColumnWidths } from './utils'


const Container = (props) => {
  const { options } = props.item
  if (options.type === Const.panel) {
    return (
      <div className={getColumnWidths(options.cols)}>
        <div className="card">
          {options.showHeader ? <div className="card-header">{options.headerText}</div> : null}
          <div className="card-block">
            <div className="row">
              {props.children}
            </div>
          </div>
          {options.showFooter ? <div className="card-footer">{options.footerText}</div> : null}
        </div>
      </div>
    )
  }
}

export default Container