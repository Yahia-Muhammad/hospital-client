import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Axios from "axios";
import { useCookies } from 'react-cookie';


const BookNow = () => {
    const [link, setLink] = useState("http://localhost:5005");
    const [doctor, setDoctor] = useState({});
    let { specialization, id } = useParams();
    const [cookies, setCookies] = useCookies("access_token");
    const idUser = localStorage.getItem("access_id");
    const [rNumber, setRNumber] = useState("");

    // form auth
    const [name, setName] = useState("");
    const [gendr, setGendr] = useState("");
    const [state, setState] = useState("");
    const [date, setDate] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [attend, setAttend] = useState("");
    const [idRole, setIdRole] = useState("");
    // form auth

    // get doctor details

    useEffect(() => {
        Axios.get(`${link}/api/${specialization}/${id}`).then((res) => {
            setDoctor(res.data.data.doctor)
        });

        if (cookies.access_token) {


            Axios.get(`${link}/api/User/${idUser}`).then((res) => {
                const dataUser = res.data.data.user;
                setName(dataUser.name)
                setGendr(dataUser.gendr)
                setState(dataUser.state)
                setDate(dataUser.date)
                setPhone(dataUser.phone)
                setEmail(dataUser.email)
                setIdRole(idUser)
            });

        }


    }, []);


    const createBook = (e) => {
        e.preventDefault();

        if (cookies.access_token) {
            handleFormDataVisit()
        } else {
            handleGetCount()
        }

    };

    const handleFormDataBook = (idVisit, reservationNum) => {
        // collect booking data
        const formDataBook = new FormData();
        formDataBook.append("name", name);
        formDataBook.append("gendr", gendr);
        formDataBook.append("state", state);
        formDataBook.append("date", date);
        formDataBook.append("phone", phone);
        formDataBook.append("email", email);
        formDataBook.append("attend", attend);
        formDataBook.append("bookingDate", new Date().toLocaleString());
        formDataBook.append("check", "Not Done");
        formDataBook.append("price", doctor.price);
        formDataBook.append("specialization", doctor.specialization);
        formDataBook.append("doctor", doctor.name);
        formDataBook.append("idRole", idRole);
        if (cookies.access_token) {
            formDataBook.append("idUser", idUser);
            formDataBook.append("idVisit", idVisit);
        }
        formDataBook.append("reservationNum", reservationNum);


        handlePostBooking(formDataBook)
    }

    const handleFormDataVisit = () => {
        // generate visit
        const formDataVisit = new FormData();
        formDataVisit.append("attend", attend);
        formDataVisit.append("bookingDate", new Date().toLocaleString());
        formDataVisit.append("check", "Not Done");
        formDataVisit.append("price", doctor.price);
        formDataVisit.append("specialization", doctor.specialization);
        formDataVisit.append("doctor", doctor.name);
        formDataVisit.append("idUser", idUser);
        handlePostVisit(formDataVisit)
    }

    const handlePostVisit = (formdata) => {
        Axios.post(`${link}/api/Visit`, formdata,
            { headers: { 'Authorization': `Bearer ${cookies.access_token}` } }
        )
            .then((postRes) => {
                handleGetCount(postRes.data.data.newVisit._id)
            })
            .catch((postErr) => {
                console.log(postErr);
            });
    }

    const handlePostBooking = (formData) => {
        // Create booking
        Axios.post(`${link}/api/Book`, formData)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleGetCount = (visitId) => {
        // Get count of active, incomplete bookings
        Axios.get(`${link}/api/Book`, { headers: { 'Authorization': `Bearer ${cookies.access_token}` } })
            .then((getRes) => {
                const filterBook = getRes.data.data.books.filter((el) =>
                    el.specialization === doctor.specialization &&
                    el.doctor === doctor.name &&
                    el.attend === attend
                    // el.check === "Not Done"
                );
                setRNumber(filterBook.length + 1);
                handleFormDataBook(visitId, filterBook.length + 1)
            })
            .catch((getErr) => {
                console.log(getErr);
            });
    }

    return (
        <div className="contents book-now">
            <section className='section-doctor'>
                <div>
                    {doctor.attend?.map((el, ind) => {
                        var jsonObj = JSON.parse(el);
                        return (
                            <span key={ind} className='attend-span'>{jsonObj.day} {jsonObj.hour.start} To {jsonObj.hour.end}</span>
                        )
                    })}
                </div>
                <div>
                    <img src={`${link}/uploads/${doctor.avatar}`} alt='img' />
                    <section>
                        <h2>{doctor.name}</h2>
                        <p>{doctor.msg}</p>
                        <p>{doctor.title}</p>
                        <p>Detection price : {doctor.price}</p>
                    </section>
                </div>
                {rNumber &&
                    <span className='r-number'><span>Reservation Number</span><span>{rNumber}</span></span>
                }
            </section>

            <section className='section-form'>
                {cookies.access_token ? <div>registered</div> : <div>unregistered</div>}
                <form>
                    <label>Patient Information</label>
                    <input type='text' placeholder='Name' onChange={(e) => { setName(e.target.value) }} value={name} />
                    <select value={gendr} onChange={(e) => { setGendr(e.target.value) }}>
                        <option>Select Gendr</option>
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                    </select>
                    <select value={state} onChange={(e) => { setState(e.target.value) }}>
                        <option>State</option>
                        <option value={"Single"}>Single</option>
                        <option value={"Married"}>Married</option>
                        <option value={"Divorced"}>Divorced</option>
                    </select>
                    <input type="date" onChange={(e) => { setDate(e.target.value) }} value={date} />
                    <input type='text' placeholder='Phone' onChange={(e) => { setPhone(e.target.value) }} value={phone} />
                    <input type='text' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    <select value={attend} onChange={(e) => { setAttend(e.target.value) }}>
                        <option>Attend</option>
                        {doctor.attend?.map((el, ind) => {
                            var jsonObj = JSON.parse(el);
                            return (
                                <option key={ind} value={el}>{jsonObj.day} {jsonObj.hour.start} To {jsonObj.hour.end}</option>
                            )
                        })}
                    </select>
                    <button onClick={createBook}>Book Now</button>
                </form>
            </section>
        </div>
    );
}


export default BookNow;
