import React, { Fragment } from 'react'

const Attr = props => {
  return (
    <Fragment>
      {
        props.attrContent.map((item, index) => {
          return (
            <div className="panel-content" key={item}>
              <p>{item.placement}:{item.arrow}</p>
              <p>{item.placement}:{item.arrow}</p>
            </div>
          )
        })
      }
    </Fragment>
  )
}

export default Attr