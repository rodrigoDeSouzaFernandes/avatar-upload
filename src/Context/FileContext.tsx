import { createContext } from "react";

interface ICustomFile extends File {
  src: string;
}

interface IFileContext {
  file: ICustomFile | null;
  setFile: Function;
  uploadFailed: Boolean;
  setUploadFailed: Function;
  croppedImage: string | null;
  setCroppedImage: Function;
}

const FileContext = createContext({} as IFileContext);

export default FileContext;
