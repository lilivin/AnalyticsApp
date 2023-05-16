import styles from "./index.module.scss";
import Logo from "../../assets/logo.png";
import MailIcon from "../../assets/mail-icon.svg";
import PhoneIcon from "../../assets/phone-icon.svg";
import { NavLink } from "react-router-dom";
import Hamburger from "./components/hamburger";
import { Dispatch, SetStateAction } from "react";

function Navigation(props: {
  setIsOpen: (arg: boolean) => void;
  isOpen: boolean;
}) {
  const { setIsOpen, isOpen } = props;
  return (
    <div className={styles.navigation}>
      <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className={`${styles.asideNav} ${isOpen && styles.open}`}>
        <div className={styles.logo}>
          <img src={Logo} alt="App Logo" />
          <h3 className={styles.header}>VisData</h3>
        </div>
        <ul className={`${styles.list}`}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/"
            >
              Screen 1
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/screen-1"
            >
              Screen 2
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/screen-2"
            >
              Screen 3
            </NavLink>
          </li>
        </ul>
        <ul className={styles.contact}>
          <li>
            <img src={PhoneIcon} alt="Phone Icon" />
            <span>+48 555 555 555</span>
          </li>
          <li>
            <img src={MailIcon} alt="Mail Icon" />
            <span>visdata@contact.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
