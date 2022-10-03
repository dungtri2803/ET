import React from "react";
import Image from "next/image";
import styles from "../../styles/Ourservice.module.scss";
import Osv from "../../public/images/ecom.png";
import Osv1 from "../../public/images/ipcc.png";
import Osv2 from "../../public/images/mane.png";
import Osv3 from "../../public/images/sale.png";
import Bget from "../../public/images/bget.png";
import Left from "../../public/images/left.png";
import Right from "../../public/images/right.png";
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import SwiperCore, { A11y } from "swiper";
SwiperCore.use([Navigation, A11y]);
function Ourservice() {
  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        bounce: 0.1,
        duration: 2,
        times:1,
      }
    }
  };
  return (
    <section id="#service" className={styles.ourserviceSection}>
      <motion.div className={styles.ourservice} variants={cardVariants}  initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}>
        <div className={styles.ourserviceBg}>
          <Image src={Bget} alt="" />
        </div>
        <div className={styles.ourserviceContentTop}>
          <div className={styles.ourserviceContent}>
            <div className={styles.ourserviceDes}>
              <p>{`OUR SERVICE`}</p>
            </div>
            <div className={styles.ourserviceTitle}>
              <p>{`Service we offer`}</p>
            </div>
          </div>
          <div className={styles.Btn}>
            <Image src={Left} alt="" className="prev" />
            <Image src={Right} alt="" className="next" />
          </div>
        </div>

        <div className={styles.ourserviceSlider}>
          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 0,
              },
            }}
            modules={[Navigation]}
            className="mySwiperOurService"
          >
            <SwiperSlide>
              <div className={styles.ourserviceItem}>
                <div className={styles.ourserviceItemImg}>
                  <Image src={Osv} alt="" />
                </div>
                <div className={styles.ourserviceItemTitle}>
                  <p>{`E-Commerce`}</p>
                </div>
                <div className={styles.ourserviceItemDes}>
                  <p>
                    {`Helps you run your business and do online marketing more
                  effectively with outstanding and unique features.`}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.ourserviceItem}>
                <div className={styles.ourserviceItemImg}>
                  <Image src={Osv1} alt="" />
                </div>
                <div className={styles.ourserviceItemTitle}>
                  <p>{`IPCC & CRM`}</p>
                </div>
                <div className={styles.ourserviceItemDes}>
                  <p>
                    {`Integrate modern management system in storing, processing
                  information and supporting customers.`}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.ourserviceItem}>
                <div className={styles.ourserviceItemImg}>
                  <Image src={Osv2} alt="" />
                </div>
                <div className={styles.ourserviceItemTitle}>
                  <p>{`Managed Services`}</p>
                </div>
                <div className={styles.ourserviceItemDes}>
                  <p>
                    {`Systematize services scientifically based on business form and
                  specific criteria of business.`}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.ourserviceItem}>
                <div className={styles.ourserviceItemImg}>
                  <Image src={Osv3} alt="" />
                </div>
                <div className={styles.ourserviceItemTitle}>
                  <p>{`Sales & Marketing`}</p>
                </div>
                <div className={styles.ourserviceItemDes}>
                  <p>{`Synchronize data, storage and restore on demand.`}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.ourserviceItem}>
                <div className={styles.ourserviceItemImg}>
                  <Image src={Osv} alt="" />
                </div>
                <div className={styles.ourserviceItemTitle}>
                  <p>{`CLOUD`}</p>
                </div>
                <div className={styles.ourserviceItemDes}>
                  <p>
                    {`Our team is reliable to manage whole process from acquiring
                  clients`}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
}
export default Ourservice;
