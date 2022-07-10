import { ChangeEvent, useState } from "react";
import { IUseCrop } from "../../types/uploadFileInterfaces";


function useCrop({ setFile, editor, setUserProfilePic }: IUseCrop) {
  const [rotation, setRotation] = useState(0);
  const [scaleValue, setScaleValue] = useState(1);

  const onRotationChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setRotation(Number(target.value));
  };

  const onClose = () => {
    setFile(null);
  };

  const onScaleChange = (scaleChangeEvent: ChangeEvent<HTMLInputElement>) => {
    const scaleValue = parseFloat(scaleChangeEvent.target.value);
    setScaleValue(scaleValue);
  };

  const onCrop = () => {
    if (editor !== null) {
      const url = editor.getImageScaledToCanvas().toDataURL();
      setUserProfilePic(url);
    }

    onClose();
  };

  return {
    scaleValue,
    setScaleValue,
    rotation,
    setRotation,
    onRotationChange,
    onScaleChange,
    onCrop,
    onClose,
  };
}

export default useCrop;
