import React, {useState} from 'react';

import ReactQuill from 'react-quill';

import Button from 'CoreComponents/button';

import 'react-quill/dist/quill.snow.css';
import './style.scss';

const StepForm = ({addStep}) => {
    const [form, setForm] = useState('');
    const onChange = value => {
        setForm(value);
    };
    const clickSubmit = () => {
        if (addStep) {
            addStep(form);
        }
    };

    return <div className={'step-form'}>
        <form>
            <div className="step-form__form">
                <div className="step-form__input">
                    <ReactQuill value={form} onChange={onChange} style={{height: 'calc(100% - 42px)'}}/>
                </div>
                <Button onClick={clickSubmit}>Dodaj</Button>
            </div>
        </form>
    </div>;
};

export default StepForm;
