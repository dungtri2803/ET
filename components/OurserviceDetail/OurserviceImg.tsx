import React from "react";
import Image from "next/image";
import styles from "../../styles/OurserviceDetail.module.scss"
import Pj1 from "../../public/images/pj1.png";
import Pj2 from "../../public/images/pj2.png";
import Pj3 from "../../public/images/pj3.png";
import Pj4 from "../../public/images/pj4.png";
import Pj5 from "../../public/images/pj5.png";
import Pj7 from "../../public/images/pj7.png";
import Particles from "react-tsparticles";
import { motion, Variants } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

function OurserviceImg() {
  return (
    <section className={styles.OurserviceImgSection}>
      <div className={styles.OurserviceImg}>
        <div className={styles.OurserviceImgContent}>
          <div className={styles.OurserviceImgDes}>
            <p>{`OUR PROJECT`}</p>
          </div>
          <div className={styles.OurserviceImgTitle}>
            <p>{`Explore some of our recent projects`}</p>
          </div>
        </div>
        <div className={styles.OurserviceImgList}>
          <div className={styles.OurserviceImgLeft}>
            <div className={styles.OurserviceImgLeftItemFull}>
              <Image src={Pj1} alt="" />
            </div>
            <div className={styles.OurserviceImgLeftItemHalf}>
              <Image src={Pj3} alt="" />
            </div>
            <div className={styles.OurserviceImgLeftItemHalf}>
              <Image src={Pj2} alt="" />
            </div>
          </div>
          <div className={styles.OurserviceImgRight}>
            <div className={styles.OurserviceImgRightItemHalf}>
              <Image src={Pj4} alt="" />
            </div>
            <div className={styles.OurserviceImgRightItemHalf}>
              <Image src={Pj5} alt="" />
            </div>
            <div className={styles.OurserviceImgRightItemFull}>
              <Image src={Pj7} alt="" />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default OurserviceImg;
