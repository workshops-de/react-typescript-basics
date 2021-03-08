import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter/Counter";
import CounterContext from "./counterContext";

const initialValue = 100;

const App: React.FC = () => {
  const [count, setCount] = useState<number>(initialValue);

  const counter = {
    count: count,
    incrementCount: () => {
      setCount((prevCounter) => prevCounter + 1);
    },
    decrementCount: () => {
      setCount((prevCounter) => prevCounter - 1);
    },
  };

  return (
    <CounterContext.Provider value={counter}>
      <Header />
      <div className={"App-container"}>
        <Counter />
      </div>
    </CounterContext.Provider>
  );
};

export default App;
