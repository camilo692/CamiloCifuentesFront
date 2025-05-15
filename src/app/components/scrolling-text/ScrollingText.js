"use client";
import "./ScrollingText.css";

const ScrollingText = () => {
  return (
    <div className="Rectngulo-14">
      <div className="scrolling-text">
        <div className="text-track">
          {Array(10).fill(0).map((_, i) => (
            <span key={i}>
              COLECCIÓN DE LANZAMIENTO
              <img src="/Fuegox2.png" alt="fuego" className="fire" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingText; 