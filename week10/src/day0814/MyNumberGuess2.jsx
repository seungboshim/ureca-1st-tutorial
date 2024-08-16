import { useEffect, useState } from "react";

const answer = Math.floor(Math.random() * 100) + 1;

export default function MyNumberGuess2() {
    const [input, setInput] = useState(50);
    const [answerCheck, setAnswerCheck] = useState({tries: 0, string: ''});
    const [answerList, setAnswerList] = useState([]);
    const [reverseList, setReverseList] = useState([]);
    const [isFinished, setIsFinished] = useState(false);

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
        const answerStr = {tries: answerList.length + 1, string: ''};

        if (Number(input) === answer) {
            answerStr.string = `${answerStr.tries}번째 시도 [${input}] 정답입니다!!!!`;
            setIsFinished(true);
        } else if (input < answer) {
            answerStr.string = `${answerStr.tries}번째 시도 [${input}] 높여주세요 ㅜㅜ`;
        } else {
            answerStr.string = `${answerStr.tries}번째 시도 [${input}] 낮춰주세요 ㅜㅜ`;
        }
        setAnswerCheck({tries: answerStr.tries, string: answerStr.string});
        setAnswerList([answerStr, ...answerList]);
        setInput('');
    }

    // useEffect(() => {
    //     setReverseList(answerList.slice(0).reverse());
    // }, [answerList])

    return (
        <div>
            <h1>숫자맞추기이이이이잉</h1>

            <p>1~100 사이 컴퓨터의 숫자를 맞춰보삼</p>

            {isFinished ? <p>{answerList.length}트 만에 정답!</p> : <p>{answerList.length + 1}번째 시도</p>}

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

            {isFinished && <button onClick={() => window.location.reload()}>다시 시작</button>}

            <p>확인 결과▶︎ {answerCheck.string}</p>

            <ul>
                {answerList.map((answer) => (
                    <li key={answer.tries}>{answer.string}</li>
                ))}
            </ul>
        </div>
    )
}