import "./home.scss";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useEffect, useState } from "react";
import Preloader from "../../../components/Preloader/Preloader";
import Footer from "../../../components/Footer/Footer";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isIframeOpen, setIsIframeOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className="home">
      <Preloader isLoading={isLoading}/>
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
                  <div className="menuLang">
                    <LanguageIcon />
                    {/* Ar to En TOGGLE */}
                    <span>ar</span>
                  </div>
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
                      to={"https://www.youtube.com/c/imekawi"}
                      target="_blanc"
                      className="instagram"
                    >
                      <InstagramIcon fontSize="large" />
                    </Link>
                    <Link
                      to={"https://www.instagram.com/imekawi/"}
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
              <Link to={"/ar"} className="lang">
                <LanguageIcon />
                {/* Ar to En TOGGLE */}
                <span >ar</span>
              </Link>
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
        <div className="content">
          <div className="container">
            <div className="text">
              <h2>Stay in your Position, I'll keep it!</h2>
              <p>
                If you have a problem or want to improve yourself or your
                health, or you have a problem and need an expert to advise you,
                now you can contact Makkawi personally and ask him everything
                you want, and he will answer all your questions.
              </p>
            </div>
            <div className="subscribe">
              <div className="btn">
                <button>Individual training (Once)</button>
                <span>
                  Video call between you and Mekawi, Just both of you.
                </span>
              </div>
              <a href={"#howToSubscribe"}>How to Subscribe!</a>
            </div>
            <form>
              <input
                type="email"
                placeholder="Write your Email for new Offers"
                required
                name="email"
              />
              <button>Send</button>
            </form>
          </div>
        </div>
        <div className="socialLinks">
          <Link
            to={"https://www.facebook.com/imekawii/"}
            target="_blanc"
            className="facebook"
          >
            <FacebookIcon />
          </Link>
          <Link
            to={"https://twitter.com/imekawii"}
            target="_blanc"
            className="twitter"
          >
            <TwitterIcon />
          </Link>
          <Link
            to={"https://www.youtube.com/c/imekawi"}
            target="_blanc"
            className="instagram"
          >
            <InstagramIcon />
          </Link>
          <Link
            to={"https://www.instagram.com/imekawi/"}
            target="_blanc"
            className="youtube"
          >
            <YouTubeIcon />
          </Link>
        </div>
        <Link
          to={"https://api.whatsapp.com/send/?phone=201153777186"}
          target="_blanc"
          className="help"
        >
          <WhatsAppIcon fontSize="large" />
          <span>Ask For Help!</span>
        </Link>
      </section>
      <section id="howToSubscribe" className="howToSubscribe">
        <div className="head">
          <h3>How To Subscribe</h3>
          <hr />
        </div>
        <div className="body">
          <div className="thunbnail" onClick={() => setIsIframeOpen(true)}>
            <img src="assets/howtosubscribethunbnail.webp" alt="" />
            <PlayCircleOutlineIcon fontSize="large" />
          </div>
        </div>
        <div className={`subscribeVideo ${isIframeOpen ? "active" : ""}`}>
          <iframe
            title="How To Subscribe"
            src="https://www.youtube.com/embed/FI4qUN2cxG8"
          ></iframe>
          <div
            className="subscribeOverlay"
            onClick={() => setIsIframeOpen(false)}
          ></div>
          <div
            className="subscribeClose"
            onClick={() => setIsIframeOpen(false)}
          >
            <CloseIcon />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
