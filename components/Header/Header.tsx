import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import Img1 from "../../public/images/ccc.svg";
import Primitive from "../../public/images/primitive.png";
import Chart from "../../public/images/chart.png";
import Overview from "../../public/images/active.png";
import Load from "../../public/images/load.png";
import Marketing from "../../public/images/marketing.png";
import Pay from "../../public/images/pay.png";
import Filter from "../../public/images/filter.png";
import Info from "../../public/images/inf.png";
import Chart2 from "../../public/images/chart2.png";
import Facebook from "../../public/images/facebook.png";
import Inlinked from "../../public/images/in.png";
import Twitter from "../../public/images/tw.png";
import styles from "../../styles/Header.module.scss";
import { motion } from "framer-motion";
import NavBar from "../../components/Navbar/Navbar";
function Header() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div className={styles.navbar}>
            <NavBar />
          </div>

          <motion.div
            className={styles.headerContent}
            initial={{ opacity: 0, scale: 0.75, x: -200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              default: {
                duration: 4,
                delay: 0.25,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <div className={styles.headerContentTitle}>
              <h1>{`We help you find solutions through design`} </h1>
            </div>
            <div className={styles.headerContentDes}>
              <p>
                {`We deliver the highest quality products and service in digital
                design and innovation`}
              </p>
            </div>
            <div className={styles.headerContentBtn}>
              <button>{`How it Works`}</button>
            </div>
          </motion.div>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.HeaderImages}>
            <motion.div
              className={styles.headerImgs}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 4,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Image src={Img1} alt="" />
            </motion.div>
            <motion.div
              className={styles.headerImgs2}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 4,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Image src={Primitive} alt="" />
            </motion.div>
            <motion.div
              className={styles.headerImgs3}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 4,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Image src={Chart} alt="" />
            </motion.div>
            <motion.div
              className={styles.headerImgs4}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 4,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Image src={Overview} alt="" />
            </motion.div>
            <motion.div
              className={styles.headerImgs5}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 4,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Image src={Load} alt="" />
            </motion.div>
            <motion.div
              className={styles.headerImgs6}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 4,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Image src={Marketing} alt="" />
            </motion.div>
            <motion.div
              className={styles.headerImgs7}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Image src={Pay} alt="" />
            </motion.div>
            <motion.div
              className={styles.headerImgs8}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Image src={Filter} alt="" />
            </motion.div>
            <motion.div
              className={styles.headerImgs9}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 4,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Image src={Info} alt="" />
            </motion.div>
            <motion.div
              className={styles.headerImgs10}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 4,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Image src={Chart2} alt="" />
            </motion.div>
          </div>
        </div>
        <motion.div
          className={styles.headerContentIcons}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 4,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className={styles.headerContentIcon}>
            <div className={styles.headerContentIconFb}>
              <Image src={Facebook} alt="" />
            </div>
            <div className={styles.headerContentIconIn}>
              <Image src={Inlinked} alt="" />
            </div>
            <div className={styles.headerContentIconTw}>
              <Image src={Twitter} alt="" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Header;
