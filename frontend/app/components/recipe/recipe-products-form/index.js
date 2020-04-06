import React from 'react';
import {connect} from 'react-redux';

import Text from 'CoreComponents/text';
import Tabs from 'CoreComponents/tabs';

import ProductBase from '../../product/products-base';

import './style.scss';
import ProductCollection from '../../product/products-collection';

const RecipeProductsForm = ({onSubmit}) => {

    const tabs = [
        {
            title: 'Dodaj produkt do przepisu',
            component: <ProductBase onSubmit={onSubmit}/>
        },
        {
            title: 'Baza produktow',
            component: <ProductCollection onSubmit={onSubmit}/>
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
