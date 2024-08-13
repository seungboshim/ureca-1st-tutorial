import React, { useRef, useState } from "react";

function ConfirmButton2() {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const labelRef = useRef(null);

    const handleConfirm = (e) => {
        setIsConfirmed((prev) => !prev);
        console.log("ref", labelRef.current)
        console.log("event", e.target);
        console.log("ref innerText", labelRef.current.innerText)
        console.log("event innerText", e.target.innerText);
    }

    return (
        <button onClick={handleConfirm} ref={labelRef}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    )
}

export default ConfirmButton2;