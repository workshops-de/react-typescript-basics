import React, { useState, Fragment } from 'react';


const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

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