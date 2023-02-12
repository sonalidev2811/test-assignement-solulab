import React from "react";
import "../CSS/UserDetails.css";

const UserDetails = () => {
  return (
    <div className="userdetail-container">
      <img className="ellipse" src="./icons/Ellipse.png" />
      <label className="name">Diane Cooper</label>
      <label className="email">diane.cooper@example.com</label>
      <div className="number-container">
        <div className="past-container">
          <span className="past">15</span>
          <span className="past-text">Past</span>
        </div>
        <div className="divider-container">
          <span className="divider"></span>
        </div>
        <div className="past-container">
          <span className="upcoming">02</span>
          <span className="upcoming-text">Upcoming</span>
        </div>
      </div>
      <button className="send-button">Send Message</button>
      <label className="file-container">Files / Documents</label>
      <div className="reports">
        <img className="path" src="./icons/path.png" />
        Check Up Results.pdf
      </div>
      <div className="reports">
        {" "}
        <img className="path" src="./icons/path.png" />
        Check Up Results.pdf
      </div>
      <div className="reports">
        {" "}
        <img className="path" src="./icons/path.png" />
        Medical Prescription.pdf
      </div>
      <div className="reports">
        {" "}
        <img className="path" src="./icons/path.png" />
        Dental X-Ray Result.pdf
      </div>
    </div>
  );
};

export default UserDetails;
