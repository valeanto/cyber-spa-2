import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import instructionsVideo from "../images/instructions/bg.mp4";
import retreatLogo from "../images/logo/retreat.png";
import title from "../images/instructions/lets_begin.png";

export default function Instructions() {
  useEffect(() => {
    const showImage = setTimeout(() => {
      document.getElementById("letsBegin").style.opacity = "1";
    }, 30000);
    return () => clearTimeout(showImage);
  }, []);
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
      <Link to="/one" className="to-button-quiz float title_center">
        <img src={title} alt="" id="letsBegin" />
      </Link>
    </div>
  );
}
