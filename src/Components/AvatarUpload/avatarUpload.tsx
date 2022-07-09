import useAvatarUpload from "./useAvatarUpload";
import { DropzoneDefault, UploadFailed } from "../Dropzone";
import { useContext, useState } from "react";
import FileContext from "../../Context/FileContext";
import Crop from "../Crop";
function AvatarUpload() {
  const { onDrop } = useAvatarUpload();

  const { uploadFailed, file, userProfilePic, setUserProfilePic } =
    useContext(FileContext);

  

  return (
    <section className="container">
      {uploadFailed ? (
        <UploadFailed />
      ) : file ? (
        <Crop />
      ) : (
        <DropzoneDefault onDrop={onDrop} />
      )}
    </section>
  );
}

export default AvatarUpload;
