import React from "react";
import Image from "next/image";
import styles from "../../styles/Blog.module.scss";
import Bl3 from "../../public/images/bl3.png";
import Bl4 from "../../public/images/bl3.png";
import Bl5 from "../../public/images/bl3.png";

function BlogNew() {
  return (
    <section className={styles.BlogNewSection}>
      <div className={styles.BlogNew}>
        <div className={styles.blognewContent}>
          <div className={styles.blogTitle}>
            <p>{`What’s news?`}</p>
          </div>
        </div>
        <div className={styles.blognewList}>
          <div className={styles.blognewItem}>
            <div className={styles.blognewImg}>
              <Image src={Bl3} alt="" />
            </div>
            <div className={styles.blognewText}>
              <div className={styles.blognewMDY}>
                <p>{`Aug 16, 2022`}</p>
              </div>
              <div className={styles.blognewTitle}>
                <p>{`5 Benefits of Cloud Computing in the World of E-commerce`}</p>
              </div>
              <div className={styles.blognewDes}>
                <p>{`Software development`}</p>
              </div>
              <div className={styles.blognewTi}>
                <p>{`Retailers now have a huge potential to expand their online presence and business in order to boost sales and growth as a result of the movement in customer buying preferences from in-store to online. E-commerce has benefited greatly from cloud computing technologies during this transformation in many different ways....`}</p>
              </div>
            </div>
          </div>
          <div className={styles.blognewItem}>
            <div className={styles.blognewImg}>
              <Image src={Bl3} alt="" />
            </div>
            <div className={styles.blognewText}>
              <div className={styles.blognewMDY}>
                <p>{`Aug 16, 2022`}</p>
              </div>
              <div className={styles.blognewTitle}>
                <p>{`5 Benefits of Cloud Computing in the World of E-commerce`}</p>
              </div>
              <div className={styles.blognewDes}>
                <p>{`Software development`}</p>
              </div>
              <div className={styles.blognewTi}>
                <p>{`Retailers now have a huge potential to expand their online presence and business in order to boost sales and growth as a result of the movement in customer buying preferences from in-store to online. E-commerce has benefited greatly from cloud computing technologies during this transformation in many different ways....`}</p>
              </div>
            </div>
          </div>
          <div className={styles.blognewItem}>
            <div className={styles.blognewImg}>
              <Image src={Bl3} alt="" />
            </div>
            <div className={styles.blognewText}>
              <div className={styles.blognewMDY}>
                <p>{`Aug 16, 2022`}</p>
              </div>
              <div className={styles.blognewTitle}>
                <p>{`5 Benefits of Cloud Computing in the World of E-commerce`}</p>
              </div>
              <div className={styles.blognewDes}>
                <p>{`Software development`}</p>
              </div>
              <div className={styles.blognewTi}>
                <p>{`Retailers now have a huge potential to expand their online presence and business in order to boost sales and growth as a result of the movement in customer buying preferences from in-store to online. E-commerce has benefited greatly from cloud computing technologies during this transformation in many different ways....`}</p>
              </div>
            </div>
          </div>
          <div className={styles.blognewItem}>
            <div className={styles.blognewImg}>
              <Image src={Bl3} alt="" />
            </div>
            <div className={styles.blognewText}>
              <div className={styles.blognewMDY}>
                <p>{`Aug 16, 2022`}</p>
              </div>
              <div className={styles.blognewTitle}>
                <p>{`5 Benefits of Cloud Computing in the World of E-commerce`}</p>
              </div>
              <div className={styles.blognewDes}>
                <p>{`Software development`}</p>
              </div>
              <div className={styles.blognewTi}>
                <p>{`Retailers now have a huge potential to expand their online presence and business in order to boost sales and growth as a result of the movement in customer buying preferences from in-store to online. E-commerce has benefited greatly from cloud computing technologies during this transformation in many different ways....`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogNew;
