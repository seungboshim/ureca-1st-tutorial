import { createContext, useContext, useMemo, useState } from "react";

// 재렌더링, 재배열 방지로 state, setState 컨텍스트를 독립적으로 선언
const CounterContext = createContext();
const SetCounterContext = createContext();

function CounterProvider({ children }) {
    const [counter, setCounter] = useState(0);

    const actions = useMemo(() => ({
        increase() {
            setCounter((prev) => prev + 1);
        },
        decrease() {
            setCounter((prev) => prev - 1);
        }
    }), []);

    return (
        <CounterContext.Provider value={counter}>
            <SetCounterContext.Provider value={setCounter}>
                {children}
            </SetCounterContext.Provider>
        </CounterContext.Provider>
    );
}

function CounterPrint() {
    console.log("CounterPrint");
    const counter = useContext(CounterContext);
    return <h1>{counter}</h1>;
}

function Buttons() {
    console.log("Buttons");
    const setCounter = useContext(SetCounterContext);

    const increase = () => {
        setCounter((prev) => prev + 1);
    }
    const decrease = () => {
        setCounter((prev) => prev - 1);
    }

    return (
        <div>
            {/* <button onClick={actions.increase}>+</button>
            <button onClick={actions.decrease}>-</button> */}
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default function MyButtonCounter2() {
    return (
        <CounterProvider>
            <div>
                <CounterPrint />
                <Buttons />
            </div>
        </CounterProvider>
    )
}