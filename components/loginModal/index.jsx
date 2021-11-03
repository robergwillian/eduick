import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {MdClose} from 'react-icons/md'
import styles from "./styles.module.scss";


export default function Modal({show, onClose, children}) {

  const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
      };

  const modalContent = show ? (
      <div onClick={handleClose}className={styles.ModalOverlay}>
        {/* <div className={styles.Modal}>
          <div className={styles.ModalHeader}>
            <img src="logo.svg" alt="Logo EDUICK" />
            <a href="#" onClick={handleClose}>
              <MdClose size='28' color="white" /> 
            </a>
          </div>
          <div className={styles.ModalBody}>{children}</div>
        </div> */}
        {children}
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
 
