import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Bh from "../../public/images/bt.png";
import Farm from "../../public/images/farm.png";
import Logistic from "../../public/images/logis.png";
import styles from "../../styles/OurprojectMobile.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper";

function Ourproject() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });

  return (
    <>
      {isTabletOrMobile && (
        <section
          id="#OurprojectMobile"
          className={styles.OurprojectMobileSection}
        >
          <Swiper
            className={styles.OurprojectMobile}
            slidesPerView={1.5}
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <div className={styles.OurprojectMobileItem}>
                <div className={styles.OurprojectMobileContent}>
                  <div className={styles.OurprojectMobileItemImg}>
                    <Image src={Bh} alt="" />
                  </div>
                  <div className={styles.OurprojectMobileDes}>
                    <p
                      className={styles.OurprojectMobileDesTitle}
                    >{`ECOMMERCE`}</p>
                    <p
                      className={styles.OurprojectMobileDesBold}
                    >{`Beverage`}</p>
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
                    <p
                      className={styles.OurprojectMobileDesTitle}
                    >{`MANAGED SERVICES`}</p>
                    <p
                      className={styles.OurprojectMobileDesBold}
                    >{`Logistics`}</p>
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
                    <p
                      className={styles.OurprojectMobileDesTitle}
                    >{`IPCC & CRM`}</p>
                    <p
                      className={styles.OurprojectMobileDesBold}
                    >{`Sales & Digifarm`}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={styles.OurprojectMobileBtn}>
            <button>{`EXPLORE ALL PROJECT`}</button>
          </div>
        </section>
      )}
    </>
  );
}

export default Ourproject;
