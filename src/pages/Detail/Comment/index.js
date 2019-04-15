import React from 'react'
import ListLoadMore from '../../../components/ListLoadMore';
import CommentList from './CommentList'

import './style.styl'

export default class Comment extends React.Component {
  render() {
    const url = `/api/detail/comment/{page}/${this.props.id}`
    return (
      <div className="detail-comment-subpage">
        <h2>用户点评</h2>
        <ListLoadMore url={url}>
          <CommentList />
        </ListLoadMore>
      </div>
    )
  }
}
