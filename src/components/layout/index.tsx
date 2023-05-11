import { useState } from "react";
import Navigation from "../navigation";
import styles from "./index.module.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.app}>
      <div className={styles.navigation}>
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
