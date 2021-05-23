import React, { useState } from "react";
import aboutTitle from "../images/instructions/logo.png";
// import cross from "../images/instructions/cross.png";
import { CSSTransition } from "react-transition-group";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar">
      <button
        className="about_button"
        onMouseOver={() => setToggle(!toggle)}
        onClick={() => setToggle(!toggle)}
      >
        about
      </button>
      {toggle && (
        <div className="about_container">
          <img src={aboutTitle} alt="" className="about_title" />
          <p>
            A DIGITAL SPA EXPERIENCE TO EXPLORE, RELAX AND ESCAPE. TRANSLATING
            THE IDEA OF A PHYSICAL SPA INTO THE DIGITAL.
          </p>
          <div className="break"></div>

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
          <div className="break"></div>
          <p>THE GETAWAY ROOM: </p>
          <p>
            PHOTOGRAPHY + CREATIVE DIRECTION:{" "}
            <a href="https://www.instagram.com/martajohansson/" target="_blank">
              MARTA JOHANSSON
            </a>
          </p>
          <p>
            STYLING AND CASTING:{" "}
            <a href="https://www.instagram.com/fruit__looop/" target="_blank">
              ALEX SOROKA{" "}
            </a>
          </p>
          <p>
            MODELS:{" "}
            <a href="https://www.instagram.com/maddiejac/" target="_blank">
              MADDIE,{" "}
            </a>
            <a href="https://www.instagram.com/india_m/ " target="_blank">
              INDIA,{" "}
            </a>
            <a href="https://www.instagram.com/solennechoi/ " target="_blank">
              SOLENNE
            </a>
          </p>
          <div className="break"></div>

          <p> THANKS TO EVERYONE INVOLVED</p>
          {/* <button onClick={() => setToggle(!toggle)} className="cross">
            <img src={cross} alt="" />
          </button> */}
        </div>
      )}
    </div>
  );
}
