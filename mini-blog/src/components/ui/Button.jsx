// Button.jsx

import styled from "styled-components";

// const StyledButton = styled.정의할태그명 ` 스타일 정의 `;
//padding: 8px 8px 8px 8px;  //상 우 하 좌 ,  상  좌우  하,  상하   좌우,  상하좌우
const StyledButton = styled.button`
    padding: 8px 16px;  
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    border: 1px solid lightgrey;
    box-shadow: none;
    background-color: white;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
        background-color: black;
        color: white;
        transition: box-shadow 0.3s, background-color 0.3s, color 0.3s;
    }
`;

function Button(props){
    const {title, onClick} = props;
    return (<StyledButton onClick={onClick}>{title|| "button"}</StyledButton>);

}

export default Button;