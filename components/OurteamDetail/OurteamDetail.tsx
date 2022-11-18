import Image from "next/image";
import { useState } from "react";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Ourmember from "../../components/OurteamDetail/Ourmember";
import Ourquality from "../../components/OurteamDetail/Ourquality";
import OurteamAbout from "../../components/OurteamDetail/OurteamAbout";
import Img1 from "../../public/images/grellipse.png";
import Img2 from "../../public/images/u1.png";
import Img10 from "../../public/images/u12.png";
import Img3 from "../../public/images/u2.png";
import Img4 from "../../public/images/u3.png";
import Img5 from "../../public/images/u4.png";
import Img6 from "../../public/images/u5.png";
import Img7 from "../../public/images/u6.png";
import Img8 from "../../public/images/u7.png";
import Img9 from "../../public/images/u8.png";
import styles from "../../styles/OurteamDetail.module.scss";
import ModalContact from "../ModalContact/ModalContact";
import Navbar from "../Navbar/Navbar.ChangeColor";
import { motion, Variants } from "framer-motion";
function OurteamDetail() {
  const [showModal, setShowModal] = useState(false);
  const onLoginFormSubmit = (e: any) => {
    e.preventDefault();
    setShowModal(false);
  };
  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        bounce: 0.1,
        duration: 2,
        times: 1,
      },
    },
  };
  return (
    <>
      <section id="#OurteamDetail" className={styles.OurteamDetailSection}>
        <div className={styles.OurteamDetail}>
          <Navbar />
          <motion.div
            className={styles.headerContent}
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className={styles.headerContentList}>
              <div className={styles.headerContentLeft}>
                <div className={styles.ourteamTitle}>
                  <p>{`OUR TEAM`}</p>
                </div>
                <div className={styles.ourteamDes}>
                  <p>{`The creative crew behind ExcelTech`}</p>
                </div>
                <div className={styles.ourteamText}>
                  <p>{`Exceltech builds a sociable, united team to successfully complete the assigned work and enhance the value of each individual.`}</p>
                </div>
                <div className={styles.ourteamBtn}>
                  <button
                    onClick={() => setShowModal(true)}
                  >{`Contact us`}</button>
                </div>
              </div>
              <div className={styles.headerContentRight}>
                <div className={styles.backGroundList}>
                  <div className={styles.Img1}>
                    <Image src={Img1} alt="" />
                  </div>
                  <div className={styles.Img2}>
                    <Image src={Img2} alt="" />
                  </div>
                  <div className={styles.Img3}>
                    <Image src={Img3} alt="" />
                  </div>
                  <div className={styles.Img4}>
                    <Image src={Img4} alt="" />
                  </div>
                  <div className={styles.Img5}>
                    <Image src={Img5} alt="" />
                  </div>
                  <div className={styles.Img6}>
                    <Image src={Img6} alt="" />
                  </div>
                  <div className={styles.Img7}>
                    <Image src={Img7} alt="" />
                  </div>
                  <div className={styles.Img8}>
                    <Image src={Img8} alt="" />
                  </div>
                  <div className={styles.Img9}>
                    <Image src={Img9} alt="" />
                  </div>
                  <div className={styles.Img10}>
                    <Image src={Img10} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Ourquality />
      <Ourmember />
      <OurteamAbout />
      <Contact />
      <Footer />
      {showModal && (
        <ModalContact closeModal={setShowModal} CloseE={onLoginFormSubmit} />
      )}
    </>
  );
}

export default OurteamDetail;
