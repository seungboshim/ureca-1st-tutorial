import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import ViewPage from "./pages/ViewPage";
import InputPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";

const MainTitle = styled.div`
    display: flex;
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
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitle>
        <MainTitleText to='/'>안녕하세요 뉴진스입니다.</MainTitleText>
      </MainTitle>
      <Routes>
        <Route index element={<ViewPage />}></Route>
        <Route path="/add" element={<InputPage />}></Route>
        <Route path="/edit/:id" element={<EditPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
