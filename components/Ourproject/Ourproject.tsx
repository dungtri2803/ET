import React from "react";
import Image from "next/image";
import styles from "../../styles/Ourproject.module.scss";
import Bh from "../../public/images/bt.png";
import Logistic from "../../public/images/logis.png";
import Farm from "../../public/images/farm.png";
import Beverage from "../../public/images/be.png";
import { motion, Variants } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Link from "next/link"
function Ourproject() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1200px)",
  });

  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        bounce: 0.4,
        duration: 1,
        times: 1,
      },
    },
  };

  const cardVariantsImg1: Variants = {
    offscreen: {
      opacity: 0,
      rotate: -10,
    },
    onscreen: {
      opacity: 1,
      rotate: [0, 10, 0],
      transition: {
        ease: "easeInOut",
        bounce: 0.4,
        duration: 1,
        times: 1,
      },
    },
  };
  const cardVariantsBtn: Variants = {
    offscreen: {
      opacity: 0,
      x: -200,
    },
    onscreen: {
      opacity: 1,
      x: [0, 100, -50, 0],
      transition: {
        ease: "easeInOut",
        bounce: 0.4,
        duration: 2,
        times: 1,
      },
    },
  };
  return (
    <div>
      {isDesktopOrLaptop && (
        <section id="#Ourproject" className={styles.OurprojectSection}>
          <div className={styles.Ourproject}>
            <motion.div
              className={styles.OurprojectContent}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <div className={styles.OurprojectDes}>
                <p>{`OUR PROJECTS`}</p>
              </div>
              <div className={styles.OurprojectTitle}>
                <h1>{`Our amazing work with various Industry`}</h1>
              </div>
            </motion.div>
            <div className={styles.OurprojectList}>
              <div className={styles.OurprojectItem}>
                <div className={styles.OurprojectItemContent}>
                  <motion.div
                    className={styles.OurprojectItemRelative}
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      ease: "easeInOut",
                      times: 3,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <div className={styles.OurprojectItemDes}>
                      <p>{`IPCC & CRM`}</p>
                    </div>
                    <div className={styles.OurprojectItemTitle}>
                      <h1>{`Beauty & Healthcare`}</h1>
                    </div>
                  </motion.div>
                  <motion.div
                    className={styles.OurprojectItemImage}
                    variants={cardVariantsImg1}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.2, 0.2, 1],
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <Image src={Bh} alt="" />
                  </motion.div>
                </div>
              </div>
              <div className={styles.OurprojectItem}>
                <div className={styles.OurprojectItemContent}>
                  <motion.div
                    className={styles.OurprojectItemRelative}
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      ease: "easeInOut",
                      times: 3,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <div className={styles.OurprojectItemDes}>
                      <p>{`MANAGED SERVICES`}</p>
                    </div>
                    <div className={styles.OurprojectItemTitle}>
                      <h1>{`Logistics`}</h1>
                    </div>
                  </motion.div>
                  <motion.div
                    className={styles.OurprojectItemImage}
                    variants={cardVariantsImg1}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.2, 0.2, 1],
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <Image src={Logistic} alt="" />
                  </motion.div>
                </div>
              </div>
              <div className={styles.OurprojectItem}>
                <div className={styles.OurprojectItemContent}>
                  <motion.div
                    className={styles.OurprojectItemRelative}
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      ease: "easeInOut",
                      times: 3,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <div className={styles.OurprojectItemDes}>
                      <p>{`IPCC & CRM`}</p>
                    </div>
                    <div className={styles.OurprojectItemTitle}>
                      <h1>{`Sales & Digifarm`}</h1>
                    </div>
                  </motion.div>
                  <motion.div
                    className={styles.OurprojectItemImage}
                    variants={cardVariantsImg1}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.2, 0.2, 1],
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <Image src={Farm} alt="" />
                  </motion.div>
                </div>
                <motion.div
                  className={styles.OurprojectBtn}
                  variants={cardVariantsBtn}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <button>{`EXPLORE ALL PROJECT`}</button>
                </motion.div>
              </div>
              <div className={styles.OurprojectItem}>
                <div className={styles.OurprojectItemContent}>
                  <motion.div
                    className={styles.OurprojectItemRelative}
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      ease: "easeInOut",
                      times: 3,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <div className={styles.OurprojectItemDes}>
                      <p>{`ECOMMERCE`}</p>
                    </div>
                    <div className={styles.OurprojectItemTitle}>
                      <h1>{`Beverage`}</h1>
                    </div>
                  </motion.div>
                  <motion.div
                    className={styles.OurprojectItemImage}
                    variants={cardVariantsImg1}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.2, 0.2, 1],
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <Image src={Beverage} alt="" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Ourproject;
