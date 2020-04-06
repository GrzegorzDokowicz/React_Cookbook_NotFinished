import React from 'react';
import IconText from 'CoreComponents/icon-text';
import Text from 'CoreComponents/text';

import './style.scss';
import Button from '../../../../components/button';

const ProductDataRow = ({product, onSubmit=false}) => {
    const SubmitArea = () => <div className="product-data-row__row">
        <div className={'product-data-row__cell'}>
            <Button onClick={onSubmit}>Submit</Button>
        </div>
    </div>;
    const submit = onSubmit ? <SubmitArea/> : '';

    if (!product) {
        return <Text>Nie znaleziono produktu</Text>;
    }

    return <div className="product-data-row">
        <div className="product-data-row__row">
            <div className={'product-data-row__cell'}>
                <Text>{product.name}</Text>
            </div>
        </div>
        <div className="product-data-row__row ">
            <div className={'product-data-row__cell'}>
                <Text>Kalorie</Text>
                <IconText vertical={true} icon={'coffee'}>
                    <Text>{product.kcal}</Text>
                </IconText>
            </div>
            <div className={'product-data-row__cell'}>
                <Text>Wegle</Text>
                <IconText vertical={true} icon={'coffee'}>
                    <Text>{product.carbo}</Text>
                </IconText>
            </div>
            <div className={'product-data-row__cell'}>
                <Text>Bialka</Text>
                <IconText vertical={true} icon={'coffee'}>
                    <Text>{product.protein}</Text>
                </IconText>
            </div>
            <div className={'product-data-row__cell'}>
                <Text>Tluszcze</Text>
                <IconText vertical={true} icon={'coffee'}>
                    <Text>{product.fat}</Text>
                </IconText>
            </div>
        </div>
        {submit}
    </div>;
};

export default ProductDataRow;
