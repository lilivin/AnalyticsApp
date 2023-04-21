import Navigation from "../navigation";
import styles from "./index.module.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function Layout() {
  return (
    <div className={styles.app}>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
