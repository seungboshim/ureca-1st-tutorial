import { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import TextInput from "../../components/TextInput"
import FileInput from "../../components/FileInput"
import Button from "../../components/Button"
import { deleteBook, editBook, getBook } from "../../apis/book"
import { LoginContext } from "../../utils/LoginContext"

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
    const BASE_URL = process.env.REACT_APP_API_URL;
    const { isLogin } = useContext(LoginContext);
    const params = useParams();
    const id = parseInt(params.id);
    const navigate = useNavigate();


    /** 로그인 여부 가져와서 페이지 접근 제어 */
    if (!isLogin) {
        alert('로그인이 필요한 페이지입니다.');
        navigate('/');
    }

    /** book 객체로 묶어서 관리? */
    const [book, setBook] = useState({
        isbn: 0,
        title: '',
        author: '',
        price: 0,
        desc: '',
        upfile: '',
        img: '',
        saveImg: '',
    });

    /** isbn에 해당하는 책 정보 -> book에 저장 */
    useEffect(() => {
        getBook(id, setBook);
    }, [])

    const [titleValid, setTitleValid] = useState(true);
    const [authorValid, setAuthorValid] = useState(true);
    const [priceValid, setPriceValid] = useState(true);

    /** 입력칸 유효성 검사 */
    const InputValidation = () => {
        if (!book.title) setTitleValid(false);
        if (!book.author) setAuthorValid(false);
        if (!book.price) setPriceValid(false);
        if (!book.title || !book.author || !book.price) return;
    }

    /** 입력창 이벤트 함수 */
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

        /** book 객체 하나로 묶어서 정의한 경우 
         * 스프레드 연산자를 사용하여, 바뀐 값만 업데이트한 새 객체를 만들고 book에 저장
        */
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

    /** 이미지 미리보기용 url 저장 */
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        setImagePreview(URL.createObjectURL(file));

        setBook({...book, upfile: file});
    }

    /** PUT -> isbn에 해당하는 책 정보 수정 */
    const handleSubmit = async () => {
        InputValidation();

        /** FormData 객체 생성 */
        const data = new FormData();
        data.append('title', book.title);
        data.append('author', book.author);
        data.append('price', book.price);
        data.append('desc', book.desc);
        data.append('upfile', book.upfile);

        // PUT
        await editBook(id, data);
        navigate('/');
    }

    /** DELETE -> isbn에 해당하는 책 삭제 */
    const handleDelete = async () => {
        await deleteBook(id);
        navigate('/');
    }

    useEffect(() => {
        console.log(imagePreview);
        console.log(book.upfile)
    },[imagePreview])

    return (
        <Wrapper>
            <Container>
                {/** 가져온 book 정보에 img 있을때 사진렌더링 */}
                {book.img && 
                    imagePreview ? (
                        <img src={imagePreview} width="300px" alt="책 이미지" />
                    ) : (
                        <img src={`${BASE_URL}/upload/${book.saveImg}`} width="300px" alt="책 이미지" />
                    )
                }
                <button onClick={() => setImagePreview(null)}>삭제</button>
                <FileInput onChange={handleFileInput}></FileInput>
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