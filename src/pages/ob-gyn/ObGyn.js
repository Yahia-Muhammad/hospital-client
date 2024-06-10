import React, { useContext } from "react";
import "./ObGyn.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import obGynBg from "../../images/obGynBg.png";
import obGynOne from "../../images/obGynOne.png";
import obGynTwo from "../../images/obGynTwo.png";
import themeContext from "../../config/Theme";


const ObGyn = () => {
  const { theme } = useContext(themeContext);

  return (
    <>
      <Header />
      <div className={`main ob-gyn ${theme}`}>
        <img className="main-bg" src={obGynBg} alt="ObGyn" />

        <h1>OB-Gyn</h1>

        <div className="contents ob-gyn-content">
          <section className="mbb">
            <p className="mbb">
              At Al Shifa Hospital, we have always been dedicated to maintaining
              women's health.Our expansive and in-depth knowledge of women’s
              health needs is supported by continuous education and training
              sessions led by international experts.We pride ourselves on
              maintaining high standards of patient care, providing comfort, and
              assuring the efficacy of the treatment plans.
            </p>

            <div>
              <h3>Services</h3>
              <p>Pregnancy follow-up; examinations, tests, and ultrasound.</p>
              <ul className="lsp">
                <li>Contraceptive methods of all kinds (IUD-CHIP).</li>
                <li>Diagnosis and treatment of gynecologic tumors. </li>
                <li>
                  Treatment of recurrent miscarriage and endocrine disorders.
                </li>
                <li>
                  Diagnosis of all gynecological disorders using ultrasound, CT,
                  and MRI devices.
                </li>
                <li>
                  Breast and Cervical Cancer Early Detection Program through
                  screening test and Vaginal endoscopy.
                </li>
              </ul>
            </div>

          </section>

          <section className="mbb">

            <div>
              <h3>Childbirth</h3>
              <ul className="mb lsp">
                <li>Painless Normal Delivery.</li>
                <li>Laparoscopy and Gynecologic Laparoscopy.</li>
              </ul>
              <h3>
                Performing all diagnostic and Laparoscopic surgery such as:
              </h3>
              <ul className="mb lsp">
                <li>Aesthetic Genital Plastic Surgery.</li>
                <li>
                  Diagnosis and surgical excision of uterine fibroids
                  (Myomectomy).
                </li>
              </ul>
            </div>

            <div className="ob-gyn-images width49">
              <img src={obGynOne} alt="img" />
              <img src={obGynTwo} alt="img" />
            </div>

          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ObGyn;
