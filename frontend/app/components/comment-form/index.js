import React from 'react';
import './style.scss';
import Text from '../../../components/text';
import Input from '../../../components/input';

const CommentForm = () => {
    const formTitle = 'Zostaw swój komentarz';
    const handleClick = (event) => console.log('log')

    return <form className="comment-form">
        <div className={'comment-form__header'}>
            <Text type={'subheader'} children={formTitle}/>
        </div>
        <div className="comment-form__name-input">
            <Input name={'name-input'} text={'Twoje imię'} onChange={handleClick()}/>
        </div>
        <div className="comment-form__comment-input">
            <Input name={'comment-input'} text={'Twój komentarz'} onChange={handleClick()}/>
        </div>
    </form>
};

export default CommentForm;
