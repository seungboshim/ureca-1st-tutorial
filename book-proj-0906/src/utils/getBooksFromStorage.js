import axios from "axios";


export const  getBooksKeywordFromStorage = (setList, search, keyword) =>{
  // axios.get(`http://localhost:8080/book/findSearch?search=저자&keyword=길동`)
  axios.get(`http://localhost:8080/book/findSearch?search=${search}&keyword=${keyword}`)
  .then((response)=>{  //response : 서버의 응답 데이터
      setList(response.data);
   });
} 

export const getBooksFromStorage = (setList,page) => {
  // axios.get('요청URL');
  // axios.get('요청URL').then(콜백).catch(콜백).finally(콜백);
  
  if(page===0) {
    page=1;
  }

  const offset = (page-1)*10;
  const pageSize = process.env.REACT_APP_PAGE_SIZE;

  // axios.get('http://localhost:8080/book/findAll')
  axios.get(`http://localhost:8080/book/findPage/${offset}/${pageSize}`)
       .then((response)=>{  //response : 서버의 응답 데이터
         //요청(이벤트)후 처리할 문장
           console.log(response.data);//[{person},{person}]
            // personList = response.data;
            setList(response.data);
        });
};


