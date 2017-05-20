import React from 'react'
import {utils} from 'imports'


export const Panel = (props) => {
  return (
    <div className={utils.getColumnWidths(props.item.cols)}>
      <div className="card">
        {props.item.showHeader ? <div className="card-header">{props.item.headerText}</div> : null}
        <div className="card-block">
          <div className="row">
            {props.children}
          </div>
        </div>
        {props.item.showFooter ? <div className="card-footer">{props.item.footerText}</div> : null}
      </div>
    </div>
  )
}



