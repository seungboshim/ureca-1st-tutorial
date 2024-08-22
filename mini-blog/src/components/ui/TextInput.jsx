// TextInput.jsx

import styled from "styled-components";

// const StyledButton = styled.정의할태그명 ` 스타일 정의 `;ㅣ

const StyledTextArea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) =>
        props.height &&
        `
        height: ${props.height}px;
    `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`
;ㅣ

function TextInput(props){
    const {height, value, onChange} = props;
    return (<StyledTextArea height={height} value={value} onChange={onChange}></StyledTextArea>);

}

export default TextInput;