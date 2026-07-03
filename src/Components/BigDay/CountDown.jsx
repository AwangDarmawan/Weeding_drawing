import { useEffect, useState } from "react";
import CountDownBox from "./CountDownBox";

export default function Countdown() {
  const targetDate = new Date("2026-08-17T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(
        Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
      ).padStart(2, "0"),
      minutes: String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0"),
      seconds: String(
        Math.floor((distance % (1000 * 60)) / 1000)
      ).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
      <CountDownBox value={timeLeft.days} label="H" />
      <CountDownBox value={timeLeft.hours} label="J" />
      <CountDownBox value={timeLeft.minutes} label="M" />
      <CountDownBox value={timeLeft.seconds} label="D" />
    </div>
  );
}