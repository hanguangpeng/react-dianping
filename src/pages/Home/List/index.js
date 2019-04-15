import React from 'react'
import { connect } from 'react-redux'
import ListComponent from '../../../components/List/index'
import ListLoadMore from '../../../components/ListLoadMore/index'

class List extends React.Component {
  render() {
    const url = '/api/homelist' + encodeURIComponent(this.props.cityName) + '/{page}'
    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        <ListLoadMore url={url}>
          <ListComponent/>
        </ListLoadMore>
      </div>
    )
  }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
