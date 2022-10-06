import React, { useState } from "react";
import styles from "../../styles/Modal.module.scss";
import Cv from "../../public/images/cv.png";
import Load from "../../public/images/load2.png";
import { BsX } from "react-icons/bs";
import Image from "next/image";
import Icon from "../../public/images/icon2.png";
import { UploadOutlined } from "@ant-design/icons";

import { BsCloudArrowUp } from "react-icons/bs";
import type { UploadProps } from "antd";
import { Button, message, Upload, Alert } from "antd";
function ModalCareer({ CloseModal, CloseE }: any) {
  const props: UploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
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
    <section className={styles.ModalCareerSection} onClick={CloseE}>
      <div className={styles.ModalCareer}>
        <div className={styles.CareerForm}>
          <form className={styles.CareerFormMain}>
            <div className={styles.CareerX} onClick={() => CloseModal(false)}>
              <BsX />
            </div>
            <div className={styles.CareerFormTitle}>
              <p>{` Join ExcelTech, today.`}</p>
            </div>
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
            <div className={styles.CareerApplyBtn}>
              <button>{`Send`}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ModalCareer;
