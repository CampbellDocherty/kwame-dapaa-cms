import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Dropzone } from './styles';

import ImageUpload from './ImageUpload';

const App = () => {
  const [images, setImages] = useState<File[] | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImages(acceptedFiles);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({ onDrop, accept: { 'image/*': [] } });

  return (
    <div>
      <Dropzone {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag and drop some files here, or click to select files</p>
        )}
      </Dropzone>
      {images &&
        images.map((image) => <ImageUpload key={image.name} image={image} />)}
    </div>
  );
};

export default App;
