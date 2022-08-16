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
// import required modules
import { FreeMode, Pagination } from "swiper";
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
            slidesPerView={5}
            spaceBetween={0}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className={styles.OurmemberSliderList}
          >
          <SwiperSlide>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
            <div className={styles.OurmemberText}>
              <h1>PHUONG PHAN</h1> / <p>Product Manager</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
            <div className={styles.OurmemberText}>
              <h1>PHUONG PHAN</h1> / <p>Product Manager</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
            <div className={styles.OurmemberText}>
              <h1>PHUONG PHAN</h1> / <p>Product Manager</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
            <div className={styles.OurmemberText}>
              <h1>PHUONG PHAN</h1> / <p>Product Manager</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
            <div className={styles.OurmemberText}>
              <h1>PHUONG PHAN</h1> / <p>Product Manager</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
            <div className={styles.OurmemberText}>
              <h1>PHUONG PHAN</h1> / <p>Product Manager</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
            <div className={styles.OurmemberText}>
              <h1>PHUONG PHAN</h1> / <p>Product Manager</p>
            </div>
          </SwiperSlide>
          </Swiper>
          <div className={styles.OurmemberBtn}>
            <button className={styles.btnLeft}>
              <BsChevronLeft />
            </button>
            <button className={styles.btnRight}>
              <BsChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourmember;
