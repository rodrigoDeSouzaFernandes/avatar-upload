import { useCallback, useContext } from "react";
import FileContext from "../../Context/FileContext";

function useAvatarUpload() {
  const { file, setFile, setUploadFailed } = useContext(FileContext);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) {
      setUploadFailed(true);
    } else {
      const [uploadedFile] = acceptedFiles;
      console.log(uploadedFile)
      setFile(uploadedFile);
    }
  }, []);

  return {
    onDrop,
  };
}

export default useAvatarUpload;
