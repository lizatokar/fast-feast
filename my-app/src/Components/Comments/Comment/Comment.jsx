import './comment.css'

const Comment = (props) => {
    return (
        <div className='Comment'>
            <h3>{props.comment.title}</h3>
            <h3>{props.comment.user}</h3>
            <p>{props.comment.text}</p>
            <h5>{props.comment.date}</h5>
        </div>
    )
}

export default Comment;