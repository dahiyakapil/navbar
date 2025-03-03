import "../Navbar/Navbar.css";
import logo_light from "../../assets/logo-white.png";
import logo_dark from "../../assets/logo-black.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toggle_light from "../../assets/day.png";
import toggle_dark from "../../assets/night.png";

function Navbar({}) {
  return (
    <>
      <div className="navbar">
        <img src={logo_dark} alt="" className="logo" />

        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Feature</li>
          <li>About</li>
        </ul>

        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img src={search_icon_light} alt="" />
        </div>

        <img src={toggle_dark} alt="" className="toggle-icon" />
      </div>
    </>
  );
}

export default Navbar;
