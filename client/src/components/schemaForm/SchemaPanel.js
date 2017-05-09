import React from 'react'
import { getColumnWidths } from './utils'


export const Panel = (props) => {
  const { options } = props.item
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

