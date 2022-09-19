import React from "react";
import Image from "next/image";
import styles from "../../styles/Blog.module.scss";
import Bl3 from "../../public/images/bl3.png";
import Bl4 from "../../public/images/bl3.png";
import Bl5 from "../../public/images/bl3.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const responsiveSettings = [
  {
      breakpoint: 1400,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 3
      }
  },
  {
      breakpoint: 1200,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 2
      }
  },
  {
      breakpoint: 1000,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 2
      }
  },
  {
      breakpoint: 100,
      settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
      }
  }
];
function BlogNew() {
  const buttonStyle1 = {
    fontSize: "30px",
    fontWeight: "700",
    lineHeight: "20px",
    background: "none",
    color: "#000",
    padding: "10px",
    border: "0px",
    bottom: "118%",
    right: "8%",
  };
  const buttonStyle2 = {
    fontSize: "30px",
    lineHeight: "20px",
    padding: "10px",
    background: "#000",
    color: "#fff",
    border: "0px",
    bottom: "118%",
    left: "92%",
  };
  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle2 }} className="prev">
        <BsChevronRight />
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle1 }} className="next">
        <BsChevronLeft />
      </button>
    ),
  };
  return (
    <section className={styles.BlogNewSection}>
      <div className={styles.BlogNew}>
        <div className={styles.blognewList}>
        <div className={styles.blognewContent}>
          <div className={styles.blogTitle}>
            <p>{`What’s news?`}</p>
          </div>
        </div>
          <div className={styles.blognewLists}>
          <Slide slidesToScroll={1} slidesToShow={4} indicators={true} {...properties} responsive={responsiveSettings}>
          <div className={styles.blognewItem}>
              <div className={styles.blognewImg}>
                <Image src={Bl3} alt="" />
              </div>
              <div className={styles.blognewText}>
                <div className={styles.blognewDes}>
                  <p>{`Aug 16, 2022`}</p>
                </div>
                <div className={styles.blognewTitle}>
                  <p>{`5 Benefits of Cloud Computing in the World of E-commerce`}</p>
                </div>
                <div className={styles.blognewDesBtn}>
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
                <div className={styles.blognewDes}>
                  <p>{`Aug 16, 2022`}</p>
                </div>
                <div className={styles.blognewTitle}>
                  <p>{`5 Benefits of Cloud Computing in the World of E-commerce`}</p>
                </div>
                <div className={styles.blognewDesBtn}>
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
                <div className={styles.blognewDes}>
                  <p>{`Aug 16, 2022`}</p>
                </div>
                <div className={styles.blognewTitle}>
                  <p>{`5 Benefits of Cloud Computing in the World of E-commerce`}</p>
                </div>
                <div className={styles.blognewDesBtn}>
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
                <div className={styles.blognewDes}>
                  <p>{`Aug 16, 2022`}</p>
                </div>
                <div className={styles.blognewTitle}>
                  <p>{`5 Benefits of Cloud Computing in the World of E-commerce`}</p>
                </div>
                <div className={styles.blognewDesBtn}>
                  <p>{`Software development`}</p>
                </div>
                <div className={styles.blognewTi}>
                  <p>{`Retailers now have a huge potential to expand their online presence and business in order to boost sales and growth as a result of the movement in customer buying preferences from in-store to online. E-commerce has benefited greatly from cloud computing technologies during this transformation in many different ways....`}</p>
                </div>
              </div>
            </div>
          </Slide>
            
            
          </div>       
        </div>
      </div>
    </section>
  );
}

export default BlogNew;
