import React from 'react'
import { connect } from 'react-redux'
import { getAdData } from '../../../services/HomeService'

import './style.styl'

class Ad extends React.Component {
  constructor() {
    super()
    this.state = {
      item: []
    }
  }
  
  render() {
    return (
      <div id="home-sale">
        <h2 className="home-list-title">超值特惠</h2>
        <div className="sale-container clear-fix">
          {this.state.item.map((item, index) => {
            return (
              <div key={index} className="sale-item float-left">
                <a herf="#">
                  <img src={item.img} alt={item.title}/>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  componentDidMount() {
    getAdData().then(res => {
      this.setState({
        item: res
      })
    })
  }
}

// -------------------redux react 绑定--------------------
function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}
function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ad)
