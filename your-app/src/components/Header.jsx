import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginMember } from '../apis/member';

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
    const [isLogin, setIsLogin] = useState(false);
    const [member, setMember] = useState({
        id: '',
        pwd: ''
    });
    const [memberData, setMemberData] = useState(null);

    // 첫 렌더링
    useEffect(() => {
        if (sessionStorage.getItem('member')) { // 로그인 정보가 있으면
            setIsLogin(true); // 로그인 상태로 변경
            setMemberData(JSON.parse(sessionStorage.getItem('member'))); // memberData에 그거 저장
        }
    }, [])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setMember({
            ...member,
            [name]: value
        });
    }

    const handleLogin = async () => {
        const memberResponse = await loginMember(member);
        if (memberResponse) {
            setIsLogin(true);
            setMemberData(memberResponse);
            sessionStorage.setItem('member', JSON.stringify(memberResponse));
        }
    }

    const handleLogout = () => {
        setIsLogin(false);
        setMemberData(null);
        sessionStorage.clear();
    }

    return (
        <div>
            <MainTitle>
                <MainTitleText to='/'>책을 읽읍시다.</MainTitleText>
                {isLogin ? (
                    <LoginContainer>
                        <LoginText>{memberData.name}님 환영해요.</LoginText>
                        <LoginButton onClick={handleLogout}>로그아웃</LoginButton>
                    </LoginContainer>
                ) : (
                    <LoginContainer>
                        <LoginInput name='id' value={member.id} onChange={handleChange} placeholder="ID" type="text"></LoginInput>
                        <LoginInput name='pwd' value={member.pwd} onChange={handleChange} placeholder="PW" type="password"></LoginInput>
                        <LoginButton onClick={handleLogin}>로그인</LoginButton>
                    </LoginContainer>
                )}
            </MainTitle>
        </div>
    )
}