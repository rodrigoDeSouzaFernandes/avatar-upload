import { Image } from "react-feather";
import useAvatarUpload from "./useAvatarUpload";

function AvatarUpload() {
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useAvatarUpload();

  const DropzoneMessage = () => {
    if (isDragReject) {
      return <p>File not supported.</p>;
    }
    if (isDragActive) {
      return <p>Drop the image here</p>;
    }
    return (
      <div className="defaultMessage">
        <div>
          <Image />
          <p>Organization Logo</p>
        </div>
        <p>Drop the image here or click to browse.</p>
      </div>
    );
  };

  return (
    <section className="container">
      <div className="avatarUpload">
        <label {...getRootProps()} htmlFor="click">
          <input {...getInputProps()} id="click" />
          <DropzoneMessage />
        </label>
      </div>
    </section>
  );
}

export default AvatarUpload;
