import React, { useContext } from "react";
import "./IntensiveCare.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import IntensiveCareBg from "../../images/IntensiveCareBg.png";
import IntensiveCareOne from "../../images/IntensiveCareOne.png";
import IntensiveCareTwo from "../../images/IntensiveCareTwo.png";
import themeContext from "../../config/Theme";


const IntensiveCare = () => {
  const { theme } = useContext(themeContext);

  return (
    <>
      <Header />
      <div className={`main intensive-care ${theme}`}>
        <img className="main-bg" src={IntensiveCareBg} alt="Intensive care" />

        <h1>Intensive care</h1>

        <div className="contents intensive-care-content">

          <section className="mbb">
            <p>
              To Make A Difference In Your Life And The Lives Of Your Loved
              Ones, We Present Al Shifa Hospital Emergency Department Which
              Operates With High Standards And Quality Of Care Round The Clock.
              We Are Always Ready To Present High Levels Of Care That Meet Your
              Trust. We Pride Ourselves On Our Staff Of Physicians; Qualified
              From The European Recovery Council And The American Heart
              Association.
            </p>
            <p>
              The Department Is Fully Equipped With Screens, Ventilators,
              Automated External Defibrillators, And All The Tools Required For
              Advanced Cardiovascular Life Support.
            </p>
            <p>
              The Emergency Team Is Qualified To Handle All Cardiac Injuries,
              Pulmonary Injuries, Wounds, Infectious Diseases, Road Traffic
              Accident (RTA) Injuries, Various Types Of Trauma, Poisoning,
              Burns, Gastrointestinal Diseases, And Some Cases Of Kidney And
              Neurological Diseases.
            </p>
          </section>

          <section className="mbb">
            <h3>About urgent care (Intensive Care): </h3>
            <p>
              Our urgent care centers provide rapid-access to the care you
              deserve immediately, whether it’s for you, your children, or any
              of those closest to you.
            </p>
            <p>
              Located across a number of our Shifa hospitals, our urgent care
              service is available to treat children and adults who experience
              sudden health problems or injuries.
            </p>
            <p>
              We’re able to treat a wide variety of medical problems, in fact
              almost everything apart from life-threatening emergencies
            </p>
            <p>
              for patients aged 0-17 years only, visit the Urgent Care Centre at
              the Shifa Hospital.
            </p>
            <p>
              Please note that for any life-threatening conditions, we always
              recommend that you should call 16010 or go to your nearest
              emergency department immediately.
            </p>
          </section>

          <section className="mbb">

            <div className="width49">
              <h3>Instant access to expert medical care</h3>
              <p>
                When your child becomes unwell, the most important thing is
                getting them in front of a medical professional – fast. Urgent
                Care Centre for Children, located at The Shifa Hospital, is
                changing the way children’s healthcare can be accessed.
              </p>
              <p>
                Our Urgent Care Centre for Children can see and treat children
                with urgent but not life-threatening medical needs and minor
                conditions. Here, any child between 0-17 can receive the urgent
                care they need, 365 days a year, with no appointment required.
              </p>
            </div>

            <div className="width49">
              <img src={IntensiveCareOne} alt="img" />
              <img src={IntensiveCareTwo} alt="img" />
            </div>

          </section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default IntensiveCare;
