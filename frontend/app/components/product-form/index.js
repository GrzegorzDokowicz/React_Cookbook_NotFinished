import React, {useState} from 'react';
import './style.scss';
import Input from "../../../components/input";
import Button from "../../../components/button";
import Text from "../../../components/text";
import ProductsSelectFormComponent from "../products-select-form";
import Checkbox from "../../../components/checkbox";

const ProductForm = ({onSubmit, inline = false}) => {
    const [form, setForm] = useState({});
    const [hasParent, setParent] = useState(false);

    const onChange = name => {
        return $event => {
            const value = $event.currentTarget.value;

            setForm({
                ...form,
                [name]: value
            });
        }
    };

    const submit = () => {
        if (onSubmit) {
            onSubmit(form);
        }
    };

    return <div className={`product-form`}>
        {inline ? '' : <Text type={"header"}>Dodaj produkt</Text>}
        <form>
            <div className={`product-form__container${inline ? ' product-form__container--inline' : ''}`}>
                <div className="product-form__row">
                    <Checkbox onClick={() => setParent(!hasParent)} active={hasParent} title={"Czy jest to podgrupa produktu?"}/>
                </div>
                <div className={`product-form__row${!hasParent ? ' product-form__row--hidden' : ''}`}>
                    <ProductsSelectFormComponent title={"Produkt nadrzedny"} onChange={onChange("parent")}/>
                </div>
                <div className="product-form__row">
                    <div className="product-form__element">
                        <Input name={"name"} text={"Nazwa"} onChange={onChange("name")}/>
                    </div>
                    <div className="product-form__element">
                        <Input name={"kcal"} text={"Ilosc kalorii"} onChange={onChange("kcal")}/>
                    </div>
                </div>
                <div className="product-form__row">
                    <div className="product-form__element">
                        <Input name={"protein"} text={"Bialko"} onChange={onChange("protein")}/>
                    </div>
                    <div className="product-form__element">
                        <Input name={"fat"} text={"Tluszcze"} onChange={onChange("fat")}/>
                    </div>
                    <div className="product-form__element">
                        <Input name={"carbo"} text={"Wegle"} onChange={onChange("carbo")}/>
                    </div>
                </div>
                <Button onClick={submit}>Submit</Button>
            </div>
        </form>
    </div>
};

export default ProductForm;
