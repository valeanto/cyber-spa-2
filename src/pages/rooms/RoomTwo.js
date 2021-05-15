import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
// import doorIcon from "../../images/rooms/button-door-frame.png";
// import doorIconColor from "../../images/rooms/next-room.png";
// import roomOneBackground from "../../visuals/rooms/water.mp4";
export default function RoomTwo() {
  return (
    <div className="room-landing">
      {/* <ReactPlayer
        className="react-player fixed-bottom"
        url={roomOneBackground}
        width="100%"
        height="100%"
        controls={false}
        loop={true}
        playing={true}
      /> */}
      {/* <div className="room top">top</div>
      <div className="room bottom">bottom</div> */}
      <Link to="/room-two" className="room right nav-button">
        {/* <img src={doorIcon} alt="" className="doorIcon" /> */}
        {/* <img src={doorIconColor} alt="" className="doorIconColor" /> */}
      </Link>
      <Link to="/room-three" className="room left nav-button">
        {/* <img src={doorIcon} alt="" className="doorIcon" /> */}
        {/* <img src={doorIconColor} alt="" className="doorIconColor" /> */}
      </Link>
    </div>
  );
}
