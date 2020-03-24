import React, {useState} from 'react';
import './style.scss';
import Input from "../../../components/input";
import Upload from "../../../components/upload";
import MultiSelect from "../../../components/multi-select";

const RecipeGeneralDataForm = ({callback, categories}) => {
    const [form, setForm] = useState("");
    const onChange = name => {
        return $event => {
            const value = $event.currentTarget.value;

            setForm({
                ...form,
                [name]: value
            });
        }
    };
    const onLoad = ({file}) => setForm({
        ...form,
        ['mainImage']: file.name
    });

    return <div className={`recipe-draft-data-form`}>
        <div className="recipe-draft-data-form__title">
            <Input name={"title"} text={"Nazwa przepisu"} onChange={onChange("title")}/>
        </div>
        <div className="recipe-draft-data-form__category">
            <MultiSelect title={"Kategorie"} data={categories.map(cat => cat.name)}/>
        </div>
        <div className="recipe-draft-data-form__image">
            <Upload onLoad={onLoad}/>
        </div>
    </div>
};

export default RecipeGeneralDataForm;
