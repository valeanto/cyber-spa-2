import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import instructionsVideo from "../images/bg/background.mp4";
import retreatLogo from "../images/logo/retreat.png";
import aboutTitle from "../images/instructions/logo.png";
import cross from "../images/instructions/cross.png";

export default function Instructions() {
  const [toggle, setToggle] = useState(false);

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
        about
      </button>
      {toggle && (
        <div className="about_container">
          <img src={aboutTitle} alt="" className="about_title" />
          <p>
            ‘A DIGITAL INTERPRETATION OF A SPA, AND WHAT THE FUTURE OF
            RELAXATION COULD INVOLVE
          </p>
          <p>
            ART DIRECTION AND GRAPHICS: MÄRTA JOHANSSON MUSIC: LITHE & FREE
            WEBSITE CODING:
            <span className="lucas">V</span>ALENTINA ANTOLLINI{" "}
          </p>

          <p>THE GETAWAY ROOM: STYLING AND CASTING: ALEX SOROKA MODELS: TBC </p>
          <p> THANKS TO EVERYONE INVOLVED</p>
          <button onClick={() => setToggle(!toggle)} className="cross">
            <img src={cross} alt="" />
          </button>
        </div>
      )}

      <Link to="/question-one" className="to-button-quiz float">
        Lets begin
      </Link>
    </div>
  );
}
