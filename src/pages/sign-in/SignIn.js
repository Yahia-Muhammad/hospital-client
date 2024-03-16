import React, { useEffect } from "react";
import "./SignIn.css";
import FormAuth from './FormAuth';
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import signInBg from "../../images/signBg.png";
import BubblesSvg from "../../comp/svg/BubblesSvg.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';


const SignIn = () => {
  const [cookies, setCookies] = useCookies("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.access_token) {
      navigate("/");
    }
  });

  return (
    <>
      <Header />
      <div className="main sign-in">
        <img className="main-bg" src={signInBg} alt="Sign In" />
        <p className="p-sign">
          <span>Sign In</span>
          <span>Account</span>
        </p>

        <h1>Sign In</h1>

        <img
          className="bubbles-img"
          src={BubblesSvg}
          alt="Bubbles"
          style={{ right: "0%", top: "60%" }}
        />
        <img
          className="bubbles-img"
          src={BubblesSvg}
          alt="Bubbles"
          style={{ left: "0%", bottom: "0%" }}
        />

        <section>
          <FormAuth />
          <div className="sign-buttons">
            <button><NavLink to={"/CreateAccount"}>Create Account</NavLink></button>
            <button><NavLink to={"/PatientsRights"}>Need help ?</NavLink></button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );

};

export default SignIn;
