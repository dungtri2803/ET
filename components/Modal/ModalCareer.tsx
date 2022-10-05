import React, { useState } from "react";
import styles from "../../styles/Modal.module.scss";
import Cv from "../../public/images/cv.png";
import Load from "../../public/images/load2.png";
import { BsX } from "react-icons/bs";
import Image from "next/image";
import Icon from "../../public/images/icon2.png";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPEG", "PNG", "GIF"];
function ModalCareer({ CloseModal, CloseE }: any) {
  const [file, setFile] = useState(null);
  const handleChange = (file: any) => {
    setFile(file);
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
              <FileUploader
                multiple={true}
                handleChange={handleChange}
                name="file"

                className={styles.Career}
              />
              <div className={styles.CareerCvUp}>
              <div className={styles.CareerIconCV}>
              <Image src={Cv} alt="" />
              </div>

              <p>{file ? `${file[0].name}` : "No files uploaded"}</p>
              </div>

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
