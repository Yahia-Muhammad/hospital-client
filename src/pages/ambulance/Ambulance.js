import React, { useContext } from "react";
import "./Ambulance.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import ambulanceBg from "../../images/ambulanceBg.png";
import ambulanceOne from "../../images/ambulanceOne.png";
import ambulanceTwo from "../../images/ambulanceTwo.png";
import ambulanceThree from "../../images/ambulanceThree.png";
import themeContext from "../../config/Theme";


const Ambulance = () => {
  const { theme } = useContext(themeContext);

  return (
    <>
      <Header />
      <div className={`main ambulance ${theme}`}>
        <img className="main-bg" src={ambulanceBg} alt="Ambulance" />

        <h1>Ambulance</h1>

        <div className="contents ambulance-content">
          <section className="mbbb">
            <div className="mb">
              <p>
                The emergency unit operates 24 hours a day and is staffed by
                highly qualified doctors and nurses and backed up by a team of
                specialists and senior consultants in all specialties.
              </p>
              <p>
                The unit is equipped to handle all types of multi-trauma,
                surgical, neurological, and cardiac and gastro-enterology
                emergency.
              </p>
            </div>
            <div className="mb">
              <p>
                The emergency unit operates 24 hours a day and is staffed by
                highly qualified doctors and nurses and backed up by a team of
                specialists and senior consultants in all specialities.
              </p>
              <p>
                The unit is equipped to handle all types of multi-trauma,
                surgical, neurological, cardiac and gastro-enterology emergency.
              </p>
              <p>
                And the unit is backed up by intensive care units in all
                specialties.
              </p>
            </div>
          </section>
          <section>
            <img src={ambulanceOne} alt="img" />
            <img src={ambulanceTwo} alt="img" />
            <img src={ambulanceThree} alt="img" />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ambulance;
