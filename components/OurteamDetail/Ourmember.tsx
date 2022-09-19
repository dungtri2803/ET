import Image from "next/image";
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
import Mem12 from  "../../public/images/athinh.png"
import Mem13 from  "../../public/images/athanh.png"
import Mem14 from  "../../public/images/cphuong.png"
import Mem15 from  "../../public/images/cvan.png"
import Mem16 from  "../../public/images/cdiem.png"
import Mem17 from  "../../public/images/clien.png"

import Ceo from "../../public/images/sep.png";
import styles from "../../styles/OurteamDetail.module.scss";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import required modules
// import required modules
function Ourmember() {
  const buttonStyle1 = {
    fontSize: "30px",
    fontWeight: "700",
    lineHeight: "20px",
    background: "none",
    color: "#000",
    padding: "10px",
    border: "0px",
    bottom: "18%",
    right: "3%",
  };
  const buttonStyle2 = {
    fontSize: "30px",
    lineHeight: "20px",
    padding: "10px",
    background: "#000",
    color: "#fff",
    border: "0px",
    bottom: "18%",
    left: "97%",
    
  };
  
  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle2 }} className={styles.prevArrow}>
        <BsChevronRight />
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle1 }}>
        <BsChevronLeft />
      </button>
    ),
  };
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
        <Slide {...properties}>
        <div className={styles.aboutImgs}>
          <div className={styles.aboutImg}>
            <Image src={Ceo} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem1} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem2} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem3} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem4} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem5} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem6} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem7} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem8} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem9} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem10} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem11} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
        </div>
        <div className={styles.aboutImgs}>
          <div className={styles.aboutImg}>
            <Image src={Mem12} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem12} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem13} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem14} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem15} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem16} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem17} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem7} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem8} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem9} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem10} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image src={Mem11} alt="" />
            <div className={styles.aboutText}>
              <p>{`Huy Truong`}</p>
              <span>{`Deputy Managing Director`}</span>
            </div>
          </div>
        </div>
        </Slide>
       
      </div>
    </section>
  );
}

export default Ourmember;
