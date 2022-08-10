import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import Img1 from "../../public/images/ccc.svg";
import Primitive from "../../public/images/primitive.png";
import Chart from "../../public/images/chart.png";
import Overview from "../../public/images/active.png";
import Load from "../../public/images/load.png";
import Marketing from "../../public/images/marketing.png";
import Pay from "../../public/images/pay.png";
import Filter from "../../public/images/filter.png";
import Info from "../../public/images/inf.png";
import Chart2 from "../../public/images/chart2.png";
import Facebook from "../../public/images/facebook.png";
import Inlinked from "../../public/images/in.png";
import Twitter from "../../public/images/tw.png";
import styles from "../../styles/Header.module.scss";

function Header() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div className={styles.navbar}>
            <Image src={Logo} width={90} height={30} alt="" />
            <ul className={styles.listMenu}>
              <li className={styles.itemMenu}>Home</li>
              <li className={styles.itemMenu}>Our Team</li>
              <li className={styles.itemMenu}>Our Service</li>
              <li className={styles.itemMenu}>Career</li>
              <li className={styles.itemMenu}>Contact</li>
            </ul>
          </div>
          <div className={styles.headerContent}>
            <div className={styles.headerContentTitle}>
              <h1>We help you find solutions through design </h1>
            </div>
            <div className={styles.headerContentDes}>
              <p>
                We deliver the highest quality products and service in digital
                design and innovation
              </p>
            </div>
            <div className={styles.headerContentBtn}>
              <button>How it Works</button>
            </div>
            <div className={styles.headerContentIcons}>
                <div className={styles.headerContentIcon}>
                  <div className={styles.headerContentIconFb}>
                    <Image src={Facebook} alt=''/>
                  </div>
                  <div className={styles.headerContentIconIn}>
                    <Image src={Inlinked} alt=''/>
                  </div>
                  <div className={styles.headerContentIconTw}>
                  <Image src={Twitter} alt=''/>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.HeaderImages}>
            <div className={styles.headerImgs}>
              <Image src={Img1} alt="" />
            </div>
            <div className={styles.headerImgs2}>
              <Image src={Primitive} alt="" />
            </div>
            <div className={styles.headerImgs3}>
              <Image src={Chart} alt="" />
            </div>
            <div className={styles.headerImgs4}>
              <Image src={Overview} alt="" />
            </div>
            <div className={styles.headerImgs5}>
              <Image src={Load} alt="" />
            </div>
            <div className={styles.headerImgs6}>
              <Image src={Marketing} alt="" />
            </div>
            <div className={styles.headerImgs7}>
              <Image src={Pay} alt="" />
            </div>
            <div className={styles.headerImgs8}>
              <Image src={Filter} alt="" />
            </div>
            <div className={styles.headerImgs9}>
              <Image src={Info} alt="" />
            </div>
            <div className={styles.headerImgs10}>
              <Image src={Chart2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
