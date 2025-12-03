import React, { useMemo } from 'react';

const OceanBackground: React.FC = () => {
  // Generate random bubbles
  const bubbles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: 10 + Math.random() * 40,
      left: Math.random() * 100,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5,
      opacity: 0.1 + Math.random() * 0.3
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-primary pointer-events-none">
      {/* Deep Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-[#006494] to-[#003554]"></div>
      
      {/* Light Rays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)]"></div>

      {/* Bubbles */}
      <div className="bubbles-container">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="bubble-element backdrop-blur-sm"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: `${b.left}%`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
              opacity: b.opacity,
              boxShadow: 'inset 0 0 10px rgba(255,255,255,0.3)'
            }}
          />
        ))}
      </div>

      {/* Wave Overlay at bottom */}
      <div className="absolute bottom-0 w-[200%] h-32 opacity-20 animate-wave">
        <svg viewBox="0 0 1440 320" className="w-full h-full text-white fill-current">
          <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default OceanBackground;