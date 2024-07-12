import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
export default function Summary({ answers }) {
  let skipped =
    answers.filter((answer) => answer === null).length / answers.length;
  let correct =
    answers.filter((answer, index) => answer === QUESTIONS[index].answers[0])
      .length / answers.length;
  let incorrect =
    answers.filter(
      (answer, index) =>
        answer !== null && answer !== QUESTIONS[index].answers[0]
    ).length / answers.length;
  skipped = Math.round(skipped * 100);
  correct = Math.round(correct * 100);
  incorrect = Math.round(incorrect * 100);
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skipped}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correct}%</span>
          <span className="text">Correctly Answered</span>
        </p>
        <p>
          <span className="number">{incorrect}%</span>
          <span className="text">Incorrectly Answered</span>
        </p>
      </div>
      <ol>
        {answers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
