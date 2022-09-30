import React, { useState } from "react";
import Image from "next/image";
import Mem1 from "../../public/images/member/1.jpg";
import Mem2 from "../../public/images/member/2.jpg";
import Mem3 from "../../public/images/member/3.jpg";
import Mem4 from "../../public/images/member/4.jpg";
import Mem5 from "../../public/images/member/5.jpg";
import Mem6 from "../../public/images/member/6.jpg";
import Mem7 from "../../public/images/member/7.jpg";
import Mem8 from "../../public/images/member/8.png";
import Mem9 from "../../public/images/member/9.jpg";
import Mem10 from "../../public/images/member/10.jpg";
import Mem11 from "../../public/images/member/11.jpg";
import Mem12 from "../../public/images/member/12.jpg";
import Mem13 from "../../public/images/member/13.png";
import Mem14 from "../../public/images/member/14.jpg";
import Mem15 from "../../public/images/member/15.jpg";
import Mem16 from "../../public/images/member/16.jpg";
import Mem17 from "../../public/images/member/17.jpg";
import Mem18 from "../../public/images/member/18.jpg";
import Mem19 from "../../public/images/member/19.jpg";
import Mem20 from "../../public/images/member/20.jpg";
import Mem21 from "../../public/images/member/21.jpg";
import Mem22 from "../../public/images/member/22.jpg";
import Mem23 from "../../public/images/member/23.jpg";
import Mem24 from "../../public/images/member/24.jpg";
import Mem25 from "../../public/images/member/25.jpg";
import Mem26 from "../../public/images/member/26.jpg";
import Ceo from "../../public/images/sep.png";
import styles from "../../styles/OurteamDetail.module.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import Left from "../../public/images/left.png";
import Right from "../../public/images/right.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
// import required modules
import { Grid, Navigation ,Pagination} from "swiper";
import "swiper/css/navigation";
// import required modules
import "swiper/css/pagination";
// import required modules

import SwiperCore, { A11y } from "swiper";
SwiperCore.use([Navigation, A11y]);
function Ourmember() {
  const [Number, setNumber] = useState(8);
  const handleNumber = () => {  
    setNumber(Number + 4);
  };
  const handleCountNumber = () => {
    setNumber(Number - 4);
  };
  
  const [showModal, setShowModal] = useState(false);
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
              <p>{`Helps you run your business and do online marketing more effectively with  outstanding and unique features.`} <span>{`Explore more `}</span></p>
            </div>
          </div>
        </div>

        <div className={styles.aboutImgs}>
          <Swiper
            grid={{
              rows: 2,
            }}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            pagination={{
              type: "fraction",
            }}
            spaceBetween={0}
            modules={[Grid, Navigation, Pagination]}
            className="MembermySwiper"
            breakpoints={{
              3000: {
                // width: 576,
                slidesPerView: 4,
              },
              2440: {
                // width: 576,
                slidesPerView: 4,
              },
              1900: {
                // width: 576,
                slidesPerView: 4,
              },
              1800: {
                // width: 576,
                slidesPerView: 4,
              },
              1440: {
                // width: 576,
                slidesPerView: 4,
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
                  <p>{`hanh doan`}</p>
                  <span>{`Customer Service Manager`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem3} alt="" />
                <div className={styles.aboutText}>
                  <p>{`thanh din`}</p>
                  <span>{`Product Manager`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem4} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Phuong phan`}</p>
                  <span>{`Project Manager`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem5} alt="" />
                <div className={styles.aboutText}>
                  <p>{`Dat nguyen`}</p>
                  <span>{`Senior Front End Specialist`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem6} alt="" />
                <div className={styles.aboutText}>
                  <p>{`phuc ha`}</p>
                  <span>{`Software Development Manager`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem7} alt="" />
                <div className={styles.aboutText}>
                  <p>{`thinh tran`}</p>
                  <span>{`Sales Manager`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem8} alt="" />
                <div className={styles.aboutText}>
                  <p>{`huyen nguyen`}</p>
                  <span>{`Graphic Design Manager`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem9} alt="" />
                <div className={styles.aboutText}>
                  <p>{`minh tran`}</p>
                  <span>{`Graphic Designer `}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem10} alt="" />
                <div className={styles.aboutText}>
                  <p>{`hang nguyen`}</p>
                  <span>{`Front End Specialist`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem11} alt="" />
                <div className={styles.aboutText}>
                  <p>{`an ngo`}</p>
                  <span>{`HR-Admin Supervisor`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem12} alt="" />
                <div className={styles.aboutText}>
                  <p>{`hai mai`}</p>
                  <span>{`Back End Specialist`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem13} alt="" />
                <div className={styles.aboutText}>
                  <p>{`duc le`}</p>
                  <span>{`Front End Specialist`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem14} alt="" />
                <div className={styles.aboutText}>
                  <p>{`van le`}</p>
                  <span>{`Business Analysis Specialist`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem15} alt="" />
                <div className={styles.aboutText}>
                  <p>{`van pham`}</p>
                  <span>{`Front End Specialist`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem16} alt="" />
                <div className={styles.aboutText}>
                  <p>{`minh nguyen`}</p>
                  <span>{`Front End Specialist`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem17} alt="" />
                <div className={styles.aboutText}>
                  <p>{`dung nguyen`}</p>
                  <span>{`Front End Specialist`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem18} alt="" />
                <div className={styles.aboutText}>
                  <p>{`My Ngo`}</p>
                  <span>{`Tester specialist`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem19} alt="" />
                <div className={styles.aboutText}>
                  <p>{`duy pham`}</p>
                  <span>{`Back End Developer`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem20} alt="" />
                <div className={styles.aboutText}>
                  <p>{`lien phan`}</p>
                  <span>{`Deputy Managing Director`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem21} alt="" />
                <div className={styles.aboutText}>
                  <p>{`toan nguyen`}</p>
                  <span>{`Back End Specialist`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem22} alt="" />
                <div className={styles.aboutText}>
                  <p>{`long le`}</p>
                  <span>{`Graphic Design Specialist`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem23} alt="" />
                <div className={styles.aboutText}>
                  <p>{`diem bui`}</p>
                  <span>{`UI/UX Design Specialist`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem24} alt="" />
                <div className={styles.aboutText}>
                  <p>{`tong duong`}</p>
                  <span>{`Software Development Specialist`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem25} alt="" />
                <div className={styles.aboutText}>
                  <p>{`tu phan`}</p>
                  <span>{`Flutter Specialist`}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aboutImg}>
                <Image src={Mem26} alt="" />
                <div className={styles.aboutText}>
                  <p>{`anh le`}</p>
                  <span>{`Implementation Consultant `}</span>
                </div>
              </div>
            </SwiperSlide>
            <div className={styles.BtnNumber}>
            <div className={styles.Number}>
                <p>{Number} / 32</p>
              </div>
              <div className={styles.Btn}>
                <Image
                  src={Left}
                  alt=""
                  className="prev"
                  onClick={handleCountNumber}
                />
                <Image
                  src={Right}
                  alt=""
                  className="next"
                  onClick={handleNumber}
                />
              </div>

            </div>
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
