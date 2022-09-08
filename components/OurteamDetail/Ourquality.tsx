import React from "react";
import Image from "next/image";
import styles from "../../styles/OurteamDetail.module.scss";
import Fire from "../../public/images/pass.png";
import Team from "../../public/images/teamwork.png";
import Pro from "../../public/images/progess.png";
import Exe from "../../public/images/execution.png";
import Office from "../../public/images/off.png";
import Ourqua from "../../public/images/ouq.png";
import Ourqua1 from "../../public/images/oql.png";
import Excel from "../../public/images/ex.png";
import Img11 from "../../public/images/im11.png";

function Ourquality() {
  return (
    <section className={styles.OurqualitySection}>
      <div className={styles.Ourquality}>
        <div className={styles.OurqualityList}>
          <div className={styles.OurqualityLeft}>
            <div className={styles.OurqualityLeftImg}>
              <Image src={Ourqua} alt="" />
            </div>
          </div>
          <div className={styles.OurqualityRight}>
            <div className={styles.OurqualityRightIcon}>
              <Image src={Excel} alt="" />
            </div>
            <div className={styles.OurqualityRightContent}>
              <div className={styles.OurqualityDes}>
                <p>{`OUR QUALITY`}</p>
              </div>
              <div className={styles.OurqualityTitle}>
                <p>{`Let’s See How Creative Work`}</p>
              </div>
            </div>
            <div className={styles.OurqualityRightItem}>
              <div className={styles.OurqualityRightImg}>
                <Image src={Fire} alt="" />
              </div>
              <div className={styles.OurqualityRightTitle}>
                <p>{`Passion`}</p>
                <div className={styles.OurqualityRightDes}>
                  <p>{`Have passion, strong commitment & focus on results`}</p>
                </div>
              </div>
            </div>
            <div className={styles.OurqualityRightItem}>
              <div className={styles.OurqualityRightImg}>
                <Image src={Team} alt="" />
              </div>
              <div className={styles.OurqualityRightTitle}>
                <p>{`Teamwork`}</p>
                <div className={styles.OurqualityRightDes}>
                  <p>
                    {`Spread the energy, cooperation, support & acceptance of
                  differrences to enrich views instead of conflict`}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.OurqualityRightItem}>
              <div className={styles.OurqualityRightImg}>
                <Image src={Pro} alt="" />
              </div>
              <div className={styles.OurqualityRightTitle}>
                <p>{`Progressiveness`}</p>
                <div className={styles.OurqualityRightDes}>
                  <p>{`Relentlessly learn, strive and grow`}</p>
                </div>
              </div>
            </div>
            <div className={styles.OurqualityRightItem}>
              <div className={styles.OurqualityRightImg}>
                <Image src={Exe} alt="" />
              </div>
              n
              <div className={styles.OurqualityRightTitle}>
                <p>{`Execution`}</p>
                <div className={styles.OurqualityRightDes}>
                  <p>
                    {`Always have the next steps for execution planning & direction
                  as well as achieving goals`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourquality;
