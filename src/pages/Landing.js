import React from "react";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";
import backgroundVideo from "../images/bg/background.mp4";
import retreatLogo from "../images/logo/retreat.png";
import enterLogo from "../images/logo/enter.png";
import starImage from "../images/general/star.png";
import copyright from "../images/general/copyright.png";
import cyberSpaIcon from "../images/general/cyber-spa.png";

export default function Landing() {
  return (
    <div class="background-landing">
      <ReactPlayer
        className=""
        url={backgroundVideo}
        width="100%"
        height="100%"
        controls={false}
        loop={true}
        playing={true}
      />
      <Link to="/instructions" className="landing-link logo-container">
        <img src={retreatLogo} alt="" />
        <img src={enterLogo} alt="" />
        {/* <img src={starImage} alt="" className="star" id='star-one'/> */}
        <img src={starImage} alt="" className="star" id="star-two" />
        <img src={starImage} alt="" className="star" id="star-three" />
        <img src={starImage} alt="" className="star" id="star-four" />
        {/* <img src={starImage} alt="" className="star" id="star-five" />
        <img src={starImage} alt="" className="star" id="star-six" />
        <img src={starImage} alt="" className="star" id="star-seven" /> */}
      </Link>
      <div className="landing_footer">
        <div className="item">
          <img src={cyberSpaIcon} alt="" />
        </div>
        <div className="item">
          <img src={copyright} alt="" />
        </div>
      </div>
    </div>
  );
}
