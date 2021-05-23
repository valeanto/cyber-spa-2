import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import $ from "jquery";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css";
import { Link } from "react-router-dom";
import bg from "../../images/rooms/r2/bg-new.mp4";
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

  // DOTS
  useEffect(() => {
    var mouse = { x: 0, y: 0 };
    let homex = 0;
    let homey = 0;
    let forcex = 0;
    let forcey = 0;
    let magnet = 1000;

    $(document).bind("mousemove", function (e) {
      mouse = { x: e.pageX, y: e.pageY };
    });

    $(".dot").each(function (index, el) {
      $(el).data("homex", parseInt($(el).position().left));
      $(el).data("homey", parseInt($(el).position().top));
    });

    $(".dot").css("position", "absolute");
    setInterval(function () {
      $(".dot").each(function (index, el) {
        el = $(el);
        let position = el.position();
        let x0 = el.offset().left;
        let y0 = el.offset().top;
        let x1 = mouse.x;
        let y1 = mouse.y;
        let distancex = x1 - x0;
        let distancey = y1 - y0;
        let distance = Math.sqrt(distancex * distancex + distancey * distancey);
        let powerx = x0 - ((distancex / distance) * magnet) / distance;
        let powery = y0 - ((distancey / distance) * magnet) / distance;
        forcex = (forcex + (el.data("homex") - x0) / 2) / 2.1;
        forcey = (forcey + (el.data("homey") - y0) / 2) / 2.1;
        el.css("left", powerx + forcex);
        el.css("top", powery + forcey);
        // el.text(parseInt(distance));
      });
    }, 15);
  }, []);

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
        <div className="petals_container ">
          <div className="petal-row">
            <img src={p1} alt="" className="dot" />
            <img src={p2} alt="" className="dot" />
            <img src={p3} alt="" className="dot" />
          </div>
          <div className="petal-row">
            <img src={p4} alt="" className="dot" />
            <img src={p5} alt="" className="dot" />
            <img src={p6} alt="" className="dot" />
          </div>
          <div className="petal-row">
            <img src={p7} alt="" className="dot" />
            <img src={p8} alt="" className="dot" />
            <img src={p9} alt="" className="dot" />
            <img src={p10} alt="" className="dot" />
          </div>

          {/*    
          <div className="dot">
            <img src={p3} alt="" className="petal" />
          </div>
          <div className="dot">
            <img src={p4} alt="" className="petal" />
          </div>
          <div className="dot">
            <img src={p5} alt="" className="petal" />
          </div>
          <div className="dot">
            <img src={p6} alt="" className="petal" />
          </div>
          <div className="dot">
            <img src={p7} alt="" className="petal" />
          </div>
          <div className="dot">
            <img src={p8} alt="" className="petal" />
          </div>
          <div className="dot">
            <img src={p9} alt="" className="petal" />
          </div>
          <div className="dot">
            <img src={p10} alt="" className="petal" />
          </div> */}
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
