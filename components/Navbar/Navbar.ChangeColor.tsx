import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsX } from "react-icons/bs";
import Logo1 from "../../public/images/logo1.png";
import Menu from "../../public/images/menu.png";
import styles from "../../styles/NavbarColor.module.scss";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ModalContact from "../ModalContact/ModalContact";
import { useRouter } from "next/router";
function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    // <Router>
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Link href="/">
            <Image src={Logo1} alt="Logo" />
          </Link>
        </div>
        <ul className={sideBar ? styles.menu : styles.listMenu}>
          <li className={styles.itemMenuLogo}>
            <Image src={Logo1} alt="Logo" />
          </li>
          <li
            className={
              currentRoute === "/" ? styles.ItemMenuActive : styles.itemMenu
            }
          >
            <Link href="/">{`Home`}</Link>
          </li>
          <li
            className={
              currentRoute === "/our-team"
                ? styles.ItemMenuActive
                : styles.itemMenu
            }
          >
            <Link href="/our-team">{`Our Team`}</Link>
          </li>
          <li
            className={
              currentRoute === "/our-project"
                ? styles.ItemMenuActive
                : styles.itemMenu
            }
          >
            <Link href="/our-project">{`Our Service`}</Link>
          </li>
          <li
            className={
              currentRoute === "/blog" ? styles.ItemMenuActive : styles.itemMenu
            }
          >
            <Link href="/blog">{`Blog`}</Link>
          </li>
          <li
            className={
              currentRoute === "/career"
                ? styles.ItemMenuActive
                : styles.itemMenu
            }
          >
            <Link href="/career">{`Career`}</Link>
          </li>
          <li className={styles.itemMenuBtn}>
            <button onClick={() => setShowModal(true)}>{`Contact us`}</button>
          </li>
        </ul>
        <div className={styles.HeaderMenuBar}>
          <button onClick={() => setSideBar(!sideBar)}>
            {sideBar ? (
              <BsX className={styles.close} />
            ) : (
              <Image src={Menu} alt="" />
            )}
          </button>
        </div>
      </div>
      {showModal && <ModalContact closeModal={setShowModal} />}
    </>
    // </Router>
  );
}

export default Navbar;
