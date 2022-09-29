import React,{useState} from "react";
import Image from "next/image";
import styles from "../../styles/Career.module.scss";
import { motion, Variants } from "framer-motion";
import Particles from "react-tsparticles";
import Navbar from "../Navbar/Navbar";
import CareerCategory from "../Career/CareerCategory";
import CareerDes from "../Career/CareerDes"
import CareerValues from "../Career/CareerValues"
import CareerJob from "../Career/CareerJob"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import Bg1 from "../../public/images/bgcar.png";
import Bg2 from "../../public/images/bgcar1.png";
import Bg3 from "../../public/images/bgcar2.png";
import Bg4 from "../../public/images/bgcar3.png";
import Bg5 from "../../public/images/bgcar5.png";
import ModalContact from "../ModalContact/ModalContact"
function Carerr() {
  const [showModal, setShowModal] = useState(false);
  const onLoginFormSubmit = (e:any) => {
    e.preventDefault();
    setShowModal(false);
  };
  return (
    <>
      <section id="#carerr" className={styles.careerSection}>
        <div className={styles.career}>
          <Navbar />
          <div className={styles.careerContent}>
            <div className={styles.careerList}>
              <div className={styles.careerLeft}>
                <div className={styles.careerLeftContent}>
                  <div className={styles.careerLeftDes}>
                    <p>{`CAREER`}</p>
                  </div>
                  <div className={styles.careerLeftTitle}>
                    <p>{`Join our amazing team.`}</p>
                  </div>
                  <div className={styles.careerLeftTi}>
                    <p>{`Life is filled with challenges and difficulties. Let’s make ExcelTech as home by living with Caring and Respect.`}</p>
                  </div>
                  <div className={styles.careerLeftBtn}>
                    <button  onClick = {() => setShowModal(true)}>{`Contact us`}</button>
                  </div>
                </div>
              </div>
              <Particles
                id="tsparticles"
                className={styles.Particles}
                url="/particles.json"
              />
              <div className={styles.careerRight}>
                <div className={styles.careerRightContent}>
                  <div className={styles.careerRightImg1}>
                    <Image src={Bg1} alt="" />
                  </div>
                  <div className={styles.careerRightImg2}>
                    <Image src={Bg2} alt="" />
                  </div>
                  <div className={styles.careerRightImg3}>
                    <Image src={Bg3} alt="" />
                  </div>
                  <div className={styles.careerRightImg4}>
                    <Image src={Bg4} alt="" />
                  </div>
                  <div className={styles.careerRightImg5}>
                    <Image src={Bg5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CareerCategory />
      <CareerDes />
      <CareerValues />
      <CareerJob />
      <Contact />
      <Footer />
      {showModal && <ModalContact closeModal = {setShowModal} CloseE = {onLoginFormSubmit}/>}
    </>
  );
}

export default Carerr;
