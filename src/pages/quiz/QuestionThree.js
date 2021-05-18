import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import quizOneBackground from "../../images/bg/quiz_bg.mov";
import title from "../../images/quiz/q3/title.png";
import retreatLogo from "../../images/quiz/q2/retreat.png";

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
                <span>
                  <Link to="/four">
                    <h1 class="orb">inhale</h1>
                  </Link>
                  <Link to="/four">
                    <h1 class="orb red">exhale</h1>
                  </Link>
                  <Link to="/four">
                    <h1 class="orb yellow">slow</h1>
                  </Link>
                </span>
                <span>
                  <Link to="/four">
                    <h1 class="orb">inhale</h1>
                  </Link>
                  <Link to="/four">
                    <h1 class="orb red">exhale</h1>
                  </Link>
                  <Link to="/four">
                    <h1 class="orb yellow">slow</h1>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="marquee second-row">
              <div class="marquee--inner">
                <span>
                  <Link to="/four">
                    <h1 class="orb">heart</h1>
                  </Link>
                  <Link to="/four">
                    <h1 class="orb red">Me</h1>
                  </Link>
                </span>
                <span>
                  <Link to="/four">
                    <h1 class="orb">heart</h1>
                  </Link>
                  <Link to="/four">
                    <h1 class="orb red">Me</h1>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="marquee">
              <div class="marquee--inner third">
                <span>
                  <Link to="/four">
                    <h1 class="orb">playa</h1>
                  </Link>
                  <Link to="/four">
                    <h1 class="orb red">escape</h1>
                  </Link>
                  <Link to="/four">
                    <h1 class="orb yellow">fun</h1>
                  </Link>
                </span>
                <span>
                  <Link to="/four">
                    <h1 class="orb">playa</h1>
                  </Link>
                  <Link to="/four">
                    <h1 class="orb red">escape</h1>
                  </Link>
                  <Link to="/four">
                    <h1 class="orb yellow">fun</h1>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/question-four">Room four </Link>
    </div>
  );
}
