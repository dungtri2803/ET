import React from "react";
import Image from "next/image";
import styles from "../../styles/Modal.module.scss";
import Img from "../../public/images/form.png";
import {BsX} from "react-icons/bs";
import Ourteam from "../../components/OurTeam/Ourteam"
function Modal ({closeModal}) {

  return (
    <section className={styles.ModaSection}>
      <div className={styles.Modal}>
        <div className={styles.modalList}>
          <div className={styles.modalLeft}>
            <Image src={Img} alt="" />
          </div>
          <div className={styles.modalRight}>
            <BsX className={styles.Close} onClick={() => closeModal(false)}/>
            <form className={styles.formModal}>
              <div className={styles.formContent}>
                <div className={styles.formModalTitle}>
                  <h1>Talk to us. Today!</h1>
                </div>
                <div className={styles.formModalDes}>
                  <p>
                    We love to collaborate with enthusiastic teams, big or small
                    to create something special.
                  </p>
                </div>
                <div className={styles.userBox}>
                  <input type="text" name="" required />
                  <label>Name *</label>
                </div>
                <div className={styles.userBox}>
                  <input type="text" name="" required />
                  <label>Password *</label>
                </div>
                <div className={styles.userBox}>
                  <input type="text" name="" required />
                  <label>Phone number *</label>
                </div>
                <div className={styles.userBox}>
                  <input type="text" name="" required />
                  <label>Company *</label>
                </div>
                <div className={styles.userBox}>
                  <input type="text" name="" required />
                  <label>Message *</label>
                </div>
              </div>
              <div className={styles.modalBtn}>
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
