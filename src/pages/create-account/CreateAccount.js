import React, { useEffect, useContext } from "react";
import "./CreateAccount.css";
import FormAuth from './FormAuth';
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import createAccountBg from "../../images/signBg.png";
import createAccountOne from "../../images/createAccountOne.png";
import createAccountTwo from "../../images/createAccountTwo.png";
import BubblesSvg from "../../comp/svg/BubblesSvg.svg";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import themeContext from "../../config/Theme";


const CreateAccount = () => {
  const [cookies, setCookies] = useCookies("access_token");
  const navigate = useNavigate();
  const { theme } = useContext(themeContext);


  useEffect(() => {
    if (cookies.access_token) {
      navigate("/");
    }
  });


  return (
    <>
      <Header />
      <div className={`main create-account ${theme}`}>
        <img className="main-bg" src={createAccountBg} alt="Create Account" />

        <p className="p-sign">
          <span>New Account</span>
          <span>Register</span>
        </p>

        <h1>Create Account</h1>

        <div className="create-account-content">

          <FormAuth />

          <section>
            <img src={createAccountOne} alt="img" />
            <img src={createAccountTwo} alt="img" />
          </section>

          <img
            className="bubbles-img"
            src={BubblesSvg}
            alt="Bubbles"
            style={{ right: "10%", bottom: "0%" }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateAccount;
