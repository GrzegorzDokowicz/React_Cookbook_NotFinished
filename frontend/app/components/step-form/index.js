import React, {useState, useEffect} from 'react';
import './style.scss';
import Input from "../../../components/input";
import Button from "../../../components/button";

const StepForm = ({addStep}) => {
    const [form, setForm] = useState("");
    const onChange = $event => {
        const value = $event.currentTarget.value;
        setForm(value);
    };
    const clickSubmit = () => {
        if (addStep) {
            addStep(form);
        }
    };

    return <div className={`step-form`}>
        <form>
            <div className="step-form__form">
            <Input name={"name"} value={form} text={"Nazwa"} onChange={onChange}/>
            <Button onClick={clickSubmit}>Dodaj</Button>
            </div>
        </form>
    </div>
};

export default StepForm;
