import { useState, useEffect } from "react";
import axios from "axios";

const counterName = "Radhe Radhe"; // Counter Name
const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
// const currentDate = "2025-04-10"; // YYYY-MM-DD format

const Counter = () => {
  const [count, setCount] = useState({ count: 0, today: 0, lifetime: 0 });

  // Fetch Data from JSON Server
  useEffect(() => {
    axios.get("http://localhost:8050/counters")
      .then((res) => {
        const existingCounter = res.data[counterName] || {};
        const existingDateData = existingCounter[currentDate] || { count: 0, today: 0, lifetime: 0 };

        setCount(existingDateData);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const updateCount = async (newCount) => {
    setCount(newCount);

    // Get current data
    const res = await axios.get("http://localhost:8050/counters");
    const existingCounters = res.data || {};

    // Update counter data
    const updatedCounters = {
      ...existingCounters,
      [counterName]: {
        ...existingCounters[counterName],
        [currentDate]: newCount
      }
    };

    // Save updated data
    await axios.put("http://localhost:8050/counters", updatedCounters);
  };

  const handleIncrement = () => {
    const newCount = { ...count, count: count.count + 1, today: count.today + 1 };

    if (newCount.count === 108) {
      newCount.lifetime += 108;
      newCount.count = 0;
    }

    updateCount(newCount);
  };

  const handleDecrement = () => {
    if (count.count > 0) {
      const newCount = { ...count, count: count.count - 1, today: count.today > 0 ? count.today - 1 : 0 };
      updateCount(newCount);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-400 text-center p-4">
      <h1 className="text-2xl font-bold text-white">{counterName}</h1>
      <p className="text-sm text-gray-900">Current session date: {currentDate}</p>
      
      <div className="mt-4 text-xl font-bold">ON-SCREEN MODE</div>

      <div className="text-6xl font-bold text-black mt-4">{count.count}</div>
      <p className="text-gray-700 mt-2">Today <span className="font-bold">{count.today}</span></p>
      <p className="text-gray-700">108 × <span className="font-bold">{Math.floor(count.today / 108)}</span></p>
      <p className="text-gray-700">Lifetime <span className="font-bold">{count.lifetime}</span></p>
      <p className="text-gray-700">108 × <span className="font-bold">{Math.floor(count.lifetime / 108)}</span></p>

      

      {/* Yellow Circle UI */}
      <div className="mt-12 flex flex-col items-center">
        <div className="w-20 h-20 bg-yellow-500 rounded-full" onClick={handleDecrement}></div>
        <div className="w-48 h-48 bg-yellow-500 rounded-full mt-[20px]" onClick={handleIncrement}></div>
      </div>
    </div>
  );
};

export default Counter;
