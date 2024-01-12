import "./preloader.scss";

const Preloader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div className={`preloader ${isLoading ? "active" : ""}`}>
      <img src="/assets/logo.webp" alt="" />
    </div>
  );
};

export default Preloader;
