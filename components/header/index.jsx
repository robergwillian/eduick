import { useState } from "react";
import Modal from "../loginModal";
import GetStartedModal from "../getStartedModal";
import styles from "./styles.module.scss";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  

  return (
    
    <div className="Wrapper">
      <header className={styles.headerContainer}>
        <div className={styles.logoMenuWrapper}>
          <div className={styles.mobileMenu}>
            <button
              className={styles.burguerButton}
              type="button"
              onClick={() => setShowModal(true)}
            >
              <img src="hamburguer.png" alt="Acesse o menu" />
            </button>
            <Modal onClose={() => setShowModal(false)} show={showModal}>
              <ul>
                <li>How it works</li>
                <li>About Us</li>
              </ul>
              <button onClick={() => setShowModal1(true)}>Get Started</button>

            </Modal>

            <Modal onClose={() => setShowModal1(false)} show={showModal1}>
              <div>
                  <label>Username:</label>
                  <input type="text" />
                
                
                  <label>Password:</label>
                  <input type="password"/>
                
              </div>
              <button>Login</button>

            </Modal>
          </div>
          <div className={styles.logo}>
            <a href="/">
              <img src="logo.svg" alt="EDUICK LOGO" />
            </a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.getStartedWrapper}>
          <button onClick={() => setShowModal1(true)}>Get Started</button>
        </div>
      </header>
    </div>
  );
}
