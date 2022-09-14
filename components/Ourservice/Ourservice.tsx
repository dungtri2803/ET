import React from "react";
import Image from "next/image";
import styles from "../../styles/Ourservice.module.scss";
import Osv from "../../public/images/ecom.png";
import Osv1 from "../../public/images/ipcc.png";
import Osv2 from "../../public/images/mane.png";
import Osv3 from "../../public/images/sale.png";
import Left from "../../public/images/left.png";
import Right from "../../public/images/right.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function Ourservice() {
  return (
    <section id="#service" className={styles.ourserviceSection}>
      <div className={styles.ourservice}>
        <div className={styles.ourserviceContent}>
          <div className={styles.ourserviceDes}>
            <p>{`OUR SERVICE`}</p>
          </div>
          <div className={styles.ourserviceTitle}>
            <p>{`Service we offer`}</p>
          </div>
        </div>
        <div className={styles.ourserviceSlider}>
          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiperOurService"
          >
            <SwiperSlide>
              <div className={styles.ourserviceItem}>
                <div className={styles.ourserviceItemImg}>
                  <Image src={Osv} alt="" />
                </div>
                <div className={styles.ourserviceItemTitle}>
                  <p>{`E-COMMERCE`}</p>
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
                  <p>{`MANAGED SERVICES`}</p>
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
      </div>
    </section>
  );
}
export default Ourservice;
