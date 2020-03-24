import React, {useState} from 'react';
import './style.scss';
import Input from "../../../components/input";
import Button from "../../../components/button";
import Select from "../../../components/select";
import Text from "../../../components/text";

const ProductForm = ({callback, inline = false}) => {
    const [form, setForm] = useState("");

    const onChange = name => {
        return $event => {
            const value = $event.currentTarget.value;

            setForm({
                ...form,
                [name]: value
            });
        }
    };

    const submit = ($event) => {
        $event.preventDefault();

        if (callback) {
            callback(form);
        }
    };

    return <div className={`product-form`}>
        {inline ? '' : <Text type={"header"}>Dodaj produkt</Text>}
        <form>
            <div className={`product-form__container${inline ? ' product-form__container--inline' : ''}`}>
                <Input name={"name"} text={"Nazwa"} onChange={onChange("name")}/>
                <Input name={"kcal"} text={"Ilosc kalorii"} onChange={onChange("kcal")}/>
                <Input name={"carbo"} text={"Wegle"} onChange={onChange("carbo")}/>
                <Input name={"protein"} text={"Bialko"} onChange={onChange("protein")}/>
                <Input name={"fat"} text={"Tluszcze"} onChange={onChange("fat")}/>
                <Select title={"Produkt nadrzedny"} onChange={onChange("parent")}/>
                <Button onClick={submit}>Submit</Button>
            </div>
        </form>
    </div>
};

export default ProductForm;
