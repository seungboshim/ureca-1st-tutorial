import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './components/page/MainPage';
import PostViewPage from './components/page/PostViewPage';
import PostWritePage from './components/page/PostWritePage';

const MainTitleText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    height: 60px;
    background-color: black;
    color: white;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>블로그그그그그그그그극그그그그그그그그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path='post/:postId' element={<PostViewPage />}></Route>
        <Route path='post-write' element={<PostWritePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
