import { X as CloseBtn } from "react-feather";

import { ChangeEvent, ChangeEventHandler, useContext, useState } from "react";
import FileContext from "../../Context/FileContext";

import AvatarEditor from "react-avatar-editor";

function Crop() {
  const [rotation, setRotation] = useState(0);

  const {
    file,
    setFile,
    editor,
    scaleValue,
    setScaleValue,
    setEditorRef,
    setUserProfilePic,
  } = useContext(FileContext);

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

  if (!file) {
    return <></>;
  }

  return (
    <section className="crop">
      <div>
        <AvatarEditor
          width={113}
          height={113}
          image={file.src}
          border={0}
          borderRadius={100}
          scale={scaleValue}
          rotate={rotation}
          ref={setEditorRef}
          className="cropCanvas"
        />
      </div>
      <div className="cropSettings">
        <div className="inputs">
          <label>Zoom</label>
          <input
            style={{ width: "100%" }}
            type="range"
            value={scaleValue}
            name="points"
            min="1"
            max="10"
            onChange={onScaleChange}
          />
        </div>
        <div className="inputs">
          <label>Rotate</label>
          <input
            style={{ width: "100%" }}
            type="range"
            value={rotation}
            name="points"
            min="-180"
            max="180"
            step="5"
            onChange={onRotationChange}
          />
        </div>
        <button onClick={onCrop} className="btnSave">
          Save
        </button>
        <button className="closeBtn" onClick={onClose}>
          <CloseBtn />
        </button>
      </div>
    </section>
  );
}

export default Crop;
