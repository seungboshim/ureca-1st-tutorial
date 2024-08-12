import { useState } from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);
    
    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(Math.max(0, count - 1));
    }

    return [count, increase, decrease];
}

export default useCounter;