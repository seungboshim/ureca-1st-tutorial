import styled from "styled-components";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonMenu from "pages/ButtonMenu";
import LoginForm from "pages/LoginForm";
import EditBookInfo from "pages/EditBookInfo";
import RegistBook from "pages/RegistBook";

import Header from "pages/Header";
import { useState } from "react";
import BookList from "pages/BookList";

function App() {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [list,setList] = useState([]);

  return (
    <BrowserRouter>
      <Header login={login} setLogin={setLogin} name={name}  setList={setList} />
      <Routes>
        <Route path="/" element={<ButtonMenu />} />
        <Route path="/list" element={<BookList list={list} setList={setList}/>   } />
        <Route path="/regist" element={<RegistBook />} />
        <Route path="/edit/:userId" element={<EditBookInfo />} />
        <Route
          path="/loginform"
          element={
            <LoginForm login={login} setLogin={setLogin} setName={setName} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
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
export default App;
