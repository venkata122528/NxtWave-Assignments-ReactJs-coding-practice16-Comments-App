// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {eachComment, onClickDelete, onLikeButtonClick, background} = props
  const {id, comment, name, isLiked} = eachComment

  const getTime = () => {
    const timeString = formatDistanceToNow(new Date())
    return timeString
  }

  const onClickLikeButton = () => {
    onLikeButtonClick(id)
  }

  const onClickDeleteButton = () => {
    onClickDelete(id)
  }

  let likeImageLink
  if (isLiked) {
    likeImageLink =
      'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  } else {
    likeImageLink =
      'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  }

  return (
    <li className="eachCommentList">
      <div className="nameTimeContainerForPlacement">
        <div className="nameTimeContainer">
          <span className={background}>{name[0]}</span>
          <p className="name">{name}</p>
          <p className="time">{getTime()}</p>
        </div>
      </div>
      <p className="Comment">{comment}</p>
      <div className="likeDeleteContainer">
        <div className="likeContainer">
          <img src={likeImageLink} className="likeImage" alt="like" />
          <button
            type="button"
            className="likeButton"
            onClick={onClickLikeButton}
          >
            Like
          </button>
        </div>
        <div className="deleteButtonContainer">
          <button
            type="button"
            className="deleteButton"
            data-testid="delete"
            onClick={onClickDeleteButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="deleteImage"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
