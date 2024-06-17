import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const BackButton = () => {

  const navigate = useNavigate();

  function voltar() {
    navigate(-1);
  }

  return (

    <button className="back-button" onClick={voltar}>
      <FontAwesomeIcon icon={faChevronCircleLeft} /> &nbsp; <u>Voltar</u> 
    </button>
  )
}

export default BackButton;