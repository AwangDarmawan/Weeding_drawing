
import { useEffect, useState } from "react";

function Timer() {
    const targetDate = new Date("2026-08-17T00:00:00").getTime();

const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(timer);
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    setTimeLeft({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      ),
      seconds: Math.floor(
        (distance % (1000 * 60)) / 1000
      ),
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);
  return (
    <>
      <div className="mt-8 flex justify-center gap-3 sm:gap-5 font-feltpen">

  <div className="bg-[#8A1C14] text-white rounded-xl px-4 py-3 min-w-[70px] shadow-lg">
    <p className="text-2xl sm:text-3xl font-bold">
      {timeLeft.days}
    </p>
    <span className="text-xs uppercase tracking-widest">
      H
    </span>
  </div>

  <div className="bg-[#8A1C14] text-white rounded-xl px-4 py-3 min-w-[70px] shadow-lg">
    <p className="text-2xl sm:text-3xl font-bold">
      {timeLeft.hours}
    </p>
    <span className="text-xs uppercase tracking-widest">
      J
    </span>
  </div>

  <div className="bg-[#8A1C14] text-white rounded-xl px-4 py-3 min-w-[70px] shadow-lg">
    <p className="text-2xl sm:text-3xl font-bold">
      {timeLeft.minutes}
    </p>
    <span className="text-xs uppercase tracking-widest">
      M
    </span>
  </div>

  <div className="bg-[#8A1C14] text-white rounded-xl px-4 py-3 min-w-[70px] shadow-lg">
    <p className="text-2xl sm:text-3xl font-bold">
      {timeLeft.seconds}
    </p>
    <span className="text-xs uppercase tracking-widest">
      D
    </span>
  </div>

</div>
    </>
  )
}

export default Timer
