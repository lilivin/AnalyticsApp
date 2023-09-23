import styles from "./App.module.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Screen1 from "./pages/Screen1";
import Layout from "./components/layout";
import Screen2 from "./pages/Screen2";
import Screen3 from "./pages/Screen3";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Screen1 />,
        },
        {
          path: "/screen-1",
          element: <Screen2 />,
        },
        {
          path: "/screen-2",
          element: <Screen3 />,
        },
      ],
    },
  ]);
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
