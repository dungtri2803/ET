import React from "react";
import Image from "next/image";
import styles from "../../styles/CareerDetail.module.scss";
import Navbar from "../Navbar/Navbar.ChangeColor";
import {BsArrowLeft} from "react-icons/bs";
import Link from "next/link";

function CareerDetail() {
  return (
    <section className={styles.CareerDetailSection}>
      <div className={styles.CareerDetail}>
        <Navbar />
        <div className={styles.CareerDetailIcon}>
        <Link href="/career"><button><BsArrowLeft /></button></Link>
            <p>{`BACK TO CAREER`}</p>
        </div>
        <div className={styles.CareerDetailContent}>
          <p>{`Fullstack (Javascript/Nodejs/Reactjs)`}</p>
          <div className={styles.CareerJobItemDesD}>
            <p>{`Full-time / Ho Chi Minh City`}</p>
          </div>
        </div>
        <div className={styles.CareerJobContentDetail}>
          <div className={styles.CareerJobContentDetailGr}>
            <ul className={styles.CareerRequest}>
              <p>{`Request`}</p>
              <li>
                {`Position Level:`}
                <span>{`Junior`}</span>
              </li>
              <li>
                {`Reporting to:`}
                <span>{`Team Leader`}</span>
              </li>
              <li>
                {`Salary:`}
                <span>{`Negotiable`}</span>
              </li>
              <li>
                {`Working Location and Hours:`}
                <span>{`District 4, Ho Chi Minh City, Vietnam Mon-Fri (8.30 AM - 5.30 PM)`}</span>
              </li>
            </ul>
            <ul className={styles.CareerResponsibilities}>
              <p>{`Responsibilities`}</p>
              <li>{`Create modern, high performance, smooth animation applications with ReactJS, NextJs, React native;`}</li>
              <li>{`Ensure cross-browser, cross-device performance, compatibility and responsiveness;`}</li>
              <li>{`Optimize application for maximum speed and scalability;`}</li>
              <li>{`Ability to work independently as well as in a team;`}</li>
              <li>{`Keep up with the latest development techniques and security practices;`}</li>
              <li>{`Work closely with UX Designer to ensure optimal implementation of User Interfaces.`}</li>
            </ul>
          </div>

          <ul className={styles.CareerHigh}>
            <p>{`Highly desirable skills and competences`}</p>
            <li>{`1-3 years of experience with or proficiency with web services, CSS3, AJAX, JavaScript,`}</li>
            <li>{`HTML5`}</li>
            <li>{`Experienced with React or Angular, JQuery, Bootstrap`}</li>
            <li>{`At least 1 years of experience with Agile/Scrum methodologies is a plus.`}</li>
            <li>{`Experience building fast and efficient web applications`}</li>
            <li>{`Experience integrating REST API to front end components`}</li>
            <li>{`Ability to build high performing applications is a plus`}</li>
            <li>{`Ability to work in a fast-paced and agile development environment`}</li>
            <li>{`Attention to detail, with the ability to work independently in an ambiguous and fast-paced environment`}</li>
            <li>{`Good planning, coordination and communication skills`}</li>
          </ul>
          <ul className={styles.CareerBenefit}>
            <p>{`Benefits and welfare`}</p>
            <li>{`3th-month salary`}</li>
            <li>{`Social insurance contributions following your gross salary (100%)`}</li>
            <li>{`Premium Private Health Insurance (PVI)`}</li>
            <li>{`Company trip once a year`}</li>
            <li>{`Company activities (English Club, workshop, etc.)`}</li>
            <li>{`Yearly salary review`}</li>
            <li>{`Other welfare is in accordance with Vietnam labor regulations`}</li>
          </ul>
        </div>
        <div className={styles.CareerBtn}>
             <Link href="/career-apply"><button>{`Apply`}</button></Link>
        </div>
      </div>
    </section>
  );
}

export default CareerDetail;
