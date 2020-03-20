import React from 'react';
import './style.scss';
import CommentForm from '../comment-form';


const Comments = () => {

    const _addCommentClick = (dataFromForm) => {
        console.log(dataFromForm)
    };

    return <div className="comments">
        <CommentForm onClick={_addCommentClick}/>
    </div>
};

export default Comments;
