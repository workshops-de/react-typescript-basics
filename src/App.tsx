import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter/Counter";

const initialValue = 100;

const App: React.FC = () => {
  const [count, setCount] = useState<number>(initialValue);

  const incrementCount = () => {
    setCount((prevCounter) => prevCounter + 1);
  };

  const decrementCount = () => {
    setCount((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <Header />
      <div className={"App-container"}>
        <Counter
          count={count}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
        />
      </div>
    </>
  );
};

export default App;
