// LoginForm.jsx

import styled from "styled-components";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ROUTE } from "Route";
import axios from "axios";
import { httpStatusCode } from "http-status";

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #007BFF;
  }
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  /* background-color: #f2f2f2; */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Label = styled.label`
  display: inline-block;
  width: 80px;
`;


const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #1890ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #40a9ff;
  }
`;



const LoginForm = ({ login, setLogin, setName }) => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 로그인 로직을 추가하세요
    if (!id || !pwd) {
      setError('모든 필드를 입력하세요.');
      return;
    }

    console.log('로그인 시도:', { id, pwd });
    // getUsersLoginStorage({ id, pwd },setLogin,setName);
   axios
    .post("http://localhost:8080/member/login", { id, pwd })
    .then((response) => {
      //response : 서버의 응답 데이터
      //요청(이벤트)후 처리할 문장
      // console.log(response.data); //{member}  ==>  token
      console.log('response=', response);
      const member = response.data;
      // if (member) {
      // if(response.status === 201){ //토큰 생성이 잘 되었다면
      if(response.status === httpStatusCode.CREATE){ //토큰 생성이 잘 되었다면
        alert("로그인성공");
        setLogin(true);
        // sessionStorage.setItem("member", JSON.stringify(member));

        //서버로부터 발급받은 토큰을 스토리지에 저장

        setName(member.name);
        navigate(ROUTE.ROOT);
      } else {
        alert("로그인실패");
        setLogin(false);
        sessionStorage.removeItem("member");
      }
    });

    setError('');

    //로그인폼초기화
    setId('')
    setPwd('');
    
    if (login) {
      // navigate(ROUTE.ROOT);
    } else {  //else if(msg==="FAIL")
      
    }

    
    

  };

  return (
    <div>
      <LoginFormContainer>
      <h2>로그인</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="id">아이디:</Label>
          <Input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="pwd">비밀번호:</Label>
          <Input
            type="password"
            id="pwd"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit">로그인</Button>
        </Form>
        </LoginFormContainer>
    </div>
  );
};

export default LoginForm;