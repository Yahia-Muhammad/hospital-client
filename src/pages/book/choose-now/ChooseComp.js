import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";



const ChosseDoctor = ({ dataDoctors, route }) => {
    const [link, setLink] = useState("http://localhost:5005");

    return (
        <section className="show" >
            {
                dataDoctors.map((el, ind) => {
                    return (
                        <div className="doc" key={ind}>

                            <div><img src={`${link}/uploads/${el.avatar}`} alt="doc" /></div>

                            <hr></hr>

                            <div>
                                <h2>{el.name}</h2>
                                <p>{el.specialization}</p>
                                {el.attend.map((ell, indd) => {

                                    return (
                                        <p key={indd}>{ell.day} {ell.hour.start} To {ell.hour.end}</p>
                                    )
                                })}

                            </div>


                            <button><NavLink to={`/book/${route}/${el._id}`}>Book Now</NavLink></button>

                        </div>
                    )
                })
            }
        </ section>
    );
}

export default ChosseDoctor;
