import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findBookInfoByIsbn } from "./utils/findBookInfoByIsbn";
import { deleteBookToStorage, saveBookToStorage } from "../../utils/saveBookToStorage";
import Button from "../../components/Button";
import * as S from "./EditBookInfoStyle";
import {
  Content,
  InputName,
  InputWrapper,
  StyledInput,
  Title,
  Wrapper,
  BottomButtonsWrapper,
} from "styles";
import { ROUTE } from "Route";
import axios from "axios";



function EditBookInfo() {
  console.log(process.env);
  console.log(process.env.REACT_APP_API_URL);
  // const userId = Number(useParams().userId);
  const bookIsbn = useParams().userId;

  // const userInfo = findUserInfoById(userId);

  const [bookInfo, setBookInfo ] = useState({});
  const [upfile, setUpfile ] = useState(null);
  const [isChangeImg, setIsChangeImg] = useState(false);
  const [change,setChange] = useState(true);
 
  useEffect(()=>{
    findBookInfoByIsbn(bookIsbn, setBookInfo); 
  },[change]);

  const navigate = useNavigate();

  const isbnRef = useRef(null);
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const priceRef = useRef(null);
  const descRef = useRef(null);

  const url = process.env.REACT_APP_API_URL;

  const saveBookInfo = () => {

    //수정하기!!
    // 로그인 성공시 : sessionStorage.setItem("member", JSON.stringify(member));

    const member = sessionStorage.getItem("member");
    if(!member){
      alert('로그인이 필요합니다!');
      navigate(ROUTE.LOGINFORM);
      return;
    }


    // const newIsbn =  isbnRef.current.value;
    const newTitle = titleRef.current.value;
    const newAuthor = authorRef.current.value;
    const newPrice = priceRef.current.value;
    const newDesc = descRef.current.value;
    
    if (
      newTitle !== bookInfo.title ||
      newAuthor !== bookInfo.author ||
      newPrice !== bookInfo.price ||
      newDesc !== bookInfo.desc
    ) {
    
      saveBookToStorage({isbn:bookIsbn, title:newTitle, author:newAuthor, price:newPrice, desc:newDesc}); //DB수정 작업 요청!!
      // saveUsersToStorage({no,name,age,job}); //DB수정 작업 요청!!
      alert("저장되었습니다.");
      navigate(ROUTE.LIST);
      
    } else {
      alert("변경된 사항이 없습니다.");
    }
  };

  const deleteBookInfo = () => {
    
    const member = sessionStorage.getItem("member");
    if(!member){
      alert('로그인이 필요합니다!');
      navigate(ROUTE.LOGINFORM);
      return;
    }



    //saveUserToStorage.js에 새롭게 추가함.
    // deleteUsersToStorage({no:userId});
    deleteBookToStorage(bookIsbn);
   
    alert("삭제되었습니다.");
    navigate(ROUTE.LIST);
  };

  const handleUpfileChange = (event)=>{
    setUpfile(event.target.files[0]);
  }

  const updateBookImg = ()=>{
     //이미지 파일 수정 (파일업로드)
     const formData = new FormData();
     formData.append("isbn", bookInfo.isbn);
     formData.append("upfile",upfile);

     axios.post(`${url}/book/updateImage`,
                 formData,
                 {headers:{'ContentType':'multipart/form-data'}});
     alert('이미지 수정되었습니다.');
     setChange(!change);
  }

  return (
    <Wrapper>
      <Title>도서 정보 수정</Title>
      <Content>
        <S.Row>
          <InputName>ISBN</InputName>
          <InputWrapper>
            <StyledInput ref={isbnRef} defaultValue={bookInfo.isbn} />
          </InputWrapper>
        </S.Row>
        <S.Row>
          <InputName>제목</InputName>
          <StyledInput ref={titleRef} defaultValue={bookInfo.title} />
        </S.Row>
        <S.Row>
          <InputName>저자</InputName>
          <StyledInput ref={authorRef} defaultValue={bookInfo.author} />
        </S.Row>
        <S.Row>
          <InputName>가격</InputName>
          <StyledInput ref={priceRef} defaultValue={bookInfo.price} />
        </S.Row>
        <S.Row>
          <InputName>설명</InputName>
          <StyledInput ref={descRef} defaultValue={bookInfo.desc} />
        </S.Row>
        <S.Row>
          {/* <img src={`http://localhost:8080/upload/${bookInfo.img}`} alt="" width={200}  height={260} /> */}
          {/* <img src={`${process.env.REACT_APP_API_URL}/upload/${bookInfo.img}`} alt="도서이미지" width={200}  height={260} /> */}
          {/* <img src={`${url}/upload/${bookInfo.img}`} alt="도서이미지" width={200}  height={260} /> */}
          <img src={`${url}/upload/${bookInfo.saveImg}`} alt="도서이미지" width={200}  height={260} />
        </S.Row>
        <S.Row>
            {  !isChangeImg  &&  <button onClick={()=>{ setIsChangeImg(true); }}>변경</button>  }
           {  isChangeImg  && <> 
              <input style={{margin:'10px'}} type="file" onChange={handleUpfileChange} />
              <button onClick={()=>{ updateBookImg(); }}>이미지변경</button>

                             </> }
           
        </S.Row>
      </Content>
      <BottomButtonsWrapper>
        <Button disabled={false} text="수정" clickFunc={saveBookInfo} />
        <Button disabled={false} text="삭제" clickFunc={deleteBookInfo} />
        <Button
          disabled={false}
          text="목록 보러 가기"
          clickFunc={()=>{navigate(ROUTE.LIST)}}
        />
      </BottomButtonsWrapper>
    </Wrapper>
  );
}

export default EditBookInfo;
