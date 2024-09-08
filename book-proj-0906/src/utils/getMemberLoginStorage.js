import axios from "axios";

export const getMemberLoginStorage = async (login, setLogin, setName) => {
  // axios.get('요청URL');
  // axios.get('요청URL').then(콜백).catch(콜백).finally(콜백);

  await axios
    .post("http://localhost:8080/member/findMember", login)
    .then((response) => {
      //response : 서버의 응답 데이터
      //요청(이벤트)후 처리할 문장
      console.log(response.data); //[{member}]
      const member = response.data;
      if (member) {
        alert("로그인성공");
        setLogin(true);
        sessionStorage.setItem("member", JSON.stringify(member));
        setName(member.name);
      } else {
        alert("로그인실패");
        setLogin(false);
        sessionStorage.removeItem("member");
      }
    });
};
