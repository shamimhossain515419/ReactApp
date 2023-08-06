import "./Header.css";
import image from "../../Assets/Images/banner.jpg";
import logo from "../../Assets/Images/logo.png";
import useBannerData from "../../hooks/useBannerData";

const Header = () => {
  const bannerData = useBannerData();

  return (
    <header className=" header">
      <img
        src={bannerData['main-banner']}
        alt=""
        className="d-block w-100 align-top position-absolute start-0 top-0 h-100"
      />

      <div className="position-relative col-8 col-lg-4 h-100">
        <div
          className="bg-secondary w-100  h-75 text-center p-5 shadow-lg rounded-2 position-absolute top-0"
          id="logo-box"
        >
          <a href="/" className="navbar-brand">
            <img src={logo} height={"60px"} alt="" width={"60px"} />
          </a>
          <h3 className="text-white text-center my-4 ">
            An idea springs from the mind, gushes down the team and flows
            seamlessly to soak creativity and splash innovation at its best
          </h3>
        </div>
      </div>
    </header>
  );
};
export default Header;
