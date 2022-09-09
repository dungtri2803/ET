import React from "react";
import Image from "next/image";
import styles from "../../styles/Career.module.scss";
import Value1 from "../../public/images/ovl1.png";
import Value2 from "../../public/images/ovl2.png";
import Value3 from "../../public/images/ovl3.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

function CareerValues() {
  return (
    <section className={styles.CareerValuesSection}>
      <div className={styles.CareerValues}>
        <div className={styles.CareerValuesContent}>
          <div className={styles.CareerValuesDes}>
            <p>{`Our values`}</p>
          </div>
          <div className={styles.CareerValuesTitle}>
            <p>{`Our people embody our values:
                Integrity, Innovation, Perfection`}</p>
          </div>
        </div>
        <div className={styles.CareerValuesList}>
          <Swiper
            pagination={true}
            slidesPerView={4}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={styles.CareerValuesItem}>
                <div className={styles.CareerValuesImg1}>
                  <Image src={Value1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.CareerValuesItem}>
                <div className={styles.CareerValuesImg2}>
                  <Image src={Value2} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.CareerValuesItem}>
                <div className={styles.CareerValuesImg3}>
                  <Image src={Value3} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.CareerValuesItem}>
                <div className={styles.CareerValuesImg3}>
                  <Image src={Value1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.CareerValuesItem}>
                <div className={styles.CareerValuesImg3}>
                  <Image src={Value1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.CareerValuesItem}>
                <div className={styles.CareerValuesImg3}>
                  <Image src={Value1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.CareerValuesItem}>
                <div className={styles.CareerValuesImg3}>
                  <Image src={Value1} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default CareerValues;
