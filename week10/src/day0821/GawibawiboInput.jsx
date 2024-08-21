import { useContext } from "react";
import { SetInputContext } from "./GawibawiboGame";

const style = {
    button: {
        padding: "12px",
        margin: "12px",
        minWidth: "40px",
        textAlign: "center",
        border: "1px solid lightgray",
        borderRadius: "4px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        cursor: "pointer"
    },
}

export default function GawibawiboInput() {
    const setInput = useContext(SetInputContext);
    const handleSelect = (value) => {
        setInput(value);
    }

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"24px"}}>
            <h2>컴퓨터와 가위바위보를 해보세요</h2>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <div style={style.button} onClick={() => handleSelect("가위")}>가위</div>
                <div style={style.button} onClick={() => handleSelect("바위")}>바위</div>
                <div style={style.button} onClick={() => handleSelect("보")}>보</div>
            </div>
            <h3>가위, 바위, 보 하나만 선택하세요</h3>
        </div>
    )
}