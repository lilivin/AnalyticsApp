import styles from "./App.module.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/navigation";
import Homepage from "./pages/Homepage";
import Screen1 from "./pages/Screen1";
import Layout from "./components/layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/screen-1",
          element: <Screen1 />,
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
