import React, { useState, useEffect, PropsWithChildren } from "react";
import FileContext from "./FileContext";

function Provider({ children }: PropsWithChildren) {
  const [file, setFile] = useState(null);

  const [uploadFailed, setUploadFailed] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  const [userProfilePic, setUserProfilePic] = useState("");
  const [editor, setEditor] = useState(null);
  const [scaleValue, setScaleValue] = useState(1);

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
    scaleValue,
    setScaleValue,
    setEditorRef,
  };

  return (
    <FileContext.Provider value={context}>{children}</FileContext.Provider>
  );
}

export default Provider;
