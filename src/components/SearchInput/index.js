import React from 'react'
import './style.styl'

export default class SearchInput extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: ''
    }
  }
  
  ChangeHandle(e) {
    this.setState({
      value: e.target.value
    })
  }

  KeyUpHandel(e) {
    if (e.keycode !== 13) {
      return
    }
    if (e.target.value) {
      this.props.enterHandle(e.target.value)
    } else {
      console.log('请输入关键字')
    }
  }

  render() {
    return (
      <input
        className="search-input"
        type="text"
        placeholder="请输入关键字"
        onChange={this.ChangeHandle.bind(this)}
        onKeyUp={this.KeyUpHandel.bind(this)}
        value={this.state.value}/>
    )
  }

  componentDidMount() {
    this.setState({
      value: this.props.value || ''
    })
  }
}