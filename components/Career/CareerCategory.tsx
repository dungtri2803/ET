import React from "react";
import Image from "next/image";
import styles from "../../styles/Career.module.scss";
import Os1 from "../../public/images/os1.png";
import Os2 from "../../public/images/os2.png";
import Os3 from "../../public/images/star.png";
import Bg1 from "../../public/images/ex1.png";

function CareerCategory() {
  return (
    <section className={styles.CareerCategorySection}>
      <div className={styles.CareerCategory}>
        <div className={styles.CareerCategoryImg}>
          <Image src={Bg1} alt="" />
        </div>
        <div className={styles.CareerCategoryContent}>
          <div className={styles.CareerCategoryDes}>
            <p>{`Our category`}</p>
          </div>
          <div className={styles.CareerCategoryTitle}>
            <p>{`If you’re creative, passionate and driven to do great work, we offer:`}</p>
          </div>
        </div>
        <div className={styles.CareerCategoryList}>
          <div className={styles.CareerCategoryItem}>
            <div className={styles.CareerImg}>
              <Image src={Os1} alt="" />
            </div>
            <div className={styles.CareerTitle}>
              <p>{`A growth mindset`}</p>
            </div>
            <div className={styles.CareerDes}>
              <p>{`We’re dynamic, disruptive and get things done. If you enjoy a fast-moving yet friendly culture, get in touch.`}</p>
            </div>
          </div>
          <div className={styles.CareerCategoryItem}>
            <div className={styles.CareerImg}>
              <Image src={Os2} alt="" />
            </div>
            <div className={styles.CareerTitle}>
              <p>{`A world-class product`}</p>
            </div>
            <div className={styles.CareerDes}>
              <p>{`Our partners love our product – and we just keep making it better. Our plans for the future will blow your mind.`}</p>
            </div>
          </div>
          <div className={styles.CareerCategoryItem}>
            <div className={styles.CareerImg}>
              <Image src={Os3} alt="" />
            </div>
            <div className={styles.CareerTitle}>
              <p>{`Global impact`}</p>
            </div>
            <div className={styles.CareerDes}>
              <p>{`To be a global digital service and development company by 2025.​`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerCategory;
