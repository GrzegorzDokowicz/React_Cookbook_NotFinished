import React from 'react';
import Text from "../../../components/text";

const ProductRow = ({name}) => {
    return <div className="recipe-products__product">
        <Text>{name}</Text>
    </div>
};

const RecipeProducts = ({data}) => {
    return <div className="recipe-products">
        <Text type={"subheader"}>Lista produktow</Text>
        <div className="recipe-products__products-list">
            {
                data ? data.map((element, index) => <ProductRow key={index} name={element.name}/>) : 'Brak'
            }
        </div>
    </div>
};

export default RecipeProducts;
