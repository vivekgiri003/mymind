import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import home from "../../assets/icons/home.png";
import logout from "../../assets/icons/log-out.png";
import moon from "../../assets/icons/moon.png";
import sun from "../../assets/icons/sun.png";
import "./Navigation.scss";

import { IoHome } from "react-icons/io5"; ///
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdLogout } from "react-icons/md";

export default function Navigation() {
  const { handleLogout } = useContext(AuthContext);
  const { darkTheme, handleTheme } = useContext(ThemeContext);

  return (
    <nav className={`nav ${darkTheme ? "nav--dark" : ""}`}>
      <div className="nav__container">
        <ul className="nav__list">
          <NavLink to="/home" className="nav__link">
            <li className="nav__item">
              {/* <img src={home} alt="Home Icon" /> */}{darkTheme ? <IoHome style ={{color : "white"}} /> : <IoHome style ={{color : "black"}} />}
              <p className={`nav__text ${darkTheme ? "nav__text--dark" : ""}`}>
                Home
              </p>
            </li>
          </NavLink>
          <NavLink className="nav__link">
            {!darkTheme && (
              <li className="nav__item" onClick={handleTheme}>
                {/* <img src={moon} alt="Moon Icon" /> */}<MdDarkMode style={{color:"black"}}/>
                <p className="nav__text">Dark Mode</p>
              </li>
            )}
            {darkTheme && (
              <li className="nav__item" onClick={handleTheme}>
                {/* <img src={sun} alt="Sun Icon" /> */}<MdLightMode style={{color:"white"}}/>
                <p
                  className={`nav__text ${darkTheme ? "nav__text--dark" : ""}`}
                >
                  Light Mode
                </p>
              </li>
            )}
          </NavLink>
          <NavLink className="nav__link">
            <li className="nav__item" onClick={handleLogout}>
              {/* <img src={logout} alt="Log Out Icon" /> */}{darkTheme ? <MdLogout style ={{color : "white"}} /> : <MdLogout style ={{color : "black"}} />}
              <p className={`nav__text ${darkTheme ? "nav__text--dark" : ""}`}>
                Log Out
              </p>
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
