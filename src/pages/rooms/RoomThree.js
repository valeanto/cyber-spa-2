import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import $ from "jquery";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css";
import bg from "../../images/rooms/r3/new-bg.mp4";
import doorIconColorPrev from "../../images/rooms/nav/back.png";
import doorIconColorNext from "../../images/rooms/nav/next.png";
import doorIcon from "../../images/rooms/nav/frame.png";
import retreatLogo from "../../images/logo/retreat.png";
import onload from "../../images/rooms/r3/onload.mp4";

// ITEMS

import bed from "../../images/rooms/r3/items/bed.png";
import camera from "../../images/rooms/r3/items/camera.png";
import cherry4d from "../../images/rooms/r3/items/cherry-4d.png";
import cherry from "../../images/rooms/r3/items/cherry.png";
import chilli from "../../images/rooms/r3/items/chilli.png";
import cup from "../../images/rooms/r3/items/cup.png";
import dior from "../../images/rooms/r3/items/dior.png";
import dolphinShirt from "../../images/rooms/r3/items/dolphin-shirt.png";
import dolphin from "../../images/rooms/r3/items/dolphin.png";
import drop from "../../images/rooms/r3/items/drop.png";
import drop2 from "../../images/rooms/r3/items/drop2.png";
import earthSpin from "../../images/rooms/r3/items/earth-spinning.png";
import flowerPink from "../../images/rooms/r3/items/flower-pink.png";
import flowerPurple from "../../images/rooms/r3/items/flower-purple.png";
import glasses from "../../images/rooms/r3/items/glasses.png";
import handShoes from "../../images/rooms/r3/items/handShoes.png";
import heart from "../../images/rooms/r3/items/heart.png";
import horse from "../../images/rooms/r3/items/horse.png";
import india from "../../images/rooms/r3/items/india.png";
import lilypad from "../../images/rooms/r3/items/lillypad.png";
import maddieSelfie from "../../images/rooms/r3/items/maddie-selfie.png";
import maddie from "../../images/rooms/r3/items/maddie.png";
import maddieSkii from "../../images/rooms/r3/items/maddie-skii.png";
import mensCup from "../../images/rooms/r3/items/mens-cup.png";
import moon from "../../images/rooms/r3/items/moon.png";
import moped from "../../images/rooms/r3/items/moped.png";
import rock from "../../images/rooms/r3/items/rock.png";
import sage from "../../images/rooms/r3/items/sage.png";
import solenneFloor from "../../images/rooms/r3/items/solenne-floor.png";
import solenneSelfie from "../../images/rooms/r3/items/solenne-selfie.png";

// AUDIO
import audioFile from "../../music/r3/audio.mp3";
import play from "../../images/general/play.png";
import pause from "../../images/general/pause.png";

export default function RoomThree() {
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

  useEffect(() => {
    let grid_size = 10;

    $(" .box ")
      .draggable({ grid: [grid_size, grid_size] })

      .resizable({ grid: grid_size * 2 })

      .on("mouseover", function () {
        $(this).addClass("move-cursor");
      })

      .on("mousedown", function () {
        $(this)
          .removeClass("move-cursor")
          .addClass("grab-cursor")
          .addClass("opac");
      })

      .on("mouseup", function () {
        $(this)
          .removeClass("grab-cursor")
          .removeClass("opac")
          .addClass("move-cursor");
      });
  }, []);

  return (
    <div className="react-player quiz-video r_container ">
      <ReactPlayer
        className="fixed"
        url={bg}
        width="100%"
        height=""
        controls={false}
        loop={true}
        playing={true}
      />
      <div className="r3_content">
        <Link to="/">
          <div className="logo">
            <img src={retreatLogo} alt="" />
          </div>
        </Link>
        <div className="nav-container">
          <div className="d-container left">
            <Link to="/the-exhale">
              <img src={doorIcon} alt="" className="doorIcon" />
              <img src={doorIconColorPrev} alt="" className="doorIconColor" />
            </Link>
          </div>
          <div className="d-container right">
            <Link to="/the-lover">
              <img src={doorIcon} alt="" className="doorIcon" />
              <img src={doorIconColorNext} alt="" className="doorIconColor" />
            </Link>
          </div>
        </div>
        <div className="int_container">
          <div className="box">
            <img src={bed} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={camera} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={chilli} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={dior} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={dolphinShirt} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={dolphin} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={flowerPink} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={flowerPurple} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={heart} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={horse} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={india} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={maddieSelfie} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={maddie} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={mensCup} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={moon} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={moped} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={sage} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={solenneFloor} alt="" className="stock" />
          </div>
          <div className="box">
            <img src={solenneSelfie} alt="" className="stock" />
          </div>
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
