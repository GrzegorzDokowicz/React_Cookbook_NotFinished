import React, {useState} from 'react';
import './style.scss';
import IconText from "../../../components/icon-text";
import Text from "../../../components/text";

const ProductDataRow = ({product}) => {
    if (!product) {
        return <Text>Nie znaleziono produktu</Text>
    }

    return <div className="product-data-row">
        <div className={"product-data-row__cell"}>
            <Text>{product.name}</Text>
        </div>
        <div className={"product-data-row__cell"}>
            <Text>Kalorie</Text>
            <IconText vertical={true} icon={"coffee"}>
                <Text>{product.kcal}</Text>
            </IconText>
        </div>
        <div className={"product-data-row__cell"}>
            <Text>Wegle</Text>
            <IconText vertical={true} icon={"coffee"}>
                <Text>{product.carbo}</Text>
            </IconText>
        </div>
        <div className={"product-data-row__cell"}>
            <Text>Bialka</Text>
            <IconText vertical={true} icon={"coffee"}>
                <Text>{product.protein}</Text>
            </IconText>
        </div>
        <div className={"product-data-row__cell"}>
            <Text>Tluszcze</Text>
            <IconText vertical={true} icon={"coffee"}>
                <Text>{product.fat}</Text>
            </IconText>
        </div>
    </div>
};

export default ProductDataRow;
