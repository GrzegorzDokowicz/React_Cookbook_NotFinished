import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import AutoFillBase from 'CoreComponents/auto-fill-base';
import Select from 'CoreComponents/select';

import {registerSearchProduct} from 'AppDataLayer/products/actions';
import ProductDataRow from '../product-data-row';

import './style.scss';

const mapStateToProps = (state) => ({
    currentResults: state.products.currentResults
});

const ProductSearchComponent = ({currentResults, dispatch, onSubmit}) => {
    const data = currentResults.map(({name}) => name);
    const [currentProduct, setProduct] = useState(false);
    const [currentProductName, setProductName] = useState(false);
    const [type, setType] = useState('nazwa');
    const submitProduct = () => {
        if (onSubmit) {
            onSubmit(currentProduct);
        }
    };

    useEffect(() => {
        setProduct(currentResults.find(({name}) => currentProductName === name));
    }, [currentProductName]);

    return <div className="product-search">
        <div className="product-search__form">
            <div className="product-search__select">
                <Select title={'Kryterium wyszukoiwania'}
                    data={['kod', 'nazwa']}
                    value={type}
                    name={'critery'}
                    onChange={value => setType(value)}/>
            </div>
            <AutoFillBase data={data}
                limit={3}
                title={type === 'nazwa' ? 'Nazwa' : 'Kod'}
                onSearch={string => dispatch(registerSearchProduct(string))}
                onSelect={name => setProductName(name)}/>
        </div>
        <div className="product-search__data">
            <ProductDataRow product={currentProduct} onSubmit={submitProduct}/>
        </div>
    </div>;
};

const ProductSearch = connect(mapStateToProps)(ProductSearchComponent);

export default ProductSearch;
