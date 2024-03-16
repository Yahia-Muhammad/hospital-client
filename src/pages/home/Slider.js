import React, { useState } from "react";
import "./Slider.css";
import Ambulance from "../../images/ambulance.png";
import intensiveCare from "../../images/intensiveCare.png";
import bloodDiseases from "../../images/bloodDiseases.png";
import radiology from "../../images/radiology.png";
import generalSurgery from "../../images/generalSurgery.png";
import nutrition from "../../images/nutrition.png";
import BreastClinic from "../../images/BreastClinic.png";
import OBGyn from "../../images/OBGyn.png";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const Slider = () => {
  const [pressed, setPressed] = useState(false);
  const [startX, setStartX] = useState(0);
  const [x, setX] = useState(0);
  const sliderRef = React.useRef(null);
  const innerSliderRef = React.useRef(null);

  const handleMouseDown = (e) => {
    setPressed(true);
    const innerLeft = innerSliderRef.current.offsetLeft;
    setStartX(e.clientX - innerLeft);
    sliderRef.current.style.cursor = "grabbing";
  };

  const handleMouseEnter = () => {
    sliderRef.current.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    sliderRef.current.style.cursor = "grab";
    setPressed(false);
  };

  const handleMouseMove = (e) => {
    if (!pressed) return;
    e.preventDefault();
    const newX = e.clientX;
    setX(newX);
    innerSliderRef.current.style.left = `${newX - startX}px`;
    checkBoundary();
  };

  const checkBoundary = () => {
    const outer = sliderRef.current.getBoundingClientRect();
    const inner = innerSliderRef.current.getBoundingClientRect();
    if (parseInt(innerSliderRef.current.style.left) > 0) {
      innerSliderRef.current.style.left = "0px";
    } else if (inner.right < outer.right) {
      innerSliderRef.current.style.left = `-${inner.width - outer.width}px`;
    }
  };

  const handleTouchStart = (e) => {
    setPressed(true);
    const innerLeft = innerSliderRef.current.offsetLeft;
    setStartX(e.targetTouches[0].clientX - innerLeft);
  };

  const handleTouchMove = (e) => {
    if (!pressed) return;
    const newX = e.targetTouches[0].clientX;
    setX(newX);
    innerSliderRef.current.style.left = `${newX - startX}px`;
    checkBoundary();
  };

  return (
    <div
      className="slider-container"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="slider-inner" ref={innerSliderRef}>
        <div className="slide">
          <img src={Ambulance} alt="Ambulance" />
          <div>
            <h5>Ambulance</h5>
            <NavLink to={"/Ambulance"}>Read more</NavLink>
          </div>
        </div>

        <div className="slide">
          <img src={intensiveCare} alt="Intensive care" />
          <div>
            <h5>Intensive care</h5>
            <NavLink to={"IntensiveCare"}>Read more</NavLink>
          </div>
        </div>

        <div className="slide">
          <img src={bloodDiseases} alt="Blood Diseases" />
          <div>
            <h5>Blood Diseases</h5>
            <NavLink to={"/BloodDiseases"}>Read more</NavLink>
          </div>
        </div>

        <div className="slide">
          <img src={radiology} alt="Radiology" />
          <div>
            <h5>Radiology</h5>
            <NavLink to={"/Radiology"}>Read more</NavLink>
          </div>
        </div>

        <div className="slide">
          <img src={generalSurgery} alt="General" />
          <div>
            <h5>General Surgery</h5>
            <NavLink to={"/GeneralSurgery"}>Read more</NavLink>
          </div>
        </div>

        <div className="slide">
          <img src={nutrition} alt="Nutrition" />
          <div>
            <h5>Nutrition</h5>
            <NavLink to={"/Nutrition"}>Read more</NavLink>
          </div>
        </div>

        <div className="slide">
          <img src={BreastClinic} alt="Breast Clinic" />
          <div>
            <h5>Breast Clinic</h5>
            <NavLink to={"/BreastClinic"}>Read more</NavLink>
          </div>
        </div>

        <div className="slide">
          <img src={OBGyn} alt="OB-Gyn" />
          <div>
            <h5>OB-Gyn</h5>
            <NavLink to={"/ObGyn"}>Read more</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
