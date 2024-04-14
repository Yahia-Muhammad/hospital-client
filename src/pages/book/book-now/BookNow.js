import React, { useState, useContext } from "react";
import "./BookNow.css";
import Header from "../../../comp/header/Header";
import Footer from "../../../comp/footer/Footer";
import Booking from "../../../comp/book/Booking";
import signInBg from "../../../images/signBg.png";
import BookComp from './BookComp';
import themeContext from "../../../config/Theme";


const SignIn = () => {
    const [dataDoctors, setDataDoctors] = useState([]);
    const { theme } = useContext(themeContext);


    const updateArray = (newArray) => {
        setDataDoctors(newArray);
    }


    return (
        <>
            <Header />
            <div className={`main ${theme}`}>
                <img className="main-bg" src={signInBg} alt="Sign In" />

                <Booking onArrayUpdate={updateArray} />
                <BookComp />


            </div>
            <Footer />
        </>
    );
};

export default SignIn;
