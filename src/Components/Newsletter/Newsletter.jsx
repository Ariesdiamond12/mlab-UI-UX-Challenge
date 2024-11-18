import React, { useEffect, useState } from "react";
import styles from "./Newsletter.module.css";
import icon_list from "../../assets/icon-list.svg";
import desktop_sign_up from "../../assets/illustration-sign-up-desktop.svg";
import mobile_sign_up from "../../assets/illustration-sign-up-mobile.svg";
import Modal from "../Modal/Modal";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState(window.innerWidth);

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

useEffect(() =>{
  const handleResize = () => {
    setView(window.innerWidth);
  }

  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize)
  }
}, [])

  return isModalOpen ? (
    <Modal name={email || "Subscriber"} onCloseModal={handleCloseModal} />
  ) : (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.left_content}>
            <h1>Stay Updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
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
            <div className={styles.email_label}>
              <label htmlFor="email">Email address</label>
              {!isValidEmail && email !== "" && (
                <p className={styles.warning}>Valid email required</p>
              )}
            </div>
            <input
              type="email"
              name="email"
              placeholder="email@company.com"
              value={email}
              onChange={handleEmailChange}
              className={email !== "" && !isValidEmail ? styles.inputerror : ""}
            />
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!isValidEmail || email === ""}
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <img
            src={view >= 375 ? desktop_sign_up : mobile_sign_up}
            alt="Sign Up"
          />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
