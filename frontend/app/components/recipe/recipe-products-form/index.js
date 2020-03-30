import React from 'react';
import {connect} from 'react-redux';

import Text from 'CoreComponents/text';
import Tabs from 'CoreComponents/tabs';
import {registerProduct} from 'AppDataLayer/products/actions';

import ProductForm from '../../product/product-form';
import ProductBase from '../../product/products-base';
import ProductSearch from '../../product/products-search';

import './style.scss';

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
            <Text type={'subheader'}>Formularz produktow</Text>
        </div>
        <Tabs data={tabs}/>
    </div>;
};

export default connect()(RecipeProductsForm);
