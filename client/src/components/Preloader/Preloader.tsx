import { useEffect, useState } from "react";
import "./preloader.scss";

const Preloader = () => {
  const [activePreloader, setActivePreloader] = useState<boolean>(true);

  useEffect(() => {
    setActivePreloader(false);
  }, []);

  return (
    <div className={`preloader ${activePreloader ? "active" : ""}`}>
      <img src="assets/logo.webp" alt="" />
    </div>
  );
};

export default Preloader;
