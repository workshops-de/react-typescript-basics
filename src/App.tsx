import React from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter/Counter";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className={"App-container"}>
        <Counter />
      </div>
    </>
  );
};

export default App;
