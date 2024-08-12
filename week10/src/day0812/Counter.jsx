import React from "react";

function Counter(props) {
    /** let */
    // let cnt = 0;
    // const handleClick = () => {
    //     cnt++;
    //     console.log(cnt);
    // }

    /** useState */
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

export default Counter;