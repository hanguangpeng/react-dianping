import React from 'react'
import LocalStore from '../../util/localStore'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import * as userInfoActions from '../../redux/actions/userInfo'

class PrimaryLayout extends React.Component {
  constructor() {
    super()
    this.state = {
      initDone: false 
    }
  }

  render() {
    return (
      <div className="primary-layout">
        <header>
          <LoadingBar style={{ backgroundColor: 'blue', height: '5px'}} />
        </header>
        <main>
          <div>{ this.state.initDone ? this.props.children : <p>加载中...</p> }</div>
        </main>
        <footer/>
      </div>
    )
  }

  compenentDidMount() {
    let cityName = LocalStore.get('cur_city')
    if (cityName == null) {
      cityName = '杭州'
    }
    this.props.userInfoActions.update({
      cityName: cityName
    })
    //模拟加载中
    setTimeout(() => this.setState({
      initDone: true
    }), 500)
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
)(PrimaryLayout)
