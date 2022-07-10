import { IDownloadBtnProps } from "../../types/downloadBtnInterfaces";

function CustomDownloadBtn({
  children,
  imageCroppedOriginalSize,
  fileName,
}: IDownloadBtnProps) {
  return (
    <a
      className="downloadBtn"
      href={imageCroppedOriginalSize}
      download={fileName}
    >
      {children}
    </a>
  );
}

export default CustomDownloadBtn;
