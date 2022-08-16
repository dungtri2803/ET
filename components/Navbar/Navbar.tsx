import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.scss";
import MenuBar from "../../public/images/menu.png";
import Logo from "../../public/images/logo.png";
import Close from "../../public/images/x.png";

function Navbar() {
    const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <div className={styles.navbarLogo}>
        <Image src={Logo} alt="Logo" />
      </div>
      <ul className={sideBar ? styles.menu : styles.listMenu}>
        <li className={styles.itemMenu}>{`Home`}</li>
        <li className={styles.itemMenu}>{`Our Team`}</li>
        <li className={styles.itemMenu}>{`Our Service`}</li>
        <li className={styles.itemMenu}>{`Career`}</li>
        <li className={styles.itemMenu}>{`Contact`}</li>
      </ul>
      <div className={styles.HeaderMenuBar}>
              <button onClick={() => setSideBar(!sideBar)}>
                {sideBar ? <Image src={Close} alt="" className={styles.close}/> : <Image src={MenuBar} alt="" />  }
              </button>
            </div>
    </>
  );
}

export default Navbar;
