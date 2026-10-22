import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '', 
  decimals = 0,
  separator = '' 
}) => {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime = null;
    const startValue = 0;
    const targetValue = Number(end);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Smooth easeOutExpo transition
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = startValue + (targetValue - startValue) * ease;
      
      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(targetValue);
      }
    };

    requestAnimationFrame(step);
  }, [inView, end, duration]);

  const formattedValue = decimals > 0 
    ? value.toFixed(decimals) 
    : (separator ? Math.floor(value).toLocaleString('en-IN') : Math.floor(value));

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {prefix}{formattedValue}{suffix}
    </span>
  );
};

export default AnimatedCounter;
