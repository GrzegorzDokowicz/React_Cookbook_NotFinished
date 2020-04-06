import React, {useState} from 'react';

import './style.scss';
import ProductForm from '../product-form';
import ProductSearchComponent from '../products-search';
import Select from 'CoreComponents/select';
import Text from '../../../../components/text';
import {connect} from 'react-redux';
import {registerProduct} from '../../../data-layer/products/actions';

const ProductCollection = ({dispatch, onSubmit}) => {
    const [type, setType] = useState('add');

    const submit = product => {
        if (onSubmit) {
            onSubmit(product);
        }

        dispatch(registerProduct(product));
    };

    return <div className="product-collection">
        <div className="product-collection__action">
            <div className="product-collection__action-title">
                <Text type={'title-small'}>Rodzaj akcji</Text>
            </div>
            <Select data={['add', 'search']}
                value={type}
                name={'action'}
                onChange={value => setType(value)}/>
        </div>
        {type === 'add' ? <ProductForm inline={true} onSubmit={submit}/> : <ProductSearchComponent onSubmit={submit}/>}
    </div>;
};

const ProductCollectionComponent = connect()(ProductCollection);
export default ProductCollectionComponent;
