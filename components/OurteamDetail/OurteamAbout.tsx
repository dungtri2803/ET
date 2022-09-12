import React,{useState} from "react";
import Image from "next/image";
import styles from "../../styles/OurteamDetail.module.scss";
import Reg1 from "../../public/images/reg1.png";
import A1 from "../../public/images/a1.png";
import A2 from "../../public/images/a2.png";
import A3 from "../../public/images/a3.png";
import A4 from "../../public/images/a4.png";
import Reg2 from "../../public/images/reg2.png";
import Reg3 from "../../public/images/reg3.png";
import Reg4 from "../../public/images/reg4.png";
import Eles1 from "../../public/images/els.png";
import Eles2 from "../../public/images/els1.png";


function OurteamAbout() {
  const [showInfo, setShowInfo] = useState(false);
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
  const [showInfo4, setShowInfo4] = useState(false);
    const [showInfo5, setShowInfo5] = useState(false);
  return (
    <section className={styles.OurteamAboutSection}>
      <div className={styles.OurteamAbout}>
        <div className={styles.OurteamAboutContent}>
          <div className={styles.OurteamAboutDes}>
            <p>{`OUR TEAM`}</p>
          </div>
          <div className={styles.OurteamAboutTitle}>
            <h1>{`Let’s See How Creative Work`}</h1>
          </div>
        </div>
        <div className={styles.OurteamAboutList}>
          <div className={styles.OurteamAboutLeft}>
            <div className={showInfo  ? styles.OurteamAboutLeftRegBg : styles.OurteamAboutLeftReg  }>
              <div className={styles.OurteamAboutLeftTitle}>
                <p onClick = {() =>setShowInfo(!showInfo)}>{`Sales & Marketing`}</p>
              </div>
              <div className={styles.OurteamAboutLeftDes}>
                {showInfo && <p>
                 {` Directly access to customers and understand the data related . From there, the Marketing department can make clearer and more specific plans to boost sales.`}
                </p>}
              </div>
            </div>
            <div className={showInfo1  ? styles.OurteamAboutLeftRegBg : styles.OurteamAboutLeftReg  }>
              <div className={styles.OurteamAboutLeftTitle}>
                <p onClick = {() =>setShowInfo1(!showInfo1)}>{`Operation`}</p>
              </div>
              <div className={styles.OurteamAboutLeftDes}>
                {showInfo1 && <p>
                 {`Guide customers to easily use the software. Moreover,  coordinate with related departments to make new plans and increase business efficiency`}
                </p>}
              </div>
            </div>
            <div className={showInfo2  ? styles.OurteamAboutLeftRegBg : styles.OurteamAboutLeftReg  }>
              <div className={styles.OurteamAboutLeftTitle}>
                <p onClick = {() =>setShowInfo2(!showInfo2)}>{`Graphic Design`}</p>
              </div>
              <div className={styles.OurteamAboutLeftDes}>
                {showInfo2 && <p>
                 {`Build company brand, create ideas for product advertisements and support for the company's website and social networks`}
                </p>}
              </div>
            </div>
            <div className={showInfo3  ? styles.OurteamAboutLeftRegBg : styles.OurteamAboutLeftReg  }>
              <div className={styles.OurteamAboutLeftTitle}>
                <p onClick = {() =>setShowInfo3(!showInfo3)}>{`UI/UX Design`}</p>
              </div>
              <div className={styles.OurteamAboutLeftDes}>
                {showInfo3 && <p>
                 {`From business requirements, sketching layouts and styling for software interfaces. Build prototypes to test and develope. `}
                </p>}
              </div>
            </div>
            <div className={showInfo4  ? styles.OurteamAboutLeftRegBg : styles.OurteamAboutLeftReg  }>
              <div className={styles.OurteamAboutLeftTitle}>
                <p onClick = {() =>setShowInfo4(!showInfo4)}>{`Developement`}</p>
              </div>
              <div className={styles.OurteamAboutLeftDes}>
                {showInfo4 && <p>
                 {`Turn designs into usable software through lines of code. Support optimal surfing speed and build intelligent information system`}
                </p>}
              </div>
            </div>
            <div className={showInfo5  ? styles.OurteamAboutLeftRegBg : styles.OurteamAboutLeftReg  }>
              <div className={styles.OurteamAboutLeftTitle}>
                <p onClick = {() =>setShowInfo5(!showInfo5)}>{`Quality Control`}</p>
              </div>
              <div className={styles.OurteamAboutLeftDes}>
                {showInfo5 && <p>
                 {`Verify and ensure that the delivered software conforms to the design. Support departments to complete products on time`}
                </p>}
              </div>
            </div>
            <div className={styles.OurteamAboutLeftBtn}>
              <button>{`Join us`}</button>
            </div>
          </div>
          <div className={styles.OurteamAboutRight}>
          <div className={styles.OurteamAboutRightImg10}>
              <Image src={Eles1} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg9}>
              <Image src={Eles1} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg2}>
              <Image src={A1} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg3}>
              <Image src={A2} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg4}>
              <Image src={A3} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg5}>
              <Image src={A4} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg6}>
              <Image src={Reg2} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg7}>
              <Image src={Reg3} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg8}>
              <Image src={Reg4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurteamAbout;
