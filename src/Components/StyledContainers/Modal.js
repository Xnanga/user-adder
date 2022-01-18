import styles from "./Modal.module.css";
import Button from "../UI/Button";

const Modal = (props) => {
  if (props.modalVisible) {
    return (
      <div className={styles.modal}>
        <div className={styles["modal__top-bar"]}>{props.errorTitle}</div>
        <div className={styles["modal__content"]}>
          <div className={styles["modal__content-text"]}>
            <p>{props.errorMessage}</p>
          </div>
          <div
            className={styles["modal__content-btn"]}
            onClick={props.closeModal}
          >
            <Button text="Okay" />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>{props.children}</div>;
  }
};

export default Modal;
