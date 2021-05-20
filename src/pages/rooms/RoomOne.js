import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import bg from "../../images/rooms/r1/bg.mp4";
import onload from "../../images/rooms/r1/onload.mp4";
import doorIconColorPrev from "../../images/rooms/nav/back.png";
import doorIconColorNext from "../../images/rooms/nav/next.png";
import heart_pressed from "../../images/rooms/r1/heart_pressed.png";
import heart_not_pressed from "../../images/rooms/r1/heart_not_pressed.png";
import circle from "../../images/rooms/r1/circle.png";
import doorIcon from "../../images/rooms/nav/frame.png";
import retreatLogo from "../../images/logo/retreat.png";
import firstA from "../../images/rooms/r1/heart_pressed.png";
import secondA from "../../images/rooms/r1/heart_not_pressed.png";

export default function RoomOne() {
  useEffect(() => {
    let intro = document.querySelector(".intro");
    let logo = document.querySelector(".logo-header");
    let logoSpan = document.querySelectorAll(".logo");
    const onLoadToQuiz = setTimeout(() => {
      intro.style.top = "-120%";
    }, 8000);

    return () => clearTimeout(onLoadToQuiz);
  }, []);

  const affirmations = [firstA, secondA];

  function changeImage() {
    let i = 0;
    if (i < affirmations.length - 1) {
      i++;
    } else {
      i = 0;
    }
  }
  function playAnim() {
    document.getElementById("purple_circle").className = "purple_circle_active";
  }

  return (
    <div className="react-player quiz-video r_container">
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
        <Link to="/">
          <div className="logo">
            <img src={retreatLogo} alt="" />
          </div>
        </Link>
        <div className="nav-container">
          <div className="d-container left">
            <Link to="/the-getaway">
              <img src={doorIcon} alt="" className="doorIcon" />
              <img src={doorIconColorPrev} alt="" className="doorIconColor" />
            </Link>
          </div>
          <div className="d-container right">
            <Link to="/the-exhale">
              <img src={doorIcon} alt="" className="doorIcon" />
              <img src={doorIconColorNext} alt="" className="doorIconColor" />
            </Link>
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
      <div class="intro">
        <div class="logo-header">
          <span class="logo">Analysing test results</span>
          <ReactPlayer
            className=""
            url={onload}
            width="100%"
            height="100%"
            controls={false}
            loop={true}
            playing={true}
          />
        </div>
      </div>
    </div>
  );
}
