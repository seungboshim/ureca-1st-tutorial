import { useEffect, useState } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log("현재 카운트: ", count);
    }, [count])

    return (
        <div style={{padding: 16}}>
            <p>총 {count}명 수용했어요</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount} disabled={count === 0}>퇴장</button>
            {isFull && <p style={{color: "red"}}>정원이 가득 찼습니다.</p>}
        </div>   
    )
}

export default Accommodate;