import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem/index'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  onChangeNameInput = event => {
    this.setState({name: event.target.value})
  }

  onChangeCommentInput = event => {
    this.setState({comment: event.target.value})
  }

  addCommentClick = event => {
    event.preventDefault()
    const {commentsList, comment, name} = this.state

    if (comment !== '' && name !== '') {
      const newCommentObj = {
        id: uuidv4(),
        name,
        comment,
        isLiked: false,
      }
      this.setState(previousState => ({
        commentsList: [...previousState.commentsList, newCommentObj],
        name: '',
        comment: '',
      }))
    } else {
      this.setState(commentsList)
    }
  }

  onClickDelete = id => {
    this.setState(previousState => ({
      commentsList: previousState.commentsList.filter(each => each.id !== id),
    }))
  }

  onLikeButtonClick = id => {
    this.setState(previousState => ({
      commentsList: previousState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    console.log(commentsList)

    return (
      <div className="mainContainer">
        <div className="commentCard">
          <h1 className="mainHeading">Comments</h1>
          <div className="commentDataInputContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="commentsPhoto"
              alt="comments"
            />
            <form
              className="addNewCommentContainer"
              onSubmit={this.addCommentClick}
            >
              <p className="note">Say something about 4.0 Technologies</p>
              <input
                className="inputEl"
                placeholder="Your Name"
                type="text"
                onChange={this.onChangeNameInput}
                value={name}
              />
              <div>
                <textarea
                  className="commentInputEl"
                  rows="6"
                  cols="30"
                  placeholder="Your Comment"
                  onChange={this.onChangeCommentInput}
                  value={comment}
                />
              </div>
              <div>
                <button className="addCommentButton" type="submit">
                  Add Comment
                </button>
              </div>
            </form>
          </div>
          <br />
          <hr />
          <span className="commentsCount" id="commentsCount">
            {commentsList.length}
          </span>
          <label htmlFor="commentsCount"> Comments</label>
          <ul className="eachNewCommentContainer">
            {commentsList.length !== 0
              ? commentsList.map((eachComment, index) => (
                  <CommentItem
                    eachComment={eachComment}
                    key={eachComment.id}
                    onClickDelete={this.onClickDelete}
                    onLikeButtonClick={this.onLikeButtonClick}
                    background={initialContainerBackgroundClassNames[index]}
                  />
                ))
              : null}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
