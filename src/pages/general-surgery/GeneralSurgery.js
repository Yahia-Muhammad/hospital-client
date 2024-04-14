import React, { useContext } from "react";
import "./GeneralSurgery.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import generalSurgeryBg from "../../images/generalSurgeryBg.png";
import generalSurgeryOne from "../../images/generalSurgeryOne.png";
import generalSurgeryTwo from "../../images/generalSurgeryTwo.png";
import themeContext from "../../config/Theme";


const GeneralSurgery = () => {
  const { theme } = useContext(themeContext);

  return (
    <>
      <Header />
      <div className={`main general-surgery ${theme}`}>
        <img className="main-bg" src={generalSurgeryBg} alt="General surgery" />

        <h1>General Surgery</h1>

        <div className="contents general-surgery-content">
          <section className="mbbb">
            <h3>General Surgery</h3>
            <p>
              The general surgeons at Al Shifa Hospital are passionate about
              providing effective, long-term solutions to a wide variety of
              physiological ailments and emergencies. Our extensively trained,
              certified surgeons use state-of-the-art equipment to achieve your
              desired results. Supported by meticulous laboratory testing and
              diligent consultation, we successfully identify the root causes of
              ailments and present you with detailed surgical and long-term care
              plans, as necessary.
            </p>
          </section>
          <section className="mbbb">
            <div className="general-surgery-text width49">
              <section className="mb">
                <h3>Services</h3>
                <ul className="lsp">
                  <li>Laparoscopic Cholecystectomy.</li>
                  <li>Laparoscopic Appendectomy.</li>
                  <li>Laparoscopic repair of Incisional Hernia.</li>
                  <li>Advanced Laparoscopic Surgery.</li>
                  <li>Laparoscopic surgery for colorectal cancers.</li>
                </ul>
              </section>
              <section className="mb">
                <h3>Treatment of hemorrhoids via</h3>
                <ul className="lsp">
                  <li>Cauterization</li>
                  <li>Laser surgery</li>
                  <li>Stapling</li>
                  <li>Transanal Hemorrhoidal Dearterialization (THD)</li>
                </ul>
              </section>
              <section className="mb">
                <h3>Treatments</h3>
                <ul className="lsp">
                  <li>Thyroidectomy and neck tumors removal</li>
                  <li>Lumpectomy / Excisional breast biopsy</li>
                  <li>
                    Treatment of Anal Fistula surgically or via Laser surgery
                  </li>
                </ul>
              </section>
            </div>
            <div className="general-surgery-images width49">
              <img src={generalSurgeryOne} alt="img" />
              <img src={generalSurgeryTwo} alt="img" />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GeneralSurgery;
