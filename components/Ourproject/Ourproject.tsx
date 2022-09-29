import Image from "next/image";
import Pj1 from "../../public/images/pj1.png";
import Pj2 from "../../public/images/pj2.png";
import Pj3 from "../../public/images/pj3.png";
import Pj4 from "../../public/images/pj4.png";
import Pj5 from "../../public/images/pj5.png";
import Pj7 from "../../public/images/pj7.png";
import styles from "../../styles/Ourproject.module.scss";
import Particles from "react-tsparticles";
import Op1 from "../../public/images/op11.png";
import Op2 from "../../public/images/op22.png";
import Op3 from "../../public/images/op33.png";
function Ourproject() {
  return (
    <section className={styles.OurprojectSection}>
      <Particles
        id="tsparticlesjs"
        className={styles.Particles}
        url="/particlesjs-config.json"
      />
      <div className={styles.Ourproject}>
        <div className={styles.OurprojectContent}>
          <div className={styles.OurprojectDes}>
            <p>{`OUR PROJECTS`}</p>
          </div>
          <div className={styles.OurprojectTitle}>
            <p>{`Our amazing work with various Industry`}</p>
          </div>
        </div>

        <div className={styles.OurprojectList}>
          <div className={styles.OurprojectLeft}>
            <div className={styles.OurprojectLeftItemFull}>
              <Image src={Pj1} alt="" />
            </div>
            <div className={styles.OurprojectLeftItemHalf}>
              <Image src={Pj3} alt="" />
            </div>
            <div className={styles.OurprojectLeftItemHalf1}>
              <Image src={Pj2} alt="" />
            </div>
          </div>
          <div className={styles.OurprojectRight}>
            <div className={styles.OurprojectRightItemHalf}>
              <Image src={Pj4} alt="" />
            </div>
            <div className={styles.OurprojectRightItemHalf1}>
              <Image src={Pj5} alt="" />
            </div>
            <div className={styles.OurprojectRightItemFull}>
              <Image src={Pj7} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.OurprojectListMobile}>
          <div className={styles.OurprojectItemMobile}>
            <Image src={Op1} alt="" />
          </div>
          <div className={styles.OurprojectItemMobile}>
            <Image src={Op2} alt="" />
          </div>
          <div className={styles.OurprojectItemMobile}>
            <Image src={Op3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourproject;
