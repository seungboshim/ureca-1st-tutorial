import { useState } from "react";

// TemperatureInputFahrenheit.jsx
function TemperatureInputFahrenheit(){
    const [temperature, setTemperature] = useState("");
    const handleChange = (event) =>{
        setTemperature(event.target.value);
    }
    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:화씨):
            </legend>
            <input type="text" value={temperature} onChange={handleChange}/>
        </fieldset>
    );
}

export default TemperatureInputFahrenheit;