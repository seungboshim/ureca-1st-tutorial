import styled from "styled-components";

import React from "react";

function Button({ text, clickFunc, disabled }) {
  return (
    <Wrapper>
      <SubmitButton disabled={disabled} onClick={clickFunc}>
        {text}
      </SubmitButton>
    </Wrapper>
  );
}

export default Button;

const Wrapper = styled.div`
  width: 100vw;
  height: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const SubmitButton = styled.div`
  width: 335px;
  height: 30px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => (props.disabled ? "#726e6e" : "#5359c1")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: #ffffff;
  
`;
