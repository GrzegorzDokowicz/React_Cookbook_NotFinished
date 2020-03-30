import React from 'react';

import CommentForm from '../comment-form';

import './style.scss';

const Comments = () => {

    const _addCommentClick = (dataFromForm) => {
        console.log(dataFromForm);
    };

    return <div className="comments">
        <CommentForm onClick={_addCommentClick}/>
    </div>;
};

export default Comments;
