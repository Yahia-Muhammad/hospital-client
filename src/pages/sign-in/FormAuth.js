import React, { useState } from "react";
import Axios from "axios";
import { useCookies } from 'react-cookie';


const FormAuth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [_, setCookies] = useCookies(["access_token"]);

    const handleSubmit = (e) => {
        e.preventDefault();

        Axios.post(`http://localhost:5005/api/User/login`, {
            email, password
        }).then((res) => {
            const token = res.data.data.token;
            const id = res.data.data.id;

            setCookies("access_token", token)
            localStorage.setItem("access_id", id)
            window.location.reload(false)
        }).catch((err) => {
            console.log(err)
            alert(err.response.data.message)
        })

    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
            <input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
            <button type="submit">Sign In</button>
        </form>
    );
}

export default FormAuth;
