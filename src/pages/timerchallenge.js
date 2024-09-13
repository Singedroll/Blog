import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

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
      <h3>React Example for using setInterval method</h3>
      <h1>second: {count}</h1>
    </div>
  );
};

export default App;
