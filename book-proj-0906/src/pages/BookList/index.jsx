import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { Content, Title, Wrapper } from "styles";
import { ROUTE } from "Route";
import { getBooksFromStorage } from "../../utils/getBooksFromStorage";
import styled from "styled-components";


const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const Thead = styled.thead`
color: white;
    background-color: #48586a;
    th {
        padding: 8px;
        border: 1px solid #ccc;
    }
`;

const Tbody = styled.tbody`
    td {
        padding: 8px;
        border: 1px solid #ccc;
    }
`;

const TableRow = styled.tr`
    cursor: pointer;
    &:hover {
        background-color: #f5f5f5;
    }
`;


function BookList({list,setList}) {
  // const list = getUsersFromStorage() || [];
  // const [list,setList] = useState([]);
  const navigate = useNavigate();
  const [page,setPage]=useState(1);
  
  // useEffect(콜백,연관배열);
  useEffect(()=>{
    getBooksFromStorage(setList,page);
  },[]);

  let render = <Title>등록된 도서가 없습니다.</Title>;
  if (list) {

    render = 
    <>
    <Table>
          <Thead>
              <tr>
                  <th>ISBN</th>
                  <th>제목</th>
                  <th>저자</th>
                  <th>가격</th>
                  <th>설명</th>
              </tr>
          </Thead>
          <Tbody>
              {list.map((book) => (
                  <TableRow key={book.isbn} onClick={() => {
                    navigate(ROUTE.EDIT + `${book.isbn}`);
                  }}>
                    <td>{book.isbn}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.price}</td>
                    <td>{book.desc}</td>
                  </TableRow>
              ))}
          </Tbody>
    </Table>
    <div>
      <button onClick={()=>{ setPage(page-1); getBooksFromStorage(setList,page-1);}}>이전</button> 
      <button style={ {margin:'10px'} } onClick={()=>{ setPage(page+1); getBooksFromStorage(setList,page+1); }}>다음</button>
    </div>
    </>
  }
  return (
    <Wrapper>
      <Title>도서 목록</Title>

      <Content>{render}</Content>

      <Button
        disabled={false}
        text="도서 정보 입력"
        clickFunc={() => navigate(ROUTE.REGIST)}
      />
    </Wrapper>
  );
}

export default BookList;
