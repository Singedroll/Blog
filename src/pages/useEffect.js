import { useEffect, useState } from "react";
const myButton = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <div className="text-center text-2xl ">
      <button onClick={() => setCount(count + 1)}>
        You clicked {count} times
      </button>
    </div>
  );
};
export default myButton;
