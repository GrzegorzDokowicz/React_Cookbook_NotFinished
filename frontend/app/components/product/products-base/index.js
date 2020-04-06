import React, {useState} from 'react';

import Text from 'CoreComponents/text';

import ProductDataRow from '../product-data-row';
import ProductsSelectFormComponent from '../products-select-form';

import './style.scss';

const ProductBase = ({onSubmit}) => {
    const [currentProduct, setProduct] = useState(false);
    const submit = () => {
        if (onSubmit) {
            onSubmit(currentProduct);
        }
    };

    return <div className="product-base">
        <div className="product-base__description">
            <Text type={'description'}>
                Wyszukaj z listy produktow ktore dodales recznie lub wczytales z bazy produktow.
            </Text>
        </div>
        <div className="product-base__form">
            <ProductsSelectFormComponent onChange={product => setProduct(product)}/>
        </div>
        <div className="product-base__data">
            <ProductDataRow product={currentProduct} onSubmit={submit}/>
        </div>
    </div>;
};

export default ProductBase;
