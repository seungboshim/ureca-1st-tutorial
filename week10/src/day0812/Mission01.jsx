import { useState, useRef } from "react";

const Mission01 = () => {
    const [memoList, setMemoList] = useState([]);
    const [memo, setMemo] = useState("");
    const memoRef = useRef(null);

    const handleInput = (e) => {
        // 전달받은 이벤트 객체에서 value를 뽑아서
        // memo 에다가 저장함
        setMemo(e.target.value);
    }

    const handleSubmit = () => {
        if (memo === "") return;

        // memoList 배열에 memo를 추가함 -> memoList 업데이트 -> 리렌더링 -> 화면에 출력
        setMemoList([...memoList, memo]);
        // memo를 초기화 -> input 창을 비워줌 (input 창의 value를 memo로 설정했으니)
        setMemo("");
    }

    const handleSubmitRef = () => {
        if (memoRef.current.value === "") return;

        setMemoList([...memoList, memoRef.current.value]);
        memoRef.current.value = "";
    }

    return (
        <div>
            <h1>마이 메모장</h1>
            
            <h3>메모폼</h3>
            <div>
                <p>이벤트핸들러, state 사용: 칠때마다 리렌더링</p>
                <input type="text" onChange={handleInput} value={memo}/>
                {/** 
                 * input 안의 value가 바뀌면 onChange
                 * onChange 이벤트가 발생하면 handleInput 실행
                 * handleInput에는 event 객체가 전달됨
                 * handleInput 수행하면 memo 값이 업데이트 됨
                 * 그래서 input 창의 value가 memo가 됩니다
                 */}
                <button onClick={handleSubmit}>메모 등록</button>

                <p>ref 사용: 제출시에만 리렌더링</p>
                <input type="text" ref={memoRef} />
                <button onClick={handleSubmitRef}>메모 등록</button>
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