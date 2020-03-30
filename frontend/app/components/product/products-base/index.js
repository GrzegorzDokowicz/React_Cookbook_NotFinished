import React, {useState} from 'react';

import Text from "CoreComponents/text";

import ProductDataRow from "../product-data-row";
import ProductsSelectFormComponent from "../products-select-form";

import './style.scss';

const ProductBase = () => {
    const [currentProduct, setProduct] = useState(false);

    return <div className="product-base">
        <div className="product-base__title">
            <Text type={"title"}>
                Twoja baza produktow
            </Text>
            <Text type={"description"}>
                Wyszukaj produktu wsrod listy produktow ktore dodales recznie
            </Text>
        </div>

        <div className="product-base__title">
            <ProductsSelectFormComponent onChange={product => setProduct(product)}/>
        </div>
        <div className="product-base__title">
            <ProductDataRow product={currentProduct}/>
        </div>
    </div>
};

export default ProductBase;
