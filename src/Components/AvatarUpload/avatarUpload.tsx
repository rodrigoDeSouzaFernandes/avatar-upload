import useAvatarUpload from "./useAvatarUpload";
import { DropzoneDefault, UploadFailed } from "../Dropzone";
import { useContext } from "react";
import FileContext from "../../Context/FileContext";
import Crop from "../Crop";
function AvatarUpload() {
  const { onDrop } = useAvatarUpload();

  const { uploadFailed, file } = useContext(FileContext);

  return (
    <section className="container">
      {uploadFailed ? (
        <UploadFailed />
      ) : file ? (
        <Crop />
      ) : (
        <DropzoneDefault onDrop={onDrop} />
      )}

      <img src={file?.src}/>
    </section>
  );
}

export default AvatarUpload;
