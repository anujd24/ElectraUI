"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const [endingDate, setEndingDate] = useState<Date | null>(null); // Explicit type

  useEffect(() => {
    setEndingDate(new Date("2025-04-29")); // Now TypeScript won't complain
  }, []);

  if (!endingDate) return null; // Prevents rendering during SSR

  return <Countdown className="font-bold text-5xl text-purple-400" date={endingDate} />;
};

export default CountDown;
