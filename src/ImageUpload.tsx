import { useCallback, useEffect, useMemo, useState } from 'react';
import * as firebaseStorage from 'firebase/storage';
import { storage } from './firebase';
import { Image } from './styles';

const Progress = ({ progress }: { progress: number }) => {
  if (progress === 100) {
    return <p>Upload completed successfully</p>;
  }

  return <p>Upload is {progress}% done</p>;
};

const ImageUpload = ({ image }: { image: File }) => {
  const [progress, setProgress] = useState<number | null>(null);

  const handleProgress = useCallback(
    (snapshot: firebaseStorage.UploadTaskSnapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);
    },
    []
  );

  useEffect(() => {
    const imageRef = firebaseStorage.ref(storage, image.name);
    const uploadTask = firebaseStorage.uploadBytesResumable(imageRef, image);
    uploadTask.on('state_changed', handleProgress);
  }, []);

  const imageUrl = useMemo(() => URL.createObjectURL(image), [image]);

  return (
    <div>
      <Image src={imageUrl} alt={image.name} />
      {progress && <Progress progress={progress} />}
    </div>
  );
};

export default ImageUpload;
