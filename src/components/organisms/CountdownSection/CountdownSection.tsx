import React, { useEffect, useState } from "react";
import { CountdownItem } from "../../molecules/index";
import { translations } from "../../../translations/translations";
import "./CountdownSection.css";

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownSectionProps {
  targetDate: Date | string | number;
}

function getTimeLeft(target: number): TimeLeft {
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const secondsTotal = Math.floor(diff / 1000);
  const days = Math.floor(secondsTotal / (24 * 3600));
  const hours = Math.floor((secondsTotal % (24 * 3600)) / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = Math.floor(secondsTotal % 60);
  return { days, hours, minutes, seconds };
}

const CountdownSection: React.FC<CountdownSectionProps> = ({ targetDate }) => {
  const target =
    typeof targetDate === "number"
      ? targetDate
      : new Date(targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target));
  const translation = translations.en.countdownSection;

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(target));

    const id = window.setInterval(tick, 1000);

    tick();

    return () => clearInterval(id);
  }, [target]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="countdown-section-style">
      <CountdownItem
        numericValue={timeLeft.days}
        timeUnit={translation.days}
      ></CountdownItem>
      <CountdownItem
        numericValue={pad(timeLeft.hours)}
        timeUnit={translation.hours}
      ></CountdownItem>
      <CountdownItem
        numericValue={pad(timeLeft.minutes)}
        timeUnit={translation.minutes}
      ></CountdownItem>
      <CountdownItem
        numericValue={pad(timeLeft.seconds)}
        timeUnit={translation.seconds}
      ></CountdownItem>
    </div>
  );
};

export default CountdownSection;
