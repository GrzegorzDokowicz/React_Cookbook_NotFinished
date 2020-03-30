import React from 'react';
import {connect} from 'react-redux';

import ProductForm from "../product-form";
import Text from "../../../components/text";
import Tabs from "../../../components/tabs";
import {registerProduct} from "../../data-layer/products/actions";

import './style.scss';
import ProductBase from "../products-base";
import ProductSearch from "../products-search";

const RecipeProductsForm = ({dispatch}) => {
    const submit = (data) => {
        dispatch(registerProduct(data));
    };
    const tabs = [
        {
            title: 'Twoja baza produktow',
            component: <ProductBase/>
        },
        {
            title: 'Dodaj produkt',
            component: <ProductForm inline={true} onSubmit={submit}/>
        },
        {
            title: 'Wyszukaj produkt',
            component: <ProductSearch/>
        },
    ];

    return <div className="recipe-products">
        <div className="recipe-products__header">
            <Text type={"subheader"}>Formularz produktow</Text>
        </div>
        <Tabs data={tabs}/>
    </div>
};

export default connect()(RecipeProductsForm);
