import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import NavigateButton from "../../components/NavigateButton";
import { ROUTE } from "Route";
import {
  BottomButtonsWrapper,
  Content,
  InputName,
  InputWrapper,
  StyledInput,
  Title,
  Wrapper,
} from "styles";
import axios from "axios";

function RegistBook() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [upfile, setUpfile] = useState(null);


  const navigate = useNavigate();
  
  const handleIsbnChange = (e) => {
    setIsbn(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  //<input type="file">
  const handleUpfileChange = (e) => {
    console.log('업로드파일값(e.target.value)=',e.target.value);
    console.log('업로드파일 자료형(e.target.value)=', typeof( e.target.value));
    
    console.log('업로드 파일정보(e.target.files)=', e.target.files,",자료형= ", typeof (e.target.files));
    console.log('업로드 파일정보(e.target.files[0])=', e.target.files[0]);

    setUpfile(e.target.files[0]);
  };



  useEffect(() => {
    if (isbn !== "" && title !== "" && author !== "" && price !== ""&& desc !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [isbn, title, author, price, desc]);


  const registBook = () => {
    if (buttonDisabled) {
      return;
    }

    const formData = new FormData(); //폼전송(with파일업로드)
      formData.append("isbn", isbn);
      formData.append("title", title);
      formData.append("author", author);
      formData.append("price", price);
      formData.append("desc", desc);
      formData.append("upfile", upfile);

    // axios.post("요청URL",전달데이터);
    // axios.post("http://localhost:8080/book/regist",{ isbn, title, author, price, desc, upfile });
    axios.post("http://localhost:8080/book/regist",
                formData,
               {headers:{'ContentType':'multipart/form-data'}});
    
    alert("등록되었습니다.");
    
    navigate(ROUTE.LIST);
    
  };//registBook


  return (
    <Wrapper>
      <Title>도서 정보 입력</Title>
      <Content>
        <InputWrapper>
          <InputName>ISBN</InputName>
          <StyledInput
            onChange={handleIsbnChange}
            type="text"
            placeholder="Enter isbn"
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>제목</InputName>
          <StyledInput
            onChange={handleTitleChange}
            type="text"
            placeholder="Enter title"
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>저자</InputName>
          <StyledInput
            onChange={handleAuthorChange}
            type="text"
            placeholder="Enter author"
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>가격</InputName>
          <StyledInput
            onChange={handlePriceChange}
            type="text"
            placeholder="Enter price"
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>설명</InputName>
          <StyledInput
            onChange={handleDescChange}
            type="text"
            placeholder="Enter describe"
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>파일</InputName>
          <StyledInput
            onChange={handleUpfileChange}
            type="file"
          />
        </InputWrapper>
      </Content>
      <BottomButtonsWrapper>
        <Button text="입력" clickFunc={registBook} disabled={buttonDisabled} />
        <NavigateButton
          disabled={buttonDisabled}
          text="목록으로"
          clickFunc={() => navigate(ROUTE.LIST)}
        />
      </BottomButtonsWrapper>
    </Wrapper>
  );
}

export default RegistBook;
