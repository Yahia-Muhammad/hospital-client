import React from "react";
import "./Header.css";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../svg/Logo.svg";
import HomeSvg from "../svg/HomeSvg.svg";
import AboutSvg from "../svg/AboutSvg.svg";
import CoeSvg from "../svg/CoeSvg.svg";
import PaSvg from "../svg/PaSvg.svg";
import ArrowDownSvg from "../svg/ArrowDownSvg.svg";
import PoneSvg from "../svg/PoneSvg.svg";
import LocationSvg from "../svg/LocationSvg.svg";
import LangSvg from "../svg/LangSvg.svg";
import SearchSvg from "../svg/SearchSvg.svg";
import themeContext from "../../config/Theme";

const Header = () => {
  const [listState, setListState] = useState("hide-header");
  const { theme, changeTheme } = useContext(themeContext);

  const handleListState = (el) => {
    setListState(el);
  };
  return (
    <>
      <header className={`pc ${theme}`}>
        <div className="inside-header">
          <div style={{ margin: "7px 0" }}>
            <div className="logo">
              <div className="logo-svg">
                <img src={Logo} alt="ff" />
              </div>

              <div className="logo-text">
                <h1 className="tLogo">Al Shifa</h1>
                <h2 className="tLogo">Hospital</h2>
              </div>
            </div>

            <ul className="detail">
              <li>
                <img src={PoneSvg} alt="Phone" />
                19125
              </li>
              <li className="between-li">
                <img src={LocationSvg} alt="Location" />
                Qesm El Moqatam <br></br> 30.0033, 31.331704
              </li>
              {/* Btn Toggle Theme */}

              <div className="switch-mode">
                <div
                  className="btn-container"
                  onChange={() => {
                    changeTheme();
                  }}
                >
                  <label className="switch btn-color-mode-switch">
                    {localStorage.getItem("theme") === "light" ? (
                      <input
                        type="checkbox"
                        name="color_mode"
                        id="color_mode"
                        defaultValue={1}
                      />
                    ) : (
                      <input
                        type="checkbox"
                        name="color_mode"
                        id="color_mode"
                        defaultValue={1}
                        defaultChecked
                      />
                    )}
                    <label
                      htmlFor="color_mode"
                      data-on="Dark"
                      data-off="Light"
                      className="btn-color-mode-switch-inner click"
                    />
                  </label>
                </div>
              </div>

              {/* Btn Toggle Theme */}
            </ul>
          </div>

          <div>
            <ul className="basic-ul">
              <li>
                <NavLink to={"/"}>
                  <img src={HomeSvg} alt="Home" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/About"}>
                  <img src={AboutSvg} alt="About" />
                  About us
                </NavLink>
              </li>
              <li className="coe">
                <img src={CoeSvg} alt="Coe" />
                Centers of Excellence
                <img src={ArrowDownSvg} alt="Arrow-Down" />
                <ul className="ul-coe">
                  <li>
                    <NavLink to={"/Ambulance"}>Ambulance</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/IntensiveCare"}>Intensive Care</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/BloodDiseases"}>Blood Diseases</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Radiology"}>Radiology</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/GeneralSurgery"}>General Surgery</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Nutrition"}>Nutrition</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/ObGyn"}>Ob-Gyn</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/BreastClinic"}>Breast Clinic</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Dermatology"}>Dermatology</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/InternalMedicine"}>
                      Internal Medicine
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Ophthalmology"}>Ophthalmology</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/EarNoseThroat"}>Ear Nose Throat</NavLink>
                  </li>
                </ul>
              </li>
              <li className="pa">
                <img src={PaSvg} alt="Pa" />
                Patient Area
                <img src={ArrowDownSvg} alt="Arrow-Down" />
                <ul className="ul-pa">
                  <li>
                    <NavLink to={"/Profile"}>Medical records</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/PatientsRights"}>Patients Rights</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/PatientsResponsibilities"}>
                      Patients Responsibilities
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="search">
              <input type="search"></input>
              <img src={SearchSvg} alt="Search" />
            </div>
          </div>
        </div>
      </header>

      <header className="mobile">
        <div className="inside-header">
          <div>
            <div className="logo">
              <div className="logo-svg">
                <img src={Logo} alt="Logo" />
              </div>

              <div className="logo-text">
                <h1 className="tLogo">Al Shifa</h1>
                <h2 className="tLogo">Hospital</h2>
              </div>
            </div>
          </div>

          <div
            className="open pointer"
            onClick={() => {
              handleListState("show-header");
            }}
          >
            <span className="icon-bars click"></span>
          </div>

          <div className={`dynamic-list ${listState}`}>
            <div
              className="close pointer"
              onClick={() => {
                handleListState("hide-header");
              }}
            >
              <span className="icon-cross click"></span>
            </div>

            <ul className="basic-ul">
              <li>
                <NavLink to={"/"}>
                  <img src={HomeSvg} alt="Home" />
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to={"/About"}>
                  <img src={AboutSvg} alt="About" />
                  About us
                </NavLink>
              </li>

              <li className="coe">
                <div>
                  <img src={CoeSvg} alt="Coe" />
                  Centers of Excellence
                  <img src={ArrowDownSvg} alt="Arrow-Down" />
                </div>

                <ul className="ul-coe">
                  <li>
                    <NavLink to={"/Ambulance"}>Ambulance</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/IntensiveCare"}>Intensive Care</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/BloodDiseases"}>Blood Diseases</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Radiology"}>Radiology</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/GeneralSurgery"}>General Surgery</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Nutrition"}>Nutrition</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/ObGyn"}>Ob-Gyn</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/BreastClinic"}>Breast Clinic</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Dermatology"}>Dermatology</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/InternalMedicine"}>
                      Internal Medicine
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Ophthalmology"}>Ophthalmology</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/EarNoseThroat"}>Ear Nose Throat</NavLink>
                  </li>
                </ul>
              </li>

              <li className="pa">
                <div>
                  <img src={PaSvg} alt="Pa" />
                  Patient Area
                  <img src={ArrowDownSvg} alt="Arrow-Down" />
                </div>

                <ul className="ul-pa">
                  <li>
                    <NavLink to={"/Profile"}>Medical records</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/PatientsRights"}>Patients Rights</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/PatientsResponsibilities"}>
                      Patients Responsibilities
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>

            <div>
              <div className="search">
                <input type="search"></input>
                <img src={SearchSvg} alt="Search" />
              </div>

              <ul className="detail">
                <li>
                  <img src={PoneSvg} alt="Phone" />
                  19125
                </li>
                <li className="between-li">
                  <img src={LocationSvg} alt="Location" />
                  Qesm El Moqatam <br></br> 30.0033, 31.331704
                </li>
                <li>
                  <img src={LangSvg} alt="Lang" />
                  عربي
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
