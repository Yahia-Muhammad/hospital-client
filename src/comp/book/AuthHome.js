import React from 'react';
import { NavLink } from "react-router-dom";
import { useCookies } from 'react-cookie';



const AuthHome = () => {
    const [cookies, setCookies] = useCookies("access_token");

    const removeCookies = () => {
        setCookies("access_token", "");
        localStorage.removeItem("access_id");
        window.location.reload(false)

    }

    if (cookies.access_token) {
        return (
            <div className="auth-home">
                <button className="sign-in-btn" onClick={removeCookies}>Log out</button>
            </div>
        );
    } else {
        return (
            <div className="auth-home">
                <button className="create-account-btn">
                    <NavLink to={"/CreateAccount"}>Create Account</NavLink>
                </button>
                <button className="sign-in-btn">
                    <NavLink to={"/SignIn"}>Sign In</NavLink>
                </button>
            </div>
        );
    }

}

export default AuthHome;
