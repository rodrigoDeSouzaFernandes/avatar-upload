import useAvatarUpload from "./useAvatarUpload";
import { DropzoneDefault, UploadFailed } from "../Dropzone";
import { useContext } from "react";
import FileContext from "../../Context/FileContext";
import Crop from "../Crop";
function AvatarUpload() {
  const { onDrop } = useAvatarUpload();

  const { uploadFailed } = useContext(FileContext);

  return (
    <section className="container">
      {uploadFailed ? <UploadFailed /> : <DropzoneDefault onDrop={onDrop} />}
      <Crop/>
    </section>
  );
}

export default AvatarUpload;
