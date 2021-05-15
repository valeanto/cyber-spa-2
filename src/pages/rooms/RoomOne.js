import React, { useState } from "react";
import ReactPlayer from "react-player";
import bg from "../../images/rooms/r1/bg.mp4";
import doorIconColor from "../../images/rooms/nav/back.png";
import heart_pressed from "../../images/rooms/r1/heart_pressed.png";
import heart_not_pressed from "../../images/rooms/r1/heart_not_pressed.png";
import circle from "../../images/rooms/r1/circle.png";
// import doorRight from "../../images/rooms/nav/next.png";
import doorIcon from "../../images/rooms/nav/frame.png";
import retreatLogo from "../../images/logo/retreat.png";
import firstA from "../../images/rooms/r1/heart_pressed.png";
import secondA from "../../images/rooms/r1/heart_not_pressed.png";

export default function RoomOne() {
  const affirmations = [firstA, secondA];

  function changeImage() {
    let i = 0;
    //   consol
    if (i < affirmations.length - 1) {
      i++;
    } else {
      i = 0;
    }
    console.log(i);
  }
  function playAnim() {
    document.getElementById("purple_circle").className = "purple_circle_active";
    console.log("hello");
  }

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
        <div className="r1_item">
          <div className="heart" onClick={playAnim}>
            <img src={heart_not_pressed} alt="" className="heart_not_pressed" />
            <img src={heart_pressed} alt="" className="heart pressed" />
          </div>
          <div className="heart_box">
            <img src="" alt="" id="r1_loading" />
            <img src="" alt="" id="r1_box" />
          </div>
        </div>
        <img
          src={circle}
          alt=""
          id="purple_circle"
          //   className="purple_circle_active"
        />
        <div className="a_container" onClick={changeImage}>
          <img src={`${affirmations[0]}`} alt="" />
        </div>
        {/* {projects.map((item) => (
          <div className="affirmation" onClick={() => console.log('a')}>
            <img src={`${item}`} alt="" />
          </div>
        ))} */}
      </div>
    </div>
  );
}
