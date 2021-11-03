import { useState } from "react";
import Modal from "../loginModal";
import styles from "./styles.module.scss";
import { MdClose } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showModalGetStarted, setShowModalGetStarted] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

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
          <button onClick={() => setShowModalGetStarted(true)}>
            Get Started
          </button>
        </div>

        <Modal onClose={() => setShowModal(false)} show={showModal}>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={styles.Modal}
          >
            <div className={styles.ModalHeader}>
              <img src="logo.svg" alt="Logo EDUICK" />
              <a
                href="#"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <MdClose size="28" color="white" />
              </a>
            </div>
            <div className={styles.ModalBody}>
              <ul>
                <li>How it works</li>
                <li>About Us</li>
              </ul>
              <button onClick={() => setShowModalGetStarted(true)}>
                Get Started
              </button>
            </div>
          </div>
        </Modal>

        <Modal
          onClose={() => setShowModalGetStarted(false)}
          show={showModalGetStarted}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={styles.GetStartedModal}
          >
            <div className={styles.GetStartedModalHeader}>
              <div className={styles.GetStartedModalHeaderText}>
                <p>Get Started</p>
                <p>JUST LOGIN</p>
              </div>
              <div className={styles.GetStartedModalCloseButton}>
                <a
                  href="#"
                  onClick={() => {
                    setShowModalGetStarted(false);
                  }}
                >
                  <MdClose size="28" color="white" />
                </a>
              </div>
            </div>
            <div className={styles.GetStartedModalBody}>
              <div>
                <label>Username:</label>
                <input type="text" />

                  <label>Password:</label>
                <div className={styles.passWrapper}>
                  <input type={passwordShown ? "text" : "password"} />
                  <i>
                    <AiOutlineEye
                      onClick={togglePasswordVisiblity}
                      color="white"
                      size="25"
                    />
                  </i>
                </div>
              </div>
              <div>
                <button>Login</button>
              </div>
            </div>
          </div>
        </Modal>
      </header>
    </div>
  );
}
