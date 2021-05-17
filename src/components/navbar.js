import React, { useState } from "react";
import aboutTitle from "../images/instructions/logo.png";
import cross from "../images/instructions/cross.png";
import play from "../images/general/play.png";
import pause from "../images/general/pause.png";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar">
      <button className="about_button" onMouseOver={() => setToggle(!toggle)}>
        about
      </button>
      {toggle && (
        <div className="about_container">
          <img src={aboutTitle} alt="" className="about_title" />
          <p>
          A DIGITAL SPA EXPERIENCE TO EXPLORE, RELAX AND ESCAPE. TRANSLATING THE IDEA OF A PHYSICAL SPA INTO THE DIGITAL. 
          </p>
          <p>
            ART DIRECTION AND GRAPHICS:
            <a href="https://www.instagram.com/martajohansson/" target="_blank">
              MÄRTA JOHANSSON
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/lithexfree/ " target="_blank">
              MUSIC: LITHE & FREE
            </a>
          </p>

          <p>
            WEBSITE DEVELOPMENT:
            <a
              href="https://www.instagram.com/valentinantollini/"
              target="_blank"
            >
              <span className="lucas">V</span>ALENTINA ANTOLLINI{" "}
            </a>
          </p>

          <p>THE GETAWAY ROOM: STYLING AND CASTING: ALEX SOROKA MODELS: TBC </p>
          <p> THANKS TO EVERYONE INVOLVED</p>
          <button onClick={() => setToggle(!toggle)} className="cross">
            <img src={cross} alt="" />
          </button>
        </div>
      )}
      <div className="sound">
        <img src={play} alt="" className="play" />
        <img src={pause} alt="" className="pause" />
      </div>
    </div>
  );
}
