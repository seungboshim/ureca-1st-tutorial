import { createContext, useContext, useState } from "react";
const CounterContext = createContext();

// function CounterProvider({ children }) {
//     const [counterState, setCounterState] = useState(0);
//     return (
//         <CounterContext.Provider value={[counterState, setCounterState]}>
//             {children}
//         </CounterContext.Provider>
//     );
// }

function CounterProvider({ children }) {
    const counterState = useState(0);
    return (
        <CounterContext.Provider value={counterState}>
            {children}
        </CounterContext.Provider>
    );
}

function CounterPrint() {
    const [counter] = useContext(CounterContext);
    return <h1>{counter}</h1>;
}

function Buttons() {
    const [, setCounter] = useContext(CounterContext);
    const increase = () => {
        setCounter((prev) => prev + 1);
    }
    const decrease = () => {
        setCounter((prev) => prev - 1);
    }
    return (
        <div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default function MyButtonCounter() {
    return (
        <CounterProvider>
            <div>
                <CounterPrint />
                <Buttons />
            </div>
        </CounterProvider>
    )
}