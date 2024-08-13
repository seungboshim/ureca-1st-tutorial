import { useEffect, useState } from "react";

const Mission02 = () => {
    const [time, setTime] = useState(5);
    // let timer;

    const handleTimer = () => {
        setTime(time - 1);
    }

    // useEffect(() => {
    //     if (time <= 0) {
    //         return clearInterval(timer);
    //     }

    //     timer = setInterval(handleTimer, 1000);
    // }, [time])

    useEffect(() => {
        const timer = setInterval(handleTimer, 1000);

        // update 시 조건에 따른 타이머 중단
        if (time <= 0) {
            clearInterval(timer);
        }

        // unmount 시 타이머 중단
        return () => {
            clearInterval(timer);
        }
    }, [time])

    // const handleTimerStart = () => {
    //     setInterval(() => {
    //         setTimer(timer - 1);
    //     }, 1000)
    // }

    return (
        <div>
            <h1>Timer: {time}</h1>
        </div>
    )
}

export default Mission02;