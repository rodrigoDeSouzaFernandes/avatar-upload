import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";


function useAvatarUpload() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({ onDrop, accept: { "image/*": [] } });

  return {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  };
}

export default useAvatarUpload;
