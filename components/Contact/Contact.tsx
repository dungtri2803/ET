import React from "react";
import Image from "next/image";
import styles from "../../styles/Contact.module.scss";
import IconLeft from "../../public/images/iconleft.png";
import IconRight from "../../public/images/iconright.png";

function Contact() {
  return (
    <section id="#contact" className={styles.ContactSection}>
      <div className={styles.Contact}>
        <div className={styles.ContactImages}>
          <div className={styles.ContactImageLeft}>
            <Image src={IconLeft} alt="" />
          </div>
          <div className={styles.ContactImageRight}>
            <Image src={IconRight} alt="" />
          </div>
        </div>
        <div className={styles.ContactContent}>
          <div className={styles.ContactTitle}>
            <h1>
              {`Have a great idea about your project? Let’s Collaborate With Us`}
            </h1>
          </div>
          <div className={styles.ContactDes}>
            <p>
              {`We love to collaborate with enthusiastic teams, big or small to create something special.
We have a tried and tested process to take your ideas/concepts and bring them to life.`}
            </p>
          </div>
          <div className={styles.ContactBtn}>
          <button className={styles.ContactBtn}>{`Contact Us`}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
