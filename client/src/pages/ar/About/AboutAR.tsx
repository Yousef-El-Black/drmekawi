import HeaderAR from "../../../components/ar/Header/HeaderAR";
import Preloader from "../../../components/Preloader/Preloader";
import "./aboutar.scss";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Footer from "../../../components/Footer/Footer";

const AboutAR = () => {
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
      user: "روان عامر",
      rating: 5,
      text: "إليك نصيحة لا غنى عنها من الدكتور لايف ستايل! أتابع محتواه الرائع منذ وقت طويل، ولا يمكنني إلا أن أقول كم أنا ممتنة له على تحفيزه الدائم ومشاركته للمعلومات الصحية القيمة. أعتبر نفسي محظوظة لأنني وجدت موارد صحية بهذا الشكل الرائع. شكرًا لك، دكتور لايف ستايل، على جعل رحلتي نحو الصحة والعافية مثيرة وملهمة!",
    },
    {
      user: "سمير الششتاوي",
      rating: 1,
      text: "لا يمكنني تقدير ما يقوم به الدكتور لايف ستايل بما فيه الكفاية. إنه ليس مجرد مصدر للمعلومات الصحية، بل هو مرشد وملهم. أحب طريقته في تبسيط المفاهيم الطبية وجعلها مفهومة للجميع. تعلمت الكثير من خلال متابعته، وأنا ممتن له على مشاركته المستمرة لأحدث التطورات في مجال الصحة. شكرًا لك، دكتور لايف ستايل، على جعل رحلتنا الصحية أكثر إشراقًا وتوجيهنا نحو حياة أفضل.",
    },
    {
      user: "محمود احمد",
      rating: 5,
      text: "لقد استفدت كثيرا وارشح قصتي الي هي قصه نجاح بفضل دكتور مكاوي الي كل شخص يريد الوصول لما يريده ايا كان.",
    },
    {
      user: "السيد فهمي",
      rating: 3,
      text: "أنا واحدة من المعجبين الكثيرون بالدكتور لايف ستايل، ولا يمكنني إلا أن أشير إلى كم هو ملهم ومفيد. يبذل الدكتور لايف ستايل جهدًا مستمرًا لتقديم المعلومات الصحية بطريقة مبسطة وممتعة، مما يجعلها مفهومة للجميع. شكرًا لك، ، على توفير مصدر مستدام للتحفيز والتوجيه نحو حياة صحية أفضل.",
    },
    {
      user: "حنان سامر",
      rating: 3,
      text: "لا يكفي أن أعبر عن امتناني للدكتور لايف ستايل! يعد مصدري الأول للمعلومات الصحية الموثوقة والمحفزة. أعجبتني طريقته الفعّالة في توجيهنا نحو نمط حياة أفضل، والطريقة التي يُلخّص بها المفاهيم الطبية المعقدة بشكل بسيط وواضح. شكرًا لك، ، على مشاركتك القيمة والتفاني في تحسين حياتنا الصحية!",
    },
    {
      user: "دنيا ماهر",
      rating: 2,
      text: "إنني لا أستطيع سوى إبداء امتناني العميق تجاه الدكتور لايف ستايل وما يقدمه من محتوى قيم وملهم. يمتلك فريق الدكتور لايف ستايل هدفًا واضحًا في تمكيننا لتحقيق أفضل حياة صحية، وأنا فخورة بأن أكون جزءًا من مجتمعهم. شكرًا جزيلاً،، على توجيهنا نحو السعادة والصحة.",
    },
    {
      user: "احمد السعدي",
      rating: 3,
      text: "من خلال متابعتي للدكتور لايف ستايل، أدركت أهمية الاعتناء بصحتي بشكل شامل. يمتلك الدكتور لايف ستايل قدرة فريدة على توجيهنا نحو التغيير الإيجابي، وأنا لا أملك إلا أن أشكره على جهوده الرائعة. شكرًا لك،، على مشاركتك القيمة وإلهامنا لتحسين حياتنا.",
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
    <div className="aboutar">
      <Preloader isLoading={isLoading} />
      <HeaderAR />
      <section className="landing">
        <div className="background">
          <img
            src="/assets/images/imekawi-20231230-0013.jpg"
            alt="About Landing Img 1"
          />
          <div className="aboutOverlay"></div>
        </div>
        <div className="container">
          <h1>دكتور مكاوي</h1>
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            animate="animate"
          >
            <a href={"#aboutSection"}>اعرف اكتر</a>
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
              مكاوي هو رجل أعمال وطبيب لايف ستايل متخصص في التدريب العملي
              والاستشارات الفنية المتعلقة بتنمية الشخصية والمظهر الخارجي والحياة
              المهنية. لقد ساعد الآلاف من الشباب في التغلب على مشاكل وصعوبات
              حياتهم لتحقيق المستقبل الأفضل لهم في الحياة المهنية والعلاقات
              الاجتماعية ونواحي الحياة بشكل عام.
            </p>
          </div>
        </div>
      </section>
      <section className="qoute">
        <div className="container">
          <div className="text">
            <h1>ليس لديك أي فكرة عما أنت قادر عليه حتى تحاول!</h1>
            <p>
              نميل جميعًا إلى وضع الآخرين في المقام الأول، ولكن من خلال القيام
              بذلك، قد نهمل أحيانًا علاقتنا بأنفسنا. اسمح لي أن أكون المدافع عنك
              وأظهر لك طريقة أوضح للتعامل مع الشخص الأكثر أهمية في حياتك.
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
                <button>عرض القناه</button>
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
                <button>عرض القناه</button>
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
                <button>عرض القناه</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="successStory">
        <div className="container">
          <div className="head">
            <h3>قصة نجاح</h3>
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
            <h3>الرعاه</h3>
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

export default AboutAR;
