import React from "react";
import SideNavBar from "./Components/SideNavBar";
import UserDetails from "./Components/UserDetails";
import Details from "./Components/Details";
import "./CSS/App.css";

const App = () => {
  return (
    <div className="app-container">
      <SideNavBar />
      <UserDetails />
      <Details />
    </div>
  );
};

export default App;
