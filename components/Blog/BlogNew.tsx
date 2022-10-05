import React,{useEffect} from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Bl3 from "../../public/images/bl3.png";
import Bl6 from "../../public/images/bl6.png";
import Bl7 from "../../public/images/bl7.png";
import Left from "../../public/images/left.png";
import Right from "../../public/images/right.png";
import styles from "../../styles/Blog.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import SwiperCore, { A11y, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Navigation, A11y]);
// import required modules
const responsiveSettings = [
  {
    breakpoint: 1400,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 1000,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 100,
    settings: {
      slidesToShow: 1.5,
      slidesToScroll: 1,
    },
  },
];
function BlogNew() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles.BlogNewSection} data-aos="fade-up"  data-aos-duration="2000">
      <div className={styles.BlogNew} >
        <div className={styles.blognewList}>
          <div className={styles.blognewContent}>
            <div className={styles.blogTitle}>
              <p>{`What’s news?`}</p>
            </div>
            <div className={styles.Btn}>
            <Image src={Left} alt="" className="prev" />
            <Image src={Right} alt="" className="next" />
          </div>
          </div>
          <div className={styles.blognewLists}>
            <Swiper
              slidesPerView={4}
              spaceBetween={0}
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
              pagination={{
                type: "fraction",
              }}
              breakpoints={{
                1800: {
                  slidesPerView: 4,
                },
                1440: {
                  slidesPerView: 4,
                },
                1400: {
                  slidesPerView: 4,
                },
                1300: {
                  slidesPerView: 3,
                },
                1100: {
                  slidesPerView: 3,
                },
                1000: {
                  slidesPerView: 3,
                },
                900: {
                  slidesPerView: 3,
                },
                700: {
                  slidesPerView: 3,
                },
                400: {
                  slidesPerView: 2,
                },
                300: {
                  slidesPerView: 2,
                },
              }}
              className="BlogmySwiper"
            >
              <SwiperSlide>
                <div className={styles.blognewItem}>
                  <div className={styles.blognewImg}>
                    <Image src={Bl3} alt="" />
                  </div>
                  <div className={styles.blognewText}>
                    <div className={styles.blognewDes}>
                      <p>{`Aug 16, 2022`}</p>
                    </div>
                    <div className={styles.blognewTitle}>
                      <p>{`5 Benefits of Cloud Computing in the World of E-commerce`}</p>
                    </div>
                    <div className={styles.blognewDesBtn}>
                      <p>{`Software development`}</p>
                    </div>
                    <div className={styles.blognewTi}>
                      <p>{`Retailers now have a huge potential to expand their online presence and business in order to boost sales and growth as a result of the movement in customer buying preferences from in-store to online. E-commerce has benefited greatly from cloud computing technologies during this transformation in many different ways....`}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.blognewItem}>
                  <div className={styles.blognewImg}>
                    <Image src={Bl6} alt="" />
                  </div>
                  <div className={styles.blognewText}>
                    <div className={styles.blognewDes}>
                      <p>{`Aug 16, 2022`}</p>
                    </div>
                    <div className={styles.blognewTitle}>
                      <p>{`5 Benefits of Cloud Computing in the World of E-commerce`}</p>
                    </div>
                    <div className={styles.blognewDesBtn}>
                      <p>{`Software development`}</p>
                    </div>
                    <div className={styles.blognewTi}>
                      <p>{`Retailers now have a huge potential to expand their online presence and business in order to boost sales and growth as a result of the movement in customer buying preferences from in-store to online. E-commerce has benefited greatly from cloud computing technologies during this transformation in many different ways....`}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.blognewItem}>
                  <div className={styles.blognewImg}>
                    <Image src={Bl7} alt="" />
                  </div>
                  <div className={styles.blognewText}>
                    <div className={styles.blognewDes}>
                      <p>{`Aug 16, 2022`}</p>
                    </div>
                    <div className={styles.blognewTitle}>
                      <p>{`5 Benefits of Cloud Computing in the World of E-commerce`}</p>
                    </div>
                    <div className={styles.blognewDesBtn}>
                      <p>{`Software development`}</p>
                    </div>
                    <div className={styles.blognewTi}>
                      <p>{`Retailers now have a huge potential to expand their online presence and business in order to boost sales and growth as a result of the movement in customer buying preferences from in-store to online. E-commerce has benefited greatly from cloud computing technologies during this transformation in many different ways....`}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.blognewItem}>
                  <div className={styles.blognewImg}>
                    <Image src={Bl3} alt="" />
                  </div>
                  <div className={styles.blognewText}>
                    <div className={styles.blognewDes}>
                      <p>{`Aug 16, 2022`}</p>
                    </div>
                    <div className={styles.blognewTitle}>
                      <p>{`5 Benefits of Cloud Computing in the World of E-commerce`}</p>
                    </div>
                    <div className={styles.blognewDesBtn}>
                      <p>{`Software development`}</p>
                    </div>
                    <div className={styles.blognewTi}>
                      <p>{`Retailers now have a huge potential to expand their online presence and business in order to boost sales and growth as a result of the movement in customer buying preferences from in-store to online. E-commerce has benefited greatly from cloud computing technologies during this transformation in many different ways....`}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.blognewItem}>
                  <div className={styles.blognewImg}>
                    <Image src={Bl3} alt="" />
                  </div>
                  <div className={styles.blognewText}>
                    <div className={styles.blognewDes}>
                      <p>{`Aug 16, 2022`}</p>
                    </div>
                    <div className={styles.blognewTitle}>
                      <p>{`5 Benefits of Cloud Computing in the World of E-commerce`}</p>
                    </div>
                    <div className={styles.blognewDesBtn}>
                      <p>{`Software development`}</p>
                    </div>
                    <div className={styles.blognewTi}>
                      <p>{`Retailers now have a huge potential to expand their online presence and business in order to boost sales and growth as a result of the movement in customer buying preferences from in-store to online. E-commerce has benefited greatly from cloud computing technologies during this transformation in many different ways....`}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.blognewItem}>
                  <div className={styles.blognewImg}>
                    <Image src={Bl3} alt="" />
                  </div>
                  <div className={styles.blognewText}>
                    <div className={styles.blognewDes}>
                      <p>{`Aug 16, 2022`}</p>
                    </div>
                    <div className={styles.blognewTitle}>
                      <p>{`5 Benefits of Cloud Computing in the World of E-commerce`}</p>
                    </div>
                    <div className={styles.blognewDesBtn}>
                      <p>{`Software development`}</p>
                    </div>
                    <div className={styles.blognewTi}>
                      <p>{`Retailers now have a huge potential to expand their online presence and business in order to boost sales and growth as a result of the movement in customer buying preferences from in-store to online. E-commerce has benefited greatly from cloud computing technologies during this transformation in many different ways....`}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogNew;
