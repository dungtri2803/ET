import Image from "next/image";
import Particles from "react-tsparticles";
import Bag from "../../public/images/bag.png";
import Cloud from "../../public/images/cloud.png";
import Speak from "../../public/images/loa.png";
import Option from "../../public/images/op.png";
import User from "../../public/images/use.png";
import styles from "../../styles/About.module.scss";
import Mem1 from "../../public/images/member/1.jpg";
import Mem2 from "../../public/images/member/2.jpg";
import Mem3 from "../../public/images/member/3.jpg";
import Mem4 from "../../public/images/member/4.jpg";
import Mem5 from "../../public/images/member/5.jpg";
import Mem6 from "../../public/images/member/6.jpg";
import Mem7 from "../../public/images/member/7.jpg";
import Mem8 from "../../public/images/member/8.png";
import Mem9 from "../../public/images/member/9.jpg";
import Mem10 from "../../public/images/member/10.jpg";
import Mem11 from "../../public/images/member/11.jpg";
import Mem12 from "../../public/images/member/12.jpg";
import Mem13 from "../../public/images/member/13.png";
import Mem14 from "../../public/images/member/14.png";
import Mem15 from "../../public/images/member/15.png";
import Mem16 from "../../public/images/member/16.png";
import Mem17 from "../../public/images/member/17.png";
import Mem18 from "../../public/images/member/18.png";
import Mem19 from "../../public/images/member/19.png";
import Mem20 from "../../public/images/member/20.png";
import Mem21 from "../../public/images/member/21.png";
import Mem22 from "../../public/images/member/22.png";
import Mem23 from "../../public/images/member/23.png";
import Mem24 from "../../public/images/member/24.png";
import Mem25 from "../../public/images/member/25.png";
import Mem26 from "../../public/images/member/26.png";
import Bget from "../../public/images/bget2.png";

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
              <p>{`Helps you run your business and do online marketing more effectively with  outstanding and unique features.`} <span>{`Explore more`}</span></p>
            </div>
          </div>
        </div>
        <div className={styles.aboutImgs}>
          <div className={styles.aboutImg}>
            <Image src={Mem1} alt="" layout="responsive" />
            <div className={styles.aboutText}>
              <p>Huy Truong</p>
              <span>Deputy Managing Director</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem2} alt="" layout="responsive" />
            <div className={styles.aboutText}>
              <p>hanh doan</p>
              <span>Customer Service Manager</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem3} alt="" layout="responsive" />
            <div className={styles.aboutText}>
              <p>thanh din</p>
              <span>Product Manager</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem4} alt="" />
            <div className={styles.aboutText}>
              <p>Phuong phan</p>
              <span>Project Manager</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem5} alt="" />
            <div className={styles.aboutText}>
              <p>Dat nguyen</p>
              <span>Senior Front End Specialist</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem6} alt="" />
            <div className={styles.aboutText}>
              <p>phuc ha</p>
              <span>Software Development Manager</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem7} alt="" />
            <div className={styles.aboutText}>
              <p>thinh tran</p>
              <span>Sales Manager</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem8} alt="" />
            <div className={styles.aboutText}>
              <p>huyen nguyen</p>
              <span>Graphic Design Manager</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Bget}>
        <Image src={Bget} alt="" />
      </div>
    </section>
  );
}

export default About;
