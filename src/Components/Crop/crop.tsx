import { X as CloseBtn } from "react-feather";

import Cropper from "react-easy-crop";
import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import yourImage from "../../logo.svg";
import { Area } from "react-easy-crop";
import FileContext from "../../Context/FileContext";

import { teste } from "./utils/cropWithCanvas";

function Crop() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaState, setCroppedAreaState] = useState({});

  const { file, setFile, croppedImage, setCroppedImage } =
    useContext(FileContext);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      console.log(croppedAreaPixels, croppedArea)
      setCroppedAreaState(croppedAreaPixels);
    },
    []
  );

  const handleChangeZoom = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setZoom(Number(target.value));

  const handleChangeRotate = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setRotation(Number(target.value));

  const customZoom = (xzoom: Number) => {
    if (xzoom > 3) {
      return;
    }
    setZoom(parseFloat(xzoom.toFixed(1)));
  };

  const onClose = () => setFile(null);

  const cropnow = () => {
    if (file) {
      const base64 = teste(file.src, croppedAreaState, zoom);
      setCroppedImage(base64);
    }
  };

  return (
    <section className="crop">
      <div className="cropper-container">
        <Cropper
          cropShape="round"
          cropSize={{ width: 113, height: 113 }}
          image={file?.src}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={customZoom}
        />
      </div>
      <div className="cropSettings">
        <div className="inputs">
          <label>Zoom ({`${zoom}x`})</label>
          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            onChange={handleChangeZoom}
            value={zoom}
          />
        </div>
        <div className="inputs">
          <label>Rotate ({`${rotation}°`})</label>
          <input
            type="range"
            min="-180"
            max="180"
            step="5"
            onChange={handleChangeRotate}
            value={rotation}
          />
        </div>
        <button className="btnSave" onClick={cropnow}>
          Save
        </button>
      </div>
      <button className="closeBtn" onClick={onClose}>
        <CloseBtn />
      </button>
    </section>
  );
}

export default Crop;
