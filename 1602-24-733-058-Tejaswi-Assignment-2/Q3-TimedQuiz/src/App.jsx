
import { useState, useEffect } from "react";

const questions = [
  {
    q: "Which language is used with React?",
    options: ["Python", "JavaScript", "C", "Java"],
    answer: "JavaScript"
  },
  {
    q: "What is JSX?",
    options: ["Database", "HTML-like syntax", "Browser", "Server"],
    answer: "HTML-like syntax"
  },
  {
    q: "Which hook manages state?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState"
  },
  {
    q: "Which method creates a React root?",
    options: ["createRoot", "createApp", "renderApp", "start"],
    answer: "createRoot"
  },
  {
    q: "Which hook handles side effects?",
    options: ["useState", "useEffect", "useId", "useContext"],
    answer: "useEffect"
  }
];

function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;

    if (time === 0) {
      setFinished(true);
      return;
    }

    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, finished]);

  function selectAnswer(option) {
    if (option === questions[index].answer) {
      setScore(score + 1);
    }

    if (index === questions.length - 1) {
      setFinished(true);
    } else {
      setIndex(index + 1);
    }
  }

  function restartQuiz() {
    setIndex(0);
    setScore(0);
    setTime(30);
    setFinished(false);
  }

  return (
    <div>
      <h2>Timed Quiz</h2>

      {finished ? (
        <div>
          <h3>Quiz Finished!</h3>
          <h3>Score: {score} / {questions.length}</h3>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h3>Time Left: {time} seconds</h3>
          <h3>Question {index + 1}: {questions[index].q}</h3>

          {questions[index].options.map((option) => (
            <button
              key={option}
              onClick={() => selectAnswer(option)}
              style={{ display: "block", margin: "8px" }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
