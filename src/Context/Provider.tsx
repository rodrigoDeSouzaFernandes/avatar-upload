import React, { useState, useEffect, PropsWithChildren } from "react";
import FileContext from "./FileContext";

function Provider({ children }: PropsWithChildren) {
  const [file, setFile] = useState(null);

  const [uploadFailed, setUploadFailed] = useState(false);

  const context = {
    file,
    setFile,
    uploadFailed,
    setUploadFailed
  };

  return (
    <FileContext.Provider value={context}>{children}</FileContext.Provider>
  );
}

export default Provider;
