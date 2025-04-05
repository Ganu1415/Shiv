import React, { useState } from "react";

const RippleCircle = () => {
  const [showRipple, setShowRipple] = useState(false);

  const handleClick = () => {
    setShowRipple(true);
    setTimeout(() => setShowRipple(false), 1000); // ripple vanish after 1s
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative">
        {showRipple && (
          <div className="absolute -inset-4 rounded-full border-4 border-blue-500 animate-ping"></div>
        )}

        <button
          onClick={handleClick}
          className="relative z-10 px-6 py-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Click for Ripple
        </button>
      </div>
    </div>
  );
};

export default RippleCircle;
