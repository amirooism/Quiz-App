import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => { 
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const Interval = setInterval(() => {
      setRemainingTime((prevRemaintime) => prevRemaintime - 100);
      return () => {
        clearInterval(Interval);
      };
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
