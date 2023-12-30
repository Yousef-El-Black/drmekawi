import { useEffect, useState } from "react";
import "./preloader.scss";

const Preloader = ({isLoading}:{isLoading: boolean}) => {
  const [activePreloader, setActivePreloader] = useState<boolean>(true);

  useEffect(() => {
    setActivePreloader(false);
  }, []);

  return (
    <div className={`preloader ${isLoading? "active" : ""}`}>
      <img src="assets/logo.webp" alt="" />
    </div>
  );
};

export default Preloader;
