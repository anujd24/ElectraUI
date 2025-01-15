"use client"
import React from 'react';
import Countdown from 'react-countdown';

const endingDate = new Date("2025-01-08");

const CountDown = () => {
  return (
    <Countdown className='font-bold text-5xl text-purple-400' date={endingDate} />
  )

}

export default CountDown