import { useEffect, useState } from "react";
import React from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Cleanup interval on unmount or when isActive changes
    return () => clearInterval(interval);
  }, [isActive]);

  const start = () => {
    setIsActive(true);
  };

  const stop = () => {
    setIsActive(false);
  };

  const reset = () => {
    setCount(0);
    setIsActive(false);
  };

  return (
    <div className="flex justify-center items-center mx-auto gap-5 flex-col">
      <h1 className="text-green-700">Challenge</h1>
      <h3>React count-up timer</h3>
      <h1>Seconds: {count}</h1>
      <div className="flex gap-2">
        <button
          onClick={start}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
