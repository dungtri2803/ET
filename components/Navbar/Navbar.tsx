import { Divide as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/images/logo1.png";
import Logo1 from "../../public/images/logo.png";
import styles from "../../styles/NavBar.module.scss";
import Menu from "../../public/images/menu.png";
import Close from "../../public/images/x.png";
import {BsX} from "react-icons/bs";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  return (
    // <Router>
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>
      <Link href="/"><Image src={Logo} alt="Logo" /></Link>
      </div>
      <ul className={sideBar  ? styles.menu : styles.listMenu}>
        <li className={styles.itemMenuLogo}>
            <Image src={Logo1} alt="Logo" />
        </li>
        <li className={styles.itemMenu}>
          <Link href="/">{`Home`}</Link>
        </li>
        <li className={styles.itemMenu}>
          <Link href="/our-team">{`Our Team`}</Link>
        </li>
        <li className={styles.itemMenu}>
          <Link href="/our-project">{`Our Service`}</Link>
        </li>
        <li className={styles.itemMenu}>
          <Link href="/blog">{`Blog`}</Link>
        </li>
        <li className={styles.itemMenu}>
          <Link href="/career">{`Career`}</Link>
        </li>
        <li className={styles.itemMenu}>
          <button>{`Contact us`}</button>
        </li>
      </ul>
      <div className={styles.HeaderMenuBar}>
      <button onClick={() => setSideBar(!sideBar)}>
            {sideBar ? (
              <BsX className={styles.close}/>
            ) : (
              <Image src={Menu} alt="" />
            )}
          </button>
      </div>
    </div>
    // </Router>
  );
}

export default Navbar;
