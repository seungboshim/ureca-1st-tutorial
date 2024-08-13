import { useState } from "react"

export default function MyFunctionToggle(props) {

    const [isToggleOn, setIsToggleOn] = useState(true);
    const handleClick = () => {
        setIsToggleOn(!isToggleOn)
    }

    return (
        <button onClick={handleClick}>
            {isToggleOn ? "ON" : "OFF"}
        </button>
    )
}