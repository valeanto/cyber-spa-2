import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import bg from "../../images/rooms/r2/bg.mp4";
import doorIconColorPrev from "../../images/rooms/nav/back.png";
import doorIconColorNext from "../../images/rooms/nav/next.png";
import doorIcon from "../../images/rooms/nav/frame.png";
import retreatLogo from "../../images/logo/retreat.png";
import p1 from "../../images/rooms/r2/petals/p1.png";
import p2 from "../../images/rooms/r2/petals/p2.png";
import p3 from "../../images/rooms/r2/petals/p3.png";
import p4 from "../../images/rooms/r2/petals/p4.png";
import p5 from "../../images/rooms/r2/petals/p5.png";
import p6 from "../../images/rooms/r2/petals/p6.png";
import p7 from "../../images/rooms/r2/petals/p7.png";
import p8 from "../../images/rooms/r2/petals/p8.png";
import p9 from "../../images/rooms/r2/petals/p9.png";
import p10 from "../../images/rooms/r2/petals/p10.png";
import onload from "../../images/rooms/r2/onload.mp4";
import audioFile from "../../music/r2/audio.mp3";
import play from "../../images/general/play.png";
import pause from "../../images/general/pause.png";

export default function RoomTwo() {
  let audio = useRef();
  const [playing, setPlaying] = useState(true);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    console.log("in cleanup");
    audio.current = new Audio(audioFile);
    audio.current.play();
  }, []);

  useEffect(() => {
    return () => {
      audio.current.pause();
      console.log("in cleanup");
    };
  }, []);
  useEffect(() => {
    playing ? audio.current.play() : audio.current.pause();
  }, [playing]);
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
            <Link to="/the-lover">
              <img src={doorIcon} alt="" className="doorIcon" />
              <img src={doorIconColorPrev} alt="" className="doorIconColor" />
            </Link>
          </div>
          <div className="d-container right">
            <Link to="/the-getaway">
              <img src={doorIcon} alt="" className="doorIcon" />
              <img src={doorIconColorNext} alt="" className="doorIconColor" />
            </Link>
          </div>
        </div>
        <div className="petals_container">
          <img src={p1} alt="" className="petal" />
          <img src={p2} alt="" className="petal" />
          <img src={p3} alt="" className="petal" />
          <img src={p4} alt="" className="petal" />
          <img src={p5} alt="" className="petal" />
          <img src={p6} alt="" className="petal" />
          <img src={p7} alt="" className="petal" />
          <img src={p8} alt="" className="petal" />
          <img src={p9} alt="" className="petal" />
          <img src={p10} alt="" className="petal" />
        </div>
      </div>
      <div className="intro">
        <div className="logo-header">
          <span className="logo">Analysing test results</span>
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
      <div className="sound">
        <button onClick={toggle} className="sound-icon-con">
          {playing ? (
            <img src={pause} className="pause" />
          ) : (
            <img src={play} className="play" />
          )}
        </button>
      </div>
    </div>
  );
}
