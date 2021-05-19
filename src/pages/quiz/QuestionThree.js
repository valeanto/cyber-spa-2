import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import quizOneBackground from "../../images/bg/quiz_bg.mov";
import retreatLogo from "../../images/quiz/q2/retreat.png";

import title from "../../images/quiz/q3/title.png";
import calm from "../../images/quiz/q3/words/lineOne/Calm.png";
import exhale from "../../images/quiz/q3/words/lineOne/exhale.png";
import inhale from "../../images/quiz/q3/words/lineOne/inhale.png";
import relax from "../../images/quiz/q3/words/lineOne/relax.png";
import slow from "../../images/quiz/q3/words/lineOne/slow.png";
import three from "../../images/quiz/q3/words/lineTwo/three.png";
import me from "../../images/quiz/q3/words/lineTwo/mee.png";
import praise from "../../images/quiz/q3/words/lineTwo/praise.png";
import self from "../../images/quiz/q3/words/lineTwo/self.png";
import destination from "../../images/quiz/q3/words/lineThree/destination.png";
import escape from "../../images/quiz/q3/words/lineThree/escape.png";
import getaway from "../../images/quiz/q3/words/lineThree/getaway.png";
import playa from "../../images/quiz/q3/words/lineThree/playa.png";
import sun from "../../images/quiz/q3/words/lineThree/sun.png";

export default function QuestionThree() {
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
      <div className="questionThree_container">
        <div className="q_title qThree">
          <img src={title} className="q3_title" alt="" />
        </div>
        <div className="q3_content">
          <div className="row">
            <div class="marquee">
              <div class="marquee--inner">
                <Link to="/four" className="words">
                  <span>
                    <img src={calm} class="orb"></img>
                    <img src={exhale} class="orb"></img>
                    <img src={inhale} class="orb"></img>
                    <img src={relax} class="orb"></img>
                    <img src={slow} class="orb"></img>
                  </span>
                  <span>
                    <img src={calm} class="orb"></img>
                    <img src={exhale} class="orb"></img>
                    <img src={inhale} class="orb"></img>
                    <img src={relax} class="orb"></img>
                    <img src={slow} class="orb"></img>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="marquee second-row">
              <div class="marquee--inner">
                <Link to="/four" className="words">
                  <span>
                    <img src={relax} class="orb"></img>
                    <img src={slow} class="orb"></img>
                    <img src={three} class="orb"></img>
                    <img src={me} class="orb"></img>
                    <img src={praise} class="orb"></img>
                    <img src={self} class="orb"></img>
                  </span>
                  <span>
                    <img src={relax} class="orb"></img>
                    <img src={slow} class="orb"></img>
                    <img src={three} class="orb"></img>
                    <img src={me} class="orb"></img>
                    <img src={praise} class="orb"></img>
                    <img src={self} class="orb"></img>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="marquee">
              <div class="marquee--inner third">
                <Link to="/four" className="words">
                  <span>
                    <img src={destination} class="orb"></img>
                    <img src={escape} class="orb"></img>
                    <img src={getaway} class="orb"></img>
                    <img src={playa} class="orb"></img>
                    <img src={sun} class="orb"></img>
                  </span>
                  <span>
                    <img src={destination} class="orb"></img>
                    <img src={escape} class="orb"></img>
                    <img src={getaway} class="orb"></img>
                    <img src={playa} class="orb"></img>
                    <img src={sun} class="orb"></img>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/question-four">Room four </Link>
    </div>
  );
}
