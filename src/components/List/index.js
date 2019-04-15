import React from 'react'
import Item from './Item'

import './style.styl'

export default class ListComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((item, index) => {
          return (
            <div key={index}>
              <Item data={item}/>
            </div>
          )
        })}
      </div>
    )
  }
}