import "./style/App.css";
import Navbar from "./components/navbar";
import Landing from "./pages/Landing";
import Instructions from "./pages/Instructions";
// import Quiz from "./pages/Quiz";
import RoomOne from "./pages/rooms/RoomOne";
import RoomTwo from "./pages/rooms/RoomTwo";
import RoomThree from "./pages/rooms/RoomThree";
import QuestionOne from "./pages/quiz/QuestionOne";
import QuestionTwo from "./pages/quiz/QuestionTwo";
import QuestionThree from "./pages/quiz/QuestionThree";
import QuestionFour from "./pages/quiz/QuestionFour";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <div>
          <Navbar />

          <Route path="/instructions" exact component={Instructions} />
          {/* <Route path="/quiz" exact component={Quiz} /> */}
          {/* ROOMS */}
          <Route path="/the-lover" exact component={RoomOne} />
          <Route path="/the-exhale" exact component={RoomTwo} />
          <Route path="/the-getaway" exact component={RoomThree} />
          <Route path="/one" exact component={QuestionOne} />
          <Route path="/two" exact component={QuestionTwo} />
          <Route path="/three" exact component={QuestionThree} />
          <Route path="/four" exact component={QuestionFour} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
