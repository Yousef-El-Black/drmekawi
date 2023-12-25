import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/en");
  }, [navigate]);

  return <div className="redirect"></div>;
};

export default Redirect;
