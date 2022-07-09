import { X as CloseBtn } from "react-feather";

import Cropper from "react-easy-crop";
import React, { ChangeEvent, useCallback, useState } from "react";
import yourImage from "../../logo.svg";
import { Area } from "react-easy-crop";

function Crop() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      console.log(croppedArea, croppedAreaPixels);
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

  return (
    <section className="crop">
      <div className="cropper-container">
        <Cropper
          cropShape="round"
          cropSize={{ width: 113, height: 113 }}
          image={yourImage}
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
        <button className="btnSave">
          Save
        </button>
      </div>
    </section>
  );
}

export default Crop;
