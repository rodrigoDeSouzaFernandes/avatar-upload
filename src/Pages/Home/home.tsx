import { useContext } from "react";
import AvatarUpload from "../../Components/AvatarUpload";
import CustomDownloadBtn from "../../Components/CustomDownloadBtn/customDownloadBtn";
import FileContext from "../../Context/FileContext";

const Home = () => {
  const { imageCroppedOriginalSize } = useContext(FileContext);
  return (
    <main className="home">
      <AvatarUpload />
      {imageCroppedOriginalSize && (
        <div className="container">
          <CustomDownloadBtn
            imageCroppedOriginalSize={imageCroppedOriginalSize}
            fileName="profilePic"
          >
            Download cropped image
          </CustomDownloadBtn>
        </div>
      )}
    </main>
  );
};

export default Home;
