import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #356fdc;
  border-radius: 12px;
  width: 50px;
  height: 32px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;
