import { createContext, LegacyRef } from "react";
import { IFileContext } from "../types/uploadFileInterfaces";


const FileContext = createContext({} as IFileContext);

export default FileContext;
