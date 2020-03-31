import React, {useState, useEffect} from 'react';

import Input from 'CoreComponents/input';
import Upload from 'CoreComponents/upload';
import MultiSelect from 'CoreComponents/multi-select';
import Text from "CoreComponents/text";

import './style.scss';

const RecipeGeneralDataForm = ({onChange, categories}) => {
    const [form, setForm] = useState({});
    const onChangeCallback = $event => {
        const value = $event.currentTarget.value;
        setForm({
            ...form,
            title: value
        });
    };

    const onLoad = ({fileName}) => setForm({
        ...form,
        mainImage: fileName
    });

    const setCategory = (category) => setForm({
        ...form,
        category
    });

    useEffect(() => {
        if (onChange) {
            onChange(form);
        }
    }, [form]);

    return <div className={'recipe-draft-data-form'}>
        <div className={'recipe-draft-data-form__title'}>
            <Text type={"subheader"}>Informacje o przepisie</Text>
        </div>
        <div className={'recipe-draft-data-form__content'}>
            <div className={'recipe-draft-data-form__inputs'}>
                <div className="recipe-draft-data-form__title">
                    <Input name={'title'} text={'Nazwa przepisu'} onChange={onChangeCallback}/>
                </div>
                <div className="recipe-draft-data-form__category">
                    <MultiSelect title={'Kategorie'} data={categories.map(cat => cat.name)} onSelect={setCategory}/>
                </div>
            </div>
            <div className="recipe-draft-data-form__image">
                <Upload onLoad={onLoad} text={'Zdjecie glowne przepisu'}/>
            </div>
        </div>
    </div>;
};

export default RecipeGeneralDataForm;
