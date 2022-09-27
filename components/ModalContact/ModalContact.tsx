import React from "react";
import styles from "../../styles/ModalContact.module.scss";
import Image from "next/image";
import Img1 from "../../public/images/form.png";
import { BsX } from "react-icons/bs";
function ModalContact({closeModal,CloseE}: any ) {
  return (
    <section className={styles.ModalContactSection}>
      <div className={styles.ModalContact} >
        <div className={styles.ModalContactList}>
          <div className={styles.ModalContactItemLeft}>
            <div className={styles.ModalContactItemLeftImg}>
              <Image src={Img1} alt="" />
            </div>
          </div>
          <div className={styles.ModalContactItemRight}>
            <div className={styles.ModalContactItemRightContent}>
            <div className={styles.ModalContactIcon} onClick = {() => closeModal(false)}>
                <BsX />
            </div>
              <div className={styles.ModalContactItemTitle}>
                <p>{`Talk to us. Today!`}</p>
              </div>
              <div className={styles.ModalContactItemDes}>
                <p>{`We love to collaborate with enthusiastic teams, big or small to create something special.`}</p>
              </div>
              <div className={styles.ModalContactForm}>
                <div className={styles.ModalContactFormItem}>
                  <label>{`Name *`}</label>
                  <input type="text" required />
                </div>
                <div className={styles.ModalContactFormItem}>
                  <label>{`Email address *`}</label>
                  <input type="text" required />
                </div>
                <div className={styles.ModalContactFormItem}>
                  <label>{`Phone Number *`}</label>
                  <input type="text" required />
                </div>
                <div className={styles.ModalContactFormItem}>
                  <label>{`Company *`}</label>
                  <input type="text" required />
                </div>
                <div className={styles.ModalContactFormItem}>
                  <label>{`Message *`}</label>
                  <input type="text" required />
                </div>
                <div className={styles.ModalContactFormItemBtn}>
                  <button>{`Send`}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModalContact;
