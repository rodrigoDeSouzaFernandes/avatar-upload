import { IDownloadBtnProps } from "../../types/downloadBtnInterfaces";

function CustomDownloadBtn({
  children,
  imageCroppedOriginalSize,
  fileName,
}: IDownloadBtnProps) {
  return (
    <div className="downloadBtnContainer">
      <a
        className="downloadBtn"
        href={imageCroppedOriginalSize}
        download={fileName}
      >
        {children}
      </a>
    </div>
  );
}

export default CustomDownloadBtn;
