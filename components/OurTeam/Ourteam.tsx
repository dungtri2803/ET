import React from "react";
import styles from "../../styles/Ourteam.module.scss";
import Image from "next/image";
import Pc from "../../public/images/Pc.png";
import Work from "../../public/images/work.png";
import Plan from "../../public/images/plan.png";
import Team from "../../public/images/team.png";
import El1 from "../../public/images/Ellipse 1.png";
import El2 from "../../public/images/Ellipse 2.png";
import El3 from "../../public/images/Ellipse 3.png";
import El4 from "../../public/images/Ellipse 4.png";
import El5 from "../../public/images/Ellipse 5.png";
import Reg1 from "../../public/images/re1.png";
import Reg2 from "../../public/images/re2.png";
import Reg3 from "../../public/images/re3.png";
import { motion,Variants } from "framer-motion";


function Ourteam() {
  const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      bounce: 0.4,
      duration: 2,
      times:1,
    }
  }
};
  return (
    <section id="#ourteam" className={styles.ourteamSection}>
      <div className={styles.ourteam}>
        <div className={styles.Elipse}>
          <motion.div
            className={styles.ourteamImage}
            animate={{  
              scale: [0.75, 1, 1, 0.75, 0.75],
              rotate: [0, 0, 20, 10, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <Image src={Pc} alt="" />
          </motion.div>
          <motion.div
            className={styles.ourteamImage}
            animate={{
              scale: [0.75, 1, 1, 0.75, 0.75],
              rotate: [0, 0, 20, 10, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <Image src={Work} alt="" />
          </motion.div>
          <motion.div
            className={styles.ourteamImage}
            animate={{
              scale: [0.75, 1, 1, 0.75, 0.75],
              rotate: [0, 0, 20, 10, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <Image src={Plan} alt="" />
          </motion.div>
          <motion.div
            className={styles.ourteamImage}
            animate={{
              scale: [0.75, 1, 1, 0.75, 0.75],
              rotate: [0, 0, 20, 10, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <Image src={Team} alt="" />
          </motion.div>
        </div>
        <div className={styles.ourteamIcons}>
          <div className={styles.ourteamIcon}>
            <Image src={Reg1} alt="" />
          </div>
          <div className={styles.ourteamIcon}>
            <Image src={Reg2} alt="" />
          </div>
          <div className={styles.ourteamIcon}>
            <Image src={Reg3} alt="" />
          </div>
        </div>
        <motion.div variants={cardVariants}
          className={styles.content}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className={styles.outeamDes}>
            <p>{` OUR STORY`}</p>
          </div>
          <div className={styles.ourteamTitle}>
            <h1>{`Who we are?`}</h1>
          </div>
          <div className={styles.ourteamContent}>
            <h1>
              {`ExcelTech with an experienced management team, highly skilled,
              dynamic and creative staff who are dedicated to implement the
              solution to support business administration is more effective when
              applying the 4.0 technology platform.`}
            </h1>
          </div>
          <div className={styles.ourteamBtn}>
            <button>{`Contact us `}</button>
          </div>
        </motion.div>
        <div className={styles.outeamEclipses}>
          <div className={styles.outeamEclipse}>
            <Image src={El5} alt="" />
          </div>
          <div className={styles.outeamEclipse}>
            <Image src={El4} alt="" />
          </div>
          <div className={styles.outeamEclipse}>
            <Image src={El3} alt="" />
          </div>
          <div className={styles.outeamEclipse}>
            <Image src={El2} alt="" />
          </div>
          <div className={styles.outeamEclipse}>
            <Image src={El1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourteam;
