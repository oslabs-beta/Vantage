import React from "react";

const Waves = () => {
  return ( 
    <div>
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(100,100,100,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(80,80,80,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(80,80,80,0.1)" />
        </g>
      </svg>
    </div> 
  );
};
 
export default Waves;