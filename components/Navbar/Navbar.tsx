import React,{ useState} from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.scss"


function Navbar(){

    return (
        <>
        <div className={styles.navbar}>

            <ul className={styles.listMenu}>
              <li className={styles.itemMenu}>{`Home`}</li>
              <li className={styles.itemMenu}>{`Our Team`}</li>
              <li className={styles.itemMenu}>{`Our Service`}</li>
              <li className={styles.itemMenu}>{`Career`}</li>
              <li className={styles.itemMenu}>{`Contact`}</li>
            </ul>
           
          </div>
        </>
    )
}

export default Navbar