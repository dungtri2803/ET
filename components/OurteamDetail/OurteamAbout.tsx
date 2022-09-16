import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/OurteamDetail.module.scss";
import Reg1 from "../../public/images/reg1.png";
import A1 from "../../public/images/a1.png";
import A2 from "../../public/images/a2.png";
import A3 from "../../public/images/a3.png";
import A4 from "../../public/images/a4.png";
import Reg2 from "../../public/images/reg2.png";
import Reg3 from "../../public/images/reg3.png";
import Reg4 from "../../public/images/reg4.png";
import Eles1 from "../../public/images/els.png";
import Eles2 from "../../public/images/els1.png";
// import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
function OurteamAbout() {
  return (
    <section className={styles.OurteamAboutSection}>
      <div className={styles.OurteamAbout}>
        <div className={styles.OurteamAboutContent}>
          <div className={styles.OurteamAboutDes}>
            <p>{`OUR TEAM`}</p>
          </div>
          <div className={styles.OurteamAboutTitle}>
            <h1>{`Let’s See How Creative Work`}</h1>
          </div>
          <div className={styles.OurteamAboutRightMb}>
            <div className={styles.OurteamAboutRightImg10}>
              <Image src={Eles1} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg9}>
              <Image src={Eles1} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg2}>
              <Image src={A1} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg3}>
              <Image src={A2} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg4}>
              <Image src={A3} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg5}>
              <Image src={A4} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg6}>
              <Image src={Reg2} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg7}>
              <Image src={Reg3} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg8}>
              <Image src={Reg4} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.OurteamAboutList}>
          <div className={styles.OurteamAboutLeft}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className={styles.OurteamAboutLeftTitle}>
                    <p>{`Sales & Marketing`}</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.OurteamAboutLeftDes}>
                    <p>
                      {` Directly access to customers and understand the data related . From there, the Marketing department can make clearer and more specific plans to boost sales.`}
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className={styles.OurteamAboutLeftTitle}>
                    <p>{`Operation`}</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.OurteamAboutLeftDes}>
                    <p>
                      {` Guide customers to easily use the software. Moreover, coordinate with related departments to make new plans and increase business efficiency`}
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div className={styles.OurteamAboutLeftTitle}>
                    <p>{`Graphic Design`}</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.OurteamAboutLeftDes}>
                    <p>
                      {` Build company brand, create ideas for product advertisements and support for the company's website and social networks`}
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div className={styles.OurteamAboutLeftTitle}>
                    <p>{`UI/UX Design`}</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.OurteamAboutLeftDes}>
                    <p>
                      {` From business requirements, sketching layouts and styling for software interfaces. Build prototypes to test and develope.`}
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <div className={styles.OurteamAboutLeftTitle}>
                    <p>{`Developement`}</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.OurteamAboutLeftDes}>
                    <p>
                      {`Turn designs into usable software through lines of code. Support optimal surfing speed and build intelligent information system`}
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <div className={styles.OurteamAboutLeftTitle}>
                    <p>{`Quality Control`}</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.OurteamAboutLeftDes}>
                    <p>
                      {`Verify and ensure that the delivered software conforms to the design. Support departments to complete products on time`}
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className={styles.OurteamAboutLeftBtn}>
              <button>{`Join us`}</button>
            </div>
          </div>
          <div className={styles.OurteamAboutRight}>
            <div className={styles.OurteamAboutRightImg10}>
              <Image src={Eles1} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg9}>
              <Image src={Eles1} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg2}>
              <Image src={A1} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg3}>
              <Image src={A2} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg4}>
              <Image src={A3} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg5}>
              <Image src={A4} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg6}>
              <Image src={Reg2} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg7}>
              <Image src={Reg3} alt="" />
            </div>
            <div className={styles.OurteamAboutRightImg8}>
              <Image src={Reg4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurteamAbout;
