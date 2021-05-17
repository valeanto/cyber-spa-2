import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import bg from "../../images/rooms/r3/bg.mp4";
import doorIconColor from "../../images/rooms/nav/back.png";
import heart_pressed from "../../images/rooms/r1/heart_pressed.png";
import heart_not_pressed from "../../images/rooms/r1/heart_not_pressed.png";
import circle from "../../images/rooms/r1/circle.png";
// import doorRight from "../../images/rooms/nav/next.png";
import doorIcon from "../../images/rooms/nav/frame.png";
import retreatLogo from "../../images/logo/retreat.png";
import $ from "jquery";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css";

export default function RoomThree() {
  // useEffect(() => {
  //   $(function () {
  //     $("#draggable").draggable();
  //   });
  // }, []);
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

        $(" .text ").hide();
      })

      .on("mouseup", function () {
        $(this)
          .removeClass("grab-cursor")
          .removeClass("opac")
          .addClass("move-cursor");
      });
  }, []);

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
        <Link to="/">
          <div className="logo">
            <img src={retreatLogo} alt="" />
          </div>
        </Link>
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
        <div class="box">
          <img src={circle} alt="" className="stock" />
        </div>
        {/* <div id="draggable" className="ui-widget-content">
          <p>Drag me around</p>
        </div> */}
      </div>
    </div>
  );
}
