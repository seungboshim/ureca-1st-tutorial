import { useState } from "react";

const answer = Math.floor(Math.random() * 100) + 1;

export default function Mission() {
    const [input, setInput] = useState(0);
    const [answerCheck, setAnswerCheck] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleCheck = () => {
        console.log(input, answer)
        if (input == answer) {
            setAnswerCheck("정답입니다!!!!!!!!!!!!!");
        } else if (input < answer) {
            setAnswerCheck(`${input} 높여주세요`);
        } else {
            setAnswerCheck(`${input} 낮춰주세요`);
        }
    }

    return (
        <div>
            <h1>숫자맞추기이이이이잉</h1>

            <p>1~100 사이 컴퓨터의 숫자를 맞춰보삼</p>
            <input type="number" onChange={handleChange} value={input} min={1} max={100} />
            <button onClick={handleCheck}>정답 확인</button>

            <p>확인 결과 {answerCheck}</p>
        </div>
    )
}