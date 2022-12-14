import React,{useEffect} from "react";
import Image from "next/image";
import styles from "../../styles/Blog.module.scss";
import { BsSearch } from "react-icons/bs";
import Bl1 from "../../public/images/bl1.png";
import Bl2 from "../../public/images/img1.png";
import Left from "../../public/images/left.png";
import Right from "../../public/images/right.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, Variants } from "framer-motion";
// Import Swiper styles
import "swiper/css/free-mode";
import AOS from "aos";
import "aos/dist/aos.css";
// import required modules
import { FreeMode} from "swiper";

function BlogCategory() {
  useEffect(() => {
    AOS.init();
  }, []);
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
    <>
      <section className={styles.BlogCategorySection}>
        <motion.div className={styles.blogCategory} variants={cardVariants}  initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }} >
          <div className={styles.blogNav}>
            <ul className={styles.blogCategoryList}>
              <li className={styles.blogCategoryItemActive}>{`All posts`}</li>
              <li className={styles.blogCategoryItem}>{`Case studies`}</li>
              <li className={styles.blogCategoryItem}>{`AI Technique`}</li>
              <li
                className={styles.blogCategoryItem}
              >{`Software development`}</li>
              <li className={styles.blogCategoryItem}>{`How - to `}</li>
            </ul>
            <div className={styles.blogCategoryBtn}>
              <input type="search" placeholder="Search by ..." />
              <BsSearch className={styles.blogCategoryIcon} />
            </div>
          </div>

          <div className={styles.blogCategoryContent}>
            <div className={styles.blogCategoryImg}>
              <Image src={Bl1} alt="" />
            </div>
            <div className={styles.blogCategoryText}>
              <div className={styles.blogCategoryTextContent}>
              <div className={styles.blogCategoryMDY}>
                <p>{`Aug 16, 2022`}</p>
              </div>
              <div className={styles.blogCategoryTitle}>
                <p>{`5 Benefits of Cloud Computing in the World of E-commerce`}</p>
              </div>
              <div className={styles.blogCategoryDes}>
                <p>{`Software development`}</p>
              </div>
              <div className={styles.blogCategoryTi}>
                <p>
                  {`Retailers now have a huge potential to expand their online
                    presence and business in order to boost sales and growth as
                    a result of the movement in customer buying preferences from
                    in-store to online.`}<br /> <br/>{` E-commerce has benefited greatly from
                    cloud computing technologies during this transformation in
                    many different ways....`}
                </p>
              </div>
              </div>
              <div className={styles.Btn}>
                <Image
                  src={Left}
                  alt=""
                  className="prev"
                />
                <Image
                  src={Right}
                  alt=""
                  className="next"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section className={styles.BlogCategorySectionMobile}>
        <div className={styles.blogCategoryMobile}>
          <div className={styles.blogCategoryBtnMobile}>
            <input type="search" placeholder="Search by ..." />
            <BsSearch className={styles.blogCategoryIconMobile} />
          </div>
          <div className={styles.blogNavMobile}>
            <ul className={styles.blogCategoryListMobile}>
              <Swiper
                slidesPerView={3.5}
                spaceBetween={0}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode]}
                className={styles.SwiperBlog}
              >
                <SwiperSlide>
                  <li
                    className={styles.blogCategoryItemActiveMobile}
                  >{`All posts`}</li>
                </SwiperSlide>
                <SwiperSlide>
                  <li
                    className={styles.blogCategoryItemMobile}
                  >{`Case studies`}</li>
                </SwiperSlide>
                <SwiperSlide>
                  <li
                    className={styles.blogCategoryItemMobile}
                  >{`AI Technique`}</li>
                </SwiperSlide>
                <SwiperSlide>
                  <li
                    className={styles.blogCategoryItemMobile}
                  >{`Software development`}</li>
                </SwiperSlide>
                <SwiperSlide>
                  <li
                    className={styles.blogCategoryItemMobile}
                  >{`How - to `}</li>
                </SwiperSlide>
              </Swiper>
            </ul>
          </div>

          <div className={styles.blogCategoryContentMobile}>
            <div className={styles.blogCategoryImgMobile}>
              <Image src={Bl2} alt="" />
            </div>
            <div className={styles.blogCategoryTextMobile}>
              <div className={styles.blogCategoryMDYMobile}>
                <p>{`Aug 16, 2022`}</p>
              </div>
              <div className={styles.blogCategoryTitleMobile}>
                <p>{`5 Benefits of Cloud Computing in the World of E-commerce`}</p>
              </div>
              <div className={styles.blogCategoryDesMobile}>
                <p>{`Software development`}</p>
              </div>
              <div className={styles.blogCategoryTiMobile}>
                <p>
                  {`Retailers now have a huge potential to expand their online
                    presence and business in order to boost sales and growth as
                    a result of the movement in customer buying preferences from
                    in-store to online. E-commerce has benefited greatly from
                    cloud computing technologies during this transformation in
                    many different ways....`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default BlogCategory;
