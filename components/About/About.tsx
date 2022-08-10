import React from "react";
import Image from "next/image";
import styles from "../../styles/About.module.scss";
import Bag from "../../public/images/bag.png";
import User from "../../public/images/use.png";
import Option from "../../public/images/op.png";
import Cloud from "../../public/images/cloud.png";
import Speak from "../../public/images/loa.png";

function About() {
  return (
    <section id="#about" className={styles.AboutSection}>
      <div className={styles.About}>
        <div className={styles.AboutContent}>
          <div className={styles.AboutTitle}>
            <h1>Why Hire Us?</h1>
          </div>
        </div>
        <div className={styles.AboutList}>
          <div className={styles.AboutItem}>
            <div className={styles.AboutItemContent}>
              <Image src={Bag} alt="" />
              <div className={styles.AboutItemTitle}>
                <h1>E-COMMERCE</h1>
              </div>
              <div className={styles.AboutItemDes}>
                <p>
                  Helps you run your business and do online marketing more
                  effectively with outstanding and unique features.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.AboutItem}>
            <div className={styles.AboutItemContent}>
              <Image src={User} alt="" />
              <div className={styles.AboutItemTitle}>
                <h1>IPCC & CRM</h1>
              </div>
              <div className={styles.AboutItemDes}>
                <p>
                  Integrate modern management system in storing, processing
                  information and supporting customers.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.AboutItem}>
            <div className={styles.AboutItemContent}>
              <Image src={Option} alt="" />
              <div className={styles.AboutItemTitle}>
                <h1>MANAGED SERVICES</h1>
              </div>
              <div className={styles.AboutItemDes}>
                <p>
                  Systematize services scientifically based on business form and
                  specific criteria of business.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.AboutItem}>
            <div className={styles.AboutItemContent}>
              <Image src={Cloud} alt="" />
              <div className={styles.AboutItemTitle}>
                <h1>CLOUD</h1>
              </div>
              <div className={styles.AboutItemDes}>
                <p>Synchronize data, storage and restore on demand.</p>
              </div>
            </div>
          </div>
          <div className={styles.AboutItem}>
            <div className={styles.AboutItemContent}>
              <Image src={Speak} alt="" />
              <div className={styles.AboutItemTitle}>
                <h1>Sales & Marketing</h1>
              </div>
              <div className={styles.AboutItemDes}>
                <p>
                  Our team is reliable to manage whole process from acquiring
                  clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
