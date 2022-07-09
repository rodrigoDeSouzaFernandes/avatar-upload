import { useCallback, useContext } from "react";
import { Upload } from "react-feather";
import FileContext from "../../Context/FileContext";

function useAvatarUpload() {
  const { file, setFile, setUploadFailed } = useContext(FileContext);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) {
      setUploadFailed(true);
    } else {
      const [uploadedFile] = acceptedFiles;
      console.log(uploadedFile);

      var asd = new FileReader();
      asd.onload = function (e) {
        setFile({
          ...uploadedFile,
          src: e.target?.result,
        });
      };
      asd.readAsDataURL(uploadedFile);

    }
  }, []);

  return {
    onDrop,
  };
}

export default useAvatarUpload;
