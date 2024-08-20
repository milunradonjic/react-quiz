// import DateCounter from './DateCounter';
import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./Progress";
import NextButton from './NextButton'
import FinishedScreen from "./FinishedScreen";
import RestartButton from "./RestartButton";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuizes } from "../contexts/QuizContext";

export default function App() {
  const {status} = useQuizes();
  
  return (
    <div className="app">
      {/* <DateCounter /> */}
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && 
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        }
        {status === "finished" && 
          <>
            <FinishedScreen />
            <RestartButton />
          </>
        }
      </Main>
    </div>
  );
}
