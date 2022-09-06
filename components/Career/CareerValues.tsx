import React from "react";
import Image from "next/image";
import styles from "../../styles/Career.module.scss";
import Value1 from "../../public/images/value1.png";
import Value2 from "../../public/images/value2.png";

function CareerValues() {
  return (
    <section className={styles.CareerValuesSection}>
      <div className={styles.CareerValues}>
        <div className={styles.CareerValuesContent}>
          <div className={styles.CareerValuesDes}>
            <p>{`Our values`}</p>
          </div>
          <div className={styles.CareerValuesTitle}>
            <p>{`Our people embody our values:
                Integrity, Innovation, Perfection`}</p>
          </div>
        </div>
        <div className={styles.CareerValuesList}>
          <div className={styles.CareerValuesItem}>
            <div className={styles.CareerValuesImg1}>
              <Image src={Value1} alt="" />
            </div>
          </div>
          <div className={styles.CareerValuesItem}>
            <div className={styles.CareerValuesImg2}>
              <Image src={Value2} alt="" />
            </div>
          </div>
          <div className={styles.CareerValuesItem}>
            <div className={styles.CareerValuesImg3}>
              <Image src={Value1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerValues;
