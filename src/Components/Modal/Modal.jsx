import React from "react";
import styles from "./Modal.module.css";
import success from "../../assets/icon-success.svg";

function Modal({ onCloseModal }) {
  //we are taking the onCloseModal as a prop and executing the function
  const handleButtonClick = () => {
    onCloseModal();
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.modal_content}>
          <div>
            <img src={success} alt="Success" />
          </div>
          <div>
            <h1>Thanks for subscribing!</h1>
          </div>
          <div>
            <p>
              A confirmation email has been sent to <b>ash@lorecompany.com</b>.
              Please open it and click the button inside to confirm your
              subscription.
            </p>
          </div>
          <div>
            <button type="button" onClick={handleButtonClick}>
              Dismiss Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
