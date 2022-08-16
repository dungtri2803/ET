import React from "react";
import Image from "next/image";
import styles from "../../styles/OurprojectMobile.module.scss";
import Bh from "../../public/images/bt.png";
import Logistic from "../../public/images/logis.png";
import Farm from "../../public/images/farm.png";
import { useMediaQuery } from "react-responsive";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper";

function Ourproject() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1440px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <div>
      {isTabletOrMobile && (
        <section id="#OurprojectMobile" className={styles.OurprojectMobileSection}>
          <Swiper
            className={styles.OurprojectMobile}
            slidesPerView={1.5}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <div className={styles.OurprojectMobileItem}>
                <div className={styles.OurprojectMobileContent}>
                  <div className={styles.OurprojectMobileItemImg}>
                    <Image src={Bh} alt="" />
                  </div>
                  <div className={styles.OurprojectMobileDes}>
                    <p>{`OUR PROJECTS`}</p>
                  </div>
                  <div className={styles.OurprojectMobileDes}>
                    <p>{`Our amazing work with various Industry`}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.OurprojectMobileItem}>
                <div className={styles.OurprojectMobileContent}>
                  <div className={styles.OurprojectMobileItemImg}>
                    <Image src={Logistic} alt="" />
                  </div>
                  <div className={styles.OurprojectMobileDes}>
                    <p>{`OUR PROJECTS`}</p>
                  </div>
                  <div className={styles.OurprojectMobileDes}>
                    <p>{`Our amazing work with various Industry`}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.OurprojectMobileItem}>
                <div className={styles.OurprojectMobileContent}>
                  <div className={styles.OurprojectMobileItemImg}>
                    <Image src={Farm} alt="" />
                  </div>
                  <div className={styles.OurprojectMobileDes}>
                    <p>{`OUR PROJECTS`}</p>
                  </div>
                  <div className={styles.OurprojectMobileDes}>
                    <p>{`Our amazing work with various Industry`}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className={styles.OurprojectMobileBtn}>
              <button>{`EXPLORE ALL PROJECT`}</button>
            </div>
          </Swiper>
        </section>
      )}
    </div>
  );
}

export default Ourproject;
