import React from 'react';
import Image from "next/image";
import styles from "../../styles/OurserviceDetail.module.scss";
import Os1 from "../../public/images/os1.png";
import Os2 from "../../public/images/os2.png";
import Os3 from "../../public/images/star.png";
import Os4 from "../../public/images/os4.png";
import Os5 from "../../public/images/os5.png";
import Os6 from "../../public/images/os6.png";
import Os7 from "../../public/images/os7.png";
import Os8 from "../../public/images/os8.png";
import Bget from "../../public/images/bget4.png";
function Ourcategory(){
    return (
        <section className={styles.OurcategorySection}>
            <div className={styles.ourcategoryBg}>
                <Image src={Bget} alt="" />
            </div>
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
                            <p>{`Moodboard, Creative Concept`}</p>
                        </div>
                        <div className={styles.OurcategoryDes}>
                            <p>{` Creative concepts serve as a north star to align all stakeholder at every step of the product evolution.`}</p>
                        </div>
                    </div>
                    <div className={styles.OurcategoryItem}>
                        <div className={styles.OurcategoryImg}>
                            <Image src={Os3} alt="" />
                        </div>
                        <div className={styles.OurcategoryTitle}>
                            <p>{`Idea, Visual Design`}</p>
                        </div>
                        <div className={styles.OurcategoryDes}>
                            <p>{`We live to foster creativity and innovation. We work collaboratively with our clients to bring life to the best ideas and get them validated.`}</p>
                        </div>
                    </div>
                    <div className={styles.OurcategoryItem}>
                        <div className={styles.OurcategoryImg}>
                            <Image src={Os4} alt="" />
                        </div>
                        <div className={styles.OurcategoryTitle}>
                            <p>{`Mobile & Web development`}</p>
                        </div>
                        <div className={styles.OurcategoryDes}>
                            <p>{`We are a full stack development studio. Our web team specializes in React JS for front end and Node JS for back end development.`}</p>
                        </div>
                    </div>
                    <div className={styles.OurcategoryItem}>
                        <div className={styles.OurcategoryImg}>
                            <Image src={Os5} alt="" />
                        </div>
                        <div className={styles.OurcategoryTitle}>
                            <p>{`Analytics and Big Data Solutions`}</p>
                        </div>
                        <div className={styles.OurcategoryDes}>
                            <p>{`We're all about driving actionable solutions and creating intelligent, data-driven workflows.`}</p>
                        </div>
                    </div>
                    <div className={styles.OurcategoryItem}>
                        <div className={styles.OurcategoryImg}>
                            <Image src={Os6} alt="" />
                        </div>
                        <div className={styles.OurcategoryTitle}>
                            <p>{`Technology Support`}</p>
                        </div>
                        <div className={styles.OurcategoryDes}>
                            <p>{`With extensive experience, we are able to implement, secure and maintain various infrastructure components.`}</p>
                        </div>
                    </div>
                    <div className={styles.OurcategoryItem}>
                        <div className={styles.OurcategoryImg}>
                            <Image src={Os7} alt="" />
                        </div>
                        <div className={styles.OurcategoryTitle}>
                            <p>{`Technology Support`}</p>
                        </div>
                        <div className={styles.OurcategoryDes}>
                            <p>{`With extensive experience, we are able to implement, secure and maintain various infrastructure components.`}</p>
                        </div>
                    </div>
                    <div className={styles.OurcategoryItem}>
                        <div className={styles.OurcategoryImg}>
                            <Image src={Os8} alt="" />
                        </div>
                        <div className={styles.OurcategoryTitle}>
                            <p>{`IT Security`}</p>
                        </div>
                        <div className={styles.OurcategoryDes}>
                            <p>{`The audits typically focus on information security, compliance and technical security controls.`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourcategory;