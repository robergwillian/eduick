import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {MdClose} from 'react-icons/md'
import styles from "./styles.module.scss";


export default function GetStartedModal({show, onClose, children}) {

  const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
      };

  const modalContent = show ? (
      <div className={styles.ModalOverlay}>
        <div className={styles.Modal}>
            <p className={styles.formHeader1}>
                Get Started
                <br />
                <span>JUST LOGIN</span>
            </p>
            <div className={styles.closeModal}>
                <a href="#" onClick={handleClose}>
                <MdClose size='28' color="white" /> 
                </a>
            </div>
          <div className={styles.ModalBody1}>{children}</div>
        </div>
      </div>
    ) : null;


    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }    
  
}
 
