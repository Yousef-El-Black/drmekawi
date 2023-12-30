import Redirect from "./pages/Redirect";
import Home from "./pages/en/Home/Home";
import HomeAR from "./pages/ar/Home/HomeAR";
import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    path: "/ar",
    element: <HomeAR />,
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
