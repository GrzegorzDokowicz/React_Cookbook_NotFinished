import React from 'react';
import {connect} from 'react-redux';

import './style.scss';
import {initProductsData} from 'AppDataLayer/products/actions';
import AutoFill from 'CoreComponents/auto-fill';

const mapStateToProps = state => ({
    products: state.products.elements
});

/**
 * Base application component
 */
const ProductsSelectForm = ({products, dispatch, title, onChange}) => {
    if (!products || products.length === 0) {
        dispatch(initProductsData());
    }

    const change = currentName => {
        console.log(products);
        onChange(products.find(({name}) => name === currentName));
    };

    return <div className="product-select-form">
        <AutoFill data={products.map(({name}) => name)} title={title} onSelect={change}/>
    </div>;
};

const ProductsSelectFormComponent = connect(mapStateToProps)(ProductsSelectForm);

export default ProductsSelectFormComponent;
