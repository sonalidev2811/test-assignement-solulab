import React from "react";
import "../CSS/SideNavBar.css";

const SideNavBar = () => {
  return (
    <div className="navbar-container">
      <div className="image-div">
        <img className="image" alt="vector" src="./icons/vector.png" />
      </div>
      <img className="new" alt="add" src="./icons/add.png" />
      <div className="new-text">NEW</div>
      <img className="patient" alt="profile" src="./icons/profile.png" />
      <div className="patient-text">PATIENT</div>
      <img className="folder" alt="folder" src="./icons/folder.png" />
      <div className="folder-text">FOLDER</div>
      <img className="upload" alt="upload" src="./icons/upload.png" />
      <div className="upload-text">UPLOAD</div>
      <img className="report" alt="report" src="./icons/report.png" />
      <div className="report-text">REPORT</div>
      <div className="setting-div">
        <img className="setting" alt="setting" src="./icons/settings.png" />
        <div className="setting-text">SETTING</div>
      </div>
      <div className="logout-div">
        <img className="logout" alt="logout" src="./icons/logout.png" />
        <div className="logout-text">LOGOUT</div>
      </div>
    </div>
  );
};

export default SideNavBar;
