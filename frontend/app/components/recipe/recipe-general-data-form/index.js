import React, {useState} from 'react';

import Input from 'CoreComponents/input';
import Upload from 'CoreComponents/upload';
import MultiSelect from 'CoreComponents/multi-select';

import './style.scss';

const RecipeGeneralDataForm = ({onChange, categories}) => {
    const [form, setForm] = useState('');
    const onChangeCallback = name => {
        return $event => {
            const value = $event.currentTarget.value;

            setForm({
                ...form,
                [name]: value
            });

            if(onChange) {
                onChange(form);
            }
        };
    };
    const onLoad = ({file}) => setForm({
        ...form,
        ['mainImage']: file.name
    });

    return <div className={'recipe-draft-data-form'}>
        <div className="recipe-draft-data-form__title">
            <Input name={'title'} text={'Nazwa przepisu'} onChange={onChangeCallback('title')}/>
        </div>
        <div className="recipe-draft-data-form__category">
            <MultiSelect title={'Kategorie'} data={categories.map(cat => cat.name)}/>
        </div>
        <div className="recipe-draft-data-form__image">
            <Upload onLoad={onLoad} text={'Zdjecie glowne przepisu'}/>
        </div>
    </div>;
};

export default RecipeGeneralDataForm;
