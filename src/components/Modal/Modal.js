import "./Modal.css";
import Overlay from "../Overlay/Overlay";

function Modal(props) {
  const handleClick = (event, canClose) => {
    event.stopPropagation();
    if (canClose) props.closeModal();
  };

  return (
    <Overlay overlayClick={props.closeModal}>
      <div className="Modal" onClick={handleClick}>
        <span
          className="Modal__close"
          onClick={(event) => handleClick(event, true)}
        >
          {" "}
          +{" "}
        </span>
        <div className="Modal__body">{props.children}</div>
      </div>
    </Overlay>
  );
}

export default Modal;
