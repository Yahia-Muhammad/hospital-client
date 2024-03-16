import React from "react";
import "./Radiology.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import radiologyBg from "../../images/radiologyBg.png";
import radiologyOne from "../../images/radiologyOne.png";
import radiologyTwo from "../../images/radiologyTwo.png";

const Radiology = () => {
  return (
    <>
      <Header />
      <div className="main radiology">
        <img className="main-bg" src={radiologyBg} alt="Radiology" />

        <h1>Radiology</h1>

        <div className="contents radiology-content">
          <section className="mbbb">
            <h3>Radiology</h3>
            <p>
              Our team of radiologists at the Al Shifa Hospital is always ready
              to diagnose and treat diseases using the latest radiology
              techniques. Our doctors use radiology-based methods to help
              diagnose the patient's symptoms, monitor their response to
              treatment, and detect various diseases such as breast cancer,
              colon cancer, or heart disease.
            </p>
          </section>
          <section className="mbbb">
            <div className="width49">
              <h3>Services</h3>
              <ul className="lsp">
                <li>All CT scans.</li>
                <li>MRI scans.</li>
                <li>Panoramic Dental X-ray.</li>
                <li>Bone Densitometry or DEXA scan .</li>
                <li>Department of Nuclear Medicine.</li>
                <li>All ultrasound scans and Colour Doppler Ultrasound.</li>
                <li>Early detection of fetal anomalies in 4D ultrasound.</li>
                <li>Mammography (Mammogram) and screening breast tumors</li>
                <li>
                  Therapeutic and diagnostic interventional radiology (organs,
                  blood vessels, and brain arteries).
                </li>
              </ul>
            </div>
            <div className="width49">
              <img src={radiologyOne} alt="img" />
              <img src={radiologyTwo} alt="img" />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Radiology;
