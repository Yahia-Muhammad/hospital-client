import React, { useState, useEffect, useContext } from 'react';
import './Profile.css';
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import signInBg from "../../images/signBg.png";
import Axios from "axios";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import themeContext from "../../config/Theme";


const Profile = () => {
    const [link, setLink] = useState("http://localhost:5005");
    const [cookies, setCookies] = useCookies("access_token");
    const idUser = localStorage.getItem("access_id");
    const navigate = useNavigate();
    const { theme } = useContext(themeContext);


    // data user
    const [name, setName] = useState("");
    const [gendr, setGendr] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [date, setDate] = useState("");
    const [visitis, setVisitis] = useState([]);



    useEffect(() => {
        if (cookies.access_token) {

            Axios.get(`${link}/api/User/${idUser}`).then((res) => {
                const dataUser = res.data.data.user;
                setName(dataUser.name)
                setGendr(dataUser.gendr)
                setEmail(dataUser.email)
                setPhone(dataUser.phone)
                setCountry(dataUser.country)
                setState(dataUser.state)
                setDate(dataUser.date)
            });

            Axios.get(`${link}/api/Visit`).then((res) => {
                const filter = res.data.data.visits.filter(el => el.idUser === idUser)
                setVisitis(filter)
            });

        } else {
            navigate("/SignIn")
        }
    }, []);



    const handleShowVisitis = (e) => {
        e.target.parentNode.parentNode.classList.toggle("show-visitis");
    }



    return (
        <>
            <Header />
            <div className={`main profile ${theme}`}>
                <img className="main-bg" src={signInBg} alt="Profile" />
                <p className="p-sign">
                    <span>Your</span>
                    <span>Profile</span>
                </p>

                <h1>Profile</h1>

                <div className='contents profile-content'>
                    <form className='mbb'>
                        <span>
                            <label>Name : </label>
                            <input type="text" placeholder="Your Name" onChange={(e) => { setName(e.target.value) }} defaultValue={name} />
                        </span>
                        <span>
                            <label>Gender : </label>
                            <select value={gendr} onChange={(e) => { setGendr(e.target.value) }}>
                                <option>Select Gendr</option>
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                            </select>
                        </span>
                        <span>
                            <label>Email : </label>
                            <input type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} defaultValue={email} />
                        </span>
                        <span>
                            <label>Phone : </label>
                            <input type="text" placeholder="Phone" onChange={(e) => { setPhone(e.target.value) }} defaultValue={phone} />
                        </span>
                        <span>
                            <label>Country : </label>
                            <select value={country} onChange={(e) => { setCountry(e.target.value) }}>
                                <option>Country</option>
                                <option value="Egypt">Egypt</option>
                                <option value="United States">United States</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Canada">Canada</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                                <option value="Japan">Japan</option>
                                <option value="China">China</option>
                                <option value="Brazil">Brazil</option>
                                <option value="India">India</option>
                            </select>
                        </span>
                        <span>
                            <label>State : </label>
                            <select value={state} onChange={(e) => { setState(e.target.value) }}>
                                <option>State</option>
                                <option value={"Single"}>Single</option>
                                <option value={"Married"}>Married</option>
                                <option value={"Divorced"}>Divorced</option>
                            </select>
                        </span>
                        <span>
                            <label>Date : </label>
                            <input type="date" onChange={(e) => { setDate(e.target.value) }} defaultValue={date} />
                        </span>
                    </form>
                    <section>
                        {visitis.map((el, ind) => {

                            return (
                                <div className={`visitis`} key={ind}>
                                    <section>
                                        <p>{ind + 1}</p>
                                        <button onClick={(e) => { handleShowVisitis(e) }}>+</button>
                                    </section>
                                    <section>
                                        <div><span>Specialization : </span><span>{el.specialization}</span></div>
                                        <div><span>Doctor : </span><span>{el.doctor}</span></div>
                                        <div><span>Booking Date : </span><span>{el.bookingDate}</span></div>
                                        <div><span>Attend : </span><span>{el.attend.day} {el.attend.hour.start} To {el.attend.hour.end}</span></div>
                                        <div><span>Check : </span><span>{el.check}</span></div>
                                        <div><span>Detection price : </span><span>{el.price}</span></div>
                                        <div className='width100'><span>Diagnosis : </span><span>{el.diagnosis}</span></div>
                                        <div className='prescription width100'><img src={`${link}/uploads/${el.prescription}`} alt='img' /></div>
                                    </section>

                                </div>
                            )
                        })}
                    </section>
                </div>


            </div>
            <Footer />
        </>
    );
}

export default Profile;
