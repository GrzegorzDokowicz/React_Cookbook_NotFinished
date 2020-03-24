import React from 'react';
import {connect} from 'react-redux';

import ProductForm from "../product-form";
import Text from "../../../components/text";
import Tabs from "../../../components/tabs";
import ProductsSelectFormComponent from "../products-select-form";
import {registerProduct} from "../../data-layer/products/actions";

const RecipeProductsForm = ({dispatch}) => {
    const submit = (data) => {
        dispatch(registerProduct(data));
    };
    const tabs = [
        {
            title: 'Baza produktow',
            component: <ProductsSelectFormComponent />
        },
        {
            title: 'Dodaj produkt',
            component: <ProductForm inline={true} onSubmit={submit}/>
        }
    ];

    return <div className="recipe-products">
        <Text type={"subheader"}>Produkty</Text>
        <Tabs data={tabs}/>
    </div>
};

export default connect()(RecipeProductsForm);
