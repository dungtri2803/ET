import React from "react";
import Image from "next/image";
import styles from "../../styles/Blog.module.scss";
import Navbar from "../Navbar/Navbar";
import BlogCategory from "../Blog/BlogCategory";
import Particles from "react-tsparticles";
import Bl1 from "../../public/images/bl1.png";
import Bl2 from "../../public/images/bl2.png";
import BlogList from "../Blog/BlogList";
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
            
          </div>
        </div>
      </section>
      <BlogCategory />
      <BlogList />
      <BlogNew />
      <Contact />
      <Footer />
    </>
  );
}

export default Blog;
