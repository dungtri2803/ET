import React from "react";
import Image from "next/Image";
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
            <p>HOW WE WORK</p>
          </div>
          <div className={styles.ourserviceTitle}>
            <h1>Let’s See How Creative Work</h1>
          </div>
        </div>
        <div className={styles.ourserviceList}>
          <div className={styles.ourserviceItem}>
            <div className={styles.ourserviceItemNum}>
              <Image src={Num1} alt="" />
            </div>
            <div className={styles.ourserviceItemTitle}>
              <h1>Exchange ideas</h1>
            </div>
            <div className={styles.ourserviceItemDes}>
              <p>
                After getting a brief explanation from the client, we<br/>
                brainstormed something valuable to solve the problem<br/> 
                and then sketch step
              </p>
            </div>
          </div>
          <div className={styles.ourserviceItem}>
            <div className={styles.ourserviceItemNum}>
              <Image src={Num2} alt="" />
            </div>
            <div className={styles.ourserviceItemTitle}>
              <h1>Sketching</h1>
            </div>
            <div className={styles.ourserviceItemDes}>
              <p>
                We got an idea, after that we started sketching and<br/> 
                prototyping and, we always pay attention to small things<br/> 
                related to solving complex problems and running tests to get<br/> 
                Big results
              </p>
            </div>
          </div>
          <div className={styles.ourserviceItem}>
            <div className={styles.ourserviceItemNum}>
              <Image src={Num3} alt="" />
            </div>
            <div className={styles.ourserviceItemTitle}>
              <h1>Designing</h1>
            </div>
            <div className={styles.ourserviceItemDes}>
              <p>
                Conceptual models are best thought of as design-tools – a way<br/>
                for designers to straighten out and simplify the design and<br/>
                match it to the users' task-domain, thereby making it clearer to<br/> 
                users how they should think about the application.
              </p>
            </div>
          </div>
          <div className={styles.ourserviceItem}>
            <div className={styles.ourserviceItemNum}>
              <Image src={Num4} alt="" />
            </div>
            <div className={styles.ourserviceItemTitle}>
              <h1>Presentation</h1>
            </div>
            <div className={styles.ourserviceItemDes}>
              <p>
                We help your business to help get everything possible done to<br/>
                make sure the "last" chance for a peaceful development of the<br/>
                revolution, it help by the presentation
              </p>
            </div>
          </div>
        </div>
        <div className={styles.Stroke}>
            <Image src={Stroke} alt=""/>
        </div>
      </div>

    </section>
  );
}
export default Ourservice;
