import React, { useContext } from "react";
import "./About.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import about from "../../images/about.png";
import aboutOne from "../../images/aboutOne.png";
import aboutTwo from "../../images/aboutTwo.png";
import behindAbout from "../../images/behindAbout.png";
import HandHeartSvg from "../../comp/svg/HandHeartSvg.svg";
import LockSvg from "../../comp/svg/LockSvg.svg";
import ShakeHandSvg from "../../comp/svg/ShakeHandSvg.svg";
import BubblesSvg from "../../comp/svg/BubblesSvg.svg";
import themeContext from "../../config/Theme";


const About = () => {
  const { theme } = useContext(themeContext);

  return (
    <>
      <Header />
      <div className={`main about ${theme}`}>
        <img className="main-bg" src={about} alt="About" />

        <h1>Why choose Al Shifa Hospital?</h1>

        <div className="contents about-content">
          <img className="bubbles-img" src={BubblesSvg} alt="Bubbles" />
          <img
            className="behind-content"
            src={behindAbout}
            alt="Behind content"
          />

          <section>
            <p>
              Al Shifa Hospital was established in 1982, working for more than
              39 years to provide the best service and care for patients. The
              hospital's investment through modern technology and devices
              attracted senior consultants and specialists in all fields. In
              addition to having the best and most efficient consultants, the
              hospital received the accreditation of the International Joint
              Committee for Accreditation of Health Facilities enabled it to
              provide full care by an integrated medical team of more than 700
              doctors and 400 nurses working 24 hours a day, 7 days a week.
            </p>
            <div>
              <section>
                <img src={HandHeartSvg} alt="Hand heart" />
                <p>
                  Al Shifa Hospital is committed to providing effective and
                  high-quality outpatient service to resident patients.
                </p>
              </section>
              <section>
                <img src={LockSvg} alt="Lock" />
                <p>
                  The hospital respects the medical regulations of patients from
                  medical treatments and surgeries with the utmost
                  confidentiality and privacy
                </p>
              </section>
              <section>
                <img src={ShakeHandSvg} alt="Shake hand" />
                <p>
                  The hospital aims to provide quality healthcare services to
                  all patients
                </p>
              </section>
            </div>
          </section>

          <section>
            <img src={aboutOne} alt="About" />
            <img src={aboutTwo} alt="About" />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
