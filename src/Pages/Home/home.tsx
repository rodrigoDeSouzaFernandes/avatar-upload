import { useContext } from "react";
import AvatarUpload from "../../Components/AvatarUpload";
import ButtonContainer from "../../Components/ButtonContainer";
import FileContext from "../../Context/FileContext";

const Home = () => {
  const { imageCroppedOriginalSize } = useContext(FileContext);

  return (
    <main className="home">
      <AvatarUpload />
      {imageCroppedOriginalSize && <ButtonContainer />}
    </main>
  );
};

export default Home;
