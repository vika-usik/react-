import { useEffect, useState } from "react";

function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState(12 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft <= 0) return null;

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="alert alert-warning text-center">
      🔥 Знижка діє ще {hours} год {minutes} хв {seconds} сек
    </div>
  );
}

export default PromoBanner;