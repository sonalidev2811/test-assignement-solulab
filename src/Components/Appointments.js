import React from "react";
import "../CSS/Appointments.css";

const Appointments = () => {
  return (
    <div className="appointments-container">
      <button className="upcoming-appointments">Upcoming Appointments</button>
      <button className="appointments">Past Appointments</button>
      <button className="appointments">Medical Records</button>
    </div>
  );
};

export default Appointments;
