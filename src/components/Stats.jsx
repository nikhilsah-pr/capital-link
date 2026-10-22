import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 15, suffix: "+", title: "Years Experience" },
    { value: 25, suffix: "+", title: "Financial Partners" },
    { value: 500, prefix: "₹", suffix: " Cr+", title: "Loan Assistance" },
    { value: 500, suffix: "+", title: "Happy Customers" },
    { value: 99, suffix: "%", title: "Customer Satisfaction" }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const steps = 60;
        const stepTime = duration / steps;
        const increment = end / steps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = end;
              return newCounts;
            });
            clearInterval(timer);
          } else {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = Math.ceil(start);
              return newCounts;
            });
          }
        }, stepTime);
      });
    }
  }, [inView]);

  return (
    <section className="py-16 bg-[#071A36] border-t border-white/10" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10 text-center">
          
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4">
              <h3 className="text-4xl md:text-5xl font-poppins font-extrabold text-[#D4AF37] mb-2 drop-shadow-lg">
                {(stat.prefix || "") + counts[index].toLocaleString() + (stat.suffix || "")}
              </h3>
              <p className="text-blue-100 font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;
