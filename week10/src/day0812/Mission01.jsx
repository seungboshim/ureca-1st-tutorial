import { useState, useRef } from "react";

const Mission01 = () => {
    const [memoList, setMemoList] = useState([]);
    // const [memo, setMemo] = useState("");
    const memoRef = useRef(null);

    // const handleInput = (e) => {
    //     setMemo(e.target.value);
    // }

    // const handleSubmit = () => {
    //     setMemoList([...memoList, memo]);
    //     setMemo("");
    // }

    const handleSubmit = () => {
        setMemoList([...memoList, memoRef.current.value]);
        memoRef.current.value = "";
    }

    return (
        <div>
            <h1>마이 메모장</h1>
            
            <h3>메모폼</h3>
            <div>
                <input type="text" ref={memoRef} />
                <button onClick={handleSubmit}>메모 등록</button>
            </div>

            <h3>메모 목록</h3>
            <ul>
            {memoList && memoList.map((memo, idx) =>
                <li key={idx}>{memo}</li>
            )}
            </ul>
        </div>
    )
}

export default Mission01;