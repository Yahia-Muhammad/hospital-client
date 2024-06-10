import React, { useContext } from "react";
import "./Nutrition.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import nutritionBg from "../../images/nutritionBg.png";
import nutritionOne from "../../images/nutritionOne.png";
import nutritionTwo from "../../images/nutritionTwo.png";
import themeContext from "../../config/Theme";


const Nutrition = () => {
  const { theme } = useContext(themeContext);

  return (
    <>
      <Header />
      <div className={`main nutrition ${theme}`}>
        <img className="main-bg" src={nutritionBg} alt="Nutrition" />

        <h1>Nutrition</h1>

        <div className="contents nutrition-content">

          <section className="mb">
            <div>
              <h3>Nutrition & Obesity</h3>
              <p>
                Many people are currently trying to get rid of their excess
                weight or get rid of thinness through exercise or following
                diets through the Internet, which do not benefit them as well.
              </p>
              <p>
                Therefore, Al Shifa Hospital provides highly qualified doctors
                to help obese patients or those who suffer from thinness to
                reach the ideal weight by analyzing the body and knowing the
                elements that the body needs to build muscle mass or burn fat by
                following a changing diet according to the body's needs and
                according to the speed of response.
              </p>
            </div>
            <div>
              <img src={nutritionOne} alt="img" />
              <img src={nutritionTwo} alt="img" />
            </div>
          </section>

          <section className="mb">
            <div className="mb">
              <h3>Caring for the inpatients</h3>
              <p>
                Protect the inpatients from malnutrition caused by lack of
                protein and other required nutrients.
              </p>
              <p>
                Do regular rounds in the inpatient department to check and
                follow up with the patient and their conditions.
              </p>
              <p>Assure the quality of the diets provided to the inpatients.</p>
              <p>
                Change in the texture of food, not its ingredients, to be liquid
                or soft, in case of difficulty swallowing, oral surgery, or a
                broken jaw.
              </p>
            </div>
            <div className="mb">
              <h3>Outpatient care</h3>
              <p>
                Supervising outpatient clinics such as diabetes clinic, general
                clinic, obesity, maternity, and child health clinic.
              </p>
              <p>
                Providing nutritional consultations for the prevention and
                treatment of chronic, widespread illnesses.
              </p>
              <p>
                Patient awareness sessions (individually or in groups) for those
                who suffer from the same disease, in addition to regular
                awareness sessions for the outpatient.
              </p>
            </div>
            <div className="mb">
              <h3>Devices</h3>
              <p>Body composition and body mass index (BMI)</p>
              <p>
                body components of fat, fluids, muscle, metabolic rate and daily
                calorie requirement. (SECA)
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Nutrition;
