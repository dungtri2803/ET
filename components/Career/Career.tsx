import React from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "../../styles/Career.module.scss";
import Slide1 from "../../public/images/slide1.png";
import Slide2 from "../../public/images/slide2.png";
import Left from "../../public/images/left.png";
import Right from "../../public/images/right.png";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, Variants } from "framer-motion";

function Carerr() {
  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
      x: -200,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        bounce: 0.4,
        duration: 1,
        times: 5,
      },
    },
  };
  const cardVariantsRight: Variants = {
    offscreen: {
      opacity: 1,
      x: -200,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        bounce: 0.4,
        duration: 1,
        times: 1,
      },
    },
  };
  const rightStyle = {
    top: "114%",
    left: "52%",
    width: "50px",
    height: "50px",
    background: "#1D3340",
    color: "#fff",
    border: "none",
    outline: "none",
    zIndex: 1000,
  };
  const LeftStyle = {
    top: "114%",
    left: "40%",
    width: "50px",
    height: "50px",
    background: "white",
    color: "#01519B",
    border: "none",
    outline: "none",
  };
  const properties = {
    prevArrow: (
      <button style={{ ...rightStyle }}>
        <Image src={Right} alt="" />
      </button>
    ),
    nextArrow: (
      <button style={{ ...LeftStyle }}>
        <Image src={Left} alt="" />
      </button>
    ),
  };
  return (
    <section id="#carerr" className={styles.careerSection}>
      <motion.div className={styles.career} variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}>
        <div className={styles.careerList}>
          <div className={styles.careerItemLeft}>
            <div
              className={styles.careerContent}
              
            >
              <div className={styles.careerDes}>
                <p>{`CAPABILITIES`}</p>
              </div>
              <div className={styles.careerTitle}>
                <h1>{`ExcelTech deliver a wide range of digital products`}</h1>
              </div>
              <div className={styles.careerlet}>
                <p>
                  {`ExcelTech is a group of experienced, highly skilled, and
                  passionate professionals in online digital content products
                  and services. We support start-ups, small and medium-size
                  businesses who are tranforming their ideas into high quality
                  products and sustainable businesses.`}
                  <br />
                  <br />
                  {`We also provide brand promotion services through online media
                  and social networks to enhance sales and promotion for new
                  products effectively. Finally, we provide maintenance services
                  of online digital products and infrastructure with high
                  performance and a secure data center on global scale.`}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.careerItemRight} >
            <div className={styles.careerSlider} >
              <Slide {...properties}>
                <div className={styles.eachSlideEffect}>
                  <Image src={Slide1} alt="" />
                </div>
                <div className={styles.eachSlideEffect}>
                  <Image src={Slide2} alt="" />
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Carerr;
