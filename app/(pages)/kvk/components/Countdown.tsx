"use client";

import { useEffect, useState } from "react";

export default function KvkCountdown() {
  // TARGET DATE
  const targetDate = new Date("2026-06-06T12:49:20Z").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      // TIMER ENDED
      if (difference <= 0) {
        clearInterval(interval);

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          finished: true,
        });

        return;
      }

      // TIME CALCULATIONS
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        finished: false,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="text-center text-5xl py-20 text-yellow md:text-7xl">
      {timeLeft.finished ? (
        <p>Time is over!</p>
      ) : (
        <p>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </p>
      )}
    </div>
  );
}
