import React, {useState, useEffect} from 'react';

import Input from 'CoreComponents/input';
import Button from 'CoreComponents/button';
import Text from 'CoreComponents/text';
import Checkbox from 'CoreComponents/checkbox';

import ProductsSelectFormComponent from '../products-select-form';

import './style.scss';

const ProductForm = ({onSubmit, inline = false}) => {
    const [form, setForm] = useState({
        name: '',
        kcal: '',
        carbo: '',
        fat: '',
        protein: ''
    });
    const [hasParent, setParent] = useState(false);
    const [parent, setParentElement] = useState(false);

    const onChange = name => {
        return $event => {
            const value = $event.currentTarget.value;

            setForm({
                ...form,
                [name]: value
            });
        };
    };

    useEffect(() => {
        setForm(parent);
    }, [parent]);

    const submit = () => {
        if (onSubmit) {
            onSubmit(form);
        }
    };

    return <div className={'product-form'}>
        {inline ? '' : <Text type={'header'}>Dodaj produkt</Text>}
        <form>
            <div className={`product-form__container${inline ? ' product-form__container--inline' : ''}`}>
                <div className="product-form__row product-form__row--mobile-margin">
                    <Checkbox onClick={() => setParent(!hasParent)} active={hasParent} title={'Czy jest to podgrupa produktu?'}/>
                </div>
                <div className={`product-form__row${!hasParent ? ' product-form__row--hidden' : ''} product-form__row--mobile-margin`}>
                    <ProductsSelectFormComponent title={'Produkt nadrzedny'} onChange={(parent) => setParentElement(parent)}/>
                </div>
                <div className="product-form__row">
                    <div className="product-form__element">
                        <Input name={'name'} text={'Nazwa'} onChange={onChange('name')} value={form.name}/>
                    </div>
                    <div className="product-form__element">
                        <Input name={'kcal'} text={'Ilosc kalorii'} onChange={onChange('kcal')} value={form.kcal}/>
                    </div>
                </div>
                <div className="product-form__row">
                    <div className="product-form__element">
                        <Input name={'protein'} text={'Bialko'} onChange={onChange('protein')} value={form.protein}/>
                    </div>
                    <div className="product-form__element">
                        <Input name={'fat'} text={'Tluszcze'} onChange={onChange('fat')} value={form.fat}/>
                    </div>
                    <div className="product-form__element">
                        <Input name={'carbo'} text={'Wegle'} onChange={onChange('carbo')} value={form.carbo}/>
                    </div>
                </div>
                <Button onClick={submit}>Submit</Button>
            </div>
        </form>
    </div>;
};

export default ProductForm;
