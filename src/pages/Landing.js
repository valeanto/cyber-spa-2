import React from "react";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";
import backgroundVideo from "../images/bg/background.mp4";
import retreatLogo from "../images/logo/retreat.png";
import enterLogo from "../images/logo/enter.png";
import starImage from "../images/general/star.png";

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
        <img src={starImage} alt="" id='star-right' className='star'/>
        <img src={starImage} alt="" id='star-top' className='star'/>

      </Link>
    </div>
  );
}
