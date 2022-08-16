import React from "react";
import Image from "next/image";
import myGif from "../../public/images/Final.gif";
import styles from "../../styles/Loading.module.scss"
function Loading() {

  return (
    <section id="#loading" className={styles.LoadingSection}>
      <div className={styles.Loading}>
        <Image src={myGif} alt="" />
      </div>

    </section>

  );
}

export default Loading;
