import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {MdClose} from 'react-icons/md'
import styles from "./styles.module.scss";
import {BiRightArrowAlt} from 'react-icons/bi'

export default function Modal({show, onClose}) {

  const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
      };

  const modalContent = show ? (
      <div onClick={handleClose}className={styles.DashboardModalOverlay}>
        <div className={styles.DashboardModal}>
          <div className={styles.DashboardModalHeader}>
            <div className={styles.DashboardModalHeaderText}>
                <p>CHANGE TO TEACHER MODE</p>
            </div>
            <div className={styles.DashboardModalHeaderIcon}>
                <i><BiRightArrowAlt color="gray" height='14'width='18'/></i>
            </div>
          </div>
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
 
