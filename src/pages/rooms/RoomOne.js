import React from "react";
import ReactPlayer from "react-player";
import bg from "../../images/rooms/r1/bg.mp4";
export default function RoomOne() {
  return (
    <div>
      <ReactPlayer
        className="react-player quiz-video"
        url={bg}
        width="100%"
        height="100%"
        controls={false}
        loop={true}
        playing={true}
      />
      <div className="r1_content">
        <div className="logo">logo</div>
        <div className="title">title</div>
        <div className="door">door one</div>
        <div className="door">door two</div>
      </div>
    </div>
  );
}
