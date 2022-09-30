import React from "react";
import Image from "next/image";
import styles from "../../styles/Footer.module.scss";
import Logo from "../../public/images/logo.png";
import Facebook from "../../public/images/fb1.png";
import Inlinked from "../../public/images/in1.png";
import Twitter from "../../public/images/tw1.png";
import Youtube from "../../public/images/youtube.png"
function Footer() {
  return (
    <section id="#footer" className={styles.FooterSection}>
      <div className={styles.Footer}>
        <div className={styles.FooterList}>
          <div className={styles.FooterItemET}>
            <div className={styles.FooterLogo}>
              <Image src={Logo} alt="" />
            </div>
            <div className={styles.FooterIcons}>
              <div className={styles.FooterIcon}>
              <a href="https://www.facebook.com/Excel-Technologies-109032621907604"><Image src={Facebook} alt="" /></a>
              </div>
              <div className={styles.FooterIcon}>
              <a href="https://www.linkedin.com/company/excel-technology/mycompany/"><Image src={Inlinked} alt="" /></a>
              </div>
              <div className={styles.FooterIcon}>
              <a href="https://www.youtube.com/channel/UCIMvqsDhtlHahLSGK6we_tA/videos"><Image src={Youtube} alt="" /></a>
              </div>
            </div>
            <div className={styles.FooterTitleET}>
              <h1>{`EXCEL TECHNOLOGIES COMPANY`}</h1>
              <div className={styles.FooterDesET}>
                <p>{`268 Tran Hung Dao, W.11, D.5, HCMC, Vietnam.`}</p>
              </div>
            </div>
          </div>
          <div className={styles.FooterTitleETMb}>
            <h1>{`EXCEL TECHNOLOGIES COMPANY`}</h1>
            <div className={styles.FooterDesET}>
              <p>{`268 Tran Hung Dao, W.11, D.5, HCMC, Vietnam.`}</p>
            </div>
          </div>
          <div className={styles.FooterItem}>
            <div className={styles.FooterItemTitle}>
              <h1>{`Company`}</h1>
            </div>
            <div className={styles.FooterItemPhone}>
              <p>{`About Us`}</p>
              <p>{`Case`}</p>
              <p>{`Blog`}</p>
            </div>
          </div>
          <div className={styles.FooterItem}>
            <div className={styles.FooterItemTitle}>
              <h1>{`Service`} </h1>
            </div>
            <div className={styles.FooterItemPhone}>
              <p>{`Product Design`}</p>
              <p>{`Branding`}</p>
              <p>{`Development`}</p>
            </div>
          </div>

          <div className={styles.FooterItem}>
            <div className={styles.FooterItemTitle}>
              <h1>{`Contact`}</h1>
            </div>
            <div className={styles.FooterItemContact}>
              <a href="+84 (028) 7300 1811"><p> {`Tel:  +84 (028) 7300 1811`}</p></a>
              <p><a href="mailto:support@exceltech.vn">{`Email: support@exceltech.vn`}</a></p>
            </div>
          </div>
          <div className={styles.FooterItem}>
            <div className={styles.FooterItemTitle}>
              <h1>{`Follow us`}</h1>
            </div>
            <div className={styles.FooterItemPhone}>
              <div className={styles.FooterIcons}>
                <div className={styles.FooterIcon}>
                  <a href="https://www.facebook.com/Excel-Technologies-109032621907604"><Image src={Facebook} alt="" /></a>
                </div>
                <div className={styles.FooterIcon}>
                  <a href="https://www.linkedin.com/company/excel-technology/mycompany/"><Image src={Inlinked} alt="" /></a>
                </div>
                <div className={styles.FooterIcon}>
                  <a href="https://www.youtube.com/channel/UCIMvqsDhtlHahLSGK6we_tA/videos"><Image src={Youtube} alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
