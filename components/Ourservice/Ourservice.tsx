import React from "react";
import Image from "next/image";
import styles from "../../styles/Ourservice.module.scss";
import Num1 from "../../public/images/num1.png";
import Num2 from "../../public/images/num2.png";
import Num3 from "../../public/images/num3.png";
import Num4 from "../../public/images/num4.png";
import Stroke from "../../public/images/stroke.png";

function Ourservice() {
  return (
    <section id="#service" className={styles.ourserviceSection}>
      <div className={styles.ourservice}>
        <div className={styles.ourserviceContent}>
          <div className={styles.ourserviceDes}>
            <p>{`HOW WE WORK`}</p>
          </div>
          <div className={styles.ourserviceTitle}>
            <h1>{`Let’s See How Creative Work`}</h1>
          </div>
        </div>
        <div className={styles.ourserviceList}>
          <div className={styles.ourserviceItem}>
            <div className={styles.ourserviceItemContent}>
              <div className={styles.ourserviceItemNum}>
                <Image src={Num1} alt="" />
              </div>
              <div className={styles.ourserviceItemTitle}>
                <h1>{`Exchange ideas`}</h1>
              </div>
              <div className={styles.ourserviceItemDes}>
                <p>
                  {`After getting a brief explanation from the client, we brainstormed something valuable to solve the problem
                and then sketch step`}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.ourserviceItem}>
            <div className={styles.ourserviceItemContent}>
              <div className={styles.ourserviceItemNum}>
                <Image src={Num2} alt="" />
              </div>
              <div className={styles.ourserviceItemTitle}>
                <h1>{`Sketching`}</h1>
              </div>
              <div className={styles.ourserviceItemDes}>
                <p>
                  {`We got an idea, after that we started sketching and prototyping and, we always pay attention to small things related to solving complex problems and running tests to get Big results`}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.ourserviceItem}>
            <div className={styles.ourserviceItemContent}>
              <div className={styles.ourserviceItemNum}>
                <Image src={Num4} alt="" />
              </div>
              <div className={styles.ourserviceItemTitle}>
                <h1>{`Designing`}</h1>
              </div>
              <div className={styles.ourserviceItemDes}>
                <p>
                  {`We help your business  to help get everything possible done to make sure the "last" chance for a peaceful development of the revolution, it help by the presentation`}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.ourserviceItem}>
            <div className={styles.ourserviceItemContent}>
              <div className={styles.ourserviceItemNum}>
                <Image src={Num3} alt="" />
              </div>
              <div className={styles.ourserviceItemTitle}>
                <h1>{`Presentation`}</h1>
              </div>
              <div className={styles.ourserviceItemDes}>
                <p>
                  {`Conceptual models are best thought of as design-tools – a way for designers to straighten out and simplify the design and match it to the users' task-domain, thereby making it clearer to users how they should think about the application.`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Stroke}>
          <Image src={Stroke} alt="" />
        </div>
      </div>
    </section>
  );
}
export default Ourservice;
