import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import quizOneBackground from "../../images/bg/quiz_bg.mov";
import title from "../../images/quiz/q4/title.png";

import candle from "../../images/quiz/q4/candle.png";
import getaway from "../../images/quiz/q4/getaway.png";
import mirror from "../../images/quiz/q4/mirror.png";
import loverDoor from "../../images/quiz/q4/lover-door.png";

export default function QuestionFour() {
  return (
    <div className="questionContainer">
      <ReactPlayer
        className="react-player quiz-video"
        url={quizOneBackground}
        width="100%"
        height="100%"
        controls={false}
        loop={true}
        playing={true}
      />
      <div className="contentFour questionThree_container">
        <div className="q_title qFour">
          <img src={title} alt={title} className="question_title" />
        </div>
        <div className="door-container ">
          <div className="door doorOne">
            <img src={getaway} alt="" className="doorFront" />
            <img src={loverDoor} alt="" className="doorBack" />
          </div>
          <div className="door doorTwo">
            <img src={mirror} alt="" className="doorFront" />
            <img src={loverDoor} alt="" className="doorBack" />
          </div>

          <div className="door doorThree">
            <img src={candle} alt="" className="doorFront" />
            <img src={loverDoor} alt="" className="doorBack" />
          </div>
        </div>
      </div>
    </div>
  );
}
