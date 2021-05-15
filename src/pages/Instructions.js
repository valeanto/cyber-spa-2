import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import instructionsVideo from "../images/bg/background.mp4";
import retreatLogo from "../images/logo/retreat.png";


export default function Instructions() {
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
      <Link to="/question-one" className="to-button-quiz float">
        Lets begin
      </Link>
    </div>
  );
}
