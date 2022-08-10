import React from "react";
import Image from 'next/Image';
import styles from '../../styles/Footer.module.scss';
import Logo from '../../public/images/logo1.png';
import Facebook from '../../public/images/fb1.png';
import Inlinked from '../../public/images/in1.png';
import Twitter from '../../public/images/tw1.png';

function Footer() {
    return (
        <section id="#footer" className={styles.FooterSection}>
            <div className={styles.Footer}>
                <div className={styles.FooterList}>
                    <div className={styles.FooterItem}>
                        <div className={styles.FooterLogo}>
                            <Image src={Logo} alt="" />
                        </div>
                        <div className={styles.FooterTitleET}>
                            <h1>EXCEL TECHNOLOGIES COMPANY</h1>
                        </div>
                        <div className={styles.FooterDesET}>
                            <p>Copyright 2022 © ExcelTech </p>
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
                    </div>
                    <div className={styles.FooterItem}>
                        <div className={styles.FooterItemTitle}>
                            <h1>Contact</h1>
                        </div>
                        <div className={styles.FooterItemPhone}>
                            <p> 0123 456 789</p>
                            <p>0123 456 789</p>
                            <p>support@exceltech.vn</p>
                        </div>
                    </div>
                    <div className={styles.FooterItem}>
                        <div className={styles.FooterItemTitle}>
                            <h1>Service </h1>
                        </div>
                        <div className={styles.FooterItemPhone}>
                            <p>Product Design</p>
                            <p>Branding</p>
                            <p>Development</p>
                        </div>
                    </div>
                    <div className={styles.FooterItem}>
                        <div className={styles.FooterItemTitle}>
                            <h1>Company</h1>
                        </div>
                        <div className={styles.FooterItemPhone}>
                            <p>About Us</p>
                            <p>Case</p>
                            <p>Blog</p>
                        </div>
                    </div>
                    <div className={styles.FooterItem}>
                        <div className={styles.FooterItemTitle}>
                            <h1>Follow Us</h1>
                        </div>
                        <div className={styles.FooterItemPhone}>
                            <p>Dribbble</p>
                            <p>Behance</p>
                            <p>Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default  Footer;