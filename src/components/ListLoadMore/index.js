import React from 'react'
import PropTypes from 'prop-types'
import LoadMore from '../base/LoadMore/index'
import fetch from '../../util/fetch'

import './style.styl'

export default class ListLoadMore extends React.Component {
  static defaultProps = { url: '' }
  static propTypes = { url: PropTypes.string.isRequired }

  constructor(props) {
    super(props)
    this.state= {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 1
    }
  }

  componentDidMount() {
    this.loadFirstPageData()
  }

  loadFirstPageData() {
    const url = this._getRealUrl()
    const result = fetch.get(url)
    this._resultHandle(result)
  }
  
  loadMoreData() {
    this.setState({
      isLoadingMore: true
    })
    const url = this._getRealUrl()
    const result = fetch.get(url)

    // 本地模拟延迟1s处理数据
    setTimeout(() => {
      this._resultHandle(result)
      this.setState({
        isLoadingMore: false
      })
    }, 1000)
  }

  _getRealUrl() {
    return this.props.url.repalce('{page}', this.state.page)
  }

  _resultHandle(result) {
    result.then(res => {
      this.setState({
        page: ++this.state.page,
        hasMore: res.hasMore,
        data: this.state.data.concat(res.data)
      })
    })
  }

  render() {
    if (this.state.data.length === 0 || (this.state.data.length === 1 && this.state.data[0] === null)) {
      return (
        <div>无数据</div>
      )
    }

    const childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        data: this.state.data
      })
    })

    return (
      <div className="List-loading-container">
        {childrenWithProps}
        <LoadMore
          isLoadingMore={this.state.isLoadingMore}
          loadMoreFn={this.loadMoreData.bind(this)}>
        </LoadMore>
      </div>
    )
  }
}
