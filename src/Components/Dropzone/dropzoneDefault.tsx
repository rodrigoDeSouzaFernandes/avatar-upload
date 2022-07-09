import { Image } from "react-feather";
import { useDropzone, DropzoneOptions } from "react-dropzone";

function DropzoneDefault({ onDrop }: DropzoneOptions) {
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({ maxFiles: 1, onDrop, accept: { "image/*": [] } });

  const DropzoneMessage = () => {
    if (isDragReject) {
      return (
        <p className="failed">
          File not supported or you trying to upload more than one file
        </p>
      );
    }
    if (isDragActive) {
      return <p className="success">Drop the image here</p>;
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
    <section className="dropzone">
      <label {...getRootProps()} htmlFor="click">
        <input {...getInputProps()} id="click" />
        <DropzoneMessage />
      </label>
    </section>
  );
}

export default DropzoneDefault;
