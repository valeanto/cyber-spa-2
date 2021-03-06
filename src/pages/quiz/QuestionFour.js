import React, { useRef, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import quizOneBackground from "../../images/bg/quiz_bg.mp4";
import title from "../../images/quiz/q4/title.png";
import retreatLogo from "../../images/quiz/q2/retreat.png";

import candle from "../../images/quiz/q4/candle.png";
import getaway from "../../images/quiz/q4/getaway.png";
import mirror from "../../images/quiz/q4/mirror.png";

import onloadLover from "../../images/rooms/r1/onload.mp4";
import onloadExhale from "../../images/rooms/r2/onload.mp4";
import onloadGetaway from "../../images/rooms/r3/onload.mp4";

import play from "../../images/general/play.png";
import pause from "../../images/general/pause.png";
import audioFile from "../../music/general/audio.wav";

export default function QuestionFour() {
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
  let history = useHistory();
  function onLoadToRoomLover() {
    let loadLover = document.querySelector(".loadLover");
    setTimeout(() => {
      loadLover.style.display = "block";
    }, 5000);
    setTimeout(() => {
      history.push("/the-lover");
    }, 9000);
  }
  function onLoadToRoomExhale() {
    let loadExhale = document.querySelector(".loadGetaway");
    setTimeout(() => {
      loadExhale.style.display = "block";
    }, 5000);
    setTimeout(() => {
      history.push("/the-exhale");
    }, 9000);
  }
  function onLoadToRoomGetaway() {
    let loadGetaway = document.querySelector(".loadGetaway");
    setTimeout(() => {
      loadGetaway.style.display = "block";
    }, 5000);
    setTimeout(() => {
      history.push("/the-getaway");
    }, 9000);
  }

  return (
    <div className="questionContainer single">
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
      <div className="contentFour questionThree_container ">
        <div className="q_title qFour">
          <img src={title} alt={title} className="question_title" />
        </div>
        <div className="door-container ">
          <div className="door doorOne" onClick={onLoadToRoomGetaway}>
            <img src={getaway} alt="" className="doorFront" />
          </div>
          <div className="door doorTwo" onClick={onLoadToRoomLover}>
            <img src={mirror} alt="" className="doorFront" />
          </div>
          <div className="door doorThree" onClick={onLoadToRoomExhale}>
            <img src={candle} alt="" className="doorFront" />
          </div>
        </div>
      </div>
      <div className="intro loadLover">
        <div className="logo-header">
          <ReactPlayer
            className=""
            url={onloadLover}
            width="100%"
            height="100%"
            controls={false}
            loop={true}
            playing={true}
          />
        </div>
      </div>
      <div className="intro loadExhale">
        <div className="logo-header">
          <ReactPlayer
            className=""
            url={onloadExhale}
            width="100%"
            height="100%"
            controls={false}
            loop={true}
            playing={true}
          />
        </div>
      </div>
      <div className="intro loadGetaway">
        <div className="logo-header">
          <ReactPlayer
            className=""
            url={onloadGetaway}
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
