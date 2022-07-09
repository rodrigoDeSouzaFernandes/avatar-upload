import { createContext } from "react";

interface IFileContext {
  file: File | null;
  setFile: Function;
  uploadFailed: Boolean;
  setUploadFailed: Function;
}

const FileContext = createContext({} as IFileContext);

export default FileContext;
