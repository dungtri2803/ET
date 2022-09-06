import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsX } from "react-icons/bs";
import Logo1 from "../../public/images/logo.png";
import Menu from "../../public/images/menu.png";
import styles from "../../styles/NavbarChange.module.scss";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  return (
    // <Router>
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Image src={Logo1} alt="Logo" />
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
