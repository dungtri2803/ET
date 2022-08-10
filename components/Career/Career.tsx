import React from "react";
import Image from "next/image";
import styles from "../../styles/Career.module.scss";
import Slide1 from "../../public/images/slide1.png";
import Slide2 from "../../public/images/slide2.png";
import Left from "../../public/images/left.png";
import Right from "../../public/images/right.png";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Carerr() {
  return (
    <section id="#carerr" className={styles.careerSection}>
      <div className={styles.career}>
        <div className={styles.careerList}>
          <div className={styles.careerItemLeft}>
            <div className={styles.careerContent}>
              <div className={styles.careerDes}>
                <p>{`CAPABILITIES`}</p>
              </div>
              <div className={styles.careerTitle}>
                <h1>{`ExcelTech deliver a wide range of digital products`}</h1>
              </div>
              <div className={styles.careerlet}>
                <p>
                  {`ExcelTech is a group of experienced, highly skilled, and
                  passionate professionals in online digital content products
                  and services. We support start-ups, small and medium-size
                  businesses who are tranforming their ideas into high quality
                  products and sustainable businesses.`}
                  <br />
                  <br />
                  {`We also provide brand promotion services through online media
                  and social networks to enhance sales and promotion for new
                  products effectively. Finally, we provide maintenance services
                  of online digital products and infrastructure with high
                  performance and a secure data center on global scale.`}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.careerItemRight}>
            <div className={styles.careerSlider}>
              <div className={styles.Image}>
                <Image src={Slide1} alt="" />
              </div>
              <div className={styles.Image}>
                <Image src={Slide2} alt="" />
              </div>
              <div className={styles.careerBtn}>
                <button className={styles.careerBtnLeft}>
                  <Image src={Left} alt="" />
                </button>
                <button className={styles.careerBtnRight}>
                  <Image src={Right} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carerr;
