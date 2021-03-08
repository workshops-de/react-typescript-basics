import React from "react";

const CounterContext = React.createContext({
  count: 0,
  incrementCount: () => {},
  decrementCount: () => {},
});

export default CounterContext;
