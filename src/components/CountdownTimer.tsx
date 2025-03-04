import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md p-6 rounded-lg text-center min-w-[120px]">
        <div className="text-4xl md:text-6xl font-bold text-yellow-400">{timeLeft.days}</div>
        <div className="text-sm uppercase tracking-wider mt-2">Days</div>
      </div>
      <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md p-6 rounded-lg text-center min-w-[120px]">
        <div className="text-4xl md:text-6xl font-bold text-yellow-400">{timeLeft.hours}</div>
        <div className="text-sm uppercase tracking-wider mt-2">Hours</div>
      </div>
      <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md p-6 rounded-lg text-center min-w-[120px]">
        <div className="text-4xl md:text-6xl font-bold text-yellow-400">{timeLeft.minutes}</div>
        <div className="text-sm uppercase tracking-wider mt-2">Minutes</div>
      </div>
      <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md p-6 rounded-lg text-center min-w-[120px]">
        <div className="text-4xl md:text-6xl font-bold text-yellow-400">{timeLeft.seconds}</div>
        <div className="text-sm uppercase tracking-wider mt-2">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;