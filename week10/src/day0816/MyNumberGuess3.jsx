import { useEffect, useState } from "react";

export default function MyNumberGuess3() {
    const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1); // 정답
    const [input, setInput] = useState(50); // 유저 인풋

    const [resultList, setResultList] = useState([]); // 결과 리스트 (출력용)
    const [record, setRecord] = useState([]); // 기록 저장
    const [currRecord, setCurrRecord] = useState({record: 0, answer: 0}); // 현재 기록

    const [isFinished, setIsFinished] = useState(false); // 맞췄니? 이제 할일을 하자

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handlePressEnter = (e) => {
        if (e.key === 'Enter' && input !== '') {
            setInput('');
            handleCheck();
        }
    }

    const handleCheck = () => {
        const result = {tries: resultList.length + 1, string: ''};

        if (Number(input) === answer) {
            result.string = `${result.tries}번째 시도 [${input}] 정답입니다!!!!`;
            setIsFinished(true);
            // setRecord([...record, {record: resultList.length + 1, answer: answer}]);
        } else if (input < answer) {
            result.string = `${result.tries}번째 시도 [${input}] 높여주세요 ㅜㅜ`;
        } else {
            result.string = `${result.tries}번째 시도 [${input}] 낮춰주세요 ㅜㅜ`;
        }

        setResultList([result, ...resultList]);
        setInput('');
    }

    useEffect(() => {
        if (isFinished) {
            let recordHistory = {record: resultList.length, answer: answer};
            setRecord([...record, recordHistory]);
        }
    }, [isFinished])

    useEffect(() => {
        if (resultList.length >= 10) {
            alert('10번 넘게 틀렸네요.. 다시 시작합니다');
            handleReset();
        }
    }, [resultList])

    const handleReset = () => {
        setAnswer(Math.floor(Math.random() * 100) + 1);
        setResultList([]);
        setIsFinished(false);
    }

    return (
        <div>
            <h1>숫자맞추기이이이이잉</h1>

            <p>1~100 사이 컴퓨터의 숫자를 맞춰보삼</p>

            {isFinished ? <p>{resultList.length}트 만에 정답!</p> : <p>{resultList.length + 1}번째 시도</p>}

            <input
                type="number"
                onChange={handleChange}
                onKeyDown={handlePressEnter}
                value={input}
                min={1}
                max={100}
            />

            <button
                onClick={handleCheck}
                disabled={isFinished || !input}
                style={{marginLeft: '10px'}}
            >
                정답 확인
            </button>

            {isFinished && <button onClick={handleReset}>다시 시작</button>}

            <p>확인 결과▶︎ {resultList.length > 0 && resultList[0].string}</p>

            현재 시도
            <ul>
                {resultList.map((answer) => (
                    <li key={answer.tries}>{answer.string}</li>
                ))}
            </ul>

            이전 시도
            <ul>
                {record.map((r, idx) => (
                    <li key={idx}>{r.record}트만에 정답 {r.answer}를 맞췄군요..</li>
                ))}
            </ul>
        </div>
    )
}