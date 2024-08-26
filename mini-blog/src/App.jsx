import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './components/page/MainPage';
import PostViewPage from './components/page/PostViewPage';
import PostWritePage from './components/page/PostWritePage';

const MainTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    height: 60px;
    background-color: black;
    color: white;
`;

const MainTitleText = styled(Link)`
    text-decoration: none;
    color: white;
`

function App() {
  return (
    <BrowserRouter>
      <MainTitle>
        <MainTitleText to='/'>미니블로그시미시미코코밥아띵캄라익댓</MainTitleText>
      </MainTitle>
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path='post/:postId' element={<PostViewPage />}></Route>
        <Route path='post-write' element={<PostWritePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
