import React, {useState} from 'react';

import ReactQuill from 'react-quill';

import Button from 'CoreComponents/button';

import './style.scss';
import 'react-quill/dist/quill.snow.css';

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
                <ReactQuill value={form}
                    onChange={onChange} />
                <Button onClick={clickSubmit}>Dodaj</Button>
            </div>
        </form>
    </div>;
};

export default StepForm;
