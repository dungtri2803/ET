import React, { useState } from "react";
import styles from "../../styles/OurserviceDetail.module.scss";
import Navbar from "../Navbar/Navbar.ChangeColor";
import Image from "next/image";
import Img1 from "../../public/images/ccc.svg";
import Primitive from "../../public/images/primitive.png";
import Chart from "../../public/images/chart.png";
import Overview from "../../public/images/ove.png";
import Load from "../../public/images/load.png";
import Marketing from "../../public/images/marketing.png";
import Pay from "../../public/images/pay.png";
import Filter from "../../public/images/filter.png";
import Info from "../../public/images/inf.png";
import Chart2 from "../../public/images/chart2.png";
import Ourcategory from "../OurserviceDetail/Ourcategory";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import OurserviceImg from "../OurserviceDetail/OurserviceImg";
import Ourabout from "../OurserviceDetail/Ourabout";
import Ourproject from "../Ourproject/Ourproject";
import ModalContact from "../ModalContact/ModalContact";
import { motion, Variants } from "framer-motion";
function OurserviceDetail() {
  const [showModal, setShowModal] = useState(false);
  const onLoginFormSubmit = (e: any) => {
    e.preventDefault();
    setShowModal(false);
  };
  const [x, setX] = useState(0);
  return (
    <>
      <section className={styles.OurserviceDetailSection}>
        <div className={styles.OurserviceDetail}>
          <Navbar />
          <div className={styles.OurserviceDetailContent}>
            <div className={styles.OurserviceDetailList}>
              <motion.div className={styles.OurserviceDetailLeft} initial={{ opacity: 0 }}
                  animate={{opacity: 1 }}
                  transition={{ duration: 2 }}>
                <div className={styles.OurserviceDetailLeftDes}>
                  <p>{`OUR SERVICE`}</p>
                </div>
                <div className={styles.OurserviceDetailLeftTitle}>
                  <p>{`We work for customer satisfaction.`}</p>
                </div>
                <div className={styles.OurserviceDetailLeftText}>
                  <p>{`With the desire to provide a comprehensive user experience, ET provides a variety of software services from the first stage to the final product `}</p>
                </div>
                <div className={styles.OurserviceDetailBtn}>
                  <button
                    onClick={() => setShowModal(true)}
                  >{`Contact us`}</button>
                </div>
              </motion.div>
              <div className={styles.OurserviceDetailRight}>
                <motion.div
                  className={styles.OurserviceDetailRightImg1}
                  initial={{ x: -100 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <Image src={Img1} alt="" />
                </motion.div>
                <motion.div className={styles.OurserviceDetailRightImg2} initial={{ x: 100 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }}>
                  <Image src={Primitive} alt="" />
                </motion.div>
                <motion.div className={styles.OurserviceDetailRightImg3} initial={{ x: -100 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }}>
                  <Image src={Chart} alt="" />
                </motion.div>
                <motion.div className={styles.OurserviceDetailRightImg4} initial={{ x: 100 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }}>
                  <Image src={Overview} alt="" />
                </motion.div>
                <motion.div className={styles.OurserviceDetailRightImg5}initial={{ x: -100 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }}>
                  <Image src={Load} alt="" />
                </motion.div>
                <motion.div className={styles.OurserviceDetailRightImg6} initial={{ x: 100 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }}>
                  <Image src={Marketing} alt="" />
                </motion.div>
                <motion.div className={styles.OurserviceDetailRightImg7}initial={{ x: -100 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }} >
                  <Image src={Pay} alt="" />
                </motion.div>
                <motion.div className={styles.OurserviceDetailRightImg8} initial={{ x: -100 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }} >
                  <Image src={Filter} alt="" />
                </motion.div>
                <motion.div className={styles.OurserviceDetailRightImg9} initial={{ x: -100 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }} >
                  <Image src={Info} alt="" />
                </motion.div>
                <motion.div className={styles.OurserviceDetailRightImg10}initial={{ y: 100 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2 }}  >
                  <Image src={Chart2} alt="" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Ourcategory />
      <Ourabout />
      <OurserviceImg />
      <Contact />
      <Footer />
      {showModal && (
        <ModalContact closeModal={setShowModal} CloseE={onLoginFormSubmit} />
      )}
    </>
  );
}

export default OurserviceDetail;
