import React from 'react';

type CounterProps = {
    count: number;
    incrementCount: () => void;
    decrementCount: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, incrementCount, decrementCount }) => {
    return (
        <>
            <button onClick={incrementCount} >+1</button >
            {count}
            <button onClick={decrementCount} >-1</button >
        </>
    );
}

export default Counter;
