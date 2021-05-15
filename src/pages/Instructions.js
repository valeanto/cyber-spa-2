import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import instructionsVideo from "../images/bg/background.mp4";
import retreatLogo from "../images/logo/retreat.png";

export default function Instructions() {
  const [toggle, setToggle] = useState(false);
  function showAbout() {
    // document.getElementById("about_box").className = "active";
  }
  return (
    <div className="instructions-landing">
      <ReactPlayer
        className="react-player fixed-bottom"
        url={instructionsVideo}
        width="100%"
        height="100%"
        controls={false}
        loop={true}
        playing={true}
      />
      <div className="logo">
        <img src={retreatLogo} alt="" />
      </div>
      <button className="about_button" onClick={() => setToggle(!toggle)}>
        button
        {toggle && (
          <ul>
            <li>Show me</li>
            <li>Only when</li>
            <li>Toggle === true</li>
          </ul>
        )}
      </button>
      <div className="about_box" id="about_box">
        about box
      </div>
      <Link to="/question-one" className="to-button-quiz float">
        Lets begin
      </Link>
    </div>
  );
}
