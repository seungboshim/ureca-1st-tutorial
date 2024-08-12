import React from "react";
import { useEffect } from "react";

function Counter3(props) {
    const [cnt, setCnt] = React.useState(0);
    const handleClick = () => {
        setCnt(cnt + 1);
    }

    
    return (
        <div>
            <p>{cnt}</p>
            <button onClick={handleClick}>클릭</button>
        </div>
    )
}

export default Counter3;