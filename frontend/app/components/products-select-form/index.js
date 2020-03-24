import React from 'react';
import {connect} from 'react-redux';

import './style.scss';
import MultiSelect from "../../../components/multi-select";
import {initProductsData} from "../../data-layer/products/actions";

const mapStateToProps = state => ({
    products: state.products.elements
});

/**
 * Base application component
 */
const ProductsSelectForm = ({products, dispatch}) => {
    if(!products || products.length === 0) {
        dispatch(initProductsData());
    }

    return <div className="product-select-form">
        <MultiSelect data={products}/>
    </div>;
};

const ProductsSelectFormComponent = connect(mapStateToProps)(ProductsSelectForm);

export default ProductsSelectFormComponent;
