import React,{useState} from "react";
import Image from "next/image";
import styles from "../../styles/OurteamDetail.module.scss";
import Logo from "../../public/images/logo.png";
import Stroke from "../../public/images/icon1.png";
import Bg from "../../public/images/bg1.png";
import Ourquality from "../../components/OurteamDetail/Ourquality";
import Ourmember from "../../components/OurteamDetail/Ourmember";
import OurteamAbout from "../../components/OurteamDetail/OurteamAbout";
import OurteamContact from "../../components/OurteamDetail/OurteamContact";
import OurteamFooter from "../../components/OurteamDetail/OurteamFooter";
import MenuBar from "../../public/images/menu.png";
import Close from "../../public/images/x.png"
function OurteamDetail() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <section id="#OurteamDetail" className={styles.OurteamDetailSection}>
        <div className={styles.OurteamDetail}>
          <div className={styles.navBar}>
            <div className={styles.Logo}>
              <Image src={Logo} alt="" />
            </div>
            <ul className={sideBar ? styles.menu : styles.listMenu}>
              <li className={styles.itemMenu}>{`Home`}</li>
              <li className={styles.itemMenu}>{`Our Team`}</li>
              <li className={styles.itemMenu}>{`Our Service`}</li>
              <li className={styles.itemMenu}>{`Career`}</li>
              <li className={styles.itemMenu}>{`Contact`}</li>
            </ul>
            <div className={styles.navBarMenu}>
            <button onClick={() => setSideBar(!sideBar)}>
                {sideBar ? (
                  <Image src={Close} alt="" className={styles.close} />
                ) : (
                  <Image src={MenuBar} alt="" />
                )}
              </button>
            </div>
            <div className={styles.contactBtn}>
              <button>{`Contact us`}</button>
            </div>
          </div>
          <div className={styles.headerContent}>
            <div className={styles.headerContentTitle}>
              <h1>{`The creative crew behind ExcelTech`}</h1>
            </div>
            <div className={styles.headerContentList}>
              <div className={styles.headerContentItem}>
                <div className={styles.headerContentItemNum}>
                  <h1>08</h1>
                </div>
                <div className={styles.headerContentItemText}>
                  <p>Amazing Teams</p>
                </div>
              </div>
              <div className={styles.headerContentItem}>
                <div className={styles.headerContentItemNum}>
                  <h1>30+</h1>
                </div>
                <div className={styles.headerContentItemText}>
                  <p>Excellent Members</p>
                </div>
              </div>
              <div className={styles.headerContentItem}>
                <div className={styles.headerContentItemNum}>
                  <h1>20+</h1>
                </div>
                <div className={styles.headerContentItemText}>
                  <p>Exclusive Projects</p>
                </div>
              </div>
              <div className={styles.headerContentItem}>
                <div className={styles.headerContentItemNum}>
                  <h1>15+</h1>
                </div>
                <div className={styles.headerContentItemText}>
                  <p>Satisfied customer</p>
                </div> 
              </div>
            </div>
          </div>
          <div className={styles.stroke}>
            <Image src={Stroke} alt="" />
          </div>
          <div className={styles.backGround}>
            <Image src={Bg} alt="" />
          </div>
        </div>
      </section>
      <Ourquality />
      <Ourmember />
      <OurteamAbout />
      <OurteamContact />
      <OurteamFooter />
    </>
  );
}

export default OurteamDetail;
