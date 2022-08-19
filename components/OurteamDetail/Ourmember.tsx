import Image from "next/image";
import Slider from "react-slick";
import Mem1 from "../../public/images/sep.png";
import Mem2 from "../../public/images/can.png";
import Mem3 from "../../public/images/phuong.png";
import Mem4 from "../../public/images/chanh.png"
import Mem5 from "../../public/images/athanh.png"
import Mem6 from "../../public/images/adat.png"
import Mem7 from "../../public/images/aphuc.png"
import Mem8 from "../../public/images/athinh.png"
import Mem9 from "../../public/images/chuyen.png"
import Mem10 from "../../public/images/chang.png"
import Mem11 from "../../public/images/can.png"
import Mem12 from "../../public/images/ahai.png"
import Mem13 from "../../public/images/aduc.png"
import Mem14 from "../../public/images/cvan.png"
import Mem15 from "../../public/images/cngoc.png"
import Mem16 from "../../public/images/avan.png"
import Mem17 from "../../public/images/aminh.png"
import Mem18 from "../../public/images/dung.png"
import Mem19 from "../../public/images/aduy.png"
import Mem20 from "../../public/images/clien.png"
import Mem21 from "../../public/images/atoan.png"
import Mem22 from "../../public/images/along.png"
import Mem23 from "../../public/images/cdiem.png"
import Mem24 from "../../public/images/ahung.png"
import Mem25 from "../../public/images/atong.png"
import Mem26 from "../../public/images/atu.png"
import Mem27 from "../../public/images/aanh.png"
import Mem28 from "../../public/images/aphuoc.png"
import Left from "../../public/images/left.png";
import Right from "../../public/images/right.png";
import styles from "../../styles/OurteamDetail.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import required modules
function Ourmember() {
  // const rightStyle = {
  //   top: "114%",
  //   left: "52%",
  //   width: "50px",
  //   height: "50px",
  //   background: "#1D3340",
  //   color: "#fff",
  //   border: "none",
  //   outline: "none",
  //   zIndex: 1000,
  // };
  // const LeftStyle = {
  //   top: "114%",
  //   left: "40%",
  //   width: "50px",
  //   height: "50px",
  //   background: "white",
  //   color: "#01519B",
  //   border: "none",
  //   outline: "none",
  // };
  // const properties = {
  //   prevArrow: (
  //     <button style={{ ...rightStyle }}>
  //       <Image src={Right} alt="" />
  //     </button>
  //   ),
  //   nextArrow: (
  //     <button style={{ ...LeftStyle }}>
  //       <Image src={Left} alt="" />
  //     </button>
  //   ),
  // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          dots: true,
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 475,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
        <Slider {...settings} >
            <div className={styles.OurmemberImg}>
              <Image src={Mem1} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem2} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem3} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem4} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem5} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem6} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem7} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem8} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem9} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem10} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem11} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem12} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem13} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem14} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem15} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem16} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem17} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem18} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem19} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem20} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem21} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem22} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem23} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem24} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem25} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem26} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem27} alt="" />
            </div>
            <div className={styles.OurmemberImg}>
              <Image src={Mem28} alt="" />
            </div>
        </Slider>
          </div>
      </div>
    </section>
  );
}

export default Ourmember;
