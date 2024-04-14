import React, { useEffect, useContext } from 'react';
import "./Home.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import Booking from '../../comp/book/Booking';
import Slider from "./Slider";
import bgHomePage from "../../images/bgHomePage.png";
import ourImg from "../../images/ourImg.png";
import informationAboutYourHealth from "../../images/informationAboutYourHealth.png";
import LampSvg from "../../comp/svg/LampSvg.svg";
import VisionSvg from "../../comp/svg/VisionSvg.svg";
import GoalSvg from "../../comp/svg/GoalSvg.svg";
import BubblesSvg from "../../comp/svg/BubblesSvg.svg";
import themeContext from "../../config/Theme";



const Home = () => {
  const { theme } = useContext(themeContext);



  return (
    <>
      <Header />
      <div className={`main home ${theme}`}>
        <img className="main-bg" src={bgHomePage} alt="bgHomePage" />

        <Booking />

        <h1>our services</h1>

        <Slider />

        <h1 style={{ visibility: "hidden" }}>..</h1>

        <div className="contents our">
          <div className="our-text">
            <div>
              <img src={LampSvg} alt="Lamp" />
              <h3>Our Mission</h3>
              <p>
                Our goal is to continually improve the health status by
                providing the healthcare industry in Saudi Arabia with the
                highest quality products and services and the latest technology
              </p>
            </div>
            <div>
              <img src={VisionSvg} alt="Vision" />
              <h3>Our Vision</h3>
              <p>
                Our vision is to effectively lead the Middle East healthcare
                industry towards global standards
              </p>
            </div>
            <div>
              <img src={GoalSvg} alt="Goal" />
              <h3>Our Goal</h3>
              <p>
                We want to be the leader in our industry and empower our
                employees and customers to create a healthier society
              </p>
            </div>
          </div>
          <div className="our-img">
            <img src={ourImg} alt="Our" />
          </div>
        </div>

        <h1>information about your health</h1>

        <div className="information-container">
          <img className="bubbles-img" src={BubblesSvg} alt="Bubbles" />

          <div className="contents information">
            <div className="information-text">
              <h2>Misuse of medicines</h2>
              <p>
                Taking a medicine in a way or dose different than recommended;
                taking someone else's prescription, even if it's for a genuine
                medical reason like pain; or taking a medication to experience
                euphoric are all examples of prescription drug misuse (i.e., to
                get high). These types of abuse are frequently referred to as
                "nonmedical use of prescription medications." Misuse of
                prescription drugs can result in major health problems.
                Increased emergency department visits, overdose fatalities
                linked to prescription drugs, and treatment admissions for
                prescription drug use disorders, the most serious of which is
                addiction, have all been linked to increases in prescription
                drug usage during the previous 15 years.
              </p>
            </div>
            <div className="information-img">
              <img
                src={informationAboutYourHealth}
                alt="information about your health"
              />
            </div>
          </div>
        </div>

        <h1>Our Infection Control Department</h1>

        <div className="contents our-infection">
          <h4>
            The team role is to promote, train and educate our staff on ways to
            prevent the spread of infections, as well as determining the
            following
          </h4>
          <ul>
            <li>
              The implementation of infection control parameters all around the
              hospital.
            </li>
            <li>
              The compliance of the staff members to the infection control
              standard precautions and proper hand hygiene.
            </li>
            <li>The Precise sterilization processes.</li>
            <li>
              The proper environmental cleaning and disinfection process inside
              the hospital.
            </li>
            <li>
              The proper implementation of the transmission-based precautions
              for isolated patients.
            </li>
          </ul>
          <img className="bubbles-img" src={BubblesSvg} alt="Bubbles" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
