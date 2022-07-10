import { X as CloseBtn } from "react-feather";

import { useContext } from "react";
import FileContext from "../../Context/FileContext";

import AvatarEditor from "react-avatar-editor";
import useCrop from "./useCrop";

function Crop() {
  const {
    file,
    setFile,
    editor,
    setEditorRef,
    setProfilePic,
    setImageCroppedOriginalSize,
  } = useContext(FileContext);

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
    setProfilePic,
    setImageCroppedOriginalSize,
  });

  if (!file) {
    return <></>;
  }

  return (
    <section className="crop">
      <div>
        <AvatarEditor
          data-testid="avatar-editor"
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
          <label>Zoom ({scaleValue}x)</label>
          <input
            data-testid="input-zoom"
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
          <label>Rotate ({rotation}°)</label>
          <input
            data-testid="input-rotation"
            type="range"
            value={rotation}
            name="points"
            min="0"
            max="360"
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
