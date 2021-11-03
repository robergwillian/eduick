import styles from "./styles.module.scss";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Modal from '../menuModal'
import { useState } from "react";


export default function DashboardHeader() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <a href="/">
            <img src="logo.svg" alt="EDUICK LOGO" />
          </a>

          <nav>My Classes</nav>
        </div>
        <div className={styles.headerProfile}>
          <button className={styles.teacherModeButton}>
            CHANGE TO TEACHER MODE
          </button>
          <div className={styles.dropDownMenu}>
            <button>
              <i onClick={() => setShowModal(!showModal)}>
                {showModal ? <RiArrowDropUpLine color="black" size="24" /> : <RiArrowDropDownLine color="black" size="24" />}
                
                
              </i>
            </button>
          </div>
          <div className={styles.profile}>
            <a href="#">
              <img src="avatar.png" alt="User avatar" />
            </a>
          </div>
        </div>
      </div>

      <Modal onClose={() => setShowModal(false)} show={showModal}/>


    </div>
  );
}
