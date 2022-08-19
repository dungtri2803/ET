import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Artisan from "../../public/images/brand/artisan.png";
import Eoty from "../../public/images/brand/eoty.png";
import Nero from "../../public/images/brand/nero.png";
import Sleek from "../../public/images/brand/sleek.png";
import Winemart from "../../public/images/brand/winemart.png";
import Br1 from "../../public/images/brand/br1.png";
import Br2 from "../../public/images/brand/br2.png";
import Hollow from "../../public/images/brand/hollow.png";
import Proudcloud from "../../public/images/brand/proudcloud.png";
import styles from "../../styles/Brand.module.scss";

function Brand() {
  const boxRef1 = useRef<any>();
  const boxRef2 = useRef<any>();

  useEffect(() => {
    gsap.set(boxRef1.current.children, {
      x: (i) => i * 300,
    });
    gsap.to(boxRef1.current.children, {
      duration: 5,
      x: "+=1500",
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 1500),
      },
      repeat: -1,
    });

    gsap.set(boxRef2.current.children, {
      x: (i) => i * -300,
    });
    gsap.to(boxRef2.current.children, {
      duration: 5,
      x: "-=1500",
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 1500),
      },
      repeat: -1,
    });
  }, []);

  return (
    <section id="#Brand" className={styles.BrandSection}>
      <div className={styles.Brand}>
        <div className={styles.BrandList} ref={boxRef1}>
          <div className={styles.BrandItem}>
            <Image src={Winemart} alt="" />
          </div>
          <div className={styles.BrandItem}>
            <Image src={Sleek} alt="" />
          </div>
          <div className={styles.BrandItem}>
            <Image src={Hollow} alt="" />
          </div>
          <div className={styles.BrandItem}>
            <Image src={Artisan} alt="" />
          </div>
          <div className={styles.BrandItem}>
            <Image src={Proudcloud} alt="" />
          </div>
        </div>

        <div
          className={styles.BrandList}
          ref={boxRef2}
          style={{ top: "10rem", left: 1200 }}
        >
          <div className={styles.BrandItem}>
            <Image src={Br1} alt="" />
          </div>
          <div className={styles.BrandItem}>
            <Image src={Eoty} alt="" />
          </div>
          <div className={styles.BrandItem}>
            <Image src={Nero} alt="" />
          </div>
          <div className={styles.BrandItem}>
            <Image src={Br2} alt="" />
          </div>
          <div className={styles.BrandItem}>
            <Image src={Winemart} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brand;
