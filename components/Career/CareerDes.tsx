import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Career.module.scss";
import Bg1 from "../../public/images/bgel1.png";
import Bg2 from "../../public/images/el2.png";
import Ceo from "../../public/images/ceo.png";
import AOS from "aos";
import "aos/dist/aos.css";
function CareerDes() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={styles.CareerDesSection}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className={styles.CareerDes}>
        <div className={styles.CareerDesImg1}>
          <Image src={Ceo} alt="" />
        </div>
        <div className={styles.CareerDesList}>
          <div className={styles.CareerDesLeft}>
            <div className={styles.CareerDesLeftImg2}>
              <Image src={Bg1} alt="" />
            </div>
            <div className={styles.CareerDesLeftImg3}>
              <Image src={Bg2} alt="" />
            </div>
          </div>
          <div className={styles.CareerDesRight}>
            <div className={styles.CareerDesContent}>
              <div className={styles.CareerDesTitle}>
                <p>{`“Every feature we roll out has an immediate impact on our partners. The positive feedback is exhilarating.”`}</p>
              </div>
              <div className={styles.CareerDesDes}>
                <p>{`Huy Truong, Deputy GENERAL Director`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerDes;
