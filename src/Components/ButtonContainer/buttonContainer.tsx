import { useContext } from "react";
import { Feather } from "react-feather";
import FileContext from "../../Context/FileContext";
import CustomDownloadBtn from "../CustomDownloadBtn/customDownloadBtn";
import { Download, Trash2 } from "react-feather";

function ButtonContainer() {
  const {
    imageCroppedOriginalSize,
    setProfilePic,
    setImageCroppedOriginalSize,
  } = useContext(FileContext);

  const onDelete = () => {
    setProfilePic("");
    setImageCroppedOriginalSize("");
  };

  return (
    <section className="container">
      <div className="button-container">
        <CustomDownloadBtn
          imageCroppedOriginalSize={imageCroppedOriginalSize}
          fileName="avatar"
        >
          <Download size={16} />
          Download image
        </CustomDownloadBtn>
        <button
          className="button-remove"
          data-testid="button-remove"
          onClick={onDelete}
        >
          <Trash2 size={16} />
          Delete avatar
        </button>
      </div>
    </section>
  );
}

export default ButtonContainer;
