import React from 'react';

import Text from 'CoreComponents/text';

import './style.scss';
import ProductDataRow from '../../product/product-data-row';

const ProductRow = (props) => {
    return <div className='recipe-products__product'>
        <ProductDataRow product={props}/>
    </div>;
};

const RecipeProducts = ({data}) => {
    const hasProduct = data && data.length > 0;
    const noContent = <Text type={'title-small'}>Nie dodano produktow do przepisu.</Text>;
    const content = hasProduct ? data.map((element, index) => <ProductRow key={index} {...element}/>) : noContent;

    return <div className='recipe-products'>
        <div className='recipe-products__title'>
            <Text type={'subheader'}>Lista produktow</Text>
        </div>
        <div className={`recipe-products__content ${!hasProduct ? 'recipe-products__content--items' : ''} `}>
            {content}
        </div>
    </div>;
};

export default RecipeProducts;
