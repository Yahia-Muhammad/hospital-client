import React from "react";
import { useState } from "react";
import "./ChooseNow.css";
import Header from "../../../comp/header/Header";
import Footer from "../../../comp/footer/Footer";
import Booking from "../../../comp/book/Booking";
import signInBg from "../../../images/signBg.png";
import ChooseComp from "./ChooseComp";
import { useLocation } from "react-router-dom";
import FiltersComp from "./FiltersComp";

const ChooseNow = () => {
    const location = useLocation();
    const { state } = location;
    const [dataDoctors, setDataDoctors] = useState([]);
    const [route, setRoute] = useState("");
    const [selectedTitles, setSelectedTitles] = useState([]);
    const [selectedGenders, setSelectedGenders] = useState([]);

    /* These codes were used to control Filter */

    const [doctorTitles, setDoctorTitles] = useState({
        "General Practitioner": false,
        "Resident": false,
        "Specialist": false,
        "Consultant": false,
        "Professor": false,
        "Expert": false,
    });

    const [genders, setGenders] = useState({
        "Male": false,
        "Female": false,
    });

    const handleDoctorTitlesChange = (newDoctorTitles) => {
        setDoctorTitles(newDoctorTitles);
        const selectedDoctorTitles = Object.keys(newDoctorTitles).filter(title => newDoctorTitles[title]);
        setSelectedTitles(selectedDoctorTitles);
    };

    const handleGendersChange = (newGenders) => {
        setGenders(newGenders);
        const selectedGenders = Object.keys(newGenders).filter(gendr => newGenders[gendr]);
        setSelectedGenders(selectedGenders);
    };

    /* These codes were used to control Filter */

    const updateArray = (newArray) => {
        setDataDoctors(newArray);
    };

    const updateRoute = (route) => {
        setRoute(route);
    };

    return (
        <>
            <Header />
            <div className="main">
                <img className="main-bg" src={signInBg} alt="Sign In" />

                <Booking
                    onArrayUpdate={updateArray}
                    onRouteUpdata={updateRoute}
                    routeToChooseAndBooking={state.routeToChooseAndBooking}
                    doctorToChooseAndBooking={state.doctorToChooseAndBooking}
                    specializationToChooseAndBooking={state.specializationToChooseAndBooking}
                    selectedTitles={selectedTitles}
                    selectedGenders={selectedGenders}
                />

                <div className="contents choose-doctor">
                    <FiltersComp
                        doctorTitles={doctorTitles}
                        setDoctorTitles={handleDoctorTitlesChange}
                        genders={genders}
                        setGenders={handleGendersChange}
                    />
                    <ChooseComp dataDoctors={dataDoctors} route={route} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ChooseNow;
