// Header.jsx
import { getBooksKeywordFromStorage } from 'utils/getBooksFromStorage';
import { ROUTE } from 'Route';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 1rem;
  color: white;
  text-align: center;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const Navigation = styled.nav`
  margin-top: 0.5rem;
`;

const NavLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.2rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Login= styled.div`
    text-align  : right;
`;

const Header = ({ login,setLogin,name, setList}) => {
  const navigate = useNavigate();
  const [search,setSearch]=useState('');
  const [keyword,setKeyword]=useState('');

  const handleSearch = (event)=>{
      setSearch( event.target.value );
  }

  const handleKeyword = (event)=>{
      setKeyword( event.target.value );
  }

  const handleSearchKeyword = (event)=>{
     if(search !== 'none' ){//search를 선택하였을때
      getBooksKeywordFromStorage(setList, search, keyword);
     }
  }
  
  return (
    <HeaderContainer>
      <Logo>도서 프로젝트</Logo>
      <Navigation>
        <NavLink href="#home" onClick={()=>navigate(ROUTE.ROOT)}>Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#information">Information</NavLink>
      </Navigation>
      <Login>
        {(!login)? 
        <button onClick={()=>navigate(ROUTE.LOGINFORM)}>로그인</button> :
          <span>{name}님 반갑습니다. <button onClick={() => { 
            setLogin(false);
            sessionStorage.removeItem("member");
           }}>로그아웃</button></span>
        }
      </Login>  
      <div>
      {/* 저자/제목 */}
        <select onChange={handleSearch} value={search}>
           <option value="none">==선택==</option>
           <option value="author">저자</option>
           <option value="title">제목</option>
        </select>
        <input type="text" onChange={handleKeyword} value={keyword}/>
        <button onClick={handleSearchKeyword}>검색</button>
      </div>
    </HeaderContainer>
  );
};

export default Header;