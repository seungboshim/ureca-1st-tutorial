const scaleNames = {
    c: '섭씨',
    f: '화씨'
}

function TemperatureInput (props) {
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