import { ChangeEvent, useCallback, useState } from "react";
import { IUseCrop } from "../../types/uploadFileInterfaces";

function useCrop({
  setFile,
  editor,
  setProfilePic,
  setImageCroppedOriginalSize,
}: IUseCrop) {
  const [rotation, setRotation] = useState(0);
  const [scaleValue, setScaleValue] = useState(1);

  const onRotationChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setRotation(Number(target.value));
    },
    [rotation]
  );

  const onClose = () => {
    setFile(null);
  };

  const onScaleChange = useCallback(
    (scaleChangeEvent: ChangeEvent<HTMLInputElement>) => {
      const scaleValue = parseFloat(scaleChangeEvent.target.value);
      setScaleValue(scaleValue);
    },
    [scaleValue]
  );

  const onCrop = () => {
    if (editor !== null) {
      const url = editor.getImageScaledToCanvas().toDataURL();
      setProfilePic(url);

      const originalSizeUrl = editor.getImage().toDataURL();
      setImageCroppedOriginalSize(originalSizeUrl);
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
