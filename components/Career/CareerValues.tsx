import React from "react";
import Image from "next/image";
import styles from "../../styles/Career.module.scss";
import Value1 from "../../public/images/l1.png";
import Value2 from "../../public/images/l2.png";
import Value3 from "../../public/images/l3.png";
import Value4 from "../../public/images/l4.png";
import Value5 from "../../public/images/l5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Value1mb from "../../public/images/l1mb.png";
import Value2mb from "../../public/images/lmb2.png";
import Value3mb from "../../public/images/lmb3.png";
import Value4mb from "../../public/images/lmb4.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
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
            slidesPerView={6.2}
            spaceBetween={0}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="CareerSwiper"
            breakpoints={{
              3000: {
                // width: 576,
                slidesPerView: 6,
              },
              2440: {
                // width: 576,
                slidesPerView: 6,
              },
              1900: {
                // width: 576,
                slidesPerView: 6,
              },
              1800: {
                // width: 576,
                slidesPerView: 6.5,
              },
              1440: {
                // width: 576,
                slidesPerView: 5,
              },
              1400: {
                // width: 768,
                slidesPerView: 4,
              },
              1300: {
                // width: 768,
                slidesPerView: 4,
              },
              1100: {
                // width: 768,
                slidesPerView: 4,
              },
              1000: {
                // width: 768,
                slidesPerView: 4,
              },
              900: {
                // width: 768,
                slidesPerView: 4,
              },
              700: {
                // width: 768,
                slidesPerView: 4,
              },
              400: {
                // width: 768,
                slidesPerView: 2,
              },
              300: {
                // width: 768,
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div className={styles.CareerValuesItem}>
                <div className={styles.CareerValuesImg5}>
                  <Image src={Value1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.CareerValuesItem}>
                <div className={styles.CareerValuesImg1}>
                  <Image src={Value2} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.CareerValuesItem}>
                <div className={styles.CareerValuesImg2}>
                  <Image src={Value3} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.CareerValuesItem}>
                <div className={styles.CareerValuesImg3}>
                  <Image src={Value4} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.CareerValuesItem}>
                <div className={styles.CareerValuesImg4}>
                  <Image src={Value5} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.CareerValuesListMb}>
          <div className={styles.CareerValuesItem}>
            <div className={styles.CareerValuesImg1}>
              <Image src={Value1mb} alt="" />
            </div>
          </div>
          <div className={styles.CareerValuesItem}>
            <div className={styles.CareerValuesImg2}>
              <Image src={Value2mb} alt="" />
            </div>
          </div>
          <div className={styles.CareerValuesItem}>
            <div className={styles.CareerValuesImg3}>
              <Image src={Value3mb} alt="" />
            </div>
          </div>
          <div className={styles.CareerValuesItem}>
            <div className={styles.CareerValuesImg4}>
              <Image src={Value4mb} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerValues;
