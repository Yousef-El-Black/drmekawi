import Redirect from "./pages/Redirect";
import Home from "./pages/en/Home/Home";
import HomeAR from "./pages/ar/Home/HomeAR";
import AboutAR from "./pages/ar/About/AboutAR";
import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/en/About/About";
import Videos from "./pages/en/Videos/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Redirect />,
  },
  {
    path: "/en",

    element: <Home />,
  },
  {
    path: "/en/aboutus",
    element: <About />,
  },
  {
    path: "/ar",
    element: <HomeAR />,
  },
  {
    path: "/ar/aboutus",
    element: <AboutAR />,
  },
  {
    path: "/en/videos",
    element: <Videos />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
