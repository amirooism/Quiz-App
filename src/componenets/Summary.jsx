import quizIsCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswer = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  ); // where the aswer equalls to the first answer to the Raw data
const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100)
const correctAnswerShare = Math.round((correctAnswer.length / userAnswers.length) * 100)
const wrongAnswerShare = 100 - skippedAnswersShare - correctAnswerShare //:D

  return (
    <div id="summary">
      <img src={quizIsCompleteImg} alt="Trophy icon" />
      <h2>Quiz Complete</h2>
      <div id="summary-stats">
      <p>
        <span className="number">{skippedAnswersShare}%</span>
        <span className="text">skipped</span>
      </p>
      <p>
        <span className="number">{correctAnswerShare}%</span>
        <span className="text">answered correcly</span>
      </p>
      <p>
        <span className="number">{wrongAnswerShare}%</span>
        <span className="text">answerd incorrectly</span>
      </p>
      </div>
      <ol>
        
        {userAnswers.map((answer, index) => {
          // the index i use here is a build in JS, thats why i Plus it with 1
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={answer}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
