import React, { useState } from "react";
import Axios from "axios";
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const FormAuth = () => {
    const [name, setName] = useState("");
    const [gendr, setGendr] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [date, setDate] = useState("");
    const [checkBox, setCheckBox] = useState(false);
    const navigate = useNavigate();


    const setAllData = () => {
        setName("");
        setGendr("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirmPassword("");
        setCountry("");
        setState("");
        setDate("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("You must verify the correctness of the password you entered.")
        } else if (checkBox === false) {
            alert("You must agree to the Terms of Service and Privacy Policy.")
        } else {
            Axios.post(`http://localhost:5005/api/User/register`, {
                name, gendr, email, phone, password, country, state, date
            }).then((res) => {
                console.log(res.data.data);
                navigate("/SignIn")


            }).catch((err) => {
                console.log(err)
                alert(err.response.data.message)
            })
        }
    }

    return (

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Your Name" onChange={(e) => { setName(e.target.value) }} />

            <select value={gendr} onChange={(e) => { setGendr(e.target.value) }}>
                <option>Select Gendr</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
            </select>

            <input type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
            <input type="text" placeholder="Phone" onChange={(e) => { setPhone(e.target.value) }} />
            <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
            <input type="password" placeholder="Confirm Password" onChange={(e) => { setConfirmPassword(e.target.value) }} />

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

            <select value={state} onChange={(e) => { setState(e.target.value) }}>
                <option>State</option>
                <option value={"Single"}>Single</option>
                <option value={"Married"}>Married</option>
                <option value={"Divorced"}>Divorced</option>
            </select>

            <span className="date">
                <input type="date" onChange={(e) => { setDate(e.target.value) }} />
            </span>

            <span className="checkbox">
                <input type="checkbox" defaultChecked={checkBox} onClick={() => { setCheckBox(!checkBox) }} />
                <span>I agree to Terms of Service & Prvacy Policy </span>
            </span>

            <button type="submit">Create User</button>


            <div className="sign-buttons">
                <button><NavLink to={"/SignIn"}>Sign in</NavLink></button>
                <button><NavLink to={"/PatientsRights"}>Need help ?</NavLink></button>
            </div>

        </form>

    );
}

export default FormAuth;
