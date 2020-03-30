import React, {useState} from 'react';

import Input from 'CoreComponents/input';
import Upload from 'CoreComponents/upload';
import Button from 'CoreComponents/button';
import Text from 'CoreComponents/text';

import CategoryThumbnail from '../../page-elements/category-thumbnail';

import './style.scss';

const RecipeCategoryForm = ({callback}) => {
    const [name, setName] = useState('');
    const [file, setFile] = useState('');

    const onChange = $event => setName($event.currentTarget.value);
    const onLoad = ({file}) => setFile(file.name);
    const submit = () => {
        if (callback) {
            callback({
                name,
                file
            });
        }
    };

    return <div className="recipe-category-form">
        <div className="recipe-category-form__form">
            <Text type={'subheader'}>Dodaj kategorie przepisow</Text>
            <form>
                <div className="recipe-category-form__title">
                    <Input name={'title'} text={'Nazwa kategorii'} onChange={onChange}/>
                </div>
                <div className="recipe-category-form__image">
                    <Upload onLoad={onLoad}/>
                </div>
                <Button onClick={submit}>Submit</Button>
            </form>
        </div>
        <div className="recipe-category-form__preview">
            <Text type={'subheader'}>Podglad dodawanej kategorii</Text>
            <CategoryThumbnail title={name}/>
        </div>
    </div>;
};

export default RecipeCategoryForm;
