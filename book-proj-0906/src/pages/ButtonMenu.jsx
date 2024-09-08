import { ROUTE } from "Route";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 32px;
  font-weight: 700;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
`;

export default function ButtonMenu(){
    const navigate = useNavigate();
    return (
    <Wrapper>
      <Button onClick={() => navigate(ROUTE.LIST)}>목록보기</Button>
      <Button onClick={() => navigate(ROUTE.REGIST)}>등록하기</Button>
    </Wrapper>
    );
}