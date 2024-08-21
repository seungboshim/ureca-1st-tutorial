import { createContext, useContext, useState } from "react";
import GawibawiboHeader from "./GawibawiboHeader";
import GawibawiboInput from "./GawibawiboInput";
import GawibawiboResult from "./GawibawiboResult";

export const InputContext = createContext();
export const SetInputContext = createContext();

function InputProvider({children}) {
    const [inputState, setInputState] = useState('');

    return (
        <InputContext.Provider value={inputState}>
            <SetInputContext.Provider value={setInputState}>
                {children}
            </SetInputContext.Provider>
        </InputContext.Provider>
    )
}

export default function GawibawiboGame() {
    return (
        <InputProvider>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <GawibawiboHeader />
                <GawibawiboInput />
                <GawibawiboResult />
            </div>
        </InputProvider>
    )
}