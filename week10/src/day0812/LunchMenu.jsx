import React, { useState } from "react";
import { useEffect } from "react";

function LunchMenu(props) {
    const menus = ["곤드레밥", "마라탕", "탕후루", "탕탕후루후루", "탕탕후루루루루"];

    const [cnt, setCnt] = useState(0);
    const handleClick = () => {
        setCnt(Math.floor(Math.random() * menus.length));
    }
    useEffect(() => {
        console.log(cnt);
    }, [cnt])
    
    return (
        <div>
            <p>{menus[cnt]} 먹어야지 !!!!</p>
            <button onClick={handleClick}>클릭</button>
        </div>
    )
}

export default LunchMenu;