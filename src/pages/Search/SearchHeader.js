import React from 'react'
import { Redirect } from 'react-router-dom'
import SearchInput from '../../components/SearchInput/index'

export default class SearchHeader extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      redirect: false
    }
  }

  clickHandle() {
    window.location.href = '/'
  }

  enterHandle(value) {
    this.setState({
      redirect: false
    })
    // 避免渲染错误
    if (value === this.props.keyword) {
      return
    }
    if (value) {
      // TODO
      window.location.href = '/search/all/' + encodeURIComponent(value)
    }else {
      // 如果没有输入关键字
      this.setState({
        redirect: '/'
      })
    }
  }

  render() {
    return this.state.redirect ? 
    <Redirect to={this.state.redirect} /> : 
    (
      <div id="search-header" className="clear-fix">
        <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
            <i className="icon-chevron-left"></i>
        </span>
        <div className="input-container">
          <i className="icon-search"></i>
          <SearchInput value={decodeURIComponent(this.props.keyword || '') } enterHandle={this.enterHandle.bind(this)}/>
        </div>
      </div>
    )
  }
}
