import { X as CloseBtn } from "react-feather";

import { useContext } from "react";
import FileContext from "../../Context/FileContext";

import AvatarEditor from "react-avatar-editor";
import useCrop from "./useCrop";

function Crop() {
  const { file, setFile, editor, setEditorRef, setUserProfilePic } =
    useContext(FileContext);

  const {
    scaleValue,
    rotation,
    onScaleChange,
    onRotationChange,
    onCrop,
    onClose,
  } = useCrop({
    setFile,
    editor,
    setUserProfilePic,
  });

  if (!file) {
    return <></>;
  }

  return (
    <section className="crop">
      <div>
        <AvatarEditor
          className="cropCanvas"
          width={113}
          height={113}
          image={file.src}
          border={0}
          borderRadius={100}
          scale={scaleValue}
          rotate={rotation}
          ref={setEditorRef}
        />
      </div>
      <div className="cropSettings">
        <div className="inputs">
          <label>Zoom {scaleValue}</label>
          <input
            style={{ width: "100%" }}
            type="range"
            value={scaleValue}
            name="points"
            min="1"
            max="3"
            step="0.1"
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
