import React from "react";
import Image from "next/image";
import styles from "../../styles/OurteamDetail.module.scss";
import Reg1 from "../../public/images/reg1.png";
import A1 from "../../public/images/a1.png";
import A2 from "../../public/images/a2.png";
import A3 from "../../public/images/a3.png";
import A4 from "../../public/images/a4.png";
import Reg2 from "../../public/images/reg2.png";
import Reg3 from "../../public/images/reg3.png";
import Reg4 from "../../public/images/reg4.png";
import Eles1 from "../../public/images/els.png";
import Eles2 from "../../public/images/els1.png";


function OurteamAbout() {
  return (
    <section className={styles.OurteamAboutSection}>
      <div className={styles.OurteamAbout}>
        <div className={styles.OurteamAboutContent}>
          <div className={styles.OurteamAboutDes}>
            <p>OUR TEAM</p>
          </div>
          <div className={styles.OurteamAboutTitle}>
            <h1>Let’s See How Creative Work</h1>
          </div>
        </div>
        <div className={styles.OurteamAboutList}>
          <div className={styles.OurteamAboutLeft}>
            <div className={styles.OurteamAboutLeftReg}>
              <div className={styles.OurteamAboutLeftTitle}>
                <h1>Sales & Marketing</h1>
              </div>
              <div className={styles.OurteamAboutLeftDes}>
                <p>
                  After getting a brief explanation from the client, we
                  brainstormed something valuable to solve the problem and then
                  sketch step
                </p>
              </div>
            </div>
            <ul className={styles.OurteamAboutLeftList}>
              <li className={styles.OurteamAboutLeftItem}>Operation</li>
              <li className={styles.OurteamAboutLeftItem}>Business Analyst</li>
              <li className={styles.OurteamAboutLeftItem}>Graphic Design</li>
              <li className={styles.OurteamAboutLeftItem}>UI/UX Design</li>
              <li className={styles.OurteamAboutLeftItem}>Developement</li>
              <li className={styles.OurteamAboutLeftItem}>Quality Control</li>
            </ul>
            <div className={styles.OurteamAboutLeftBtn}>
              <button>Join us</button>
            </div>
          </div>
          <div className={styles.OurteamAboutRight}>
          <div className={styles.OurteamAboutRightImg10}>
              <Image src={Eles1} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg9}>
              <Image src={Eles1} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg1}>
              <Image src={Reg1} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg2}>
              <Image src={A1} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg3}>
              <Image src={A2} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg4}>
              <Image src={A3} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg5}>
              <Image src={A4} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg6}>
              <Image src={Reg2} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg7}>
              <Image src={Reg3} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg8}>
              <Image src={Reg4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurteamAbout;
