import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
`;

export const InputName = styled.div`
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
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 15px;
`;
export const BottomButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
