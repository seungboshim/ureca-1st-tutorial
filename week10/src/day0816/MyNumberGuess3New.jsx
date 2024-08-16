import { useEffect, useState } from "react";

function MyNumberGuess3New(props){
    //난수 발생
    const  [com_num, setCom_num] = useState(Math.floor( Math.random()*100 + 1 ));  //1~100

    //사용자가 입력한 데이터를 (상태)관리
    const  [user_num, setUser_num] = useState("");
    const  [result, setResult] = useState("");

    const  [tryCount,   setTryCount  ]= useState(0); //시도횟수
    const  [tryHistory, setTryHistory]= useState([]); //시도이력

    function checkNum(){
        if(user_num === "") return;

        let historyStr = `${tryCount}번째 시도 [${user_num}]: `;

        if (user_num > com_num) {
            historyStr=(`${historyStr} 낮춰주세요!`);
        } else if (user_num < com_num){
            historyStr=(`${historyStr} 높여주세요!`);
        } else {
            historyStr=(`${historyStr} 정답입니다^O^`);
        }
        setUser_num("");//사용자 입력값 지우기

        setResult(historyStr);
        setTryHistory([historyStr, ...tryHistory]); //시도한 결과 문자열을 배열에 저장(히스토리 남김)
    }//checkNum

    useEffect(() => {
        setTryCount((prev) => prev+1);
    }, [result]);

    function handleChange(event){//HTML마크업의 변경된 값을 state에 반영
        setUser_num(event.target.value);
    }

    function handleKeyDown(event){ //콜백함수 ==> 매개변수에 이벤트 관련정보가 default 전달됨!!
        if(event.key === 'Enter'){
            checkNum();
        }
    }//handleKeyDown

    function newGame(){
        setUser_num("");//사용자 입력값 지우기
        setTryCount(1);//시도 횟수 초기화
        setTryHistory([]); //히스토리 배열 초기화

        setCom_num(Math.floor( Math.random()*100 + 1 ));   //새로운 com숫자 적용
    }//newGame

return (
    <div>
        <h1>숫자맞추기</h1>
        <p>1~100사이 컴퓨터의 숫자를 맞춰보세요</p>
        <p>{tryCount}번째 시도</p>

        <input type="number" 
                min="1" 
                max="100"
                value={user_num}
                onChange={handleChange}
                onKeyDown={handleKeyDown}/>
        <button onClick={checkNum}>정답확인</button>
        <button onClick={newGame}>새게임</button>
        {/* <인라인 if>
        형식) 조건식 && 표현식
                true  ==> 표현식
                false ==> false */}
        <div>{ (tryHistory.length > 0 ) && (<> 확인결과▶ {result} </>)}</div>
        <div>
            <ul>
                {tryHistory.map((h,idx)=> <li key={idx}>{h}</li> )}
            </ul>
        </div>
    </div>
);
}

export default MyNumberGuess3New;