import { useState, createContext, useContext, useEffect } from "react";

const CalcContext = createContext();
const SetCalcContext = createContext();

function CalcProvider({children}) {
    const [calcState, setCalcState] = useState('');
    return (
        <CalcContext.Provider value={calcState}>
            <SetCalcContext.Provider value={setCalcState}>
                {children}
            </SetCalcContext.Provider>
        </CalcContext.Provider>
    )
}

export default function MyCalc() {
    return (
        <CalcProvider>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <CalcHeader />
                <CalcBody />
                <CalcResult />
            </div>
        </CalcProvider>
    )
}

function CalcHeader() {
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"24px"}}>
            <span>초간단 계산기</span>
        </div>
    )
}

function CalcBody() {
    const setCalcState = useContext(SetCalcContext);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operator, setOperator] = useState("+");

    const handleOperator = (e) => {
        setOperator(e.target.value);
    }

    const handleInput1 = (e) => {
        setNum1(e.target.value);
    }

    const handleInput2 = (e) => {
        setNum2(e.target.value);
    }

    const calculate = () => {
        let result = 0;
        if (operator === "+") {
            result = parseInt(num1) + parseInt(num2);
        } else if (operator === "-") {
            result = parseInt(num1) - parseInt(num2);
        } else if (operator === "*") {
            result = parseInt(num1) * parseInt(num2);
        } else if (operator === "/") {
            result = parseInt(num1) / parseInt(num2);
        }

        setCalcState(`${num1} ${operator} ${num2} = ${result}`);
    }

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>

            <input type="text" value={num1} onChange={handleInput1} style={{width:"100px", height:"40px", fontSize:"16px"}} />
            <select style={{width:"80px", height:"40px", fontSize:"16px"}} value={operator} onChange={handleOperator}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>

            <input type="text" value={num2} onChange={handleInput2} style={{width:"100px", height:"40px", fontSize:"16px"}} />

            <button onClick={calculate} style={{width:"80px", height:"40px", fontSize:"16px"}}>계산</button>
        </div>
    )
}

function CalcResult() {
    const result = useContext(CalcContext);
    return (
        <div style={{margin:"24px"}}>
            <span>계산 결과: {result}</span>
        </div>
    )
}