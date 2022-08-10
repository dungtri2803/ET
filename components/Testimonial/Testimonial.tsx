import React from "react";
import Image from "next/image";
import styles from "../../styles/Testimonial.module.scss";
import Doctor from "../../public/images/bs.png";
import Backg from "../../public/images/bgg.png";
import Stroke from "../../public/images/str.png";
import Comma from "../../public/images/comma.png";
import Effect from "../../public/images/eff.png";
import Left from "../../public/images/left.png";
import Right from "../../public/images/right.png";

function Testimonial() {
  return (
    <section id="#testimonial" className={styles.TestimonialSection}>
      <div className={styles.Testimonial}>
        <div className={styles.TestimonialContent}>
          <div className={styles.TestimonialDes}>
            <p>{`TESTIMONIAL`}</p>
          </div>
          <div className={styles.TestimonialTitle}>
            <h1>{`What do they say about us`}</h1>
          </div>
          <div className={styles.TestimonialEff}>
            <Image src={Effect} alt="" />
          </div>
        </div>

        <div className={styles.TestimonialList}>
          <div className={styles.TestimonialLeft}>
            <div className={styles.TestimonialLeftImages}>
              <div className={styles.TestimonialLeftImage}>
                <Image src={Backg} alt="" />
              </div>
              <div className={styles.TestimonialLeftImage}>
                <Image src={Stroke} alt="" />
              </div>
              <div className={styles.TestimonialLeftImage}>
                <Image src={Doctor} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.TestimonialRight}>
            <div className={styles.TestimonialRightContent}>
              <div className={styles.TestimonialRightDes}>
                <p>
                 {` Congue sapien lorem nunc, odio faucibus faucibus pulvinar
                  morbi. Morbi proin a vestibulum tellus tellus quam sed.
                  Praesent quisque euismod blandit amet. Volutpat sit venenatis,
                  posuere ornare ac, amet amet malesuada. Odio consequat
                  facilisi vel enim id pellentesque euismod. Ultricies sagittis
                  vivamus eget est.`}
                </p>
              </div>
              <div className={styles.TestimonialRightName}>
                <h2>{`Dominic Brian`}</h2>
              </div>
              <div className={styles.TestimonialRightDis}>
                <p>{`CEO Ruber.co`}</p>
              </div>
              <div className={styles.TestimonialIcon}>
                <Image src={Comma} alt="" />
              </div>
              <div className={styles.TestimonialRightIcons}>
                <button className={styles.TestimonialIconLeft}>
                  <Image src={Left} alt="" />
                </button>
                <button className={styles.TestimonialIconRight}>
                  <Image src={Right} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
