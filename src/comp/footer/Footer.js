import React from "react";
import "./Footer.css";
import LocationSvg from "../svg/LocationSvg.svg";
import Logo from "../svg/Logo.svg";
import PoneSvg from "../svg/PoneSvg.svg";
import FacebookSvg from "../svg/FacebookSvg.svg";
import WhatsappSvg from "../svg/WhatsappSvg.svg";
import LinkedinSvg from "../svg/LinkedinSvg.svg";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <img src={LocationSvg} alt="Location" />
          <p>
            Qesm El Moqatam <br></br> 30.0033, 31.331704
          </p>
        </div>
        <div>
          <div className="logo">
            <div className="logo-svg">
              <img src={Logo} alt="ff" />
            </div>

            <div className="logo-text">
              <h1 className="tLogo">Al Shifa</h1>
              <h2 className="tLogo">Hospital</h2>
            </div>
          </div>
          <div>
            <ul className="social">
              <li>
                <Link to={`https://www.facebook.com/ya7ia.m/`} target="_blank" className="pointer"><img src={FacebookSvg} alt="Facebook" /></Link>
              </li>
              <li>
                <Link to={`https://api.whatsapp.com/send/?phone=201015678247`} target="_blank" className="pointer"><img src={WhatsappSvg} alt="Whatsapp" /></Link>
              </li>
              <li>
                <Link to={`https://www.linkedin.com/in/yahia-muhammad-357393281/`} target="_blank" className="pointer"><img src={LinkedinSvg} alt="Linkenin" /></Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src={PoneSvg} alt="Phone" />
          <p>19125</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
