import "./home.scss";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="header">
          <div className="container">
            <div className={`menu ${isMenuOpen ? "active" : ""}`}>
              <div
                className={`hamburger ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="menuBody">
                <div className={`menuLinks ${isMenuOpen ? "active" : ""}`}>
                  <ul>
                    <Link to={"/en/aboutus"}>
                      <li>About Us</li>
                    </Link>
                    <Link to={"/en/videos"}>
                      <li>Our Videos</li>
                    </Link>
                    <Link to={"/en/favproducts"}>
                      <li>Favorite Products</li>
                    </Link>
                  </ul>
                  <hr />
                  <div className="menuLang">
                    <LanguageIcon />
                    {/* Ar to En TOGGLE */}
                    <span>ar</span>
                  </div>
                </div>
                <div
                  className={`menuOverlay ${isMenuOpen ? "active" : ""}`}
                  onClick={toggleMenu}
                ></div>
              </div>
            </div>
            <div className="logo">
              <img src="assets/logo.webp" alt="" className="logo" />
            </div>
            <div className="links">
              <ul>
                <Link to={"/en/aboutus"}>
                  <li>About Us</li>
                </Link>
                <Link to={"/en/videos"}>
                  <li>Our Videos</li>
                </Link>
                <Link to={"/en/favproducts"}>
                  <li>Favorite Products</li>
                </Link>
              </ul>
              <div className="lang">
                <LanguageIcon />
                {/* Ar to En TOGGLE */}
                <span>ar</span>
              </div>
            </div>
          </div>
        </div>
        <div className="backvideo">
          <video
            src="assets/hero-mekawi.mp4"
            muted
            controls={false}
            autoPlay
            loop
          ></video>
          <div className="overlay"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
