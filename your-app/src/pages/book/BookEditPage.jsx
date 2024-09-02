import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import TextInput from "../../components/TextInput"
import Button from "../../components/Button"
import { deleteBook, editBook, getBook } from "../../apis/book"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
`

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export default function BookEditPage() {
    const params = useParams();
    const id = parseInt(params.id);
    const navigate = useNavigate();

    // const [title, setTitle] = useState('');
    // const [author, setAuthor] = useState('');
    // const [price, setPrice] = useState(0);
    // const [desc, setDesc] = useState('');

    const [book, setBook] = useState({
        isbn: 0,
        title: '',
        author: '',
        price: 0,
        desc: ''
    });

    useEffect(() => {
        getBook(id, setBook);
    }, [])

    const [titleValid, setTitleValid] = useState(true);
    const [authorValid, setAuthorValid] = useState(true);
    const [priceValid, setPriceValid] = useState(true);

    const InputValidation = () => {
        if (!book.title) setTitleValid(false);
        if (!book.author) setAuthorValid(false);
        if (!book.price) setPriceValid(false);
        if (!book.title || !book.author || !book.price) return;
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (value) {
            if (name === '제목') {
                setTitleValid(true);
            } else if (name === '작가') {
                setAuthorValid(true);
            } else if (name === '가격') {
                setPriceValid(true);
            }
        }

        if (name === '제목') {
            setBook({...book, title: value});
        } else if (name === '작가') {
            setBook({...book, author: value});
        } else if (name === '가격') {
            setBook({...book, price: value});
        } else if (name === '설명') {
            setBook({...book, desc: value});
        }
    }

    /** PATCH /person/upform?no=${id} -> id에 해당하는 사람의 정보 수정 */
    const handleSubmit = async () => {
        InputValidation();

        const data = {
            title: book.title,
            author: book.author,
            price: book.price,
            desc: book.desc,
        }

        // POST
        await editBook(id, data);
        navigate('/');
    }

    /** DELETE /person/delete?no=${id} -> id에 해당하는 사람 삭제 */
    const handleDelete = async () => {
        await deleteBook(id);
        navigate('/');
    }

    return (
        <Wrapper>
            <Container>
                <Title></Title>
                <InputContainer>
                    <TextInput name='제목' value={book.title} onChange={handleInput} isValid={titleValid} type='text'></TextInput>
                    <TextInput name='작가' value={book.author} onChange={handleInput} isValid={authorValid} type='text'></TextInput>
                    <TextInput name='가격' value={book.price} onChange={handleInput} isValid={priceValid} type='number'></TextInput>
                    <TextInput name='설명' value={book.desc} onChange={handleInput} isValid={true} type='text'></TextInput>
                </InputContainer>
                <ButtonContainer>
                    <Button onClick={() => navigate('/')} label='목록 보기' />
                    <Button onClick={handleSubmit} label='수정하기' theme='primary' />
                    <Button onClick={handleDelete} label='삭제하기' theme='primary' />
                </ButtonContainer>
            </Container>
        </Wrapper>
    )
}