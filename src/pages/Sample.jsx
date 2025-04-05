import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:8050/malaCounter";

export default function Sample() {
  const [count, setCount] = useState(0);
  const [mala, setMala] = useState(1);

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setCount(res.data.count);
      setMala(res.data.mala);
    });
  }, []);

  const handleIncrement = () => {
    const newCount = count + 1;
    const newMala = newCount >= 108 ? mala + 1 : mala;
    
    axios.put(API_URL, { id: 1, count: newCount % 108, mala: newMala }).then(() => {
      setCount(newCount % 108);
      setMala(newMala);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col items-center">
        {/* Rosary Beads UI */}
        <svg width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="50" r="10" fill="#8B4513" />
          <circle cx="120" cy="70" r="10" fill="#8B4513" />
          <circle cx="80" cy="70" r="10" fill="#8B4513" />
          <circle cx="140" cy="90" r="10" fill="#8B4513" />
          <circle cx="60" cy="90" r="10" fill="#8B4513" />
          <circle cx="150" cy="120" r="10" fill="#8B4513" />
          <circle cx="50" cy="120" r="10" fill="#8B4513" />
          <circle cx="155" cy="150" r="10" fill="#8B4513" />
          <circle cx="45" cy="150" r="10" fill="#8B4513" />
          <circle cx="150" cy="180" r="10" fill="#8B4513" />
          <circle cx="50" cy="180" r="10" fill="#8B4513" />
          <circle cx="140" cy="210" r="10" fill="#8B4513" />
          <circle cx="60" cy="210" r="10" fill="#8B4513" />
          <circle cx="120" cy="230" r="10" fill="#8B4513" />
          <circle cx="80" cy="230" r="10" fill="#8B4513" />
          <circle cx="100" cy="250" r="10" fill="#8B4513" />
          <circle cx="100" cy="270" r="10" fill="#8B4513" stroke="red" strokeWidth="2" />
        </svg>

        {/* Counter Display */}
        <div className="absolute text-center text-black font-bold text-4xl top-1/2 transform -translate-y-1/2">
          {count}
          <div className="text-lg text-gray-600">{mala}</div>
        </div>
      </div>

      {/* Increment Button */}
      <button
        onClick={handleIncrement}
        className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
}
