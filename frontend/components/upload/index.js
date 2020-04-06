import React, {useCallback, useState, useEffect} from 'react';
import './style.scss';
import {useDropzone} from 'react-dropzone';
import Text from '../text';
import InputWrapper from '../input-wrapper';

const Upload = ({onLoad, text}) => {
    const [fileName, setFileName] = useState('');
    const [result, setResult] = useState('');

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {
                setFileName(file.name);
                setResult(reader.result);
            };

            reader.readAsArrayBuffer(file);
        });

    }, []);
    const {getRootProps, getInputProps} = useDropzone({onDrop});

    useEffect(() => {
        if (onLoad) {
            onLoad({
                fileName,
                result
            });
        }
    }, [fileName]);

    return <InputWrapper text={text}>
        <div className="upload" {...getRootProps()}>
            <input {...getInputProps()} />
            <Text type={'label'}>{fileName ? fileName : 'Kliknij, aby zaladowac plik...'}</Text>
        </div>
    </InputWrapper>;

};

export default Upload;
