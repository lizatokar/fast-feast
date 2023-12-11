import Comment from "./Comment/Comment";
import {useState} from "react";
import './comments.css';

const Comments = (props) => {
    let [comments, setComments] = useState(props.comments);
    let [currentComment, setCurrentComment] = useState('');
    let [currentUser, setCurrentUser] = useState('');
    let [currentTitle, setCurrentTitle] = useState('');

    const currentCommentHandler = (e) => {
        let currentComment = e.currentTarget.value;
        setCurrentComment(currentComment);
    }

    const addCommentHandler = () => {

        let comment = {
            user: currentUser,
            id: 6,
            title: currentTitle,
            text: currentComment,
            date: new Date().toLocaleString()
        }
        setComments([comment, ...comments]);
    }

    const currentUserHandler = (e) => {
        let user = e.currentTarget.value;
        setCurrentUser(user);
    }

    const currentTitleHandler = (e) => {
        setCurrentTitle(e.currentTarget.value);
    }

    return (
        <div className='Posts'>
                <h3>Add your name:</h3>
                <input type='text' onChange={currentUserHandler} placeholder='Type your name'/>
                <h3>Add a title:</h3>
                <input type='text' onChange={currentTitleHandler} placeholder='Type a comment title'/>
                <h3>Leave your comment:</h3>
                <textarea name="" id="" cols="60" rows="10" onChange={currentCommentHandler} placeholder='Type new comment here'></textarea>
            <button onClick={addCommentHandler} className='PostButton'>Post</button>

            <h3>Comments:</h3>
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}/>)
            }
        </div>
    )
}

export default Comments;