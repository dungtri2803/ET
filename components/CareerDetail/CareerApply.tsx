import React from "react";
import Image from "next/image";
import styles from "../../styles/CareerDetail.module.scss";
import Navbar from "../Navbar/Navbar.ChangeColor";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import Icon from "../../public/images/icon2.png";
import Cv from "../../public/images/cv.png";
import Load from "../../public/images/load2.png";
import { BsX } from "react-icons/bs";
function CareerApply() {
  return (
    <section className={styles.CareerApplySection}>
      <div className={styles.CareerApply}>
        <Navbar />
        <div className={styles.CareerApplyIcon}>
          <Link href="/career-detail">
            <button>
              <BsArrowLeft />
            </button>
          </Link>
          <p>{`BACK TO CAREER`}</p>
        </div>
        <div className={styles.CareerForm}>
          <div className={styles.CareerFormTitle}>
            <p>{` Join ExcelTech, today.`}</p>
          </div>
          <form className={styles.CareerFormMain}>
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
            <div className={styles.CareerFormItem}>
              <div className={styles.CareerFormItemCv}>
                <div className={styles.CareerFormItemCvImg}>
                  <Image src={Cv} alt="" />
                </div>
                <div className={styles.CareerFormItemCvText}>
                  <p>{`Cece-Resume.pdf`}</p>
                </div>
                <div className={styles.CareerFormItemCvNumList}>
                  <div className={styles.CareerFormItemCvNumItem}>
                    <p>{`100%`}</p>
                  </div>
                  <div className={styles.CareerFormItemCvNumImg}>
                    <Image src={Load} alt="" />
                  </div>
                  <BsX className={styles.CareerFormItemCvIcons}/>
                </div>

              </div>
            </div>
            <div className={styles.CareerFormItem}>
              <div className={styles.CareerFormItemCv}>
                <div className={styles.CareerFormItemCvImg}>
                  <Image src={Cv} alt="" />
                </div>
                <div className={styles.CareerFormItemCvText}>
                  <p>{`Cece-Resume.pdf`}</p>
                </div>
                <div className={styles.CareerFormItemCvNumList}>
                  <div className={styles.CareerFormItemCvNumItem}>
                    <p>{`100%`}</p>
                  </div>
                  <div className={styles.CareerFormItemCvNumImg}>
                    <Image src={Load} alt="" />
                  </div>
                </div>
                <BsX className={styles.CareerFormItemCvIcons}/>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.CareerApplyBtn}>
          <button>{`Send`}</button>
        </div>
      </div>
    </section>
  );
}

export default CareerApply;
