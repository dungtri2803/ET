import React,{useState} from "react";
import styles from "../../styles/Modal.module.scss";
import Cv from "../../public/images/cv.png";
import Load from "../../public/images/load2.png";
import { BsX } from "react-icons/bs";
import Image from "next/image";
import Icon from "../../public/images/icon2.png";

function ModalCareer({CloseModal}: any) {
  return (
    <section className={styles.ModalCareerSection}>
      <div className={styles.ModalCareer}>
        <div className={styles.CareerForm}>
          <form className={styles.CareerFormMain}>
            <div className={styles.CareerX} onClick = {() => CloseModal(false)}>
                <BsX />
            </div>
            <div className={styles.CareerFormTitle}>
              <p>{` Join ExcelTech, today.`}</p>
            </div>
            <div className={styles.CareerFormItem}>
              <label>{`Job title *`}</label>
              <input type="text" />
            </div>
            <div className={styles.CareerFormItem}>
              <label>{`Full Name *`}</label>
              <input type="text" placeholder="Cece Nguyen" />
            </div>
            <div className={styles.CareerFormItem}>
              <label>{`Email *`}</label>
              <input type="text" placeholder="huyennguyen26162@gmail.com" />
            </div>
            <div className={styles.CareerFormItem}>
              <label>{`Description `}</label>
              <input
                type="text"
                placeholder="Looking forward to hear from you soon."
              />
            </div>
            <div className={styles.CareerFormItem}>
              <div className={styles.CareerLine}></div>
              <label>{`Attach CV / Portfolio *`}</label>
              <div className={styles.CareerFormItemIcon}>
                <div className={styles.CareerFormItemIconImg}>
                  <Image src={Icon} alt="" />
                </div>
                <div className={styles.CareerFormItemText}>
                  <p>
                    {`Drag & Drop or`} <span>{`Browse Files`}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.CareerApplyBtn}>
              <button>{`Send`}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ModalCareer;
