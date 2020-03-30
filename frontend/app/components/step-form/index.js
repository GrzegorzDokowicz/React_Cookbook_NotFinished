import React, {useState, useEffect} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './style.scss';
import Button from "../../../components/button";

const StepForm = ({addStep}) => {
    const [form, setForm] = useState("");
    const onChange = value => {
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
                <ReactQuill value={form}
                            onChange={onChange} />
                <Button onClick={clickSubmit}>Dodaj</Button>
            </div>
        </form>
    </div>
};

export default StepForm;
