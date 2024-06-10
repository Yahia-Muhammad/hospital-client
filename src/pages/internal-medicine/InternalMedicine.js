import React, { useContext } from "react";
import "./InternalMedicine.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import internalMedicineBg from "../../images/internalMedicineBg.png";
import internalMedicineOne from "../../images/internalMedicineOne.png";
import internalMedicineTwo from "../../images/internalMedicineTwo.png";
import themeContext from "../../config/Theme";


const InternalMedicine = () => {
  const { theme } = useContext(themeContext);

  return (
    <>
      <Header />
      <div className={`main internal-medicine ${theme}`}>
        <img
          className="main-bg"
          src={internalMedicineBg}
          alt="Internal medicine"
        />

        <h1>General</h1>

        <div className="contents internal-medicine-content">

          <section className="mbbb">
            <h3>Abdomen and stomach conditions</h3>
            <p>
              We offer treatment for, digestive system symptoms including
              abdominal pain, bloating or loss of appetite.
            </p>
            <p>
              Al Shifa Hospital Urgent Care Centers provide treatment for a wide
              range of stomach and bowel problems, and we are also able to
              provide care for issues relating to the liver, pancreas or bile
              duct (hepatobiliary) which may have symptoms of stomach or
              abdominal pain.
            </p>
            <p>
              We have access to a large number of specialists, and once our
              initial investigations and treatments are completed we can arrange
              the most appropriate next step – either reassurance, GP follow-up,
              specialist review or urgent admission to the hospital network for
              more specialist imaging, treatment or surgery if required.
            </p>
          </section>

          <section className="mbb">
            <div className="mbb">
              <section className="width49">
                <h3>
                  Common stomach and bowel symptoms our patients present with
                  include:
                </h3>
                <ul className="lsp">
                  <li>Abdominal pain</li>
                  <li>Bloating</li>
                  <li>Nausea and vomiting</li>
                  <li>Diarrhea and constipation</li>
                  <li>Fevers</li>
                  <li>Jaundice</li>
                  <li>Loss of appetite</li>
                  <li>Rectal bleeding</li>
                </ul>
              </section>
              <section className="width49">
                <img src={internalMedicineOne} alt="img" />
                <img src={internalMedicineTwo} alt="img" />
              </section>
            </div>
            <div>
              <p>How we can support abdomen and bowel conditions</p>
              <p>
                We appreciate that symptoms relating to stomach and bowel
                problems can be alarming. Often the symptoms are not as
                concerning as you might immediately fear, nevertheless, it is
                important to be seen by a doctor quickly.
              </p>
              <p>
                Our urgent care doctors are able to conduct an initial
                assessment and diagnosis, providing advice on whether you need
                treatment from a specialist.
              </p>
              <p>
                Our urgent care doctors are able to conduct an initial
                assessment and diagnosis, providing advice on whether you need
                treatment from a specialist.
              </p>
              <p>
                Diagnostic imaging and investigative procedures for abdomen,
                stomach and bowel conditions
              </p>
              <p>
                We have access to leading imaging and investigative tests for
                stomach, liver, pancreatic and bowel conditions.
              </p>
            </div>
          </section>

          <section className="mbb">
            <div className="mb">
              <h3>
                Diagnostic imaging and procedures you might be referred for
                include:
              </h3>
              <ul className="lsp">
                <li>CT scan</li>
                <li>X-ray</li>
                <li>MRI</li>
                <li>Fibro scan</li>
                <li>Colonoscopy</li>
                <li>Gastroscopy</li>
              </ul>
            </div>
            <div className="mb">
              <h3>
                Urgent Care treatment for the abdomen, stomach and bowel can
                include:
              </h3>
              <ul className="lsp">
                <li>Full assessment and examination</li>
                <li>Pain relief</li>
                <li>Antibiotics (Intravenous or Oral)</li>
                <li>Wound management</li>
                <li>Arranging investigations and follow up</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InternalMedicine;
