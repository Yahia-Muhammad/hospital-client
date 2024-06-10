import React, { useContext } from "react";
import "./EarNoseThroat.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import earNoseThroatBg from "../../images/earNoseThroatBg.png";
import earNoseThroatOne from "../../images/earNoseThroatOne.png";
import earNoseThroatTwo from "../../images/earNoseThroatTwo.png";
import themeContext from "../../config/Theme";


const EarNoseThroat = () => {
  const { theme } = useContext(themeContext);

  return (
    <>
      <Header />
      <div className={`main ear-nose-throat ${theme}`}>
        <img className="main-bg" src={earNoseThroatBg} alt="Ear Nose Throat" />

        <h1>Ear, Nose and Throat conditions</h1>

        <div className="contents ear-nose-throat-content">

          <section className="mbb">
            <p>
              ENT department at Al Shifa Hospital offers comprehensive care for
              all disorders related to the ear, nose, throat, head and neck
              region, in patients of all ages. The department is run by
              professional team of doctors, nurses and para-medics dedicated
              towards offering the latest treatment options to patients.
              Advanced procedures in ENT such as Cochlear Implantation, various
              kinds of Endoscopic Surgeries are conducted at MIH on a regular
              basis. Multi-disciplinary in approach, it works closely with other
              departments like Audiology & Speech Therapy, Neurosurgery,
              Maxillofacial Surgery, Oncology, Pulmonology, Pediatrics and
              Neonatology for management of ear, nose and neck disorders in
              adults, children and neonates. We also have an expert Endoscopic
              team that performs highly complex Trans nasal Trans Sphenoid
              Surgery for various Skull base Tumors/ CSF Rhinorrhea.
            </p>
          </section>

          <section className="mbb">
            <div>
              <p>
                A range of problems we see include in relation to the ear, nose
                and throat include:
              </p>
              <section className="mb">
                <h3>Ear</h3>
                <ul className="lsp">
                  <li>Ear infections</li>
                  <li>Ear pain</li>
                  <li>Hearing problems</li>
                  <li>Ear lacerations</li>
                  <li>Foreign bodies</li>
                </ul>
              </section>
              <section className="mb">
                <h3>Nose</h3>
                <ul className="lsp">
                  <li>Suspected broken nose</li>
                  <li>Nose bleeding</li>
                  <li>Sinus problems</li>
                  <li>Blocked nose</li>
                  <li>Facial injuries</li>
                  <li>Foreign bodies</li>
                </ul>
              </section>
              <section className="mb">
                <h3>Throat</h3>
                <ul className="lsp">
                  <li>Throat Infections</li>
                  <li>Painful throat</li>
                  <li>Difficulty swallowing</li>
                </ul>
              </section>
            </div>

            <div className="ear-nose-throat-images width49">
              <img src={earNoseThroatOne} alt="img" />
              <img src={earNoseThroatTwo} alt="img" />
            </div>
          </section>

          <section className="mbb">
            <div className="mbb">
              <p className="mb">
                We provide comprehensive care for disorders related to the ear,
                nose and throat. Through our audiology and speech therapy
                department we help kids in understanding speech and learning how
                to talk, thereby developing their hearing and speaking skills.
              </p>
              <p className="mb">
                The Ear, Nose & Throat (ENT) Centre is a tertiary center
                providing diagnosis, evaluation and treatment of both common and
                highly complex ENT disorders, as well as diseases affecting the
                head and neck. The center is renowned for its ultra-modern
                facilities, amenities as well as the expert team of ENT
                surgeons, audiologists and therapists. The department is well
                equipped with the latest operating microscopes, diagnostic video
                endoscopes and an up-to-date audiology lab. The ENT Department
                has advanced facilities for emergency care and also
                round-the-clock visits by doctors to resolve sensitive issues.
              </p>
              <p className="mb">
                Hearing is a sense which is extremely vital for the overall
                wellbeing and strength of a person. The Audiology department at
                MIH takes care of all kinds of speech and hearing problems in
                people of all ages. Speech and hearing problems are actually
                communication disorders, so we have trained audiologists and
                speech-language therapists who offer different kinds of programs
                depending on the age of the patients.
              </p>
            </div>

            <div>
              <h3>
                Urgent Care treatment for ear, nose and throat conditions
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

export default EarNoseThroat;
