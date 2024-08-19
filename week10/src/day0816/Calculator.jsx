import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function Calculator(props) {
    const [temperature, setTemperature] = useState(30);
    const [scale, setScale] = useState('c');

    const toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    }

    const toFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    }

    const handleCelsiusChange = (e) => {
        setTemperature(e.target.value);
        setScale('c');
    }

    const handleFahrenheitChange = (e) => {
        setTemperature(e.target.value);
        setScale('f');
    }

    const celsius = scale === 'f' ? toCelsius(temperature) : temperature;
    const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;

    return (
        <div>
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
        </div>
    )
}

export default Calculator;