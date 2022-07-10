import { DragAndDrop, UploadFailed } from "../Dropzone";
import { useContext } from "react";
import FileContext from "../../Context/FileContext";
import Crop from "../Crop";
function AvatarUpload() {

  const { uploadFailed, file, userProfilePic, setUserProfilePic } =
    useContext(FileContext);

  return (
    <section className="container">
      {uploadFailed ? <UploadFailed /> : file ? <Crop /> : <DragAndDrop />}
    </section>
  );
}

export default AvatarUpload;
