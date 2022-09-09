import React from "react";
import Image from "next/image";
import styles from "../../styles/Blog.module.scss";
import Navbar from "../Navbar/Navbar";
import Particles from "react-tsparticles";
import Bl1 from "../../public/images/bl1.png";
import Bl2 from "../../public/images/bl2.png";
import BlogCategory from "../Blog/BlogCategory";
import BlogNew from "../Blog/BlogNew";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { BsSearch } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
function Blog() {
  return (
    <>
      <section className={styles.BlogSection}>
        <div className={styles.Blog}>
          <Navbar />
          <div className={styles.blogContent}>
            <div className={styles.blogTitle}>
              <p>{`Enjoy your reading and researching in our blogs!
                Keep updated with the newest insights.`}</p>
            </div>
            <Particles
              id="tsparticles"
              className={styles.Particles}
              url="/particles.json"
            />
            <div className={styles.blogCategory}>
              <ul className={styles.blogCategoryList}>
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <li
                      className={styles.blogCategoryItemActive}
                    >{`All posts`}</li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li
                      className={styles.blogCategoryItem}
                    >{`Case studies`}</li>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <li className={styles.blogCategoryItem}>{`Spirit labs`}</li>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <li
                      className={styles.blogCategoryItem}
                    >{`Software development`}</li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li className={styles.blogCategoryItem}>{`How - to `}</li>
                  </SwiperSlide>

                  <div className={styles.blogCategoryBtn}>
                    <input type="search" placeholder="Search by ..." />
                    <BsSearch className={styles.blogCategoryIcon} />
                  </div>
                </Swiper>
              </ul>
              <div className={styles.blogCategoryContent}>
                <div className={styles.blogCategoryImg}>
                  <Image src={Bl1} alt="" />
                </div>
                <div className={styles.blogCategoryText}>
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
                    in-store to online. E-commerce has benefited greatly from
                    cloud computing technologies during this transformation in
                    many different ways....`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogCategory />
      <BlogNew />
      <Contact />
      <Footer />
    </>
  );
}

export default Blog;
