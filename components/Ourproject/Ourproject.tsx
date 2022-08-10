import React from "react";
import Image from "next/image";
import styles from "../../styles/Ourproject.module.scss";
import Bh from "../../public/images/bt.png";
import Logistic from "../../public/images/logis.png";
import Farm from "../../public/images/farm.png";
import Beverage from "../../public/images/be.png";

function Ourproject() {
  return (
    <section id="#Ourproject" className={styles.OurprojectSection}>
      <div className={styles.Ourproject}>
        <div className={styles.OurprojectContent}>
          <div className={styles.OurprojectDes}>
            <p>{`OUR PROJECTS`}</p>
          </div>
          <div className={styles.OurprojectTitle}>
            <h1>{`Our amazing work with various Industry`}</h1>
          </div>
        </div>
        <div className={styles.OurprojectList}>
          <div className={styles.OurprojectItem}>
            <div className={styles.OurprojectItemContent}>
              <div className={styles.OurprojectItemRelative}>
                <div className={styles.OurprojectItemDes}>
                  <p>{`IPCC & CRM`}</p>
                </div>
                <div className={styles.OurprojectItemTitle}>
                  <h1>{`Beauty & Healthcare`}</h1>
                </div>
              </div>

              <Image src={Bh} alt="" />
            </div>
          </div>
          <div className={styles.OurprojectItem}>
            <div className={styles.OurprojectItemContent}>
              <div className={styles.OurprojectItemRelative}>
                <div className={styles.OurprojectItemDes}>
                  <p>{`MANAGED SERVICES`}</p>
                </div>
                <div className={styles.OurprojectItemTitle}>
                  <h1>{`Logistics`}</h1>
                </div>
              </div>
              <Image src={Logistic} alt="" />
            </div>
          </div>
          <div className={styles.OurprojectItem}>
            <div className={styles.OurprojectItemContent}>
              <div className={styles.OurprojectItemRelative}>
                <div className={styles.OurprojectItemDes}>
                  <p>{`IPCC & CRM`}</p>
                </div>
                <div className={styles.OurprojectItemTitle}>
                  <h1>{`Sales & Digifarm`}</h1>
                </div>
              </div>
              <Image src={Farm} alt="" />
            </div>
            <div className={styles.OurprojectBtn}>
              <button>{`EXPLORE ALL PROJECT`}</button>
            </div>
          </div>
          <div className={styles.OurprojectItem}>
            <div className={styles.OurprojectItemContent}>
              <div className={styles.OurprojectItemRelative}>
                <div className={styles.OurprojectItemDes}>
                  <p>{`ECOMMERCE`}</p>
                </div>
                <div className={styles.OurprojectItemTitle}>
                  <h1>{`Beverage`}</h1>
                </div>
              </div>
              <Image src={Beverage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourproject;
