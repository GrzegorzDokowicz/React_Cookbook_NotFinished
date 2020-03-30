import React, {useState} from 'react';
import './style.scss';
import ProductsSelectFormComponent from "../products-select-form";
import Text from "../../../components/text";
import ProductDataRow from "../product-data-row";


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
