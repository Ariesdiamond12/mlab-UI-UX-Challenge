import React, { useState } from "react";
import styles from "./Newsletter.module.css";
import icon_list from "../../assets/icon-list.svg";
import desktop_sign_up from "../../assets/illustration-sign-up-desktop.svg";
import Modal from "../Modal/Modal";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Basic email validation
  const isValidEmailFormat = (inputEmail) => {
    return inputEmail.includes("@") && inputEmail.includes(".");
  };

  // Handle email input change and validation
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Validate email format
    if (isValidEmailFormat(inputEmail)) {
      setIsValidEmail(true); // Email is valid
    } else {
      setIsValidEmail(false); // Email is invalid
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidEmail && email) {
      // Open the modal or perform an action when email is valid
      console.log("Valid email, form submitted!");
      setIsModalOpen(true);
    } else {
      // Show error or prevent form submission
      console.log("Invalid email, please correct it!");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEmail("");
  };

  return isModalOpen ? (
    <Modal onCloseModal={handleCloseModal} />
  ) : (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.left_content}>
            <div>
              <h1>Stay Updated!</h1>
            </div>
            <div>
              <p>Join 60 000+ product managers receiving monthly updates on:</p>
            </div>
            <div className={styles.list}>
              <img src={icon_list} alt="List" />
              <p>Product discovery and building what matters</p>
            </div>
            <div className={styles.list}>
              <img src={icon_list} alt="List" />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className={styles.list}>
              <img src={icon_list} alt="List" />
              <p>And much more!</p>
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
            </div>
            <input
              type="email"
              name="email"
              placeholder="email@company.com"
              value={email}
              onChange={handleEmailChange}
              className={!isValidEmail ? styles.invalid : ""}
            />
            {!isValidEmail && (
              <p className={styles.error}>
                Please enter a valid email address.
              </p>
            )}
            <button type="button" onClick={handleSubmit}>
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <img src={desktop_sign_up} alt="Sign Up Illustration" />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
