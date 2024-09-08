import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { loginMember } from '../apis/member';
import { LoginContext } from "../utils/LoginContext";

const MainTitle = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    width: 100%;
    height: 60px;
    background-color: black;
    color: white;
`;

const MainTitleText = styled(Link)`
    text-decoration: none;
    color: white;
    /* position: absolute;
    left: 50%;
    transform: translateX(-50%); */
`;

const LoginContainer = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    align-items: center;
    width: fit-content;
    height: 60px;
    padding-right: 20px;
    background-color: black;
    color: white;
`;

const LoginButton = styled.button`
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
`;

const LoginText = styled.div`
    color: white;
    font-size: 16px;
    margin-right: 10px;
    font-weight: 400;
`;

const LoginInput = styled.input`
    background-color: black;
    width: 100px;
    color: white;
    border-bottom: 1px solid white;
    padding: 4px;
    margin: 4px;
`;

export default function Header() {
    const { isLogin, setIsLogin, member, setMember } = useContext(LoginContext)
    const [memberInput, setMemberInput] = useState({
        id: '',
        pwd: ''
    });

    // 첫 렌더링
    useEffect(() => {
        if (sessionStorage.getItem('accessToken')) { // 로그인 정보가 있으면
            setIsLogin(true); // 로그인 상태로 변경
        }
    }, [])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setMemberInput({
            ...memberInput,
            [name]: value
        });
    }

    const [memberResponse, setMemberResponse] = useState(null);

    const handleLogin = async () => {
        const response = await loginMember(memberInput);
        setMemberResponse(response);
        if (response) {
            setIsLogin(true);

            sessionStorage.setItem('accessToken', response.accessToken);
            sessionStorage.setItem('refreshToken', response.refreshToken);
        }
    }

    const handleLogout = () => {
        setIsLogin(false);
        setMember(null);
        sessionStorage.clear();
    }

    return (
        <div>
            <MainTitle>
                <MainTitleText to='/'>책을 읽읍시다.</MainTitleText>
                {isLogin && memberResponse ? (
                    <LoginContainer>
                        <LoginText>{memberResponse.name}님 환영해요.</LoginText>
                        <LoginButton onClick={handleLogout}>로그아웃</LoginButton>
                    </LoginContainer>
                ) : (
                    <LoginContainer>
                        <LoginInput name='id' value={memberInput.id} onChange={handleChange} placeholder="ID" type="text"></LoginInput>
                        <LoginInput name='pwd' value={memberInput.pwd} onChange={handleChange} placeholder="PW" type="password"></LoginInput>
                        <LoginButton onClick={handleLogin}>로그인</LoginButton>
                    </LoginContainer>
                )}
            </MainTitle>
        </div>
    )
}