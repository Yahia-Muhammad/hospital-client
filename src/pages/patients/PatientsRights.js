import React, { useContext } from "react";
import "./Patients.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import patientsRights from "../../images/patientsRights.png";
import patientsRightsCont from "../../images/patientsRightsCont.png";
import behindAbout from "../../images/behindAbout.png";
import BubblesSvg from "../../comp/svg/BubblesSvg.svg";
import themeContext from "../../config/Theme";


const PatientsRes = () => {
  const { theme } = useContext(themeContext);

  return (
    <>
      <Header />
      <div className={`main patients ${theme}`}>
        <img className="main-bg" src={patientsRights} alt="Patients Rights" />

        <h1>Patients Rights</h1>
        <img
          className="bubbles-img"
          src={BubblesSvg}
          alt="Bubbles"
          style={{ right: "0", top: "25%" }}
        />
        <img
          className="bubbles-img"
          src={BubblesSvg}
          alt="Bubbles"
          style={{ left: "0", top: "50%" }}
        />
        <img
          className="bubbles-img"
          src={BubblesSvg}
          alt="Bubbles"
          style={{ right: "0", top: "75%" }}
        />
        <img
          className="bubbles-img"
          src={BubblesSvg}
          alt="Bubbles"
          style={{ left: "0", top: "95%" }}
        />

        <div className="patients-content">
          <img src={patientsRightsCont} alt="Patients" />
          <h1>Patients Rights :</h1>
          <ul>
            <img
              className="behind-content"
              src={behindAbout}
              alt="Behind content"
            />
            <li>
              All patients have the right to considerate and respectful care at
              all times by competent personnel. The patient has the right to
              privacy during examinations, assessments, procedures and
              treatment.
            </li>
            <li>
              The patient has the right to obtain from the physician, sufficient
              information concerning diagnosis, treatment and prognosis, changes
              in his/her condition and the causes of such changes, in terms the
              patient can be reasonably expected to understand.
            </li>
            <li>
              The patient has the right to know, by name, the physician
              responsible for authorizing and performing procedures or
              treatment.
            </li>
            <li>
              The patient has the right to receive information from the
              physician that is necessary to give informed consent prior to the
              start of a medical procedure and/or treatment. Information for
              informed consent should include a description of the specific
              procedure and/or treatment, risks involved, alternatives, the
              expectations for a successful outcome, and the probable duration
              of incapacitation.
            </li>
            <li>
              The patient has the right to full disclosure of health services
              cost and information related to all services provided by the
              hospital.
            </li>
            <li>
              The patient has the right to request and receive an itemized bill
              explaining all of the costs and charges regardless of the source
              of payment.
            </li>
            <li>
              The patient has the right to know what hospital rules and
              regulations apply to patient.
            </li>
            <li>
              The administration of the hospital, the medical staff and all
              other members of staff are committed to treating and acting on
              patient concerns and complaints in a fair manner. Complaints and
              suggestions on services can be submitted in writing through.
            </li>
            <li>
              The patient has the right to have all records pertaining to the
              medical care treated as confidential except as otherwise required
              by law or upon the patient’s written authorization.
            </li>
            <li>
              The patient has the right to obtain a medical report and a copy of
              the medical test results from the Medical Records Department upon
              request and written authorization by the patient.
            </li>
            <li>
              The patient has the right to assistance in obtaining consultation
              or second opinion with another physician at the patient’s own
              request and expense.
            </li>
            <li>
              The patient has the right to appropriate assessment and management
              of pain. The patient’s right to pain management is respected and
              supported. Your physician and nurse will assess your pain and
              involve you in decisions about pain relief measures to minimize
              your pain.
            </li>
            <li>
              The patient has the right to refuse treatment for any or all of
              the care offered. When refusal of treatment prevents the
              provisions of appropriate care in accordance with ethical and
              professional standards, the potential consequences are explained
              to the patient and the relationship with the patient may be
              terminated.
            </li>
            <li>
              The patient has the right to refuse examination or follow-up of
              their treatment details by any person not directly responsible for
              their care. Persons who are not directly involved in the patient’s
              treatment will obtain permission to attend the case discussion,
              examination and/or treatment.
            </li>
            <li>
              The hospital is committed to provide terminally ill and dying
              patients with decent and compassionate care respecting their
              unique needs, according to the Local Law and Regulations.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PatientsRes;
