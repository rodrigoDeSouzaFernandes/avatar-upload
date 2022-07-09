import { Image } from "react-feather";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function AvatarUpload() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({ onDrop, accept: { "image/*": [] } });

  const DropzoneMessage = () => {
    if (isDragReject) {
      return <p>Arquivo não suportado</p>;
    }
    if (isDragActive) {
      return <p>Solte o arquivo aqui</p>;
    }
    return (
      <div className="defaultMessage">
        <div>
          <Image />
          <p>Organization Logo</p>
        </div>
        <p>Arraste e solte sua imagem aqui, ou clique para selecioná-la</p>
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
