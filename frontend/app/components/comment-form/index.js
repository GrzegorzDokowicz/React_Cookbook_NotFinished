import React from 'react';
import './style.scss';
import Text from '../../../components/text';
import Input from '../../../components/input';
import Button from '../../../components/button';


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

    _handleChange = (event) => {
        const target = event.target;
        this.setState({
            [target.name]: target.value,
            timeStamp: new Date()
        })
    };

    _handleClick = () => {
        if (this.props.onClick) {
            this.props.onClick(this.state)
        }
    };

    render() {
        return <form className="comment-form">
            <div className={'comment-form__header'}>
                <Text type={'subheader'} children={this.formTitle}/>
            </div>
            <div className="comment-form__name-input">
                <Input name={'commentName'} text={'Twoje imię'} onChange={this._handleChange}
                       value={this.state.commentName}/>
            </div>
            <div className="comment-form__comment-input">
                <Input name={'commentBody'} text={'Twój komentarz'} onChange={this._handleChange}
                       value={this.state.commentBody}/>
            </div>
            <Button children={'Dodaj komentarz'} onClick={this._handleClick}/>
        </form>
    }
};

export default CommentForm;
