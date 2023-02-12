import React from "react";
import PersonalDetails from "./PersonalDetails";
import Appointments from "./Appointments";
import AppointmentDetails from "./AppointmentDetails";
import "../CSS/Details.css";

const Details = () => {
  return (
    <div className="details-container">
      <PersonalDetails />
      <Appointments />
      <AppointmentDetails />
    </div>
  );
};

export default Details;
