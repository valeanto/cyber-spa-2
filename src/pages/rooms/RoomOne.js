import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import bg from "../../images/rooms/r1/bg.mp4";
import doorIconColorPrev from "../../images/rooms/nav/back.png";
import doorIconColorNext from "../../images/rooms/nav/next.png";
import heart_pressed from "../../images/rooms/r1/heart_pressed.png";
import heart_not_pressed from "../../images/rooms/r1/heart_not_pressed.png";
import doorIcon from "../../images/rooms/nav/frame.png";
import retreatLogo from "../../images/logo/retreat.png";
import firstA from "../../images/rooms/r1/heart_pressed.png";
import secondA from "../../images/rooms/r1/heart_not_pressed.png";
import onLoad from "../../images/rooms/r1/loading.gif";
import affirmationImg from "../../images/rooms/r1/item4.png";
import audioFile from "../../music/r1/audio.wav";
import play from "../../images/general/play.png";
import pause from "../../images/general/pause.png";

export default function RoomOne() {
  let audio = useRef();
  const [playing, setPlaying] = useState(true);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    audio.current = new Audio(audioFile);
    audio.current.loop = true;

    audio.current.play();
  }, []);

  useEffect(() => {
    return () => {
      audio.current.pause();
    };
  }, []);
  useEffect(() => {
    playing ? audio.current.play() : audio.current.pause();
  }, [playing]);
  const affirmations = [firstA, secondA];
  function changeImage() {
    let i = 0;
    if (i < affirmations.length - 1) {
      i++;
    } else {
      i = 0;
    }
  }
  function hideHeart() {
    let heart = document.querySelector(".heart");
    heart.style.opacity = "0";
    showAffirmation();
  }
  function showAffirmation() {
    setTimeout(() => {
      let affirmationBox = document.querySelector(".affirmationLoad");
      affirmationBox.style.opacity = "1";
    }, 1000);
    setTimeout(() => {
      let affirmationBox = document.querySelector(".affirmationLoad");
      affirmationBox.style.opacity = "0";
    }, 8000);
    setTimeout(() => {
      let affirmationImg = document.querySelector(".affirmationBox");
      affirmationImg.style.opacity = "1";
    }, 8000);
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
        <div className="r1_item" onClick={hideHeart}>
          <div className="heart">
            <img src={heart_not_pressed} alt="" className="heart_not_pressed" />
            <img src={heart_pressed} alt="" className="heart pressed" />
          </div>
          <div className="heart_box">
            <img src="" alt="" id="r1_loading" />
            <img src="" alt="" id="r1_box" />
          </div>
        </div>
        <div className="affirmationLoad">
          <img src={onLoad} alt="" className="video_container" />
        </div>
        <div className="affirmationBox">
          <img src={affirmationImg} alt="" className="" />
        </div>
        {/* <div className="a_container" onClick={changeImage}>
          <img src={`${affirmations[0]}`} alt="" />
        </div> */}
        {/* {projects.map((item) => (
          <div className="affirmation" onClick={() => console.log('a')}>
            <img src={`${item}`} alt="" />
          </div>
        ))} */}
      </div>
      {/* <div className="soundToggle"> */}
      <div className="sound">
        <button onClick={toggle} className="sound-icon-con">
          {playing ? (
            <img src={pause} className="pause" />
          ) : (
            <img src={play} className="play" />
          )}
        </button>
      </div>
      {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
      {/* </div> */}
    </div>
  );
}
