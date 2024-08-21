import { useContext } from "react";
import { InputContext } from "./GawibawiboGame";

export default function GawibawiboResult() {
    const input = useContext(InputContext);
    const computer = ["가위", "바위", "보"];
    const randomIndex = Math.floor(Math.random() * 3);
    const result = ["비겼어요", "사람 승", "사람 패"];

    let resultIdx = 0;
    if (input === computer[randomIndex]) {
        resultIdx = 0;
    } else if ((input === "가위" && computer[randomIndex] === "보") ||
               (input === "바위" && computer[randomIndex] === "가위") ||
               (input === "보" && computer[randomIndex] === "바위")) {
        resultIdx = 1;
    } else {
        resultIdx = 2;
    }
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <span>당신의 선택: {input}</span>
            <span>컴퓨터의 선택: {computer[randomIndex]}</span>
            <span>결과: {result[resultIdx]}</span>
        </div>
    );
}