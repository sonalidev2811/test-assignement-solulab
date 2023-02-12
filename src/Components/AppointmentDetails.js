import React from "react";
import "../CSS/AppointmentDetails.css";

const AppointmentDetails = () => {
  return (
    <div className="appointment-details-container">
      <div className="treatment">
        <div className="root-canal-treatment">Root Canal Treatment</div>
        <button className="previous-treatment">Shows Previous Treatment</button>
      </div>
      <hr className="horizontal-divider" />
      <div className="appointment1-container">
        <div className="time-container">
          <span className="date1">26 Nov ‘19</span>
          <span className="time">09.00 - 10.00</span>
        </div>
        <div className="horiz-divider" />
        <div className="time-container">
          <span className="text1">Treatment</span>
          <span className="text2">Open Access</span>
        </div>
        <div className="horiz-divider" />
        <div className="time-container">
          <span className="text3">Dentist</span>
          <span className="text4">Drg. Adam H.</span>
        </div>
        <div className="time-container">
          <span className="text3">Nurse</span>
          <span className="text4">Jessicamila</span>
        </div>
        <div className="notes">
          <img className="path-note" alt="path" src="./icons/path.png" />
          <div className="note">Note</div>
        </div>
      </div>
      <div className="appointment2-container">
        <div className="time-container">
          <span className="date1">12 Nov ‘19</span>
          <span className="time">09.00 - 10.00</span>
        </div>
        <div className="horiz-divider" />
        <div className="time-container">
          <span className="text1">Treatment</span>
          <span className="text2">Root Canal</span>
        </div>
        <div className="horizon-divider" />
        <div className="time-container">
          <span className="text3">Dentist</span>
          <span className="text4">Drg. Adam H.</span>
        </div>
        <div className="time-container">
          <span className="text3">Nurse</span>
          <span className="text4">Jessicamila</span>
        </div>
        <div className="notes">
          <img className="path-note" alt="path" src="./icons/path.png" />
          <div className="note">Note</div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
