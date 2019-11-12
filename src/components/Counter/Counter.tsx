import React, { useState } from 'react';


const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const incrementCount = () => {
        setCount((prevCounter) => prevCounter + 1);
    }

    return (
        <button onClick={incrementCount} > {count}</button >
    );
}

export default Counter;