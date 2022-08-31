import React from 'react';
import Image from "next/image";
import styles from "../../styles/OurserviceDetail.module.scss";
import Os1 from "../../public/images/os1.png";
import Os2 from "../../public/images/os2.png";
import Os3 from "../../public/images/os3.png";
import Os4 from "../../public/images/os4.png";
import Os5 from "../../public/images/os5.png";
import Os6 from "../../public/images/os6.png";
import Os7 from "../../public/images/os7.png";
import Os8 from "../../public/images/os8.png";
function Ourcategory(){
    return (
        <section className={styles.OurcategorySection}>
            <div className={styles.Ourcategory}>
                <div className={styles.OurcategoryContent}>
                    <div className={styles.OurcategoryContentDes}>
                        <p>{`Our category`}</p>
                    </div>
                    <div className={styles.OurcategoryContentTitle}>
                        <p>{`Our key service`}</p>
                    </div>
                </div>
                <div className={styles.OurcategoryList}>
                    <div className={styles.OurcategoryItem}>
                        <div className={styles.OurcategoryImg}>
                            <Image src={Os1} alt="" />
                        </div>
                        <div className={styles.OurcategoryTitle}>
                            <p>{`Persona, User Flow, Sitemap`}</p>
                        </div>
                        <div className={styles.OurcategoryDes}>
                            <p>{`We believe in research-based user experiences. Studying user expectations, needs, and behaviors through a methodical approach.`}</p>
                        </div>
                    </div>
                    <div className={styles.OurcategoryItem}>
                        <div className={styles.OurcategoryImg}>
                            <Image src={Os2} alt="" />
                        </div>
                        <div className={styles.OurcategoryTitle}>
                            <p>{`Persona, User Flow, Sitemap`}</p>
                        </div>
                        <div className={styles.OurcategoryDes}>
                            <p>{`We believe in research-based user experiences. Studying user expectations, needs, and behaviors through a methodical approach.`}</p>
                        </div>
                    </div>
                    <div className={styles.OurcategoryItem}>
                        <div className={styles.OurcategoryImg}>
                            <Image src={Os3} alt="" />
                        </div>
                        <div className={styles.OurcategoryTitle}>
                            <p>{`Persona, User Flow, Sitemap`}</p>
                        </div>
                        <div className={styles.OurcategoryDes}>
                            <p>{`We believe in research-based user experiences. Studying user expectations, needs, and behaviors through a methodical approach.`}</p>
                        </div>
                    </div>
                    <div className={styles.OurcategoryItem}>
                        <div className={styles.OurcategoryImg}>
                            <Image src={Os4} alt="" />
                        </div>
                        <div className={styles.OurcategoryTitle}>
                            <p>{`Persona, User Flow, Sitemap`}</p>
                        </div>
                        <div className={styles.OurcategoryDes}>
                            <p>{`We believe in research-based user experiences. Studying user expectations, needs, and behaviors through a methodical approach.`}</p>
                        </div>
                    </div>
                    <div className={styles.OurcategoryItem}>
                        <div className={styles.OurcategoryImg}>
                            <Image src={Os5} alt="" />
                        </div>
                        <div className={styles.OurcategoryTitle}>
                            <p>{`Persona, User Flow, Sitemap`}</p>
                        </div>
                        <div className={styles.OurcategoryDes}>
                            <p>{`We believe in research-based user experiences. Studying user expectations, needs, and behaviors through a methodical approach.`}</p>
                        </div>
                    </div>
                    <div className={styles.OurcategoryItem}>
                        <div className={styles.OurcategoryImg}>
                            <Image src={Os6} alt="" />
                        </div>
                        <div className={styles.OurcategoryTitle}>
                            <p>{`Persona, User Flow, Sitemap`}</p>
                        </div>
                        <div className={styles.OurcategoryDes}>
                            <p>{`We believe in research-based user experiences. Studying user expectations, needs, and behaviors through a methodical approach.`}</p>
                        </div>
                    </div>
                    <div className={styles.OurcategoryItem}>
                        <div className={styles.OurcategoryImg}>
                            <Image src={Os7} alt="" />
                        </div>
                        <div className={styles.OurcategoryTitle}>
                            <p>{`Persona, User Flow, Sitemap`}</p>
                        </div>
                        <div className={styles.OurcategoryDes}>
                            <p>{`We believe in research-based user experiences. Studying user expectations, needs, and behaviors through a methodical approach.`}</p>
                        </div>
                    </div>
                    <div className={styles.OurcategoryItem}>
                        <div className={styles.OurcategoryImg}>
                            <Image src={Os8} alt="" />
                        </div>
                        <div className={styles.OurcategoryTitle}>
                            <p>{`Persona, User Flow, Sitemap`}</p>
                        </div>
                        <div className={styles.OurcategoryDes}>
                            <p>{`We believe in research-based user experiences. Studying user expectations, needs, and behaviors through a methodical approach.`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourcategory;