import React from 'react';

import Text from 'CoreComponents/text';
import Input from 'CoreComponents/input';
import Button from 'CoreComponents/button';

import './style.scss';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentName: '',
            commentBody: '',
            timeStamp: ''
        };
        this.formTitle = 'Zostaw swój komentarz';
    }

    _handleChange(event) {
        const target = event.target;
        this.setState(prevState => ({
            ...prevState,
            [target.name]: target.value,
            timeStamp: new Date()
        }));
    }

    _handleClick() {
        if (this.props.onClick) {
            this.props.onClick(this.state);
        }
    }

    render() {
        return <form className="comment-form">
            <div className={'comment-form__header'}>
                <Text type={'subheader'}>
                    {this.formTitle}
                </Text>
            </div>
            <div className="comment-form__name-input">
                <Input name={'commentName'} text={'Twoje imię'} onChange={this._handleChange.bind(this)}
                    value={this.state.commentName}/>
            </div>
            <div className="comment-form__comment-input">
                <Input name={'commentBody'} text={'Twój komentarz'} onChange={this._handleChange.bind(this)}
                    value={this.state.commentBody}/>
            </div>
            <Button onClick={this._handleClick.bind(this)}>
                Dodaj komentarz
            </Button>
        </form>;
    }
}

export default CommentForm;
