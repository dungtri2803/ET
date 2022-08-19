import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.scss";
import MenuBar from "../../public/images/menu.png";
import Close from "../../public/images/x.png";
import Logo from "../../public/images/logo.png";
import OurteamDetail from "../OurteamDetail/OurteamDetail";
import OurprojectDetail from "../OurprojectDetail/OurprojectDetail";
import  Link  from "next/link"
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  return (
    // <Router>
      <div className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Image src={Logo} alt="Logo" />
        </div>
        <ul className={sideBar ? styles.menu : styles.listMenu}>
          <li className={styles.itemMenu}>
            <Link href="/">{`Home`}</Link>
          </li>
          <li className={styles.itemMenu}>
            <Link href="/Our-team">{`Our Team`}</Link>
          </li>
          <li className={styles.itemMenu}>
            <Link href="/Our-project">{`Our Service`}</Link>
          </li>
          <li className={styles.itemMenu}>
            <Link href="/Career">{`Career`}</Link>
          </li>
          <li className={styles.itemMenu}>
            <Link href="/Contact">{`Contact`}</Link>
          </li>
        </ul>
        <div className={styles.HeaderMenuBar}>
          <button onClick={() => setSideBar(!sideBar)}>
            {sideBar ? (
              <Image src={Close} alt="" className={styles.close} />
            ) : (
              <Image src={MenuBar} alt="" />
            )}
          </button>
        </div>
      </div>
    // </Router>
  );
}

export default Navbar;
