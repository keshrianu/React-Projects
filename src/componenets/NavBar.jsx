import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-slate-500 text-white text-lg font-semibold flex justify-evenly h-10 p-2">
      {/* <Link to ="use_reducer">Use Reducer</Link> */}
      <Link to ="/progess_bar">Progress Bar</Link>
      <Link to="/">Counter </Link>
      <Link to="/contact_form">Contact Form </Link>
      <Link to="/job_board">JobBoard </Link>
      <Link to="/HolyGrail">HolyGrail </Link>
      <Link to="/MortageCalculator">MortageCalculator </Link>
      <Link to="/ReactTab">ReactTab </Link>
      <Link to="/DataTable">DataTable </Link>
      <Link to="/FileExplorer">FileExplorer </Link>
      <Link to="/Modal">Modal </Link>
      <Link to="/Todo">Todo </Link>
      <Link to="/TrafficLight">TrafficLight </Link>
      <Link to="/DigitalClock">DigitalClock </Link>
      <Link to="/Imagecarousel">Imagecarousel </Link>
      <Link to ="/Accordion" >Accordion</Link>
      <Link to ="/UserTable" >UserTable</Link>
    </nav>
  );
};

export default NavBar;
