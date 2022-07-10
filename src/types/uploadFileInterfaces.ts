import { LegacyRef } from "react";
import AvatarEditor from "react-avatar-editor";

export interface IUseCrop {
  setFile: Function;
  editor: AvatarEditor | null;
  setProfilePic: Function;
  setImageCroppedOriginalSize: Function;
}

interface ICustomFile extends File {
  src: string;
}

export interface IFileContext {
  file: ICustomFile | null;
  setFile: Function;
  uploadFailed: Boolean;
  setUploadFailed: Function;
  avatar: string | undefined;
  setProfilePic: Function;
  editor: AvatarEditor | null;
  setEditor: Function;
  setEditorRef: LegacyRef<AvatarEditor>;
  setImageCroppedOriginalSize: Function;
  imageCroppedOriginalSize: string
}


