import React, { useState, Fragment } from 'react';

interface CounterProbs {
    initialValue?: number;
}

const Counter: React.FC<CounterProbs> = ({ initialValue = 100 }) => {
    const [count, setCount] = useState<number>(initialValue);

    const incrementCount = () => {
        setCount((prevCounter) => prevCounter + 1);
    }

    const decrementCount = () => {
        setCount((prevCounter) => prevCounter - 1);
    }

    return (
        <Fragment>
            <button onClick={incrementCount} >+1</button >
            {count}
            <button onClick={decrementCount} >-1</button >
        </Fragment>
    );
}

export default Counter;