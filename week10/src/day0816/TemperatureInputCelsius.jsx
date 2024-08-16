import { useState } from "react";

// TemperatureInputCelsius.jsx
function TemperatureInputCelsius(){
    const [temperature, setTemperature] = useState("");
    const handleChange = (event) =>{
        setTemperature(event.target.value);
    }
    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:섭씨):
            </legend>
            <input type="text" value={temperature} onChange={handleChange}/>
        </fieldset>
    );
}

export default TemperatureInputCelsius;