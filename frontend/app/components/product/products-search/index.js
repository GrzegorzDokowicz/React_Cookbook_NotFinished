import React, {useState} from 'react';
import {connect} from 'react-redux';

import AutoFillBase from 'CoreComponents/auto-fill-base';
import Select from 'CoreComponents/select';
import Text from 'CoreComponents/text';

import {registerSearchProduct} from 'AppDataLayer/products/actions';
import ProductDataRow from '../product-data-row';

import './style.scss';

const mapStateToProps = (state) => ({
    currentResults: state.products.currentResults
});

const ProductSearchComponent = ({currentResults, dispatch}) => {
    const data = currentResults.map(({name}) => name);
    const [currentProduct, setProduct] = useState(false);
    const [type, setType] = useState('nazwa');

    return <div className="product-search">
        <div className="product-search__title">
            <Text type={'title'}>
                Twoja baza produktow
            </Text>
            <Text type={'description'}>
                Wyszukaj produktu wsrod listy produktow ktore dodales recznie
            </Text>
        </div>
        <div className="product-search__form">
            <Select title={'Kryterium wyszukoiwania'}
                data={['kod', 'nazwa']}
                value={type}
                name={'critery'}
                onChange={value => setType(value)} />
            <AutoFillBase data={data}
                limit={3}
                title={type === 'nazwa' ? 'Nazwa' : 'Kod'}
                onSearch={string => dispatch(registerSearchProduct(string))}
                onSelect={name => setProduct(name)}/>
        </div>
        <div className="product-search__data">
            <ProductDataRow product={currentProduct}/>
        </div>
    </div>;
};

const ProductSearch = connect(mapStateToProps)(ProductSearchComponent);

export default ProductSearch;
