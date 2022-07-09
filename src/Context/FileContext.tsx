import { createContext, LegacyRef } from "react";
import AvatarEditor from "react-avatar-editor";

interface ICustomFile extends File {
  src: string;
}

interface IFileContext {
  file: ICustomFile | null;
  setFile: Function;
  uploadFailed: Boolean;
  setUploadFailed: Function;
  userProfilePic: string | undefined;
  setUserProfilePic: Function;
  editor: any;
  setEditor: Function;
  scaleValue: number;
  setScaleValue: Function;
  setEditorRef: LegacyRef<AvatarEditor>;
}

const FileContext = createContext({} as IFileContext);

export default FileContext;
