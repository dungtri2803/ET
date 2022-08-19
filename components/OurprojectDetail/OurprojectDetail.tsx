import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/OurprojectDetail.module.scss";
import Logo from "../../public/images/logo.png";
import MenuBar from "../../public/images/menu.png";
import Close from "../../public/images/x.png";
import Pro from "../../public/images/flu.png";
import Com from "../../public/images/com.png";
import User1 from "../../public/images/u1.png";
import User2 from "../../public/images/u2.png";
import User3 from "../../public/images/u3.png";
import User4 from "../../public/images/u4.png";
import User5 from "../../public/images/u5.png";
import User6 from "../../public/images/u6.png";
import User7 from "../../public/images/u7.png";
import User8 from "../../public/images/u8.png";
import User9 from "../../public/images/u9.png";
import User10 from "../../public/images/u10.png";
import User11 from "../../public/images/u11.png";
import User12 from "../../public/images/u12.png";
import OurprojectDetailImg from "../../components/OurprojectDetail/OurprojectDetailImg";
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"

function OurprojectDetail() {
  return (
    <>
      <section className={styles.OurprojectDetailSection}>
        <div className={styles.OurprojectDetail}>
          <div className={styles.navBar}>
            <div className={styles.Logo}>
              <Image src={Logo} alt="" />
            </div>
            <ul className={styles.listMenu}>
              <li className={styles.itemMenu}>{`Home`}</li>
              <li className={styles.itemMenu}>{`Our Team`}</li>
              <li className={styles.itemMenu}>{`Our Service`}</li>
              <li className={styles.itemMenu}>{`Career`}</li>
              <li className={styles.itemMenu}>{`Contact`}</li>
            </ul>
            <div className={styles.navBarMenu}>
              <button>
                <Image src={MenuBar} alt="" />
              </button>
            </div>
            <div className={styles.contactBtn}>
              <button>{`Contact us`}</button>
            </div>
          </div>
          <div className={styles.OurprojectDetailContent}>
            <div className={styles.OurprojectDetailContentList}>
              <div className={styles.OurprojectDetailContentLeft}>
                <div className={styles.OurprojectDetailContentLeftItem}>
                  <div className={styles.OurprojectDetailContentLeftTitle}>
                    <h1>Our services</h1>
                  </div>
                  <div className={styles.OurprojectDetailContentLeftDes}>
                    <div className={styles.OurprojectDetailIcon}>
                      <Image src={Pro} alt="" />
                    </div>
                    <h1>Product Design</h1>
                  </div>
                  <div className={styles.OurprojectDetailContentLeftText}>
                    <p>Persona, User Flow, Sitemap</p>
                    <p>Moodboard, Creative Concept</p>
                    <p>Idea, Visual Design</p>
                    <p>Prototype & Interaction</p>
                  </div>
                </div>
                <div className={styles.OurprojectDetailContentLeftItem}>
                  <div className={styles.OurprojectDetailContentLeftDes}>
                    <div className={styles.OurprojectDetailIcon}>
                      <Image src={Com} alt="" />
                    </div>
                    <h1>Product Developement</h1>
                  </div>
                  <div className={styles.OurprojectDetailContentLeftText}>
                    <p>Mobile & Web development</p>
                    <p>Analytics and Big Data Solutions</p>
                    <p>Technology Support</p>
                    <p>IT Security</p>
                  </div>
                </div>
              </div>
              <div className={styles.OurprojectDetailContentRight}>
                <div className={styles.OurprojectDetailContentRightList}>
                  <div className={styles.OurprojectDetailContentRightItem1}>
                    <Image src={User1} alt="" />
                  </div>
                  <div className={styles.OurprojectDetailContentRightItem2}>
                    <Image src={User2} alt="" />
                  </div>
                  <div className={styles.OurprojectDetailContentRightItem3}>
                    <Image src={User3} alt="" />
                  </div>
                  <div className={styles.OurprojectDetailContentRightItem4}>
                    <Image src={User4} alt="" />
                  </div>
                  <div className={styles.OurprojectDetailContentRightItem5}>
                    <Image src={User5} alt="" />
                  </div>
                  <div className={styles.OurprojectDetailContentRightItem6}>
                    <Image src={User6} alt="" />
                  </div>
                  <div className={styles.OurprojectDetailContentRightItem7}>
                    <Image src={User7} alt="" />
                  </div>
                  <div className={styles.OurprojectDetailContentRightItem8}>
                    <Image src={User8} alt="" />
                  </div>
                  <div className={styles.OurprojectDetailContentRightItem9}>
                    <Image src={User9} alt="" />
                  </div>
                  <div className={styles.OurprojectDetailContentRightItem10}>
                    <Image src={User10} alt="" />
                  </div>
                  <div className={styles.OurprojectDetailContentRightItem11}>
                    <Image src={User11} alt="" />
                  </div>
                  <div className={styles.OurprojectDetailContentRightItem12}>
                    <Image src={User12} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurprojectDetailImg />
      <Contact />
      <Footer />
    </>
  );
}

export default OurprojectDetail;
