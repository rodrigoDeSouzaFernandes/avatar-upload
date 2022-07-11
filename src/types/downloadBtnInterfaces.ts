import { PropsWithChildren } from "react";

export interface IDownloadBtnProps extends PropsWithChildren {
  imageCroppedOriginalSize: string;
  fileName: string;
}