import "./homear.scss";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useState, useEffect } from "react";
import Preloader from "../../../components/Preloader/Preloader";
import Footer from "../../../components/Footer/Footer";

const HomeAR = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isIframeOpen, setIsIframeOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="homear">
      <Preloader isLoading={isLoading} />
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
                <Link to={"/ar/aboutus"}>
                  <li>مين مكاوي</li>
                </Link>
                <Link to={"/ar/videos"}>
                  <li>الفيديوهات</li>
                </Link>
                <Link to={"/ar/favproducts"}>
                  <li>المنتجات المفضله</li>
                </Link>
              </ul>
              <Link to={"/en"} className="lang">
                <LanguageIcon />
                {/* Ar to En TOGGLE */}
                <span>en</span>
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
              <h2>خليك على وضعك غصب عنك!</h2>
              <p>
                لو عندك مشكله او عايز تحسن من نفسك او صحتك او عايز حد ينصحك تقدر
                دلوقتي تتواصل مع مكاوي شخصيا وتسأله اللي انت عايزه وهو هيجاوب
                على كل اسئلتك.
              </p>
            </div>
            <div className="subscribe">
              <div className="btn">
                <button>التدريب الفردي (مره واحده)</button>
                <span>مكالمه فيدبو بينك وبين مكاوي فقط</span>
              </div>
              <a href={"#howToSubscribe"}>لمعرفه طريقه الاشتراك</a>
            </div>
            <form>
              <input
                type="email"
                placeholder="اكتب بريدك الالكتروني لتلقي كل جديد"
                required
                name="email"
              />
              <button>ارسال</button>
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
          <span>للمساعده</span>
        </Link>
      </section>
      <section id="howToSubscribe" className="howToSubscribe">
        <div className="head">
          <h3>طريقه الاشتراك</h3>
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

export default HomeAR;
