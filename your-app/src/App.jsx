import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import ViewPage from "./pages/person/ViewPage";
import EditPage from "./pages/person/EditPage";
import BookViewPage from './pages/book/BookViewPage';
import BookAddPage from './pages/book/BookAddPage';
import BookEditPage from './pages/book/BookEditPage';
import AddPage from './pages/person/AddPage';
import Header from './components/Header';
import { LoginProvider } from './utils/LoginContext';



function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/person" element={<ViewPage />}></Route>
          <Route path="/person/add" element={<AddPage />}></Route>
          <Route path="/person/edit/:id" element={<EditPage />}></Route>
          <Route index element={<BookViewPage />}></Route>
          <Route path="/book/add" element={<BookAddPage />}></Route>
          <Route path="/book/edit/:id" element={<BookEditPage />}></Route>
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
