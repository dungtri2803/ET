import Image from "next/image";
import Particles from "react-tsparticles";
import Bag from "../../public/images/bag.png";
import Cloud from "../../public/images/cloud.png";
import Speak from "../../public/images/loa.png";
import Option from "../../public/images/op.png";
import User from "../../public/images/use.png";
import styles from "../../styles/About.module.scss";
import Ceo from "../../public/images/sep.png"
import Mem1 from  "../../public/images/cphuong.png"
import Mem2 from  "../../public/images/chuyen.png"
import Mem3 from  "../../public/images/dung.png"
import Mem4 from  "../../public/images/atong.png"
import Mem5 from  "../../public/images/ahung.png"
import Mem6 from  "../../public/images/can.png"
import Mem7 from  "../../public/images/chanh.png"
import Mem8 from  "../../public/images/aminh.png"
import Mem9 from  "../../public/images/aduy.png"
import Mem10 from  "../../public/images/adat.png"
import Mem11 from  "../../public/images/aduc.png"


function About() {
  return (
    <section id="#about" className={styles.AboutSection}>
      <div className={styles.About}>
        <div className={styles.aboutList}>
          <div className={styles.aboutItem}>
            <div className={styles.aboutDes}>
              <p>{`OUR MEMBER`}</p>
            </div>
            <div className={styles.aboutTitle}>
              <p>{`How we organise`}</p>
            </div>
          </div>
          <div className={styles.aboutItemRight}>
            <div className={styles.aboutText}>
              <p>{`Helps you run your business and do online marketing more effectively with  outstanding and unique features. Explore more `}</p>
            </div>
          </div>
        </div>
        <div className={styles.aboutImgs}>
          <div className={styles.aboutImg}>
            <Image src={Ceo} alt="" />
            <div className={styles.aboutText}>
              <p>Huy Truong</p>
              <span>Deputy Managing Director</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem1} alt="" />
            <div className={styles.aboutText}>
              <p>Huy Truong</p>
              <span>Deputy Managing Director</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem2} alt="" />
            <div className={styles.aboutText}>
              <p>Huy Truong</p>
              <span>Deputy Managing Director</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem3} alt="" />
            <div className={styles.aboutText}>
              <p>Huy Truong</p>
              <span>Deputy Managing Director</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem4} alt="" />
            <div className={styles.aboutText}>
              <p>Huy Truong</p>
              <span>Deputy Managing Director</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem5} alt="" />
            <div className={styles.aboutText}>
              <p>Huy Truong</p>
              <span>Deputy Managing Director</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem6} alt="" />
            <div className={styles.aboutText}>
              <p>Huy Truong</p>
              <span>Deputy Managing Director</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem7} alt="" />
            <div className={styles.aboutText}>
              <p>Huy Truong</p>
              <span>Deputy Managing Director</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem8} alt="" />
            <div className={styles.aboutText}>
              <p>Huy Truong</p>
              <span>Deputy Managing Director</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem9} alt="" />
            <div className={styles.aboutText}>
              <p>Huy Truong</p>
              <span>Deputy Managing Director</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem10} alt="" />
            <div className={styles.aboutText}>
              <p>Huy Truong</p>
              <span>Deputy Managing Director</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem11} alt="" />
            <div className={styles.aboutText}>
              <p>Huy Truong</p>
              <span>Deputy Managing Director</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default About;
