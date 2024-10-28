import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemaintime) => 
        prevRemaintime - 100
      );
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
