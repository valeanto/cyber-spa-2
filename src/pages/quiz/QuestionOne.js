import React, { useRef, useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import ReactPlayer from "react-player";
import quizOneBackground from "../../images/bg/quiz_bg.mp4";
import title from "../../images/quiz/q1/title.png";
import audioFile from "../../music/general/audio.wav";
import play from "../../images/general/play.png";
import pause from "../../images/general/pause.png";

function QuestionOne() {
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
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <Redirect
        push
        to={{
          pathname: "/two",
        }}
      />
    );
  }
  return (
    <div className="questionContainer single">
      <ReactPlayer
        className="react-player quiz-video"
        url={quizOneBackground}
        width="100%"
        height="100%"
        controls={false}
        loop={true}
        playing={true}
      />
      <div className="content questionThree_container">
        <div className="q_title qOne">
          <img src={title} alt="" className="q1_title" />
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Write here"
              className="q1_text"
              id="demo"
            />
          </label>
        </form>
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

export default withRouter(QuestionOne);
