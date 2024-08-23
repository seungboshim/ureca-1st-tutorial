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
    border: 1px solid lightgrey;
    border-radius: 8px;
    &:focus {
        outline: none;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.3s;
    }
`
;

function TextInput(props){
    const {height, value, onChange} = props;
    return (<StyledTextArea height={height} value={value} onChange={onChange}></StyledTextArea>);

}

export default TextInput;