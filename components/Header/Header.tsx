import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import Particles from "react-tsparticles";
import Bg2 from "../../public/images/bg2.png";
import styles from "../../styles/Header.module.scss";
import Navbar from "../Navbar/Navbar";
import CountUp from 'react-countup';
import { useCountUp } from 'react-countup';
function Header() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <section className={styles.HeaderSection}>
      <div className={styles.Header}>
        <Navbar />
        <motion.div className={styles.headerContent} initial={{ opacity: 0 }}  transition={{ duration: 2 }}
      animate={{ opacity: 1 }}>
          <div className={styles.headerTitle}>
            <p>{`We help you find solutions through design `}</p>
          </div>
          <div className={styles.headerDes}>
            <p>{`We deliver the highest quality products and service in digital design and innovation `}</p>
          </div>
          <div className={styles.headerContentList}>
            <div className={styles.headerContentItem}>
              <div className={styles.headerContentItemNum}>
                <h1><CountUp end ={8}/>{`+`}</h1>
              </div>
              <div className={styles.headerContentItemText}>
                <p>{`Amazing Teams`}</p>
              </div>
            </div>
            <div className={styles.headerContentItem}>
              <div className={styles.headerContentItemNum}>
                
                <h1><CountUp end ={30}/></h1>
              </div>
              <div className={styles.headerContentItemText}>
                <p>{`Excellent Members`}</p>
              </div>
            </div>
            <div className={styles.headerContentItem}>
              <div className={styles.headerContentItemNum}>
                <h1><CountUp end ={20}/>{`+`}</h1>
              </div>
              <div className={styles.headerContentItemText}>
                <p>{`Exclusive Projects`}</p>
              </div>
            </div>
            <div className={styles.headerContentItem}>
              <div className={styles.headerContentItemNum}>
                <h1><CountUp end ={15}/>{`+`}</h1>
              </div>
              <div className={styles.headerContentItemText}>
                <p>{`Satisfied customer`}</p>
              </div>
            </div>
          </div>
          <Particles
            id="tsparticles"
            className={styles.Particles}
            url="/particles.json"
          />
        </motion.div>

        <motion.div className={styles.headerImg} initial={{ opacity: 0 }}  transition={{ duration: 2 }}
      animate={{ opacity: 1 }}>
          <Image src={Bg2} alt="" />
        </motion.div>
      </div>
    </section>
  );
}

export default Header;
