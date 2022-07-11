import { useCallback, useContext } from "react";
import FileContext from "../../Context/FileContext";

function useDragAndDrop() {
  const { setFile, setUploadFailed } = useContext(FileContext);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) {
      setUploadFailed(true);
    } else {
      const [uploadedFile] = acceptedFiles;

      console.log(JSON.stringify(uploadedFile))

      const fileReader = new FileReader();
      fileReader.onload = function (e) {
        setFile({
          ...uploadedFile,
          src: e.target?.result,
        });
      };
      fileReader.readAsDataURL(uploadedFile);
    }
  }, []);

  return {
    onDrop,
  };
}

export default useDragAndDrop;
