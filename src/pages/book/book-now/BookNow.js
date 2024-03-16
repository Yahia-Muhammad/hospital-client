import React from "react";
import { useState, useEffect } from "react";
import "./BookNow.css";
import Header from "../../../comp/header/Header";
import Footer from "../../../comp/footer/Footer";
import Booking from "../../../comp/book/Booking";
import signInBg from "../../../images/signBg.png";
import BookComp from './BookComp';

const SignIn = () => {
    const [dataDoctors, setDataDoctors] = useState([]);

    const updateArray = (newArray) => {
        setDataDoctors(newArray);
    }


    return (
        <>
            <Header />
            <div className="main">
                <img className="main-bg" src={signInBg} alt="Sign In" />

                <Booking onArrayUpdate={updateArray} />
                <BookComp />


            </div>
            <Footer />
        </>
    );
};

export default SignIn;
