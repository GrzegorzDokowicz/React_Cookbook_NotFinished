import React from 'react';
import ProductForm from "../product-form";
import Text from "../../../components/text";
import Tabs from "../../../components/tabs";
import ProductsSelectFormComponent from "../products-select-form";

const RecipeProductsForm = () => {
    const tabs = [
        {
            title: 'Baza produktow',
            component: <ProductsSelectFormComponent />
        },
        {
            title: 'Dodaj produkt',
            component: <ProductForm inline={true}/>
        }
    ];

    return <div className="recipe-products">
        <Text type={"subheader"}>Produkty</Text>
        <Tabs data={tabs}/>
    </div>
};

export default RecipeProductsForm;
