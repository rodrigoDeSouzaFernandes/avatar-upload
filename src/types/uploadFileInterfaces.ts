import { LegacyRef, Ref, SetStateAction } from "react";
import AvatarEditor from "react-avatar-editor";

export interface IUseCrop {
  setFile: Function;
  editor: any;
  setUserProfilePic: Function;
}

interface ICustomFile extends File {
  src: string;
}

export interface IFileContext {
  file: ICustomFile | null;
  setFile: Function;
  uploadFailed: Boolean;
  setUploadFailed: Function;
  userProfilePic: string | undefined;
  setUserProfilePic: Function;
  editor: AvatarEditor | null;
  setEditor: Function;
  setEditorRef: LegacyRef<AvatarEditor>;
}


