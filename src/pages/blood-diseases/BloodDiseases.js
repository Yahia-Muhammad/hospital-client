import React, { useContext } from "react";
import "./BloodDiseases.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import BloodDiseasesBg from "../../images/BloodDiseasesBg.png";
import BloodDiseasesOne from "../../images/BloodDiseasesOne.png";
import BloodDiseasesTwo from "../../images/BloodDiseasesTwo.png";
import themeContext from "../../config/Theme";


const BloodDiseases = () => {
  const { theme } = useContext(themeContext);

  return (
    <>
      <Header />
      <div className={`main blood-diseases ${theme}`}>
        <img className="main-bg" src={BloodDiseasesBg} alt="Blood diseases" />

        <h1>Blood Diseases</h1>
        <div className="contents blood-diseases-content">

          <section className="mbb">
            <h3>Haematology Clinic</h3>
            <p>
              Our Hematology department at Al Shifa Hospital investigates the
              cause, treatment, and prevention of diseases related to the blood
              by analyzing a patient's blood samples. Our hematologists are a
              multidisciplinary team who are responsible for the diagnosis and
              management of a wide range of benign and malignant disorders
              including anemia, iron metabolism disorders, and cancers. The
              hematologists at Shifa Hospitals support and collaborate with
              other departments including Family Medicine, to investigate
              patient disorders and discover diagnoses. We are also members of
              the prestigious Mayo Clinic meaning that our team of doctors is at
              the forefront of groundbreaking medical research.
            </p>
          </section>

          <section className="mbb">
            <div>
              <h3>Diagnosis, treatment, and prevention of blood disorders:</h3>
              <ul className="lsp">
                <li>Anemia.</li>
                <li>Leukemia.</li>
                <li>Clotting disorders.</li>
                <li>Hemorrhage (Bleeding).</li>
                <li>Lupus erythematosus.</li>
                <li>Low white blood cell count.</li>
                <li>Thrombocytopenia (Low Platelet Count).</li>
              </ul>
            </div>

            <div className="width49">
              <img src={BloodDiseasesOne} alt="img" />
              <img src={BloodDiseasesTwo} alt="img" />
            </div>
          </section>

          <section className="mbb">
            <h3>Services</h3>
            <p>
              At Al Shifa Hospital, we provide specialist diagnostic
              investigations and treatment for:
            </p>
            <ul className="lsp">
              <li>Blood</li>
              <li>Bone marrow</li>
              <li>Spleen disorders</li>
            </ul>
            <p>
              Al Shifa Hospitals is particularly distinguished for providing
              services like:
            </p>
            <ul className="lsp">
              <li>Blood transfusions</li>
              <li>Intravenous solutions</li>
              <li>Injections</li>
            </ul>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default BloodDiseases;
