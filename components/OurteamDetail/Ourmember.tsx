import Image from "next/image";
import Mem5 from "../../public/images/ahung.png";
import Mem4 from "../../public/images/atong.png";
import Mem6 from "../../public/images/can.png";
import Mem7 from "../../public/images/chanh.png";
import Mem2 from "../../public/images/chuyen.png";
import Mem1 from "../../public/images/cphuong.png";
import Mem3 from "../../public/images/dung.png";
import Ceo from "../../public/images/sep.png";
import styles from "../../styles/OurteamDetail.module.scss";


// import required modules
// import required modules
function Ourmember() {
  return (
    <section className={styles.OurmemberSection}>
      
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
            <Image src={Mem7} alt="" />
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
          
        </div>
      </div>
    </section>
  );
}

export default Ourmember;
