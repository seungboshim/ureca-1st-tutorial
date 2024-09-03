import { useState, useContext } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

import { addBook } from "../../apis/book";
import { LoginContext } from "../../utils/LoginContext";

import Button from '../../components/Button';
import TextInput from "../../components/TextInput";
import FileInput from "../../components/FileInput";

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

export default function BookAddPage() {
    const { isLogin } = useContext(LoginContext);
    const navigate = useNavigate();

    if (!isLogin) {
        alert('로그인이 필요한 페이지입니다.');
        navigate('/login');
    }
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);

    const [titleValid, setTitleValid] = useState(true);
    const [authorValid, setAuthorValid] = useState(true);
    const [priceValid, setPriceValid] = useState(true);



    const InputValidation = () => {
        if (!title) setTitleValid(false);
        if (!author) setAuthorValid(false);
        if (!price) setPriceValid(false);
        if (!title || !author || !price) return false;
        return true;
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
            setTitle(value);
        } else if (name === '작가') {
            setAuthor(value);
        } else if (name === '가격') {
            setPrice(value);
        } else if (name === '설명') {
            setDesc(value);
        }
    }

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }

    const handleSubmit = async () => {
        if (!InputValidation()) return;

        // const book = {
        //     title: title,
        //     author: author,
        //     price: price,
        //     description: desc
        // }

        const data = new FormData();
        data.append('title', title);
        data.append('author', author);
        data.append('price', price);
        data.append('desc', desc);
        data.append('upfile', file);

        // POST
        await addBook(data);

        navigate('/');
    }

    return (
        <Wrapper>
            <Container>
                <Title></Title>
                <InputContainer>
                    <TextInput name='제목' onChange={handleInput} isValid={titleValid} type='text'></TextInput>
                    <TextInput name='작가' onChange={handleInput} isValid={authorValid} type='text'></TextInput>
                    <TextInput name='가격' onChange={handleInput} isValid={priceValid} type='number'></TextInput>
                    <TextInput name='설명' onChange={handleInput} isValid={true} type='text'></TextInput>
                    <FileInput onChange={handleFileInput}></FileInput>
                </InputContainer>
                <ButtonContainer>
                    <Button onClick={() => navigate('/')} label='목록 보기' />
                    <Button onClick={handleSubmit} label='추가하기' theme='primary' />
                </ButtonContainer>
            </Container>
        </Wrapper>
    )
}