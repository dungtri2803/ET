import React from "react";
import Image from "next/image";
import styles from "../../styles/OurserviceDetail.module.scss";
import Oabout1 from "../../public/images/oabout1.png";
import Oabout2 from "../../public/images/oabout2.png";
import Oabout3 from "../../public/images/oabout3.png";

function Ourabout() {
  return (
    <section className={styles.OuraboutSection}>
      <div className={styles.Ourabout}>
        <div className={styles.OuraboutContent}>
          <p>{`Why Hire Us?`}</p>
        </div>
        <div className={styles.OuraboutList}>
          <div className={styles.OuraboutItem}>
            <div className={styles.OuraboutImg}>
              <Image src={Oabout1} alt="" />
            </div>
            <div className={styles.OuraboutTitle}>
              <p>{`Always on time`}</p>
            </div>
            <div className={styles.OuraboutDes}>
              <p>{`Always complete the job on time and more than expected`}</p>
            </div>
          </div>
          <div className={styles.OuraboutItem}>
            <div className={styles.OuraboutImg}>
              <Image src={Oabout2} alt="" />
            </div>
            <div className={styles.OuraboutTitle}>
              <p>{`Effective - Straighforward`}</p>
            </div>
            <div className={styles.OuraboutDes}>
              <p>{`Nurturing unique ideas that bring new value to Customers.​`}</p>
            </div>
          </div>
          <div className={styles.OuraboutItem}>
            <div className={styles.OuraboutImg}>
              <Image src={Oabout3} alt="" />
            </div>
            <div className={styles.OuraboutTitle}>
              <p>{`Clear - Perfect - Scaleable`}</p>
            </div>
            <div className={styles.OuraboutDes}>
              <p>{`Strive for perfection in everything you do.​`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourabout;
