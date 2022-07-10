import { Image } from "react-feather";
import { useDropzone } from "react-dropzone";
import { useContext } from "react";
import FileContext from "../../Context/FileContext";
import useDragAndDrop from "./useDragAndDrop";

function DragAndDrop() {
  const { onDrop } = useDragAndDrop();

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({ maxFiles: 1, onDrop, accept: { "image/*": [] } });

  const { userProfilePic } = useContext(FileContext);

  const DropzoneMessage = () => {
    if (isDragReject) {
      return (
        <div className="message">
          <p className="failed">
            File not supported or you're trying to upload more than one file
          </p>
        </div>
      );
    }

    return (
      <div className="defaultMessage">
        <div>
          <Image />
          <p>Organization Logo</p>
        </div>
        {isDragActive ? (
          <p className="success">Drop the image here</p>
        ) : (
          <p>Drop the image here or click to browse.</p>
        )}
      </div>
    );
  };

  return (
    <section className="dropzone">
      <label {...getRootProps()} htmlFor="click">
        <input {...getInputProps()} id="click" />
        {userProfilePic && (
          <img className="profile" src={userProfilePic} alt="Profile" />
        )}
        <DropzoneMessage />
      </label>
    </section>
  );
}

export default DragAndDrop;
