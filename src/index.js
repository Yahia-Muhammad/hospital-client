import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./comp/icon.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about-us/About";
import PatientsRes from "./pages/patients/PatientsRes";
import PatientsRights from "./pages/patients/PatientsRights";
import CreateAccount from "./pages/create-account/CreateAccount";
import SignIn from "./pages/sign-in/SignIn";
import Profile from "./pages/profile/Profile";
import ChooseNow from "./pages/book/choose-now/ChooseNow";
import BookNow from "./pages/book/book-now/BookNow";
import Ambulance from "./pages/ambulance/Ambulance";
import IntensiveCare from "./pages/intensive-care/IntensiveCare";
import BloodDiseases from "./pages/blood-diseases/BloodDiseases";
import Radiology from "./pages/radiology/Radiology";
import GeneralSurgery from "./pages/general-surgery/GeneralSurgery";
import Nutrition from "./pages/nutrition/Nutrition";
import ObGyn from "./pages/ob-gyn/ObGyn";
import BreastClinic from "./pages/breast-clinic/BreastClinic";
import Dermatology from "./pages/dermatology/Dermatology";
import InternalMedicine from "./pages/internal-medicine/InternalMedicine";
import Ophthalmology from "./pages/ophthalmology/Ophthalmology";
import EarNoseThroat from "./pages/ear-nose-throat/EarNoseThroat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/PatientsResponsibilities",
    element: <PatientsRes />,
  },
  {
    path: "/PatientsRights",
    element: <PatientsRights />,
  },
  {
    path: "/CreateAccount",
    element: <CreateAccount />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/Book",
    element: <ChooseNow />,
  },
  {
    path: "/Book/:specialization/:id",
    element: <BookNow />,
  },
  {
    path: "/Ambulance",
    element: <Ambulance />,
  },
  {
    path: "/IntensiveCare",
    element: <IntensiveCare />,
  },
  {
    path: "/BloodDiseases",
    element: <BloodDiseases />,
  },
  {
    path: "/Radiology",
    element: <Radiology />,
  },
  {
    path: "/GeneralSurgery",
    element: <GeneralSurgery />,
  },
  {
    path: "/Nutrition",
    element: <Nutrition />,
  },
  {
    path: "/ObGyn",
    element: <ObGyn />,
  },
  {
    path: "/BreastClinic",
    element: <BreastClinic />,
  },
  {
    path: "/Dermatology",
    element: <Dermatology />,
  },
  {
    path: "/InternalMedicine",
    element: <InternalMedicine />,
  },
  {
    path: "/Ophthalmology",
    element: <Ophthalmology />,
  },
  {
    path: "/EarNoseThroat",
    element: <EarNoseThroat />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
