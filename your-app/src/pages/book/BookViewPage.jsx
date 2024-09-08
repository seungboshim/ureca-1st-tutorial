import styled from "styled-components"
import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Button from "../../components/Button"
import { getPersonList } from "../../apis/person"
import { getBookList, getBookListWithPage } from "../../apis/book"
import { LoginContext } from "../../utils/LoginContext"
import PageNation from "../../components/PageNation"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
`

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
`

const TableHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: lightcoral;
    color: white;
    font-weight: 600;
    border: 1px solid lightcoral;
    border-radius: 9999px;
    margin: 4px;
`
const TableBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid lightcoral;
    border-radius: 8px;
    margin: 4px;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 4px lightcoral;
        border: 1px solid #ffc5c5;
        transition: box-shadow 0.3s, border 0.3s;
    }
`
const DisabledTableBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid lightcoral;
    border-radius: 8px;
    margin: 4px;
`
const TableItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    padding: 12px;
`
const ImageContainer = styled.div`
    width: 50%;
    border-radius: 24px;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    border-radius: 24px;
`
const Ballon = styled.div`
    position: absolute;
    top: -50px;
    right: -100px;
    width: 200px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 9999px 9999px 9999px 0;
    border: 1px solid gray;
    box-shadow: 0 0 4px 0 lightgray;
    padding: 12px;
`

export default function BookViewPage() {
    const { isLogin } = useContext(LoginContext); // 로그인 여부 가져오기
    const [bookData, setBookData] = useState([]);
    const navigate = useNavigate();

    const [page, setPage] = useState(1);

    useEffect(() => {
        getBookListWithPage(page, setBookData);
    }, [page]);

    return (
        <Wrapper>
            <TableWrapper>
                <TableHeader>
                    <TableItem>ISBN</TableItem>
                    <TableItem>제목</TableItem>
                    <TableItem>작가</TableItem>
                    <TableItem>가격</TableItem>
                    <TableItem>설명</TableItem>
                </TableHeader>
                {bookData.books && bookData.books.map((book) => {
                    if (isLogin) {
                        return (
                            <TableBody key={book.isbn} onClick={() => navigate(`/book/edit/${book.isbn}`)}>
                                <TableItem>{book.isbn}</TableItem>
                                <TableItem>{book.title}</TableItem>
                                <TableItem>{book.author}</TableItem>
                                <TableItem>{book.price}</TableItem>
                                <TableItem>{book.desc}</TableItem>
                            </TableBody>
                        )
                    } else {
                        return (
                            <DisabledTableBody key={book.isbn}>
                                <TableItem>{book.isbn}</TableItem>
                                <TableItem>{book.title}</TableItem>
                                <TableItem>{book.author}</TableItem>
                                <TableItem>{book.price}</TableItem>
                                <TableItem>{book.desc}</TableItem>
                            </DisabledTableBody>
                        )
                    }
                })}
            </TableWrapper>
            
            <PageNation page={page} setPage={setPage} totalPage={bookData.totalPage} />

            <Button onClick={() => navigate('/book/add')} label='추가하기' theme='primary' disabled={!isLogin} />
            <ImageContainer>
                <Image src='https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/aDf6/image/kqLj3lh5cc7qnWX4VIb8llyCyMc.jpeg' />
                <Ballon>줄리어스 로버트 오펜하이머.. 줄리어스 로버트 오펜하이머.. 로버트는 얼마나 좋았을까?</Ballon>
            </ImageContainer>
        </Wrapper>
    )
}