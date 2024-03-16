import Redirect from "./pages/Redirect";
import Home from "./pages/en/Home/Home";
import HomeAR from "./pages/ar/Home/HomeAR";
import AboutAR from "./pages/ar/About/AboutAR";
import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/en/About/About";
import Videos from "./pages/en/Videos/Videos";
import VideosAR from "./pages/ar/Videos/VideosAR";
import FavProducts from "./pages/en/FavoriteProducts/FavProducts";
import FavProductsAR from "./pages/ar/FavoriteProducts/FavProductsAR";
import SingleConsultation from "./pages/en/SingleConsultation/SingleConsultation";

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
  {
    path: "/ar/videos",
    element: <VideosAR />,
  },
  {
    path: "/en/favproducts",
    element: <FavProducts />,
  },
  {
    path: "/ar/favproducts",
    element: <FavProductsAR />,
  },
  {
    path: "/en/single-consultation",
    element: <SingleConsultation/>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
