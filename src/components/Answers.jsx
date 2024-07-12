import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelectAnswer,
}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((ans) => {
        let cssClass = "";
        const isSelected = selectedAnswer === ans;
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={ans} className="answer">
            <button
              className={cssClass}
              disabled={answerState !== ""}
              onClick={() => onSelectAnswer(ans)}
            >
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
