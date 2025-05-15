'use client';

import { useEffect, useState } from 'react';

const ScrollingBanner = ({ items = [], speed = 50 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full overflow-hidden bg-gray-100 py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`flex whitespace-nowrap ${isHovered ? 'pause' : 'animate-scroll'}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {/* First set of items */}
        {items.map((item, index) => (
          <div key={`first-${index}`} className="inline-block px-8">
            {item}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {items.map((item, index) => (
          <div key={`second-${index}`} className="inline-block px-8">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner; 