import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function AvatarUpload() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({ onDrop, accept: { "image/*": [] } });

  const dropzoneText = () => {
    if (isDragReject) {
      return <p>Arquivo não suportado</p>;
    }
    if (isDragActive) {
      return <p>Solte o arquivo aqui</p>;
    }
    return <p>Arraste e solte sua imagem aqui, ou clique para selecioná-la</p>;
  };

  return (
    <section className="container">
      <div className="avatarUpload">
        <label {...getRootProps()} htmlFor="click">
          <input {...getInputProps()} id="click" />
          {dropzoneText()}
        </label>
      </div>
    </section>
  );
}

export default AvatarUpload;
