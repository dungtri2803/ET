import React from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.scss";
import Navbar from "../Navbar/Navbar";
import Particles from "react-tsparticles";
import Bg2 from "../../public/images/bg2.png"

function Header() {
  return (
    <section className={styles.HeaderSection}>
      <div className={styles.Header}>
        <Navbar />
        <div className={styles.headerContent}>
          <div className={styles.headerTitle}>
            <p>{`We help you find solutions through design `}</p>
          </div>
          <div className={styles.headerDes}>
            <p>{`We deliver the highest quality products and service in digital design and innovation `}</p>
          </div>
          <div className={styles.headerContentList}>
            <div className={styles.headerContentItem}>
              <div className={styles.headerContentItemNum}>
                <h1>{`08`}</h1>
              </div>
              <div className={styles.headerContentItemText}>
                <p>{`Amazing Teams`}</p>
              </div>
            </div>
            <div className={styles.headerContentItem}>
              <div className={styles.headerContentItemNum}>
                <h1>{`30+`}</h1>
              </div>
              <div className={styles.headerContentItemText}>
                <p>{`Excellent Members`}</p>
              </div>
            </div>
            <div className={styles.headerContentItem}>
              <div className={styles.headerContentItemNum}>
                <h1>{`20+`}</h1>
              </div>
              <div className={styles.headerContentItemText}>
                <p>{`Exclusive Projects`}</p>
              </div>
            </div>
            <div className={styles.headerContentItem}>
              <div className={styles.headerContentItemNum}>
                <h1>{`15+`}</h1>
              </div>
              <div className={styles.headerContentItemText}>
                <p>{`Satisfied customer`}</p>
              </div>
            </div>
          </div>
        </div>
        <Particles
          id="tsparticles"
          className={styles.Particles}
          url="/particles.json"
        />
        <div className={styles.headerImg}>
            <Image src={Bg2} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Header;
