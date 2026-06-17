import React, { useState, useEffect, useRef } from 'react';
import { Clock } from 'lucide-react';

export default function CountdownTimer({ initialDays = 3, onExpire }) {
  const [timeLeft, setTimeLeft] = useState(initialDays * 24 * 60 * 60);
  const onExpireRef = useRef(onExpire);

  // Keep ref updated to avoid dependency array issues causing re-renders
  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onExpireRef.current) onExpireRef.current();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    // Proper cleanup to prevent memory leaks
    return () => clearInterval(timer);
  }, [timeLeft]);

  if (timeLeft <= 0) return null;

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);

  return (
    <div className="timer-badge mt-4 animate-in fade-in duration-500">
      <Clock className="w-4 h-4" />
      <span>Offer expires in: {days}d {hours}h {minutes}m</span>
    </div>
  );
}