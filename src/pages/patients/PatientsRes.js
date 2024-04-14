import React, { useContext } from "react";
import "./Patients.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import patientsRes from "../../images/patientsRes.png";
import patientsImgCont from "../../images/patientsImgCont.png";
import behindAbout from "../../images/behindAbout.png";
import BubblesSvg from "../../comp/svg/BubblesSvg.svg";
import themeContext from "../../config/Theme";

const PatientsRes = () => {
  const { theme } = useContext(themeContext);

  return (
    <>
      <Header />
      <div className={`main patients ${theme}`}>
        <img
          className="main-bg"
          src={patientsRes}
          alt="Patients Responsibilities"
        />

        <h1>Patients Responsibilities</h1>
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
          <img src={patientsImgCont} alt="Patients" />
          <h1>Patients Responsibilities :</h1>
          <ul>
            <img
              className="behind-content"
              src={behindAbout}
              alt="Behind content"
            />
            <li>
              It is anticipated that patients will follow the treatment plan
              recommended by the physician responsible for their care.
            </li>
            <li>
              Patients are responsible for the consequences if they refuse
              treatment or do not follow the physician’s instructions.
            </li>
            <li>
              Patients are expected to ensure that the financial obligations for
              their healthcare are met.
            </li>
            <li>
              Patients are expected to follow hospital regulations, policies and
              requirements affecting their care and conduct.
            </li>
            <li>
              Patients should be considerate of the rights, privacy and comfort
              of other patients and hospital personnel and property. They are
              asked to assist in control of noise and limit the number of
              visitors. In special circumstances, visitations may be inadvisable
              on a temporary basis.
            </li>
            <li>
              The patient is expected to provide complete and accurate
              information about past illnesses, medication, allergies and other
              matters (including providing medical reports) relating to their
              health history that need to be known by those involved in the
              patient treatment.
            </li>
            <li>
              The patient is expected to respect the priority given to emergency
              patients and to show consideration to other patients.
            </li>
            <li>
              The patient is expected to secure appointments as per the
              recommendations made by the physician as per the time frame and to
              attend the appointment on time.
            </li>
            <li>
              The patient will take full responsibility in the event of refusing
              of test studies, examinations, follow up appointments, admissions
              and /or treatment.
            </li>
            <li>
              The patient and his/her family and visitors will observe and
              adhere to the safety regulations of the hospital Shifa
            </li>
            <li>No smoking policy</li>
            <li>Hand Hygiene</li>
            <li>Fire & Safety Plan</li>
            <li>
              Non-interference in any medical equipment and patient care
              activities
            </li>
            <li>
              Only patients and/or authorized “sitters” will be allowed to
              consume food in the patient’s room
            </li>
            <li>
              All visitors will be asked to present to the Reception Areas in
              order to be issued a visitor badge
            </li>
            <li>
              No Children under the age of 14 years can visit the ICU/CICU
              without prior approval from the nurse in Charge
            </li>
            <li>
              Children are to be supervised by adults during visits to both
              Inpatient and Outpatient areas at all times
            </li>
            <li>
              The patient and his/her family and visitors will avoid bringing
              valuable belongings to the hospital and in the event of emergency
              situations, will inform the admission staff about the valuables
              and ensure that it is handed in as per the hospital policy. The
              hospital is not responsible for any consequences resulting from
              non-adherence to this requirement.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PatientsRes;
