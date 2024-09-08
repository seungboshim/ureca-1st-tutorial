import styled from "styled-components";

import React from "react";

function NavigateButton({ text, clickFunc }) {
  return <ButtonWrapper onClick={clickFunc}>{text}</ButtonWrapper>;
}

export default NavigateButton;

export const ButtonWrapper = styled.div`
  width: 335px;
  height: 30px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #356fdc;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #1e407e;
  }
`;
