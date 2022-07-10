import { useContext } from "react";
import FileContext from "../../Context/FileContext";
import CustomDownloadBtn from "../CustomDownloadBtn/customDownloadBtn";

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
          Download image
        </CustomDownloadBtn>
        <button
          className="button-remove"
          data-testid="button-remove"
          onClick={onDelete}
        >
          Delete avatar
        </button>
      </div>
    </section>
  );
}

export default ButtonContainer;
