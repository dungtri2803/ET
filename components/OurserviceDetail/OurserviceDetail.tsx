import React from "react";
import styles from "../../styles/OurserviceDetail.module.scss";
import Navbar from "../Navbar/Navbar.ChangeColor"
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
import Ourproject from "../Ourproject/Ourproject"
function OurserviceDetail() {
  return (
    <>
      <section className={styles.OurserviceDetailSection}>
        <div className={styles.OurserviceDetail}>
          <Navbar />
          <div className={styles.OurserviceDetailContent}>
            <div className={styles.OurserviceDetailList}>
              <div className={styles.OurserviceDetailLeft}>
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
                  <button>{`Contact us`}</button>
                </div>
              </div>
              <div className={styles.OurserviceDetailRight}>
                <div className={styles.OurserviceDetailRightImg1}>
                  <Image src={Img1} alt="" />
                </div>
                <div className={styles.OurserviceDetailRightImg2}>
                  <Image src={Primitive} alt="" />
                </div>
                <div className={styles.OurserviceDetailRightImg3}>
                  <Image src={Chart} alt="" />
                </div>
                <div className={styles.OurserviceDetailRightImg4}>
                  <Image src={Overview} alt="" />
                </div>
                <div className={styles.OurserviceDetailRightImg5}>
                  <Image src={Load} alt="" />
                </div>
                <div className={styles.OurserviceDetailRightImg6}>
                  <Image src={Marketing} alt="" />
                </div>
                <div className={styles.OurserviceDetailRightImg7}>
                  <Image src={Pay} alt="" />
                </div>
                <div className={styles.OurserviceDetailRightImg8}>
                  <Image src={Filter} alt="" />
                </div>
                <div className={styles.OurserviceDetailRightImg9}>
                  <Image src={Info} alt="" />
                </div>
                <div className={styles.OurserviceDetailRightImg10}>
                  <Image src={Chart2} alt="" />
                </div>
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
    </>
  );
}

export default OurserviceDetail;
