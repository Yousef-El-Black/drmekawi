import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();

  return (
    <header className="header">
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
          <div className={`menuBody ${isMenuOpen ? "active" : ""}`}>
            <div
              className={`closeMenu ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <CloseIcon fontSize="large" />
            </div>
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
              <Link
                to={location.pathname.replace("/en/", "/ar/")}
                className="menuLang"
              >
                <LanguageIcon />
                {/* Ar to En TOGGLE */}
                <span>ar</span>
              </Link>
              <hr />
              <div className="menuSocialLinks">
                <Link
                  to={"https://www.facebook.com/imekawii/"}
                  target="_blanc"
                  className="facebook"
                >
                  <FacebookIcon fontSize="large" />
                </Link>
                <Link
                  to={"https://twitter.com/imekawii"}
                  target="_blanc"
                  className="twitter"
                >
                  <TwitterIcon fontSize="large" />
                </Link>
                <Link
                  to={"https://www.instagram.com/imekawi/"}
                  target="_blanc"
                  className="instagram"
                  >
                  <InstagramIcon fontSize="large" />
                </Link>
                <Link
                  to={"https://www.youtube.com/c/imekawi"}
                  target="_blanc"
                  className="youtube"
                >
                  <YouTubeIcon fontSize="large" />
                </Link>
              </div>
            </div>
            <div
              className={`menuOverlay ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            ></div>
          </div>
        </div>
        <Link to={"/en"} className="logo">
          <img src="/assets/logo.webp" alt="" className="logo" />
        </Link>
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
          <Link to={location.pathname.replace("/en/", "/ar/")} className="lang">
            <LanguageIcon />
            {/* Ar to En TOGGLE */}
            <span>ar</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
