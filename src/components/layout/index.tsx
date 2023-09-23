import { useRef, useState } from "react";
import Navigation from "../navigation";
import styles from "./index.module.scss";
import { Outlet } from "react-router-dom";
import { useOutsideNavigationClick } from "../../helpers/useOutsideNavigationClick";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const navigationRef = useRef(null);
  useOutsideNavigationClick(navigationRef, setIsOpen);
  return (
    <div className={styles.app}>
      <div ref={navigationRef} className={`${styles.navigation} ${isOpen ? styles.open : ""}`}>
        <Navigation setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <div className={styles.content}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
