import React, {useCallback, useState} from 'react';
import './style.scss';
import {useDropzone} from 'react-dropzone'
import Text from "../text";

const Upload = ({onLoad}) => {
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
                    })
            };

            reader.readAsArrayBuffer(file)
        })

    }, []);
    const {getRootProps, getInputProps} = useDropzone({onDrop});
    const [fileName, setFileName] = useState('');

    return <div className="upload">
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <Text type={"label"}>{fileName ? fileName : 'Place for your file...'}</Text>
        </div>
    </div>;
};

export default Upload;
