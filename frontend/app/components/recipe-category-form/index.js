import React from 'react';
import './style.scss';
import Input from "../../../components/input";
import Upload from "../../../components/upload";

const RecipeCategoryForm = () => {
    return <div className="recipe-category-form">
        <div className="recipe-category-form__form">
            <div className="recipe-category-form__title">
                <Input name={"title"} text={"Nazwa kategorii"}/>
            </div>
            <div className="recipe-category-form__image">
                <Upload/>
            </div>
        </div>
        <div className="recipe-category-form__preview">
        </div>
    </div>
};

export default RecipeCategoryForm;
