import React from "react";
import Image from "next/Image";
import styles from "../../styles/Contact.module.scss";
import IconLeft from "../../public/images/iconleft.png"
import IconRight from "../../public/images/iconright.png"

function Contact() {
  return (
    <section id="#contact" className={styles.ContactSection}>
      <div className={styles.Contact}>
        <div className={styles.ContactImages}>
            <div className={styles.ContactImageLeft}>
                <Image src={IconLeft} alt=""/>
            </div>
            <div className={styles.ContactImageRight}>
                <Image src={IconRight} alt=""/>
            </div>
        </div>
        <div className={styles.ContactContent}>
          <div className={styles.ContactTitle}>
            <h1>
              Have a great idea about your project? Let’s Collaborate With Us
            </h1>
          </div>
          <div className={styles.ContactDes}>
            <p>
              Feugiat ultrices sit vel interdum arcu ut tortor tincidunt. Tempor
              ultrices tempor, enim vitae. Varius accumsan, leo arcu feugiat
              morbi egestas.
            </p>
          </div>
          <button className={styles.ContactBtn}>Contact Us</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
