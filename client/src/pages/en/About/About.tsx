import Header from "../../../components/en/Header/Header";
import Preloader from "../../../components/Preloader/Preloader";
import "./about.scss";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Footer from "../../../components/Footer/Footer";

const About = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const sliderImages = [
    { path: "/assets/images/imekawi-20231230-0012.jpg" },
    { path: "/assets/images/imekawi-20231230-0020.jpg" },
    { path: "/assets/images/imekawi-20231230-0026.jpg" },
    { path: "/assets/images/imekawi-20231230-0032.jpg" },
    { path: "/assets/images/imekawi-20231230-0037.jpg" },
    { path: "/assets/images/imekawi-20231230-0049.jpg" },
    { path: "/assets/images/imekawi-20231230-0062.jpg" },
    { path: "/assets/images/imekawi-20231230-0081.jpg" },
    { path: "/assets/images/imekawi-20231230-0105.jpg" },
  ];

  const testmonialsItems = [
    {
      user: "Ethan Jensen",
      rating: 5,
      text: "eaten aboard pale rabbit due take feature statement particular driver lamp cold score cannot monkey he major get concerned name alone until potatoes tired",
    },
    {
      user: "Katie Hill",
      rating: 1,
      text: "route present summer exact massage poor tropical attack because before hot however from degree never somehow became until compound who capital reason bat accept",
    },
    {
      user: "Louis Fields",
      rating: 5,
      text: "front may thing farm character on person little agree discuss flew means hill any inside continent vegetable since money drop symbol carefully thought door",
    },
    {
      user: "Francis Castro",
      rating: 3,
      text: "laid planned time taste turn noun earlier baseball game movie take won uncle writer among chief large additional funny machine quickly coffee vote count",
    },
    {
      user: "Bryan Fisher",
      rating: 3,
      text: "complete dig think radio heat above happily rapidly beautiful excited wrong advice up look compound heart chart got connected copper announced dug settlers gasoline",
    },
    {
      user: "Lois Dean",
      rating: 2,
      text: "pilot die later lady well entire arm early swim roar afraid poet control fine fell telephone bigger worry bread bark whole victory huge change",
    },
    {
      user: "Albert Garrett",
      rating: 3,
      text: "some since scene grade locate electricity wool back ring fifth command society open told bend highway rock increase hot lucky moment railroad blood follow",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const changeSlide = (num: number) => {
    if (activeSlide + num >= sliderImages.length) {
      setActiveSlide(0);
    } else if (activeSlide + num < 0) {
      setActiveSlide(sliderImages.length - 1);
    } else {
      setActiveSlide(activeSlide + num);
    }
  };

  const buttonVariants = {
    initial: {
      y: -100,
    },
    animate: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <div className="about">
      <Preloader isLoading={isLoading} />
      <Header />
      <section className="landing">
        <div className="background">
          <img
            src="/assets/images/imekawi-20231230-0013.jpg"
            alt="About Landing Img 1"
          />
          <div className="aboutOverlay"></div>
        </div>
        <div className="container">
          <h1>DR Mekawi</h1>
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            animate="animate"
          >
            <a href={"#aboutSection"}>Know More</a>
          </motion.button>
        </div>
      </section>
      <section className="aboutSection" id="aboutSection">
        <div className="container">
          <div className="img">
            <img
              src="/assets/images/imekawi-20231230-0005.jpg"
              alt="Mekawi Slide 1 IMG"
            />
          </div>
          <div className="text">
            <p>
              Mekawi is an entrepreneur and lifestyle doctor who specializes in
              practical training and technical consultations related to
              personality development, external appearance, and professional
              life. He has helped thousands of young people overcome the
              problems and difficulties of their lives to achieve the best
              future for them in professional life, social relationships, and
              aspects of life in general. .
            </p>
          </div>
        </div>
      </section>
      <section className="qoute">
        <div className="container">
          <div className="text">
            <h1>You have no idea what you're capable of until you try!</h1>
            <p>
              We all tend to put others first, but in doing so, we can sometimes
              neglect our relationship with ourselves. Let me be your advocate
              and show you a clearer way to deal with the most important person
              in your life.
            </p>
          </div>
          <div className="slider">
            <div className="sliderContent">
              <div
                className="images"
                style={{ transform: `translate(${activeSlide * -100}%)` }}
              >
                {sliderImages.map((img: { path: string }, index: number) => {
                  return (
                    <img src={img.path} alt={img.path + "Img"} key={index} />
                  );
                })}
              </div>
              <div className="controls">
                <div className="prev" onClick={() => changeSlide(-1)}>
                  <ArrowBackIosIcon />
                </div>
                <div className="next" onClick={() => changeSlide(1)}>
                  <ArrowForwardIosIcon />
                </div>
              </div>
              <div className="bullets">
                {sliderImages.map((_, index) => {
                  return (
                    <span
                      className={activeSlide === index ? "active" : ""}
                      onClick={() => setActiveSlide(index)}
                      key={index}
                    ></span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="channels">
        <div className="channel">
          <div className="container">
            <div className="fside">
              <div className="channelImage">
                <img
                  src="https://yt3.googleusercontent.com/nvfIXF1oMIPFnzNmrVobM71zXfLQCHjmsifcrGbIt_nuWorlnfWuJ0LzMMRQRxM_YZU_bCr0Vw=s176-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div className="heading">
                <h3>Mekawi's Lifestyle </h3>
              </div>
            </div>
            <div className="sside">
              <Link to={"https://www.youtube.com/@mekawi"} target="_blanc">
                <button>View Channel</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="channel">
          <div className="container">
            <div className="fside">
              <div className="channelImage">
                <img
                  src="https://yt3.googleusercontent.com/2vrVIi3EjHyKDAQqqlEvHr5F4FSVslfLMk9tgogkC4cWYZJAxBgzYbumgeZjymgTOnAJP8YS=s176-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div className="heading">
                <h3>Mekawi's Finance</h3>
              </div>
            </div>
            <div className="sside">
              <Link to={"https://www.youtube.com/@imekawii"} target="_blanc">
                <button>View Channel</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="channel">
          <div className="container">
            <div className="fside">
              <div className="channelImage">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIf8zZQeD-8JQuP0nYC-Dt_-xvhFSSJFX0SppWTJIRs02g=s176-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div className="heading">
                <h3>Mekawi</h3>
              </div>
            </div>
            <div className="sside">
              <Link to={"https://www.youtube.com/@Mekawiii"} target="_blanc">
                <button>View Channel</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="successStory">
        <div className="container">
          <div className="head">
            <h3>Sucess Story</h3>
            <hr />
          </div>
          <div className="content">
            <iframe
              src="https://www.youtube.com/embed/KYVRhJz0xHU"
              title="Success Story"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="testmonials">
        <ul>
          {testmonialsItems.map((item, index) => {
            return (
              <li key={index}>
                <div className="head">
                  <div className="name">{item.user}</div>
                  <div className="rating">
                    {item.rating > 0 ? <StarIcon /> : <StarBorderIcon />}
                    {item.rating > 1 ? <StarIcon /> : <StarBorderIcon />}
                    {item.rating > 2 ? <StarIcon /> : <StarBorderIcon />}
                    {item.rating > 3 ? <StarIcon /> : <StarBorderIcon />}
                    {item.rating > 4 ? <StarIcon /> : <StarBorderIcon />}
                  </div>
                </div>
                <p>{item.text}</p>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="sponsors">
        <div className="container">
          <div className="head">
            <h3>Sponsors</h3>
            <hr />
          </div>
          <div className="content">
            <ul>
              <li>
                <img src="/assets/sponsors/company_1.webp" alt="" />
              </li>
              <li>
                <img src="/assets/sponsors/company_2.webp" alt="" />
              </li>
              <li>
                <img src="/assets/sponsors/company_3.webp" alt="" />
              </li>
              <li>
                <img src="/assets/sponsors/company_4.webp" alt="" />
              </li>
              <li>
                <img src="/assets/sponsors/company_5.webp" alt="" />
              </li>
              <li>
                <img src="/assets/sponsors/company_6.webp" alt="" />
              </li>
              <li>
                <img src="/assets/sponsors/company_7.webp" alt="" />
              </li>
              <li>
                <img src="/assets/sponsors/company_8.webp" alt="" />
              </li>
              <li>
                <img src="/assets/sponsors/company_9.webp" alt="" />
              </li>
              <li>
                <img src="/assets/sponsors/company_10.webp" alt="" />
              </li>
              <li>
                <img src="/assets/sponsors/company_11.webp" alt="" />
              </li>
              <li>
                <img src="/assets/sponsors/company_12.webp" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
