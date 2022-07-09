import { useContext } from "react";
import { AlertCircle, X as CloseBtn } from "react-feather";
import FileContext from "../../Context/FileContext";

function UploadFailed() {
  const { setUploadFailed } = useContext(FileContext);

  const handleClose = () => {
    setUploadFailed(false);
  };

  return (
    <section className="uploadFailed">
      <div className="circle">
        <AlertCircle />
      </div>
      <p className="failed">Sorry, the upload failed.</p>
      <button className="tryAgain" onClick={handleClose}>
        Try Again
      </button>
      <button className="closeBtn" onClick={handleClose}>
        <CloseBtn />
      </button>
    </section>
  );
}

export default UploadFailed;
