import React, { useEffect, useState } from 'react';

function AnimatedCounters() {
  const countersData = [
    { label: 'Students Guided', end: 5000 },
    { label: 'Universities', end: 150 },
    { label: 'Countries', end: 30 },
  ];

  const [counts, setCounts] = useState(Array(countersData.length).fill(0));

  useEffect(() => {
    let animationFrame;
    const duration = 2000; // Total duration of the animation in ms
    let startTime = performance.now();

    const animateCounters = () => {
      const now = performance.now();
      const timeElapsed = now - startTime;

      const progress = Math.min(timeElapsed / duration, 1); // Calculate animation progress [0 to 1]

      const updatedCounts = countersData.map((data) =>
        Math.floor(progress * data.end)
      );

      setCounts(updatedCounts);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCounters);
      } else {
        // Restart the animation after a small delay
        setTimeout(() => {
          setCounts(Array(countersData.length).fill(0)); // Reset counters to 0
          startTime = performance.now(); // Reset start time
          animationFrame = requestAnimationFrame(animateCounters);
        }); // 1-second pause before restarting
      }
    };

    animationFrame = requestAnimationFrame(animateCounters);

    // Cleanup animation frame on unmount
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="counters-container">
      <div className="counters">
        {countersData.map((data, i) => (
          <div className="counter-item" key={i} aria-label={`${data.label}: ${counts[i]}`}>
            <div className="counter-number">{counts[i]}</div>
            <div className="counter-label">{data.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedCounters;