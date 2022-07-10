import React, {
  useState,
  useEffect,
  PropsWithChildren,
  Ref,
  SetStateAction,
  LegacyRef,
  HtmlHTMLAttributes,
  RefAttributes,
} from "react";
import AvatarEditor from "react-avatar-editor";
import FileContext from "./FileContext";

function Provider({ children }: PropsWithChildren) {
  const [file, setFile] = useState(null);

  const [profilePic, setProfilePic] = useState("");
  const [imageCroppedOriginalSize, setImageCroppedOriginalSize] = useState("");

  const [uploadFailed, setUploadFailed] = useState(false);
  const [editor, setEditor] = useState(null);

  const setEditorRef = (editor: any): void => {
    setEditor(editor);
  };

  const context = {
    file,
    setFile,
    uploadFailed,
    setUploadFailed,
    profilePic,
    setProfilePic,
    imageCroppedOriginalSize,
    setImageCroppedOriginalSize,
    editor,
    setEditor,
    setEditorRef,
  };

  return (
    <FileContext.Provider value={context}>{children}</FileContext.Provider>
  );
}

export default Provider;
