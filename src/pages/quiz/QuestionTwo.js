import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import quizOneBackground from "../../images/bg/quiz_bg.mov";
import air from "../../images/quiz/q2/air.png";
import earth from "../../images/quiz/q2/earth.png";
import water from "../../images/quiz/q2/water.png";
import title from "../../images/quiz/q2/title.png";
import waterVideo from "../../images/quiz/q2/water.mov";
import retreatLogo from "../../images/quiz/q2/retreat.png";

export default function QuestionTwo() {
  return (
    <div className="questionContainer">
      <img src={retreatLogo} alt={title} className="retreatLogo" />

      <ReactPlayer
        className="react-player quiz-video"
        url={quizOneBackground}
        width="100%"
        height="100%"
        controls={false}
        loop={true}
        playing={true}
      />
      <div className="content questionTwo_container">
        <div className="q_title qTwo">
          <img src={title} alt={title} className="q2_title" />
        </div>
        <div className="q2_container">
          <div className="q2_item">
            <img src={air} alt={air} className="first-image" />
            {/* <ReactPlayer
              className="video-image"
              url={waterVideo}
              width="100%"
              height="100%"
              controls={false}
              loop={true}
              playing={true}
            /> */}
          </div>

          <div className="q2_item ">
            <Link to="/three">
              <img src={earth} alt={earth} className="first-image" />
              {/* <ReactPlayer
              className="video-image"
              url={waterVideo}
              width="100%"
              height="100%"
              controls={false}
              loop={true}
              playing={true}
            /> */}
            </Link>
          </div>

          <div className="q2_item">
            <img src={water} alt={water} className="first-image" />
            <ReactPlayer
              className="video-image"
              url={waterVideo}
              width="100%"
              height="100%"
              controls={false}
              loop={true}
              playing={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
