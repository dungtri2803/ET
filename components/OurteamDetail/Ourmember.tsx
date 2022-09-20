import Image from "next/image";
import Mem1 from "../../public/images/member/1.png";
import Mem2 from "../../public/images/member/2.png";
import Mem3 from "../../public/images/member/3.png";
import Mem4 from "../../public/images/member/4.png";
import Mem5 from "../../public/images/member/5.png";
import Mem6 from "../../public/images/member/6.png";
import Mem7 from "../../public/images/member/7.png";
import Mem8 from "../../public/images/member/8.png";
import Mem9 from "../../public/images/member/9.png";
import Mem10 from "../../public/images/member/10.png";
import Mem11 from "../../public/images/member/11.png";
import Mem12 from "../../public/images/member/12.png";
import Mem13 from "../../public/images/member/13.png";
import Mem14 from "../../public/images/member/14.png";
import Mem15 from "../../public/images/member/15.png";
import Mem16 from "../../public/images/member/16.png";
import Mem17 from "../../public/images/member/17.png";
import Mem18 from "../../public/images/member/18.png";
import Mem19 from "../../public/images/member/19.png";
import Mem20 from "../../public/images/member/20.png";
import Mem21 from "../../public/images/member/21.png";
import Mem22 from "../../public/images/member/22.png";
import Mem23 from "../../public/images/member/23.png";
import Mem24 from "../../public/images/member/24.png";
import Mem25 from "../../public/images/member/25.png";
import Mem26 from "../../public/images/member/26.png";
import Ceo from "../../public/images/sep.png";
import styles from "../../styles/OurteamDetail.module.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
// import required modules
import { Grid, Navigation } from "swiper";
import "swiper/css/navigation";
// import required modules
// import required modules
function Ourmember() {
  const buttonStyle1 = {
    fontSize: "30px",
    fontWeight: "700",
    lineHeight: "20px",
    background: "none",
    color: "#000",
    padding: "10px",
    border: "0px",
    bottom: "18%",
    right: "3%",
  };
  const buttonStyle2 = {
    fontSize: "30px",
    lineHeight: "20px",
    padding: "10px",
    background: "#000",
    color: "#fff",
    border: "0px",
    bottom: "18%",
    left: "97%",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle2 }} className="prevArrow">
        <BsChevronRight />
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle1 }} className="prevNext">
        <BsChevronLeft />
      </button>
    ),
  };
  return (
    <section className={styles.OurmemberSection}>
      <div className={styles.About}>
        <div className={styles.aboutList}>
          <div className={styles.aboutItem}>
            <div className={styles.aboutDes}>
              <p>{`OUR MEMBER`}</p>
            </div>
            <div className={styles.aboutTitle}>
              <p>{`How we organise`}</p>
            </div>
          </div>
          <div className={styles.aboutItemRight}>
            <div className={styles.aboutText}>
              <p>{`Helps you run your business and do online marketing more effectively with  outstanding and unique features. Explore more `}</p>
            </div>
          </div>
        </div>

        <div className={styles.aboutImgs}>
          <Swiper
            slidesPerView={6}
            grid={{
              rows: 2,
            }}
            spaceBetween={0}
            modules={[Grid, Navigation]}
            className="MembermySwiper"
            navigation={true} 
            breakpoints={{
              2440: {
                // width: 576,
                slidesPerView: 6,
              },
              1440: {
                // width: 576,
                slidesPerView: 6,
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
            }}
          >
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem1} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem2} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem3} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem4} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem5} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem6} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem7} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem8} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem9} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem10} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem11} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem12} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem13} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem14} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem15} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem16} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem17} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem18} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem19} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem20} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem21} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem22} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem23} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem24} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem25} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem26} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Huy Truong`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Ourmember;
{
  /* <div className={styles.aboutImg}>
            <Image src={Mem2} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem3} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem4} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem5} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem6} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem7} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem8} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem9} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem10} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem11} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem12} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
        </div>
        <div className={styles.aboutImgs}>
          <div className={styles.aboutImg}>
            <Image src={Mem13} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem14} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem15} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem16} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem17} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem18} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem19} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem20} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem21} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem22} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem23} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem24} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem25} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem26} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div> */
}
