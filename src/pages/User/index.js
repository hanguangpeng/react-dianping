import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActions from '../../redux/actions/userInfo'
import Header from '../../components/Header/index'
import OrderList from './OrderList'
import './style.styl'

class User extends React.Component {
  render() {
    const { userName, cityName } = this.props.userInfo
    return (
      <div>
        <Header title="用户中心" backUrl='/'/>
        <div className="userInfo-container">
          <p>
            <i className="icon-user"></i>
            <span>{userName}</span>
          </p>
          <p>
            <i className="icon-map-marker"></i>
            <span>{cityName}</span>
          </p>
        </div>
        <OrderList></OrderList>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
