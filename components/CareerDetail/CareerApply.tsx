import React from "react";
import Image from "next/image";
import styles from "../../styles/CareerDetail.module.scss";
import Navbar from "../Navbar/Navbar.ChangeColor";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import Icon from "../../public/images/icon2.png";
import Cv from "../../public/images/cv.png";
import Load from "../../public/images/load2.png";
import { BsX } from "react-icons/bs";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
function CareerApply() {
  const props: UploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} failed`);
      }
    },
    progress: {
      strokeColor: {
        "0%": "#1CBED2",
        "100%": "#1CBED2",
      },
      strokeWidth: 5,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  return (
    <section className={styles.CareerApplySection}>
      <div className={styles.CareerApply}>
        <Navbar />
        <div className={styles.CareerApplyIcon}>
          <Link href="/career-detail">
            <button>
              <BsArrowLeft />
            </button>
          </Link>
          <p>{`BACK TO CAREER`}</p>
        </div>
        <div className={styles.CareerForm}>
          <div className={styles.CareerFormTitle}>
            <p>{` Join ExcelTech, today.`}</p>
          </div>
          <form className={styles.CareerFormMain}>
            <div className={styles.CareerFormItem}>
              <label>{`Job title *`}</label>
              <input type="text" />
            </div>
            <div className={styles.CareerFormItem}>
              <label>{`Full Name *`}</label>
              <input type="text" placeholder="Cece Nguyen" />
            </div>
            <div className={styles.CareerFormItem}>
              <label>{`Email *`}</label>
              <input type="text" placeholder="huyennguyen26162@gmail.com" />
            </div>
            <div className={styles.CareerFormItem}>
              <label>{`Description `}</label>
              <input
                type="text"
                placeholder="Looking forward to hear from you soon."
              />
            </div>
            <div className={styles.CareerFormItemCV}>
              <label>{`Attach CV / Portfolio *`}</label>
              <Upload
               
                {...props}
              >
                <div className={styles.CareerText}>
                  <div className={styles.CareerIcon}>
                    <Image src={Icon} alt="" />
                  </div>
                  <div className={styles.CareerFile}>
                    {<p>{`Drag & Drop or Browse Files`}</p>}
                  </div>
                </div>
              </Upload>
              {/* <div className={styles.CareerCvUp}>
                <div className={styles.CareerIconCV}>
                  <Image src={Cv} alt="" />
                </div>
              </div> */}
            </div>
            
          </form>
        </div>
        <div className={styles.CareerApplyBtn}>
          <button>{`Send`}</button>
        </div>
      </div>
    </section>
  );
}

export default CareerApply;
