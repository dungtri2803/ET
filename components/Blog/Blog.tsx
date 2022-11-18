import Particles from "react-tsparticles";
import styles from "../../styles/Blog.module.scss";
import BlogCategory from "../Blog/BlogCategory";
import BlogList from "../Blog/BlogList";
import BlogNew from "../Blog/BlogNew";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { motion, Variants } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
function Blog() {
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
        times: 1,
      },
    },
  };
  return (
    <>
      <section className={styles.BlogSection}>
        <div className={styles.Blog}>
          <Navbar />
          <motion.div
            className={styles.blogContent}
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className={styles.blogTitle}>
              <p>{`Enjoy your reading and researching in our blogs!
Keep updated with the newest insights.`}</p>
            </div>
            <Particles
              id="tsparticles"
              className={styles.Particles}
              url="/particles.json"
            />
          </motion.div>
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
