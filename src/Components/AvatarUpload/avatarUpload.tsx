import useAvatarUpload from "./useAvatarUpload";
import { DropzoneDefault, UploadFailed } from "../Dropzone";
import { useContext } from "react";
import FileContext from "../../Context/FileContext";
import Crop from "../Crop";
function AvatarUpload() {
  const { onDrop } = useAvatarUpload();

  const { uploadFailed, file, croppedImage } = useContext(FileContext);

  console.log(file);

  return (
    <section className="container">
      {uploadFailed ? (
        <UploadFailed />
      ) : file ? (
        <Crop />
      ) : (
        <DropzoneDefault onDrop={onDrop} />
      )}
      {croppedImage && (
        <img style={{ "border-radius": "50%" }} src={croppedImage} />
      )}
    </section>
  );
}

export default AvatarUpload;
