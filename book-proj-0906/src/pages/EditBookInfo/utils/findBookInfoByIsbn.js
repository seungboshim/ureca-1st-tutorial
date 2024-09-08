import axios from "axios";

export const findBookInfoByIsbn = (isbn, setBookInfo) => {
  axios.get(`http://localhost:8080/book/find?isbn=${isbn}`).then((response) => {
    //URL요청후 실행할 문장
    //  response.data ==> Book
    setBookInfo(response.data);
  });
};
