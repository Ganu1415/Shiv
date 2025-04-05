import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center  bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-4 rounded-xl shadow-lg text-center my-5">
        <h1 className="text-xl sm:text-2xl font-bold mb-2">Counter</h1>
        <p className="text-3xl font-semibold text-blue-600">{count}</p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <button
            className={`px-4 py-2 text-sm sm:text-base text-white rounded-md ${
              count === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            Decrement
          </button>

          <button
            className="px-4 py-2 text-sm sm:text-base bg-gray-500 text-white rounded-md hover:bg-gray-600"
            onClick={() => setCount(0)}
          >
            Reset
          </button>

          <button
            className="px-4 py-2 text-sm sm:text-base bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
