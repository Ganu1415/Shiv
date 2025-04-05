import { useState } from "react";

export default function MalaCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative mala w-52 h-96 flex justify-center items-center">
        {[...Array(30)].map((_, i) => (
          <div key={i} className={`bead absolute`}></div>
        ))}
        <div className="string"></div>
      </div>
      <div className="mt-6 flex flex-col items-center">
        <p className="text-xl font-semibold">Count: {count}</p>
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
