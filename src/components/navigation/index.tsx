import styles from "./index.module.scss";
import Logo from "../../assets/logo.png";
import MailIcon from "../../assets/mail-icon.svg";
import PhoneIcon from "../../assets/phone-icon.svg";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className={styles.navigation}>
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
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/screen-1"
          >
            Screen 1
          </NavLink>
        </li>
      </ul>
      <ul className={styles.contact}>
        <li><img src={PhoneIcon} alt="Phone Icon" /><span>+48 555 555 555</span></li>
        <li><img src={MailIcon} alt="Mail Icon" /><span>visdata@contact.com</span></li>
      </ul>
    </div>
  );
}

export default Navigation;
