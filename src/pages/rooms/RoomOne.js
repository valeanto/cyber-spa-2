import React from "react";
import ReactPlayer from "react-player";
import bg from "../../images/rooms/r1/bg.mp4";
import doorIconColor from "../../images/rooms/nav/back.png";
// import doorRight from "../../images/rooms/nav/next.png";
import doorIcon from "../../images/rooms/nav/frame.png";
import retreatLogo from "../../images/logo/retreat.png";

export default function RoomOne() {
  return (
    <div className="r_container">
      <ReactPlayer
        className=""
        url={bg}
        width="100%"
        height="100%"
        controls={false}
        loop={true}
        playing={true}
      />
      <div className="r_content">
        <div className="logo">
          <img src={retreatLogo} alt="" />
        </div>
        <div className="nav-container">
          <div className="d-container left">
            <img src={doorIcon} alt="" className="" />
            <img src={doorIconColor} alt="" className="doorIconColor" />{" "}
          </div>
          <div className="d-container right">
            <img src={doorIcon} alt="" className="" />
            <img src={doorIconColor} alt="" className="doorIconColor" />
          </div>
        </div>
      </div>
    </div>
  );
}
