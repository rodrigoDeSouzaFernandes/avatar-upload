import React, {
  useState,
  useEffect,
  PropsWithChildren,
  Ref,
  SetStateAction,
} from "react";
import FileContext from "./FileContext";

function Provider({ children }: PropsWithChildren) {
  const [file, setFile] = useState(null);

  const [uploadFailed, setUploadFailed] = useState(false);
  const [userProfilePic, setUserProfilePic] = useState("");
  const [editor, setEditor] = useState(null);

  const setEditorRef = (editor: any) => setEditor(editor);

  const context = {
    file,
    setFile,
    uploadFailed,
    setUploadFailed,
    userProfilePic,
    setUserProfilePic,
    editor,
    setEditor,
    setEditorRef,
  };

  return (
    <FileContext.Provider value={context}>{children}</FileContext.Provider>
  );
}

export default Provider;
