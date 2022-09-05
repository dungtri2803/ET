import React from "react";
import styles from "../../styles/OurprojectDetail.module.scss";
import Image from "next/image";
import P1 from "../../public/images/p1.png";
import P2 from "../../public/images/v.png";
import P3 from "../../public/images/p3.png";
import P4 from "../../public/images/p4.png";
import P5 from "../../public/images/p5.png";
import P6 from "../../public/images/p6.png";
function OurprojectImgDetail() {
  return (
    <section className={styles.OurprojectImgDetailSection}>
      <div className={styles.OurprojectImgDetail}>
        <div className={styles.OurprojectImgDetailContent}>
          <div className={styles.OurprojectImgDetailDes}>
            <p>{`OUR PROJECT`}</p>
          </div>
          <div className={styles.OurprojectImgDetailTitle}>
            <h1>{`Explore some of our recent projects`}</h1>
          </div>
        </div>
        <div className={styles.OurprojectImgDetailList}>
          <div className={styles.OurprojectImgDetaiLeft}>
            <div className={styles.OurprojectImgDetailItemFull}>
              <Image src={P1} alt="" />
            </div>
            <div className={styles.OurprojectImgDetailItemHalf}>
              <div className={styles.OurprojectImgDetailItem1}>
                <Image src={P2} alt="" />
              </div>
              <div className={styles.OurprojectImgDetailItem2}>
                <Image src={P3} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.OurprojectImgDetailRight}>
            <div className={styles.OurprojectImgDetailHalf}>
              <div className={styles.OurprojectImgDetailItem1}>
                <Image src={P4} alt="" />
              </div>
              <div className={styles.OurprojectImgDetailItem2}>
                <Image src={P5} alt="" />
              </div>
            </div>
            <div className={styles.OurprojectImgDetailItemFull}>
              <Image src={P6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurprojectImgDetail;
