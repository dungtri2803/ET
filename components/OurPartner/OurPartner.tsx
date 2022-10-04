import React,{ useEffect }  from "react";
import styles from "../../styles/OurPartner.module.scss";
import Image from "next/image";
import Op1 from "../../public/images/op1.png";
import Op2 from "../../public/images/op2.png";
import Op3 from "../../public/images/op3.png";
import Op4 from "../../public/images/op4.png";
import { Slide, Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Left from "../../public/images/left.png";
import Right from "../../public/images/right.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Navigation, Autoplay } from "swiper";
import SwiperCore, { A11y } from "swiper";
SwiperCore.use([Navigation, A11y]);
const buttonStyle1 = {
  fontSize: "30px",
  fontWeight: "700",
  lineHeight: "20px",
  background: "none",
  border: "0px",
  bottom: "31%",
  padding: "10px",
  right: "25%",
};
const buttonStyle2 = {
  fontSize: "30px",
  lineHeight: "20px",
  background: "#000",
  color: "#fff",
  border: "0px",
  bottom: "31%",
  padding: "10px",
  left: "75%",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle2 }} className="OurpartnerRight">
      <BsChevronRight />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle1 }} className="OurpartnerLeft">
      <BsChevronLeft />
    </button>
  ),
};

function OurPartner() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles.OurPartnerSection}>
      <div className={styles.OurPartner} >
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Autoplay]}
          className="OurpartnermySwiper"
        >
          <SwiperSlide>
            <div className={styles.OurPartnerList}>
              <div className={styles.OurPartnerLeft} data-aos="fade-right"  data-aos-duration="2000">
                <div className={styles.OurPartnerLeftContent}>
                  <div className={styles.OurPartnerLeftDes}>
                    <p>{`OUR PARTNER`}</p>
                  </div>
                  <div className={styles.OurPartnerLeftTitle}>
                    <p>{`What do they say about us`}</p>
                  </div>
                  <div className={styles.OurPartnerLeftTi}>
                    <p>{`In the process of using ExcelTech's management software, their staff is always dedicated to answering, even being there immediately to handle problems, this is what I feel most satisfied. In addition, they always listen to customers' opinions and timely improve the necessary features to serve the arising needs of our business.`}</p>
                  </div>
                  <div className={styles.OurPartnerLeftName}>
                    <p>{`Dr. Quynh Nhu`}</p>
                  </div>
                  <div className={styles.OurPartnerLeftDetal}>
                    <p>{`ELITE DENTAL`}</p>
                  </div>
                </div>
              </div>
              <div className={styles.OurPartnerRight} data-aos="fade-left"  data-aos-duration="2000">
                <div className={styles.OurPartnerRightImgs}>
                  <div className={styles.OurPartnerRightImg1}>
                    <Image src={Op1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurPartnerList}>
              <div className={styles.OurPartnerLeft} data-aos="fade-right"  data-aos-duration="2000" >
                <div className={styles.OurPartnerLeftContent}>
                  <div className={styles.OurPartnerLeftDes}>
                    <p>{`OUR PARTNER`}</p>
                  </div>
                  <div className={styles.OurPartnerLeftTitle}>
                    <p>{`What do they say about us`}</p>
                  </div>
                  <div className={styles.OurPartnerLeftTi}>
                    <p>{`In the process of using ExcelTech's management software, their staff is always dedicated to answering, even being there immediately to handle problems, this is what I feel most satisfied. In addition, they always listen to customers' opinions and timely improve the necessary features to serve the arising needs of our business.`}</p>
                  </div>
                  <div className={styles.OurPartnerLeftName}>
                    <p>{`Ms. Dinh To Lien`}</p>
                  </div>
                  <div className={styles.OurPartnerLeftDetal}>
                    <p>{`Co-Founder Mi Đốm Sâm Dừa Coconutty`}</p>
                  </div>
                </div>
              </div>
              <div className={styles.OurPartnerRight} data-aos="fade-left"  data-aos-duration="2000">
                <div className={styles.OurPartnerRightImgs}>
                  <div className={styles.OurPartnerRightImg1}>
                    <Image src={Op2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurPartnerList}>
              <div className={styles.OurPartnerLeft} data-aos="fade-right"  data-aos-duration="2000">
                <div className={styles.OurPartnerLeftContent}>
                  <div className={styles.OurPartnerLeftDes}>
                    <p>{`OUR PARTNER`}</p>
                  </div>
                  <div className={styles.OurPartnerLeftTitle}>
                    <p>{`What do they say about us`}</p>
                  </div>
                  <div className={styles.OurPartnerLeftTi}>
                    <p>{`In the process of using ExcelTech's management software, their staff is always dedicated to answering, even being there immediately to handle problems, this is what I feel most satisfied. In addition, they always listen to customers' opinions and timely improve the necessary features to serve the arising needs of our business.`}</p>
                  </div>
                  <div className={styles.OurPartnerLeftName}>
                    <p>{`Mr. Thanh`}</p>
                  </div>
                  <div className={styles.OurPartnerLeftDetal}>
                    <p>{`Láng Beauty`}</p>
                  </div>
                </div>
              </div>
              <div className={styles.OurPartnerRight} data-aos="fade-left"  data-aos-duration="2000">
                <div className={styles.OurPartnerRightImgs}>
                  <div className={styles.OurPartnerRightImg1}>
                    <Image src={Op3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurPartnerList}>
              <div className={styles.OurPartnerLeft} data-aos="fade-right"  data-aos-duration="2000">
                <div className={styles.OurPartnerLeftContent}>
                  <div className={styles.OurPartnerLeftDes}>
                    <p>{`OUR PARTNER`}</p>
                  </div>
                  <div className={styles.OurPartnerLeftTitle}>
                    <p>{`What do they say about us`}</p>
                  </div>
                  <div className={styles.OurPartnerLeftTi}>
                    <p>{`In the process of using ExcelTech's management software, their staff is always dedicated to answering, even being there immediately to handle problems, this is what I feel most satisfied. In addition, they always listen to customers' opinions and timely improve the necessary features to serve the arising needs of our business.`}</p>
                  </div>
                  <div className={styles.OurPartnerLeftName}>
                    <p>{`Mr. Jackie`}</p>
                  </div>
                  <div className={styles.OurPartnerLeftDetal}>
                    <p>{`CEO VICO Logistics`}</p>
                  </div>
                </div>
              </div>
              <div className={styles.OurPartnerRight} data-aos="fade-left"  data-aos-duration="2000">
                <div className={styles.OurPartnerRightImgs}>
                  <div className={styles.OurPartnerRightImg1}>
                    <Image src={Op4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className={styles.Btn}>
            <Image src={Left} alt="" className="next" />
            <Image src={Right} alt="" className="next" />
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default OurPartner;
