import React from "react";
import styles from "./Newsletter.module.css";
import icon_list from "../../assets/icon-list.svg";
import desktop_sign_up from "../../assets/illustration-sign-up-desktop.svg";

function Newsletter() {
  // const [email, setEmail] = useState("");

  // const handleEmailChange = (e) => {
  //   const input = e.target.value;
  //   setEmail(inputEmail);
  // };

  return (
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
              <p>Product duscovery and building what matters</p>
            </div>
            <div className={styles.list}>
              <img src={icon_list} alt="List" />
              <p>Meauring to ensure updates are a success</p>
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
              // value={email}
              // onChange={handleEmailChange}
            />
            <button type="button">Subscibe to monthly newsletter</button>
          </div>
        </div>

        <div className={styles.right}>
          <img src={desktop_sign_up} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
