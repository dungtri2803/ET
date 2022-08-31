import React from "react";
import Image from "next/image";
import styles from "../../styles/Ourservice.module.scss";
import Osv from "../../public/images/osv.png";
import Osv1 from "../../public/images/osv1.png";
import Osv2 from "../../public/images/osv2.png";
import Left from "../../public/images/left.png";
import Right from "../../public/images/right.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Ourservice() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 0.9,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section id="#service" className={styles.ourserviceSection}>
      <div className={styles.ourservice}>
        <div className={styles.ourserviceContent}>
          <div className={styles.ourserviceDes}>
            <p>OUR SERVICE</p>
          </div>
          <div className={styles.ourserviceTitle}>
            <p>Service we offer</p>
          </div>
        </div>
        <div className={styles.ourserviceSlider}>
          <Slider {...settings}>
            <div className={styles.ourserviceItem}>
              <div className={styles.ourserviceItemImg}>
                <Image src={Osv1} alt="" />
              </div>
              <div className={styles.ourserviceItemTitle}>
                <p>E-COMMERCE</p>
              </div>
              <div className={styles.ourserviceItemDes}>
                <p>
                  Helps you run your business and do online marketing more
                  effectively with outstanding and unique features.
                </p>
              </div>
            </div>
            <div className={styles.ourserviceItem}>
              <div className={styles.ourserviceItemImg}>
                <Image src={Osv2} alt="" />
              </div>
              <div className={styles.ourserviceItemTitle}>
                <p>IPCC & CRM</p>
              </div>
              <div className={styles.ourserviceItemDes}>
                <p>
                  Integrate modern management system in storing, processing
                  information and supporting customers.
                </p>
              </div>
            </div>
            <div className={styles.ourserviceItem}>
              <div className={styles.ourserviceItemImg}>
                <Image src={Osv} alt="" />
              </div>
              <div className={styles.ourserviceItemTitle}>
                <p>MANAGED SERVICES</p>
              </div>
              <div className={styles.ourserviceItemDes}>
                <p>
                  Systematize services scientifically based on business form and
                  specific criteria of business.
                </p>
              </div>
            </div>
            <div className={styles.ourserviceItem}>
              <div className={styles.ourserviceItemImg}>
                <Image src={Osv} alt="" />
              </div>
              <div className={styles.ourserviceItemTitle}>
                <p>Sales & Marketing</p>
              </div>
              <div className={styles.ourserviceItemDes}>
                <p>Synchronize data, storage and restore on demand.</p>
              </div>
            </div>
            <div className={styles.ourserviceItem}>
              <div className={styles.ourserviceItemImg}>
                <Image src={Osv} alt="" />
              </div>
              <div className={styles.ourserviceItemTitle}>
                <p>CLOUD</p>
              </div>
              <div className={styles.ourserviceItemDes}>
                <p>
                  Our team is reliable to manage whole process from acquiring
                  clients
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
export default Ourservice;
