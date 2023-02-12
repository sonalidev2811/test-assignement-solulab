import React from "react";
import "../CSS/PersonalDetails.css";

const PersonalDetails = () => {
  return (
    <>
      <div className="detail-container">
        <div className="left-spacing">
          <div className="category">Gender</div>
          <div className="value">Female</div>
          <div className="hz-divider"></div>
          <div className="category">Street Address</div>
          <div className="value">JL. Diponegoro No. 21</div>
          <div className="hz-divider"></div>
        </div>
        <div className="left-spacing">
          <div className="category">Birthday</div>
          <div className="value">Feb 24th, 1997</div>
          <div className="hz-divider"></div>
          <div className="category">City</div>
          <div className="value">Cilacap</div>
          <div className="hz-divider"></div>
        </div>
        <div className="left-spacing">
          <div className="category">Phone Number</div>
          <div className="value">(239) 555 -0108</div>
          <div className="hz-divider"></div>
          <div className="category">Zip Code</div>
          <div className="value">655849</div>
          <div className="hz-divider"></div>
        </div>
        <div>
          <div className="category">Registered Date</div>
          <div className="value">Feb 24th, 1997</div>
          <div className="hz-divider"></div>
          <div className="category">Member Status</div>
          <div className="value">Active Member</div>
          <div className="hz-divider"></div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
