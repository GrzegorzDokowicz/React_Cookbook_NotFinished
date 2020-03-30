import React, {useCallback, useState} from 'react';
import './style.scss';
import {useDropzone} from 'react-dropzone';
import Text from '../text';
import InputWrapper from '../input-wrapper';

const Upload = ({onLoad, text}) => {
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {
                setFileName(file.name);
                onLoad({
                    file,
                    binaryFile: reader.result
                });
            };

            reader.readAsArrayBuffer(file);
        });

    }, []);
    const {getRootProps, getInputProps} = useDropzone({onDrop});
    const [fileName, setFileName] = useState('');

    return <InputWrapper text={text}>
        <div className="upload" {...getRootProps()}>
            <input {...getInputProps()} />
            <Text type={'label'}>{fileName ? fileName : 'Kliknij, aby zaladowac plik...'}</Text>
        </div>
    </InputWrapper>;

};

export default Upload;
