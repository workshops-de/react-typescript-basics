import React, { useContext } from 'react';

import CounterContext from "../../counterContext";

const Counter: React.FC = () => {
    const { count, incrementCount, decrementCount } = useContext(CounterContext);

    return (
        <>
            <button onClick={incrementCount} >+1</button >
            {count}
            <button onClick={decrementCount} >-1</button >
        </>
    );
}

export default Counter;
