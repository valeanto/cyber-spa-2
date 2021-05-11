import React, { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";

import ReactPlayer from "react-player";
import quizOneBackground from "../../images/bg/quiz_bg.mov";
import title from "../../images/quiz/q1/title.png";

function QuestionOne() {
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
          pathname: "/question-two",
        }}
      />
    );
  }
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
      <div className="content questionThree_container">
        <img src={title} alt="" className="q1_title" />

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
    </div>
  );
}

export default withRouter(QuestionOne);