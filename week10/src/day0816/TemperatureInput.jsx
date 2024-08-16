const scaleNames = {
    c: '섭씨',
    f: '화씨'
}

function TemperatureInput (props) {
    // const handleChange = (e) => {
    // 부모 컴포넌트에서 변경 할거임
    // }

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[props.scale]}):
            </legend>
            <input type="text" value={props.temperature} onChange={props.onTemperatureChange}/>
        </fieldset>
    )
}

export default TemperatureInput;