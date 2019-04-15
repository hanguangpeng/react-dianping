import React from 'react'
import { Redirect } from 'react-router-dom'

import './style.styl'

export default class Header extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      backUrl: ''
    }
  }

  clickHandle() {
    if (this.props.backUrl) {
      this.setState({
        backUrl: this.props.backUrl
      })
    }else {
      window.history.back()
    }
  }

  render() {
    return this.state.backUrl ? 
    <Redirect to={this.state.backUrl} /> :
    (
      <div id="common-header">
        <span className="back-icon" onClick={this.clickHandle.bind(this)}>
          <i className="icon-chevron-left"></i>
        </span>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
