import React from "react";
import Image from "next/image";
import styles from "../../styles/OurteamDetail.module.scss";
import Fire from "../../public/images/fire.png";
import Team from "../../public/images/teamwork.png";
import Pro from "../../public/images/progess.png";
import Exe from "../../public/images/execution.png";
import Office from "../../public/images/off.png";
function Ourquality() {
  return (
    <section className={styles.OurqualitySection}>
      <div className={styles.Ourquality}>
        <div className={styles.OurqualityContent}>
          <div className={styles.OurqualityDes}>
            <p>{`OUR QUALITY`}</p>
          </div>
          <div className={styles.OurqualityTitle}>
            <h1>{`Let’s See How Creative Work`}</h1>
          </div>
        </div>
        <div className={styles.OurqualityList}>
          <div className={styles.OurqualityLeft}>
            <div className={styles.OurqualityLeftItem}>
              <div className={styles.OurqualityLeftImg}>
                <Image src={Fire} alt="" />
              </div>
              <div className={styles.OurqualityLeftTitle}>
                <h1>{`Passion`}</h1>
                <div className={styles.OurqualityLeftDes}>
                  <p>{`Have passion, strong commitment & focus on results`}</p>
                </div>
              </div>
            </div>
            <div className={styles.OurqualityLeftItem}>
              <div className={styles.OurqualityLeftImg}>
                <Image src={Team} alt="" />
              </div>
              <div className={styles.OurqualityLeftTitle}>
                <h1>{`Teamwork`}</h1>
                <div className={styles.OurqualityLeftDes}>
                  <p>
                    {`Spread the energy, cooperation, support & acceptance of
                  differrences to enrich views instead of conflict`}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.OurqualityLeftItem}>
              <div className={styles.OurqualityLeftImg}>
                <Image src={Pro} alt="" />
              </div>
              <div className={styles.OurqualityLeftTitle}>
                <h1>{`Progressiveness`}</h1>
                <div className={styles.OurqualityLeftDes}>
                  <p>{`Relentlessly learn, strive and grow`}</p>
                </div>
              </div>
            </div>
            <div className={styles.OurqualityLeftItem}>
              <div className={styles.OurqualityLeftImg}>
                <Image src={Exe} alt="" />
              </div>
              <div className={styles.OurqualityLeftTitle}>
                <h1>{`Execution`}</h1>
                <div className={styles.OurqualityLeftDes}>
                  <p>
                    {`Always have the next steps for execution planning & direction
                  as well as achieving goals`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.OurqualityRight}>
            <div className={styles.OurqualityRightImg}>
              <Image src={Office} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourquality;
