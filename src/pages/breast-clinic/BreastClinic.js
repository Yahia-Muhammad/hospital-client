import React, { useContext } from "react";
import "./BreastClinic.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import breastClinicBg from "../../images/breastClinicBg.png";
import breastClinicOne from "../../images/breastClinicOne.png";
import breastClinicTwo from "../../images/breastClinicTwo.png";
import breastClinicThree from "../../images/breastClinicThree.png";
import themeContext from "../../config/Theme";


const BreastClinic = () => {
  const { theme } = useContext(themeContext);

  return (
    <>
      <Header />
      <div className={`main breast-clinic ${theme}`}>
        <img className="main-bg" src={breastClinicBg} alt="Breast clinic" />

        <h1>Breast Clinic</h1>

        <div className="contents breast-clinic-content">
          <section className="mbbb">
            <div className="mbb">
              <h3>Women Health Clinic (Obstetrics & Gynecology)</h3>
            </div>
            <div className="mbb">
              <h3>Breast Clinic</h3>
              <p>
                Breast cancer occurs to women and men, but to women in a greater
                proportion, as a result of the abnormal proliferation of some
                cells in the body and spread rapidly throughout the breast
                tissue, and the infection can also occur as a result of genetics
                or through genes.
              </p>
            </div>
            <div className="mbb">
              <h3>Breast Cancer Symptoms:</h3>
              <p>Change in the size and shape of the breast</p>
              <p>Change in the skin of the breast</p>
              <p>
                You must visit the hospital as soon as in the case of a lump in
                the breast or notice some changes, to check on the situation at
                the beginning.
              </p>
            </div>
          </section>
          <section className="mbbb">
            <img src={breastClinicOne} alt="img" />
            <img src={breastClinicTwo} alt="img" />
            <img src={breastClinicThree} alt="img" />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BreastClinic;
