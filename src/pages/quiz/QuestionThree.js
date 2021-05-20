import React, { useRef, useEffect, useState } from "react";
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

import play from "../../images/general/play.png";
import pause from "../../images/general/pause.png";
import audioFile from "../../music/general/audio.wav";

export default function QuestionThree() {
  let audio = useRef();
  const [playing, setPlaying] = useState(true);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    audio.current = new Audio(audioFile);
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
            <div className="marquee">
              <div className="marquee--inner">
                <Link to="/four" className="words">
                  <span>
                    <img src={calm} className="orb"></img>
                    <img src={exhale} className="orb"></img>
                    <img src={inhale} className="orb"></img>
                    <img src={relax} className="orb"></img>
                    <img src={slow} className="orb"></img>
                  </span>
                  <span>
                    <img src={calm} className="orb"></img>
                    <img src={exhale} className="orb"></img>
                    <img src={inhale} className="orb"></img>
                    <img src={relax} className="orb"></img>
                    <img src={slow} className="orb"></img>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="marquee second-row">
              <div className="marquee--inner">
                <Link to="/four" className="words">
                  <span>
                    <img src={relax} className="orb"></img>
                    <img src={slow} className="orb"></img>
                    <img src={three} className="orb"></img>
                    <img src={me} className="orb"></img>
                    <img src={praise} className="orb"></img>
                    <img src={self} className="orb"></img>
                  </span>
                  <span>
                    <img src={relax} className="orb"></img>
                    <img src={slow} className="orb"></img>
                    <img src={three} className="orb"></img>
                    <img src={me} className="orb"></img>
                    <img src={praise} className="orb"></img>
                    <img src={self} className="orb"></img>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="marquee">
              <div className="marquee--inner third">
                <Link to="/four" className="words">
                  <span>
                    <img src={destination} className="orb"></img>
                    <img src={escape} className="orb"></img>
                    <img src={getaway} className="orb"></img>
                    <img src={playa} className="orb"></img>
                    <img src={sun} className="orb"></img>
                  </span>
                  <span>
                    <img src={destination} className="orb"></img>
                    <img src={escape} className="orb"></img>
                    <img src={getaway} className="orb"></img>
                    <img src={playa} className="orb"></img>
                    <img src={sun} className="orb"></img>
                  </span>
                </Link>
              </div>
            </div>
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
