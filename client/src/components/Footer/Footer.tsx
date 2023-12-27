import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      Copyright © 2024 - Built with
      <Link to={"https://elblackdev.vercel.app/"} target="_blanc">
        Yousef Aboalata
      </Link>
    </footer>
  );
};

export default Footer;
