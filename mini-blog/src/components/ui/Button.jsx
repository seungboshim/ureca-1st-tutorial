// Button.jsx

import styled from "styled-components";

// const StyledButton = styled.정의할태그명 ` 스타일 정의 `;ㅣ
//padding: 8px 8px 8px 8px;  //상 우 하 좌 ,  상  좌우  하,  상하   좌우,  상하좌우
const StyledButton = styled.button`
    padding: 8px 16px;  
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`
;

function Button(props){
    const {title, onClick} = props;
    return (<StyledButton onClick={onClick}>{title|| "button"}</StyledButton>);

}

export default Button;