import React from "react";
import Image from "next/image";
import styles from "../../styles/Footer.module.scss";
import Logo from "../../public/images/logo.png";
import Facebook from "../../public/images/fb1.png";
import Inlinked from "../../public/images/in1.png";
import Twitter from "../../public/images/tw1.png";

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
                <Image src={Facebook} alt="" />
              </div>
              <div className={styles.FooterIcon}>
                <Image src={Inlinked} alt="" />
              </div>
              <div className={styles.FooterIcon}>
                <Image src={Twitter} alt="" />
              </div>
            </div>
            <div className={styles.FooterTitleET}>
              <h1>{`EXCEL TECHNOLOGIES COMPANY`}</h1>
              <div className={styles.FooterDesET}>
                <p>{`72 - 74 Nguyen Thi Minh Khai St., 
                    Vo Thi Sau ward, Dist. 3, HCMC, Vietnam. `}</p>
              </div>
            </div>
          </div>
          <div className={styles.FooterTitleETMb}>
            <h1>{`EXCEL TECHNOLOGIES COMPANY`}</h1>
            <div className={styles.FooterDesET}>
              <p>{`72 - 74 Nguyen Thi Minh Khai St., 
                    Vo Thi Sau ward, Dist. 3, HCMC, Vietnam. `}</p>
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
            <div className={styles.FooterItemPhone}>
              <p> {`Tel:  +84 283 520 5579`}</p>
              <p>{`Fax: +84 283 823 4333`}</p>
              <p>{`Email:support@exceltech.vn`}</p>
            </div>
          </div>
          <div className={styles.FooterItem}>
            <div className={styles.FooterItemTitle}>
              <h1>{`Follow us`}</h1>
            </div>
            <div className={styles.FooterItemPhone}>
              <div className={styles.FooterIcons}>
                <div className={styles.FooterIcon}>
                  <Image src={Facebook} alt="" />
                </div>
                <div className={styles.FooterIcon}>
                  <Image src={Inlinked} alt="" />
                </div>
                <div className={styles.FooterIcon}>
                  <Image src={Twitter} alt="" />
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
