import React from "react";
import Image from "next/image";
import styles from "../../styles/OurteamDetail.module.scss";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import Mem1 from "../../public/images/phuong.png";
import Mem2 from "../../public/images/can.png";
import Mem3 from "../../public/images/ahuy.png";
import Mem4 from "../../public/images/chuyen.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation} from "swiper";
function Ourmember() {

  return (
    <section className={styles.OurmemberSection}>
      <div className={styles.Ourmember}>
        <div className={styles.OurmemberContent}>
          <div className={styles.OurmemberDes}>
            <p>OUR MEMBER</p>
          </div>
          <div className={styles.OurmemberTitle}>
            <h1>How we organise</h1>
          </div>
        </div>
        <div className={styles.OurmemberSlider}>
          <Swiper
            watchSlidesProgress={true} slidesPerView={7} navigation={true} modules={[Navigation]} className="mySwiper" 
          >
          <SwiperSlide>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
          </SwiperSlide>
          </Swiper>
          <Swiper>
            <div className={styles.OurmemberText}>
            <SwiperSlide>
              <div className={styles.OurmemberTitle}>
                <h1>PHUONG PHAN</h1>/<p>Product Manager</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.OurmemberTitle}>
                <h1>aaaa PHAN</h1>/<p>Product Manager</p>
              </div>
            </SwiperSlide>
            </div>

          </Swiper>
          {/* <div className={styles.OurmemberBtn}>
            <button className={styles.btnLeft}>
              <BsChevronLeft />
            </button>
            <button className={styles.btnRight}>
              <BsChevronRight />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Ourmember;
